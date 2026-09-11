# Ecoflow Bubble

An embeddable chat bubble built as a Web Component, with an optional React wrapper.
It connects to an ECOflow-compatible public prediction API.

## Quick start

Install the dependencies and build the browser bundles:

```bash
npm ci
npm run build
```

Serve the repository from a static web server and open `demo/index.html`. The demo is deliberately disconnected: replace its placeholder `data-chatflowid` and `data-api-host` values with your own deployment details.

```html
<script
  src="../dist/ecoflow-bubble.js"
  data-chatflowid="replace-with-your-chatflow-id"
  data-api-host="https://your-ecoflow-host.example"
  defer
></script>
```

The build also creates ESM bundles and type declarations in `dist/`. That directory is versioned so the component can be served directly from a CDN or static host.

## Styling

The element exposes CSS parts for targeted customisation. For example, a lightly tinted liquid-glass treatment only for bot messages:

```css
ecoflow-chat::part(message-bot) {
  --ec-glass-bot-bg: rgba(13, 42, 50, .66);
  --ec-glass-bot-color: #fff;
  backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, .18);
}
```

## Voice (STT & TTS)

Voice controls follow each agent's configuration; no extra attributes are required.

- **Voice input (STT)**: the microphone button appears when the chatflow has speech-to-text enabled (`data-voice-input="auto"` is the default; force it with `true`/`false`).
- **Voice output (TTS)**: every bot message gets a speaker button that reads the answer on demand via the server's `/api/v1/text-to-speech/generate` endpoint. When the chatflow additionally enables TTS with *Auto Play*, streamed replies are spoken automatically.
- On-demand synthesis requires the chatflow to be marked **public** in Flowise (share dialog → *Make Public*). No provider credentials reach the browser: the server resolves the provider configured on the chatflow.
- If the server reports that the chatflow has no TTS provider, the speaker buttons hide themselves for the rest of the session.

Control playback with `data-voice-output="auto|true|false"` (`auto` is the default).

## Security and privacy

- Never put API keys, provider credentials, private agent configuration, or service-account files in browser code or in this repository.
- Treat a chatflow ID as public. Enforce authentication, origin controls, rate limits, request-size limits, and abuse controls on the server that receives requests.
- Conversation persistence can use browser `localStorage`; set `data-persist-conversation="false"` when that behaviour is not appropriate for the site.

## Development

```bash
npm run check
npm test
npm run build
```

## License

No license has been selected for this repository. Copyright applies by default; add a license only after the rights holder chooses the terms.
