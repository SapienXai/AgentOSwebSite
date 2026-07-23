import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the AgentOS landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>AgentOS — Build and Run Your AI Workforce<\/title>/i,
  );
  assert.match(html, /AI WORKERS\./);
  assert.match(html, /REAL IMPACT\./);
  assert.match(html, /Start free\. Scale your digital workforce\./);
  assert.match(html, /href="#pricing"/);
  assert.match(html, /railway\.com\/deploy\/agentos-1/);
});

test("ships production metadata without starter-preview artifacts", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(
    html,
    /Create digital workers, connect tools and channels, assign real work/,
  );
  assert.match(html, /socialimage\.jpeg/);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
});

test("packages the Sites hosting configuration unchanged", async () => {
  const [source, packaged] = await Promise.all([
    readFile(new URL(".openai/hosting.json", projectRoot), "utf8"),
    readFile(new URL("dist/.openai/hosting.json", projectRoot), "utf8"),
  ]);

  const expected = {
    project_id: "appgprj_6a6131b2b9088191a78c984c454a10fa",
    d1: null,
    r2: null,
  };

  assert.deepEqual(JSON.parse(source), expected);
  assert.deepEqual(JSON.parse(packaged), expected);
});
