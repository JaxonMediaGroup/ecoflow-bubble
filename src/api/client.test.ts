import { afterEach, describe, expect, it, vi } from 'vitest'
import { requestTextToSpeech, sendPrediction } from './client'

describe('sendPrediction', () => {
    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('forwards the optional override configuration to the chatflow', async () => {
        const fetchMock = vi.fn().mockResolvedValue(
            new Response(JSON.stringify({ text: 'Hola', chatId: 'server-chat' }), {
                headers: { 'Content-Type': 'application/json' }
            })
        )
        vi.stubGlobal('fetch', fetchMock)

        await sendPrediction(
            {
                apiHost: 'https://chat.example.test/',
                chatflowId: 'example-flow',
                question: 'Hola',
                chatId: 'browser-chat',
                streaming: false,
                overrideConfig: {
                    sessionId: 'koppi-session',
                    vars: { companyName: 'Example Residences' }
                }
            },
            {
                onToken: vi.fn(),
                onError: vi.fn(),
                onDone: vi.fn()
            }
        )

        const [, request] = fetchMock.mock.calls[0]
        expect(JSON.parse(request.body)).toMatchObject({
            question: 'Hola',
            chatId: 'browser-chat',
            streaming: false,
            overrideConfig: {
                sessionId: 'koppi-session',
                vars: { companyName: 'Example Residences' }
            }
        })
    })

    it('entrega los eventos TTS del stream a sus handlers en orden', async () => {
        // Framing exacto del fork: bloques "message:\ndata:{json}\n\n" (utils/SSEStreamer.ts)
        const sse = [
            'message:\ndata:{"event":"start","data":""}\n\n',
            'message:\ndata:{"event":"token","data":"Hola"}\n\n',
            'message:\ndata:{"event":"tts_start","data":{"chatMessageId":"msg-1","format":"audio/mpeg"}}\n\n',
            'message:\ndata:{"event":"tts_data","data":{"chatMessageId":"msg-1","audioChunk":"AAAA"}}\n\n',
            'message:\ndata:{"event":"tts_data","data":{"chatMessageId":"msg-1","audioChunk":"BBBB"}}\n\n',
            'message:\ndata:{"event":"tts_end","data":""}\n\n',
            'message:\ndata:{"event":"metadata","data":{"chatId":"server-chat"}}\n\n',
            'message:\ndata:{"event":"end","data":"[DONE]"}\n\n'
        ].join('')
        const stream = new ReadableStream<Uint8Array>({
            start(controller) {
                controller.enqueue(new TextEncoder().encode(sse))
                controller.close()
            }
        })
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue(new Response(stream, { headers: { 'Content-Type': 'text/event-stream' } }))
        )

        const onToken = vi.fn()
        const onTtsStart = vi.fn()
        const onTtsChunk = vi.fn()
        const onTtsEnd = vi.fn()
        const onMetadata = vi.fn()
        const onDone = vi.fn()
        await sendPrediction(
            {
                apiHost: 'https://chat.example.test',
                chatflowId: 'example-flow',
                question: 'Hola',
                chatId: 'browser-chat',
                streaming: true
            },
            { onToken, onTtsStart, onTtsChunk, onTtsEnd, onMetadata, onError: vi.fn(), onDone }
        )

        expect(onToken).toHaveBeenCalledWith('Hola')
        expect(onTtsStart).toHaveBeenCalledWith('audio/mpeg')
        expect(onTtsChunk).toHaveBeenCalledTimes(2)
        expect(onTtsChunk).toHaveBeenNthCalledWith(1, 'AAAA')
        expect(onTtsChunk).toHaveBeenNthCalledWith(2, 'BBBB')
        expect(onTtsEnd).toHaveBeenCalledTimes(1)
        expect(onMetadata).toHaveBeenCalledWith({ chatId: 'server-chat' })
        expect(onDone).toHaveBeenCalledTimes(1)
    })

    it('ignora chunks TTS sin audioChunk y no rompe el stream', async () => {
        const sse = [
            'message:\ndata:{"event":"token","data":"Hola"}\n\n',
            'message:\ndata:{"event":"tts_start","data":{"chatMessageId":"msg-1"}}\n\n',
            'message:\ndata:{"event":"tts_data","data":{"chatMessageId":"msg-1"}}\n\n',
            'message:\ndata:{"event":"tts_end","data":""}\n\n',
            'message:\ndata:{"event":"end","data":"[DONE]"}\n\n'
        ].join('')
        const stream = new ReadableStream<Uint8Array>({
            start(controller) {
                controller.enqueue(new TextEncoder().encode(sse))
                controller.close()
            }
        })
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue(new Response(stream, { headers: { 'Content-Type': 'text/event-stream' } }))
        )

        const onTtsStart = vi.fn()
        const onTtsChunk = vi.fn()
        const onTtsEnd = vi.fn()
        await sendPrediction(
            {
                apiHost: 'https://chat.example.test',
                chatflowId: 'example-flow',
                question: 'Hola',
                chatId: 'browser-chat',
                streaming: true
            },
            { onToken: vi.fn(), onTtsStart, onTtsChunk, onTtsEnd, onError: vi.fn(), onDone: vi.fn() }
        )

        // sin formato explícito el widget debe recibir el default audio/mpeg
        expect(onTtsStart).toHaveBeenCalledWith('audio/mpeg')
        expect(onTtsChunk).not.toHaveBeenCalled()
        expect(onTtsEnd).toHaveBeenCalledTimes(1)
    })
})

