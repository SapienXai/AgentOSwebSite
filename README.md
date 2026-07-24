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

`npm test` performs a production build and verifies the landing-page content,
metadata, and Next.js deployment output.

## Project structure

- `app/` — landing page, metadata, and global styles
- `public/assets/` — AgentOS imagery and video assets
- `worker/` — legacy Cloudflare Worker entry point (not used by Vercel)
- `.openai/hosting.json` — legacy Sites configuration (not used by Vercel)
- `tests/` — rendered HTML and deployment-package checks

The current site does not use D1 or R2. Their logical bindings remain `null` in
`.openai/hosting.json`.
