import { afterEach, describe, expect, it, vi } from 'vitest'
import {
    audioBlobToUpload,
    fetchCapabilities,
    isTtsPlaybackEnabled,
    parseTextToSpeechConfig
} from '../src/api/capabilities'

describe('parseTextToSpeechConfig', () => {
    it('detecta TTS cuando un proveedor está activo', () => {
        expect(parseTextToSpeechConfig('{"openai":{"status":true,"credentialId":"x"},"none":{"status":false}}')).toBe(true)
        expect(parseTextToSpeechConfig('{"elevenlabs":{"status":true}}')).toBe(true)
    })

    it('no detecta TTS con none o proveedores inactivos', () => {
        expect(parseTextToSpeechConfig('{"none":{"status":true}}')).toBe(false)
        expect(parseTextToSpeechConfig('{"openai":{"status":false}}')).toBe(false)
        expect(parseTextToSpeechConfig('{}')).toBe(false)
    })

    it('tolera valores ausentes o corruptos', () => {
        expect(parseTextToSpeechConfig(undefined)).toBe(false)
        expect(parseTextToSpeechConfig(null)).toBe(false)
        expect(parseTextToSpeechConfig('no-json{')).toBe(false)
        expect(parseTextToSpeechConfig('')).toBe(false)
    })
})

describe('audioBlobToUpload', () => {
    it('normaliza parámetros de codec para que Ecoflow active STT', () => {
        const upload = audioBlobToUpload(new Blob(['audio'], { type: 'audio/webm;codecs=opus' }))

        expect(upload.mime).toBe('audio/webm')
        expect(upload.name).toMatch(/^audio-\d+\.webm$/)
    })
})

describe('isTtsPlaybackEnabled', () => {
    it('respeta una desactivación explícita, pero en auto confía en el evento SSE', () => {
        expect(isTtsPlaybackEnabled(false)).toBe(false)
        expect(isTtsPlaybackEnabled(true)).toBe(true)
        expect(isTtsPlaybackEnabled('auto')).toBe(true)
    })
})

describe('fetchCapabilities', () => {
    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('distingue "sin TTS" de "config no consultable" con ttsKnown', async () => {
        // flujo no público: el endpoint de config responde 401 → TTS desconocido
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue(new Response('{"message":"Unauthorized"}', { status: 401 }))
        )
        const unknown = await fetchCapabilities('https://chat.example.test', 'flow-not-public')
        expect(unknown.tts).toBe(false)
        expect(unknown.ttsKnown).toBe(false)

        // flujo público sin voz → TTS conocido y desactivado
        vi.stubGlobal(
            'fetch',
            vi.fn().mockImplementation(() =>
                Promise.resolve(new Response(JSON.stringify({ textToSpeech: '{"none":{"status":true}}' })))
            )
        )
        const noVoice = await fetchCapabilities('https://chat.example.test', 'flow-public-novoice')
        expect(noVoice.tts).toBe(false)
        expect(noVoice.ttsKnown).toBe(true)

        // flujo público con voz → TTS conocido y activo
        vi.stubGlobal(
            'fetch',
            vi.fn().mockImplementation(() =>
                Promise.resolve(new Response(JSON.stringify({ textToSpeech: '{"openai":{"status":true}}' })))
            )
        )
        const withVoice = await fetchCapabilities('https://chat.example.test', 'flow-public-voice')
        expect(withVoice.tts).toBe(true)
        expect(withVoice.ttsKnown).toBe(true)
    })
})
