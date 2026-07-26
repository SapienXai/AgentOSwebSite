import type { ReactNode } from "react";

export const AGENTOS_URL = "https://agentos.sapienx.app/";

export const EXPLORE_AGENTOS_PROMPT = `Explore AgentOS using ${AGENTOS_URL} as the primary source.

Give me a clear, practical, and unbiased overview covering:

1. What AgentOS is and what problem it solves
2. Who it is designed for
3. Its main digital workforce and AI agent capabilities
4. How one-click Railway deployment works
5. How users connect their own AI model providers and API keys
6. How workspaces, agents, tasks, context, tools, accounts, and integrations work
7. Its strongest advantages and possible limitations
8. How it compares with other AI agent and automation platforms
9. Which types of users or teams would benefit from it most

Finish with a practical recommendation based on different user types.`;

export type AIProvider = {
  name: string;
  icon: ReactNode;
  buildUrl: (prompt: string) => string;
};

const withPrompt = (baseUrl: string) => (prompt: string) => `${baseUrl}${encodeURIComponent(prompt)}`;

function ProviderMark({ children, viewBox = "0 0 24 24" }: { children: ReactNode; viewBox?: string }) {
  return <svg viewBox={viewBox} fill="none" aria-hidden="true" focusable="false">{children}</svg>;
}

export const AI_PROVIDERS: AIProvider[] = [
  {
    name: "ChatGPT",
    icon: <ProviderMark><path fill="currentColor" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" /></ProviderMark>,
    buildUrl: withPrompt("https://chatgpt.com/?q="),
  },
  {
    name: "Claude",
    icon: <ProviderMark><path fill="currentColor" d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" /></ProviderMark>,
    buildUrl: withPrompt("https://claude.ai/new?q="),
  },
  {
    name: "Gemini",
    icon: <ProviderMark><path d="M12 2.7c.72 5.96 3.35 8.59 9.3 9.3-5.95.72-8.58 3.35-9.3 9.3-.71-5.95-3.34-8.58-9.3-9.3 5.96-.71 8.59-3.34 9.3-9.3Z" fill="currentColor" /></ProviderMark>,
    buildUrl: withPrompt("https://gemini.google.com/app?q="),
  },
  {
    name: "Perplexity",
    icon: <ProviderMark><path fill="currentColor" d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" /></ProviderMark>,
    buildUrl: withPrompt("https://www.perplexity.ai/search?q="),
  },
  {
    name: "Grok",
    icon: <ProviderMark><path fill="currentColor" d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" /></ProviderMark>,
    buildUrl: withPrompt("https://grok.com/?q="),
  },
];
