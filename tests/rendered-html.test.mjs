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

test("defines the desktop download experience", async () => {
  const home = await readFile(new URL("app/page.tsx", projectRoot), "utf8");
  const subpage = await readFile(new URL("app/components/subpage.tsx", projectRoot), "utf8");
  const routes = await readFile(new URL("app/[...slug]/page.tsx", projectRoot), "utf8");

  assert.match(home, /AGENTOS DESKTOP/);
  assert.match(home, /Download Desktop/);
  assert.match(subpage, /function DesktopDownload/);
  assert.match(subpage, /macOS/);
  assert.match(subpage, /Windows/);
  assert.match(subpage, /Linux/);
  assert.match(subpage, /OpenClaw stays authoritative/);
  assert.match(subpage, /desktop-runtime-strip/);
  assert.match(subpage, /desktop-page/);
  assert.doesNotMatch(subpage, /desktop-install-steps/);
  assert.doesNotMatch(subpage, /desktop-release-banner/);
  assert.match(subpage, /AgentOS_0\.8\.0_aarch64\.dmg/);
  assert.match(subpage, /AgentOS_0\.8\.0_x64-setup\.exe/);
  assert.match(subpage, /AgentOS_0\.8\.0_amd64\.AppImage/);
  assert.match(subpage, /AgentOS_0\.8\.0_amd64\.deb/);
  assert.match(subpage, /AgentOS-0\.8\.0-1\.x86_64\.rpm/);
  assert.match(routes, /download:/);
});

test("creates Next.js production output", async () => {
  await access(new URL(".next/BUILD_ID", projectRoot));
});
