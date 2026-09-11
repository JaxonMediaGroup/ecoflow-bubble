import { describe, expect, it } from 'vitest'
import componentSource from '../src/component.tsx?raw'
import publicDemo from '../demo/index.html?raw'

describe('CSS parts and public demo', () => {
    it('exposes a message-specific part so each site can style bot messages without changing the widget globally', () => {
        expect(componentSource).toContain('part={`message message-${')
    })

    it('uses placeholders and has no client deployment information', () => {
        expect(publicDemo).toContain('data-chatflowid="replace-with-your-chatflow-id"')
        expect(publicDemo).toContain('data-api-host="https://your-ecoflow-host.example"')
        expect(publicDemo).toContain('ecoflow-chat::part(message-bot)')
        expect(publicDemo).toContain('--ec-glass-bot-color: #fff;')
        expect(publicDemo).not.toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)
    })
})
