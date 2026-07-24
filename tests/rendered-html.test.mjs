import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("defines the AgentOS landing-page content", async () => {
  const source = await readFile(new URL("app/page.tsx", projectRoot), "utf8");

  assert.match(source, /AI WORKERS\./);
  assert.match(source, /REAL IMPACT\./);
  assert.match(source, /Start free\. Scale your/);
  assert.match(source, /digital workforce\./);
  assert.match(source, /href="#pricing"/);
  assert.match(source, /railway\.com\/deploy\/agentos-1/);
});

test("defines production metadata without starter-preview artifacts", async () => {
  const source = await readFile(new URL("app/layout.tsx", projectRoot), "utf8");

  assert.match(
    source,
    /Create digital workers, connect tools and channels, assign real work/,
  );
  assert.match(source, /socialimage\.jpeg/);
  assert.doesNotMatch(source, /codex-preview/i);
  assert.doesNotMatch(source, /Your site is taking shape/i);
  assert.doesNotMatch(source, /react-loading-skeleton/i);
});

test("creates Next.js production output", async () => {
  await access(new URL(".next/BUILD_ID", projectRoot));
});
