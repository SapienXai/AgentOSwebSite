# AgentOS Website

Marketing site for AgentOS, the AI workforce platform for building, running,
and scaling digital workers.

## Requirements

- Node.js `>=22.13.0`
- npm

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
npm test
npx tsc --noEmit
```

`npm test` performs a production build, renders the landing page through the
Cloudflare Worker entry point, and verifies that the Sites hosting
configuration is included in the deployment output.

## Project structure

- `app/` — landing page, metadata, and global styles
- `public/assets/` — AgentOS imagery and video assets
- `worker/` — Cloudflare Worker entry point
- `.openai/hosting.json` — Sites project and optional storage bindings
- `tests/` — rendered HTML and deployment-package checks

The current site does not use D1 or R2. Their logical bindings remain `null` in
`.openai/hosting.json`.
