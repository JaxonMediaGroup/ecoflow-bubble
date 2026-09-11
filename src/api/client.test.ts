import { afterEach, describe, expect, it, vi } from 'vitest'
import { sendPrediction } from './client'

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
})