describe('requestTextToSpeech', () => {
    afterEach(() => {
        vi.unstubAllGlobals()
    })

    const sseResponse = (body: string) =>
        new Response(
            new ReadableStream<Uint8Array>({
                start(controller) {
                    controller.enqueue(new TextEncoder().encode(body))
                    controller.close()
                }
            }),
            { headers: { 'Content-Type': 'text/event-stream' } }
        )

    it('reproduce el flujo tts_start/tts_data/tts_end del endpoint generate', async () => {
        // Framing del controller text-to-speech: "event: X\ndata: {json}\n\n"
        const sse = [
            'event: tts_start\ndata: {"event":"tts_start","data":{"chatMessageId":"msg-1","format":"mp3"}}\n\n',
            'event: tts_data\ndata: {"event":"tts_data","data":{"chatMessageId":"msg-1","audioChunk":"AAAA"}}\n\n',
            'event: tts_data\ndata: {"event":"tts_data","data":{"chatMessageId":"msg-1","audioChunk":"BBBB"}}\n\n',
            'event: tts_end\ndata: {"event":"tts_end","data":{"chatMessageId":"msg-1"}}\n\n'
        ].join('')
        const fetchMock = vi.fn().mockResolvedValue(sseResponse(sse))
        vi.stubGlobal('fetch', fetchMock)

        const onTtsStart = vi.fn()
        const onTtsChunk = vi.fn()
        const onTtsEnd = vi.fn()
        const onError = vi.fn()
        await requestTextToSpeech(
            {
                apiHost: 'https://chat.example.test',
                chatflowId: 'example-flow',
                chatId: 'browser-chat',
                chatMessageId: 'msg-1',
                text: 'Hola'
            },
            { onTtsStart, onTtsChunk, onTtsEnd, onError }
        )

        expect(fetchMock.mock.calls[0][0]).toBe('https://chat.example.test/api/v1/text-to-speech/generate')
        expect(onTtsStart).toHaveBeenCalledWith('mp3')
        expect(onTtsChunk).toHaveBeenNthCalledWith(1, 'AAAA')
        expect(onTtsChunk).toHaveBeenNthCalledWith(2, 'BBBB')
        expect(onTtsEnd).toHaveBeenCalledTimes(1)
        expect(onError).not.toHaveBeenCalled()
    })

    it('reporta tts_error del servidor vía onError', async () => {
        const sse = 'event: tts_error\ndata: {"event":"tts_error","data":{"error":"no active TTS provider"}}\n\n'
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(sseResponse(sse)))

        const onTtsEnd = vi.fn()
        const onError = vi.fn()
        await requestTextToSpeech(
            {
                apiHost: 'https://chat.example.test',
                chatflowId: 'example-flow',
                chatId: 'browser-chat',
                chatMessageId: 'msg-1',
                text: 'Hola'
            },
            { onTtsChunk: vi.fn(), onTtsEnd, onError }
        )

        expect(onError).toHaveBeenCalledWith('no active TTS provider')
        expect(onTtsEnd).not.toHaveBeenCalled()
    })

    it('traduce respuestas HTTP de error a onError', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue(new Response('{"message":"Unauthorized"}', { status: 401 }))
        )

        const onError = vi.fn()
        await requestTextToSpeech(
            {
                apiHost: 'https://chat.example.test',
                chatflowId: 'example-flow',
                chatId: 'browser-chat',
                chatMessageId: 'msg-1',
                text: 'Hola'
            },
            { onTtsChunk: vi.fn(), onTtsEnd: vi.fn(), onError }
        )

        expect(onError).toHaveBeenCalledWith('Unauthorized')
    })
})
