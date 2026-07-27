"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useRef, useState } from "react";
import { AI_PROVIDERS, EXPLORE_AGENTOS_PROMPT } from "@/app/lib/ai-providers";

const Arrow = () => <span aria-hidden="true">→</span>;
const deployUrl = "https://railway.com/deploy/agentos-1?referralCode=w43Gta&utm_medium=integration&utm_source=template&utm_campaign=generic";

type DemoKind = "deployment" | "providers" | "runtime" | "foundation";

function DemoCursor() {
  return <span className="demo-cursor" aria-hidden="true"><svg viewBox="0 0 20 24" fill="none"><path d="M3 2.5 16.2 14l-6 1.1-2.8 5.8L3 2.5Z" fill="#f6f2e9" stroke="#17130d" strokeWidth="1.4" /></svg></span>;
}

function DeploymentDemo() {
  return <div className="micro-demo deployment-demo" aria-hidden="true">
    <div className="demo-window deployment-window">
      <div className="demo-window-head"><span className="demo-window-mark">◈</span><span>Railway deployment</span><i /></div>
      <div className="deployment-body">
        <span className="deployment-project">agentos / production</span>
        <button type="button" tabIndex={-1} className="deploy-button"><span className="deploy-label">Deploy on Railway</span><span className="deploy-loading"><b /> Deploying...</span><span className="deploy-success">✓ AgentOS is live <i /></span></button>
        <span className="deploy-progress"><b /></span>
      </div>
    </div>
    <DemoCursor />
  </div>;
}

function ProviderKeysDemo() {
  return <div className="micro-demo providers-demo" aria-hidden="true">
    <div className="provider-grid">
      <span className="provider-card provider-card--openai"><b>◌</b>OpenAI<i>✓</i></span>
      <span className="provider-card provider-card--anthropic"><b>Ａ</b>Anthropic<i>✓</i></span>
      <span className="provider-card provider-card--gemini"><b>✦</b>Gemini<i>✓</i></span>
      <span className="provider-card provider-card--xai"><b>𝕏</b>xAI<i>✓</i></span>
    </div>
    <div className="key-connect-row"><span className="key-input">sk-<b>••••••••••••</b><i /></span><span className="key-connect">Connect</span></div>
    <DemoCursor />
  </div>;
}

function PrivateRuntimeDemo() {
  return <div className="micro-demo runtime-demo" aria-hidden="true">
    <div className="runtime-window">
      <div className="workspace-select"><span>Growth Workspace</span><b>⌄</b></div>
      <div className="workspace-menu"><span>Growth</span><span>Operations</span><span>Research</span></div>
      <div className="runtime-agents"><span><b>◈</b>Scout</span><span><b>⌁</b>Operator</span><span><b>◎</b>Analyst</span></div>
      <div className="agent-menu"><span>Context Engine</span><span>Workspace settings</span></div>
      <div className="context-panel"><strong>▣ Private to this workspace</strong><span>Knowledge</span><span>Memory</span><span>Policies</span></div>
    </div>
    <DemoCursor />
  </div>;
}

function ClawMark({ small = false }: { small?: boolean }) {
  return <svg className={`claw-mark ${small ? "claw-mark--small" : ""}`} viewBox="0 0 44 44" fill="none"><path d="M18.5 13.2c-5.8-6.2-11.5-2.4-9.6 3.6 1.2 3.8 5.3 5.6 9.6 3.8M25.5 13.2c5.8-6.2 11.5-2.4 9.6 3.6-1.2 3.8-5.3 5.6-9.6 3.8M15 25.5c2.2 5.4 11.8 5.4 14 0M22 13v15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function OpenFoundationDemo() {
  return <div className="micro-demo foundation-demo" aria-hidden="true">
    <span className="network-line network-line--one" /><span className="network-line network-line--two" /><span className="network-line network-line--three" />
    <span className="foundation-node foundation-node--one"><ClawMark small /></span><span className="foundation-node foundation-node--two"><ClawMark small /></span><span className="foundation-node foundation-node--three"><ClawMark small /></span>
    <span className="foundation-core"><ClawMark /></span><DemoCursor />
  </div>;
}

function FeatureMicroDemo({ kind }: { kind: DemoKind }) {
  if (kind === "deployment") return <DeploymentDemo />;
  if (kind === "providers") return <ProviderKeysDemo />;
  if (kind === "runtime") return <PrivateRuntimeDemo />;
  return <OpenFoundationDemo />;
}

function DeployGuideModal({ onClose }: { onClose: () => void }) {
  const steps = [
    ["Deploy on Railway", "Launch your private AgentOS instance.", "railway"],
    ["Add your model", "Connect your preferred provider and API key.", "provider"],
    ["Start working", "Your workspace and agent are ready for tasks.", "workspace"],
  ] as const;
  return <div className="deploy-guide-backdrop" role="presentation" onMouseDown={onClose}>
    <style>{`@keyframes deployGuideVisualFloat { 0%, 100% { transform: translateY(0) scale(1); filter: brightness(1); } 50% { transform: translateY(-5px) scale(1.018); filter: brightness(1.15); } }`}</style>
    <section className="deploy-guide-modal" role="dialog" aria-modal="true" aria-labelledby="deploy-guide-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className="deploy-guide-close" type="button" aria-label="Close deployment guide" onClick={onClose}>×</button>
      <div className="deploy-guide-intro"><span className="eyebrow pill">AI WORKFORCE PLATFORM</span><h2 id="deploy-guide-title">What happens when you <span>deploy AgentOS?</span></h2><p>From deployment to your first task in 3 simple steps.</p></div>
      <div className="deploy-guide-steps">{steps.map(([title, copy, visual], index) => <article key={title}><b>{index + 1}</b><div className="deploy-step-copy"><h3>{title}</h3><p>{copy}</p></div><div className={`deploy-step-visual deploy-step-visual--${visual}`} style={{ animation: `deployGuideVisualFloat 2.8s ease-in-out ${index * .32}s infinite` }} aria-hidden="true">{visual === "railway" ? <><strong>◒ RAILWAY</strong><span>◈</span><i /><i /><i /><em>Deploy</em></> : visual === "provider" ? <><strong>◌ OpenAI <b>✓</b></strong><strong>AI&nbsp;&nbsp; Anthropic <b>○</b></strong><strong>G&nbsp;&nbsp; Google <b>○</b></strong><strong>•••&nbsp; More providers <b>○</b></strong></> : <><strong>Welcome! 👋</strong><span>◈ &nbsp; My Workspace <i /></span><span>✦ &nbsp; Research Agent <i /></span><em>Give your agent a task...　➤</em></>}</div></article>)}</div>
      <div className="deploy-guide-action"><div><b>ϟ</b><span><strong>Ready in minutes.</strong><small>No installation. No DevOps.<br />Just deploy and start.</small></span></div><a className="button deploy-cta" href={deployUrl} target="_blank" rel="noreferrer">Deploy AgentOS on Railway</a></div>
      <p className="deploy-guide-note">▣ Railway hosting and model usage are billed separately.</p>
    </section>
  </div>;
}

const heroParticleConfig = [
  ["42%", "22%", 5, -2.1], ["49%", "67%", 3, -4.4], ["55%", "13%", 7, -1.2],
  ["58%", "82%", 4, -5.8], ["62%", "27%", 3, -3.1], ["65%", "61%", 7, -6.4],
  ["69%", "16%", 5, -1.8], ["71%", "73%", 3, -4.9], ["75%", "37%", 5, -2.9],
  ["78%", "88%", 7, -5.1], ["81%", "11%", 3, -3.8], ["84%", "56%", 5, -6.8],
  ["87%", "26%", 7, -2.5], ["90%", "76%", 3, -4.2], ["92%", "44%", 5, -5.7],
  ["52%", "45%", 3, -1.1], ["73%", "51%", 5, -3.6], ["96%", "17%", 3, -6.2],
  ["38%", "40%", 4, -2.7], ["34%", "67%", 3, -5.4], ["30%", "86%", 5, -1.9],
  ["42%", "94%", 7, -4.1], ["48%", "105%", 4, -6.6], ["55%", "112%", 6, -2.3],
  ["63%", "108%", 3, -3.5], ["70%", "118%", 5, -5.9], ["78%", "104%", 4, -1.5],
  ["85%", "111%", 3, -4.7],
] as const;

function HeroParticles() {
  return (
    <div className="hero-particles" aria-hidden="true" style={{ position: "absolute", zIndex: 1, inset: 0, overflow: "visible", pointerEvents: "none", mixBlendMode: "screen" }}>
      <style>{`
        @keyframes agentosParticleDrift { 0%, 100% { opacity: 0; transform: translate3d(0, 14px, 0) scale(.45); } 18% { opacity: .35; } 48% { opacity: 1; } 78% { opacity: .26; } 100% { transform: translate3d(-18px, -30px, 0) scale(1.45); } }
        @keyframes agentosHaloPulse { 0%, 100% { opacity: .52; transform: translate(-50%, -50%) scale(.92); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); } }
      `}</style>
      <div className="hero-particle-halo" style={{ position: "absolute", width: 560, height: 560, left: "61%", top: "50%", borderRadius: "50%", transform: "translate(-50%, -50%)", background: "radial-gradient(circle, rgba(255,196,79,.18) 0%, rgba(244,178,63,.07) 28%, transparent 67%)", filter: "blur(2px)", animation: "agentosHaloPulse 7s ease-in-out infinite" }} />
      {heroParticleConfig.map(([left, top, size, delay], index) => (
        <span className={index >= 18 ? "hero-particle--desktop" : undefined} key={index} style={{ position: "absolute", left, top, width: size, height: size, borderRadius: "50%", background: "#ffd782", boxShadow: "0 0 9px 3px rgba(255,188,60,.8), 0 0 22px 6px rgba(255,180,50,.2)", animation: "agentosParticleDrift 7s ease-in-out infinite", animationDelay: `${delay}s` }} />
      ))}
    </div>
  );
}

function Logo({ compact = false, animated = false }: { compact?: boolean; animated?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""} ${animated ? "brand--animated" : ""}`} href="#top" aria-label="AgentOS home">
      {animated ? (
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet="/assets/agentlogo.webp" />
          <img src="/assets/agentos.gif" alt="" />
        </picture>
      ) : <img src="/assets/agentlogo.webp" alt="" />}
      <span>Agent<span>OS</span></span>
    </a>
  );
}

const features = [
  { icon: "◈", title: "One-click deployment", copy: "Launch your own AgentOS workspace on Railway.", demo: "deployment" as const },
  { icon: "◇", title: "Bring your own keys", copy: "Use the model providers and accounts you trust.", demo: "providers" as const },
  { icon: "⌾", title: "Private runtime", copy: "Keep your workspaces and operational context under your control.", demo: "runtime" as const },
  { icon: "▥", title: "Open foundation", copy: "Built around the OpenClaw ecosystem.", demo: "foundation" as const },
];

const workers = [
  { name: "Operator", team: "Operations", copy: "Coordinates recurring operations, channels and workflows.", icon: "▦", cls: "operator", image: "/assets/workers/cutouts/operator.png", bio: "A coordinator for routing recurring work, monitoring execution, and surfacing what needs attention.", specialties: ["Workflow orchestration", "Task routing", "Run monitoring"], skills: ["Prioritization", "Tool calling", "Escalation logic"], metrics: [["Routes", "Recurring work"], ["Tracks", "Task status"], ["Escalates", "Exceptions"]] },
  { name: "Analyst", team: "Analytics", copy: "Researches information, monitors data and prepares reports.", icon: "◎", cls: "analyst", image: "/assets/workers/cutouts/analyst.png", bio: "A research partner that turns source material, data and updates into usable briefs for your team.", specialties: ["Market intelligence", "Data synthesis", "Executive briefs"], skills: ["Deep research", "Data analysis", "Insight writing"], metrics: [["Researches", "Source material"], ["Monitors", "Key signals"], ["Prepares", "Reports"]] },
  { name: "Builder", team: "Engineering", copy: "Creates automations, tools and digital products.", icon: "⌁", cls: "builder", image: "/assets/workers/cutouts/builder.png", bio: "A hands-on maker for connecting systems, designing automations, and moving ideas toward production.", specialties: ["Automation design", "System integration", "Rapid prototyping"], skills: ["API workflows", "QA checks", "Deployment"], metrics: [["Connects", "Your tools"], ["Builds", "Automations"], ["Supports", "Delivery"]] },
  { name: "Guardian", team: "Security", copy: "Reviews sensitive actions, permissions and security risks.", icon: "⬡", cls: "guardian", image: "/assets/workers/cutouts/guardian.png", bio: "A review layer for sensitive actions, access changes, and risky operational handoffs.", specialties: ["Access governance", "Risk detection", "Audit readiness"], skills: ["Policy checks", "Threat triage", "Secure handoffs"], metrics: [["Reviews", "Sensitive actions"], ["Checks", "Permissions"], ["Supports", "Audit trails"]] },
];

const plans = [
  { name: "Free", description: "Build your first AI team.", monthly: 0, yearly: 0, suffix: "forever", note: "Core agent builder and BYOK included.", railwayCredit: true, available: true, features: [{ label: "1 Workspace" }, { label: "3 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "3 Connected Accounts" }, { label: "1 Concurrent Operation", tooltip: "One actively running agent operation at a time." }, { label: "7-Day Activity History" }], cta: "Deploy Free", href: "https://railway.com/deploy/agentos-1?referralCode=w43Gta&utm_medium=integration&utm_source=template&utm_campaign=generic" },
  { name: "Builder", description: "For solo founders building an AI workforce.", monthly: 19, yearly: 16, suffix: "/mo", available: false, features: [{ label: "3 Workspaces" }, { label: "10 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "15 Connected Accounts" }, { label: "3 Concurrent Operations", tooltip: "Operations that can run simultaneously across your workforce." }, { label: "25 Scheduled Automations" }, { label: "30-Day Activity History" }], cta: "Start Building" },
  { name: "Pro", description: "For teams running agents in production.", monthly: 79, yearly: 66, suffix: "/mo", available: false, limitedOffer: true, href: "https://railway.com/deploy/agentos-1?referralCode=w43Gta&utm_medium=integration&utm_source=template&utm_campaign=generic", features: [{ label: "10 Workspaces" }, { label: "50 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "5 Operator Seats" }, { label: "Scheduled operations" }, { label: "Approval workflows · Planned" }, { label: "Analytics and cost controls · Planned" }, { label: "90-Day Activity History" }], cta: "Deploy AgentOS", popular: true },
  { name: "Scale", description: "For agencies and companies operating multiple AI teams.", monthly: 199, yearly: 166, suffix: "/mo", available: false, features: [{ label: "25 Workspaces" }, { label: "200 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "20 Operator Seats" }, { label: "30 Concurrent Operations", tooltip: "Operations that can run simultaneously across your workforce." }, { label: "500 Scheduled Automations" }, { label: "RBAC, Audit Logs and Multi-Workspace Controls" }, { label: "1-Year Activity History" }], cta: "Start Scaling" },
];

const productScreens = [
  { src: "/assets/screens/01-mission-control.webp", label: "Mission Control" },
  { src: "/assets/screens/02-dashboard.webp", label: "Live dashboard" },
  { src: "/assets/screens/03-operations-jobs.webp", label: "Operations & jobs" },
  { src: "/assets/screens/04-agent-chat.webp", label: "Agent chat" },
  { src: "/assets/screens/05-workspace-canvas.webp", label: "Workspace canvas" },
  { src: "/assets/screens/06-task-composer.webp", label: "Task composer" },
  { src: "/assets/screens/07-agents-overview.webp", label: "Agent overview" },
  { src: "/assets/screens/08-agent-menu.webp", label: "Agent controls" },
];

const workflowSteps = [
  ["01", "Create your workers", "Start with a role, a goal and a clear operating context."],
  ["02", "Connect your stack", "Add the tools, accounts and model providers your work needs."],
  ["03", "Assign real work", "Turn recurring operations and requests into focused tasks."],
  ["04", "Review with control", "Monitor runs and keep human review where it matters."],
];

const useCases = [
  ["Solo founders", "Keep research, content and recurring operations moving across every project."],
  ["Automation agencies", "Run clear client workspaces and review delivery before handoff."],
  ["Lean startup teams", "Connect shared tools and give routine operations a dependable home."],
  ["Web3 & community ops", "Coordinate community updates, support queues and ongoing reporting."],
];

const faqs = [
  ["What is AgentOS?", "AgentOS is an operations platform for building and running teams of digital workers. From one workspace, you can create agents, give them context, connect tools and accounts, assign real work, monitor activity and supervise important actions."],
  ["Is AgentOS self-hosted?", "Yes. AgentOS runs inside your own deployment environment, giving you greater control over your infrastructure, data and model providers. Railway offers the fastest one-click deployment option, but AgentOS is not limited to Railway."],
  ["What does Railway charge for?", "Railway charges for the infrastructure used to run your AgentOS deployment, including compute, storage and network usage. Railway hosting costs are separate from AgentOS software plans and AI model usage."],
  ["Are AI model costs included?", "No. AgentOS uses a bring-your-own-provider model, so AI usage is billed directly by the provider you connect. This gives you control over which models you use, how much you spend and where your requests are processed."],
  ["Where is my data stored?", "Your AgentOS configuration, workspaces, sessions and operational data are stored within your own deployment environment and connected services. AgentOS does not place every customer inside a shared runtime."],
  ["Do I need OpenClaw to use AgentOS?", "AgentOS is powered by OpenClaw and includes the OpenClaw runtime as part of the deployment. You do not need to install or manage OpenClaw separately when using the standard AgentOS deployment."],
  ["Can I use my own AI model providers?", "Yes. AgentOS supports bring-your-own-key access, allowing you to connect supported model providers and choose the models that fit each worker, task and budget."],
  ["How do AgentOS plan limits work?", "AgentOS plans define the software features and operational capacity available to your workspace, such as workers, workspaces, team access, automation controls and advanced management features. Hosting costs and AI model usage are billed separately."],
  ["Can I use AgentOS on mobile?", "Yes. AgentOS is designed to work across desktop, tablet and mobile browsers, so you can monitor workers, review activity and manage operations from wherever you are."],
  ["Is AgentOS open source?", "AgentOS is built on an open-source foundation, including the OpenClaw runtime. Source availability, licensing terms, supported features and release information can be reviewed in the official GitHub repository."],
];

const trustItems = ["Self-hosted", "BYOK", "One-click deployment", "Powered by OpenClaw"];
const foundationItems = [
  ["◈", "Open-source foundation"],
  ["⌁", "Railway deployment"],
  ["", "Bring your own models"],
  ["◎", "Private workspaces"],
  ["◉", "Regular product updates"],
];

export default function Home() {
  const [yearly, setYearly] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productSlide, setProductSlide] = useState(0);
  const [productLightboxOpen, setProductLightboxOpen] = useState(false);
  const [productDragOffset, setProductDragOffset] = useState(0);
  const [isProductDragging, setIsProductDragging] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<typeof workers[number] | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);
  const productSwipeStart = useRef<number | null>(null);
  const productSwipeMoved = useRef(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProductSlide((current) => (current + 1) % productScreens.length);
    }, 10_000);
    return () => window.clearInterval(interval);
  }, [productSlide]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setDeployGuideOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main id="top">
      <header className="nav-shell">
        <Logo animated />
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <div className="mobile-menu-intro">
            <span>AI WORKFORCE PLATFORM</span>
            <strong>Build your workforce<br />without the overhead.</strong>
          </div>
          <div className="nav-links">
            <a href="/product" onClick={() => setMenuOpen(false)}>Product <Arrow /></a>
            <a href="/solutions/solo-founders" onClick={() => setMenuOpen(false)}>Solutions <Arrow /></a>
            <a href="/docs" onClick={() => setMenuOpen(false)}>Resources <Arrow /></a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing <Arrow /></a>
            <a href="/about" onClick={() => setMenuOpen(false)}>Company <Arrow /></a>
          </div>
          <div className="mobile-menu-footer">
            <button className="button mobile-menu-cta deploy-cta" type="button" onClick={() => { setMenuOpen(false); setDeployGuideOpen(true); }}>Deploy AgentOS <Arrow /></button>
            <small>© 2026 AgentOS · Built for ambitious teams</small>
            <div className="hero-socials mobile-menu-socials" aria-label="SapienX social links">
              <a href="https://sapienx.app/" target="_blank" rel="noreferrer" aria-label="SapienX website"><img className="social-icon" src="/assets/social/globe.svg" alt="" /></a>
              <a href="https://t.me/sapienapp" target="_blank" rel="noreferrer" aria-label="SapienX on Telegram"><img className="social-icon" src="/assets/social/telegram.svg" alt="" /></a>
              <a href="https://x.com/sapienapp" target="_blank" rel="noreferrer" aria-label="SapienX on X">𝕏</a>
              <a href="https://www.linkedin.com/company/sapienxapp/" target="_blank" rel="noreferrer" aria-label="SapienX on LinkedIn"><span className="social-linkedin">in</span></a>
              <a href="https://github.com/SapienXai/AgentOS" target="_blank" rel="noreferrer" aria-label="AgentOS on GitHub"><img className="social-icon" src="/assets/social/github.svg" alt="" /></a>
            </div>
          </div>
        </nav>
        <button className="button button--small nav-cta deploy-cta" type="button" onClick={() => setDeployGuideOpen(true)}>Deploy AgentOS <Arrow /></button>
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero page-pad" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster="/assets/workers.png">
            <source media="(max-width: 760px)" src="/assets/mobilehero-loop.webm" type="video/webm" />
            <source src="/assets/hero-loop.webm" type="video/webm" />
          </video>
        </div>
        <HeroParticles />
        <div className="hero-copy">
          <div className="eyebrow pill">AI WORKFORCE PLATFORM</div>
          <h1 id="hero-title">AI WORKERS.<br /><span>REAL IMPACT.</span></h1>
          <p>Build, deploy, manage and supervise<br className="desktop-only" /> teams of digital workers.</p>
          <div className="hero-trust" aria-label="AgentOS deployment foundations"><div className="hero-trust-track">{trustItems.map((item) => <span className="hero-trust-item" key={item}>{item}</span>)}<span className="hero-trust-duplicates" aria-hidden="true">{trustItems.map((item) => <span className="hero-trust-item" key={`duplicate-${item}`}>{item}</span>)}</span></div></div>
          <div className="hero-action-stack">
            <div className="hero-actions">
              <button className="button hero-offer-cta deploy-cta" type="button" onClick={() => setDeployGuideOpen(true)}>Deploy AgentOS <Arrow /></button>
              <button className="button button--ghost" type="button" onClick={() => setDemoOpen(true)}><b className="play">▶</b> Watch Demo</button>
            </div>
            <div className="hero-socials" aria-label="SapienX social links">
              <a href="https://sapienx.app/" target="_blank" rel="noreferrer" aria-label="SapienX website"><img className="social-icon" src="/assets/social/globe.svg" alt="" /></a>
              <a href="https://t.me/sapienapp" target="_blank" rel="noreferrer" aria-label="SapienX on Telegram"><img className="social-icon" src="/assets/social/telegram.svg" alt="" /></a>
              <a href="https://x.com/sapienapp" target="_blank" rel="noreferrer" aria-label="SapienX on X">𝕏</a>
              <a href="https://www.linkedin.com/company/sapienxapp/" target="_blank" rel="noreferrer" aria-label="SapienX on LinkedIn"><span className="social-linkedin">in</span></a>
              <a href="https://github.com/SapienXai/AgentOS" target="_blank" rel="noreferrer" aria-label="AgentOS on GitHub"><img className="social-icon" src="/assets/social/github.svg" alt="" /></a>
            </div>
          </div>
          <div className="stats" aria-label="AgentOS deployment advantages">
            <div><i>◈</i><span><strong>Private runtime</strong><small>Your infrastructure</small></span></div>
            <div><i>◎</i><span><strong>Persistent workspaces</strong><small>Your operational context</small></span></div>
            <div><i>⬡</i><span><strong>Mobile + desktop</strong><small>Stay in control anywhere</small></span></div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span /></div>
      </section>

      <section className="trusted page-pad" aria-label="AgentOS foundations">
        <p>BUILT FOR OWNERSHIP AND CONTROL</p>
        <div className="logo-row">
          <div className="logo-row-group">{foundationItems.map(([icon, label]) => <span key={label} className={icon ? "" : "sapien"}>{icon && <b>{icon}</b>}{label}</span>)}</div>
          <div className="logo-row-group" aria-hidden="true">{foundationItems.map(([icon, label]) => <span key={`duplicate-${label}`} className={icon ? "" : "sapien"}>{icon && <b>{icon}</b>}{label}</span>)}</div>
        </div>
      </section>

      <section className="foundation-ai-summary" aria-labelledby="foundation-ai-summary-title">
        <div className="foundation-ai-summary-copy">
          <p>AI SUMMARY</p>
          <h2 id="foundation-ai-summary-title">Explore AgentOS with AI</h2>
          <span>Open a ready-to-use overview in your preferred assistant.</span>
        </div>
        <div className="foundation-ai-summary-providers">
          {AI_PROVIDERS.map((provider) => (
            <a key={provider.name} className="foundation-ai-provider" href={provider.buildUrl(EXPLORE_AGENTOS_PROMPT)} target="_blank" rel="noopener noreferrer" aria-label={`Explore AgentOS with ${provider.name}`} title={provider.name}>
              {provider.icon}
            </a>
          ))}
        </div>
      </section>

      <section className="foundation-ai-summary-desktop explore-ai page-pad" aria-labelledby="foundation-ai-summary-desktop-title">
        <div className="explore-ai-intro">
          <div className="eyebrow">EXPLORE WITH AI</div>
          <h2 id="foundation-ai-summary-desktop-title">Understand AgentOS with your <span>favorite AI</span></h2>
          <p>Open AgentOS in your preferred AI assistant to explore its capabilities, deployment model, use cases, and how it compares with other agent platforms.</p>
        </div>
        <div className="explore-ai-grid">
          {AI_PROVIDERS.map((provider) => (
            <a className="explore-ai-card" href={provider.buildUrl(EXPLORE_AGENTOS_PROMPT)} key={provider.name} target="_blank" rel="noopener noreferrer" aria-label={`Explore AgentOS with ${provider.name} (opens in a new tab)`}>
              <span className="explore-ai-icon">{provider.icon}</span>
              <span>{provider.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="feature-strip page-pad" id="solutions">
        <div className="feature-panel">
          {features.map((feature) => (
            <article key={feature.title}>
              <div className="feature-copy"><h3>{feature.title}</h3><p className="feature-description">{feature.copy}</p></div>
              <FeatureMicroDemo kind={feature.demo} />
            </article>
          ))}
        </div>
      </section>

      <section className="how-it-works page-pad" id="how-it-works" aria-labelledby="how-it-works-title">
        <div className="how-it-works-intro"><div className="section-kicker">HOW IT WORKS</div><h2 id="how-it-works-title">From workforce design<br />to <span>reviewable work.</span></h2><p>Your infrastructure. Your models. Your digital workforce.</p></div>
        <ol className="workflow-steps">{workflowSteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      </section>

      <section className="team page-pad" id="company">
        <div className="section-kicker">MEET YOUR NEW TEAM</div>
        <div className="worker-grid">
          {workers.map((worker) => (
            <article className={`worker-card ${worker.cls}`} key={worker.name} role="button" tabIndex={0} onClick={() => setSelectedWorker(worker)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setSelectedWorker(worker); }}>
              <div className="worker-portrait" aria-hidden="true">
                <img src={worker.image} alt="" />
              </div>
              <div className="worker-content">
                <h3><i>{worker.icon}</i>{worker.name}</h3>
                <strong>{worker.team}</strong>
                <p>{worker.copy}</p>
              </div>
              <button type="button" aria-label={`View ${worker.name}'s profile`} onClick={() => setSelectedWorker(worker)}><Arrow /></button>
            </article>
          ))}
        </div>
      </section>

      {selectedWorker && (
        <div className="worker-profile-backdrop" role="presentation" onMouseDown={() => setSelectedWorker(null)}>
          <section className={`worker-profile ${selectedWorker.cls}`} role="dialog" aria-modal="true" aria-labelledby="worker-profile-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="worker-profile-close" type="button" aria-label="Close worker profile" onClick={() => setSelectedWorker(null)}>×</button>
            <div className="worker-profile-visual" aria-hidden="true"><img src={selectedWorker.image} alt="" /></div>
            <div className="worker-profile-main">
              <div className="worker-profile-status"><span /> AI WORKER PROFILE · ACTIVE</div>
              <h2 id="worker-profile-title"><i>{selectedWorker.icon}</i>{selectedWorker.name}</h2>
              <p className="worker-profile-team">{selectedWorker.team} specialist</p>
              <p className="worker-profile-bio">{selectedWorker.bio}</p>
              <div className="worker-profile-lists">
                <div><h3>Core capabilities</h3><ul>{selectedWorker.specialties.map((item) => <li key={item}>✦ {item}</li>)}</ul></div>
                <div><h3>Skill stack</h3><div className="worker-skill-chips">{selectedWorker.skills.map((item) => <span key={item}>{item}</span>)}</div></div>
              </div>
              <div className="worker-profile-metrics">{selectedWorker.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
            </div>
          </section>
        </div>
      )}

      {demoOpen && (
        <div className="demo-video-backdrop" role="presentation" onMouseDown={() => setDemoOpen(false)}>
          <section className="demo-video-modal" role="dialog" aria-modal="true" aria-labelledby="demo-video-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="demo-video-head"><div><span>AGENTOS DEMO</span><h2 id="demo-video-title">See the workforce in action.</h2></div><button type="button" aria-label="Close demo video" onClick={() => setDemoOpen(false)}>×</button></div>
            <div className="demo-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/MP8-CB2wjWk?autoplay=1&rel=0" title="AgentOS demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          </section>
        </div>
      )}

      {deployGuideOpen && <DeployGuideModal onClose={() => setDeployGuideOpen(false)} />}

      <section className="product page-pad" id="product">
        <div className="product-panel">
          <div className="product-copy">
            <div className="eyebrow">SEE IT IN ACTION</div>
            <h2>One platform.<br className="product-desktop-line-break" /> Every agent.<br /><span style={{ color: "var(--gold-soft)" }}>Total control.</span></h2>
            <p>Manage context, tools, accounts, models<span className="mobile-line-break"><br /></span> and tasks in a single, powerful workspace.</p>
            <button type="button" className="button button--ghost" onClick={() => setDemoOpen(true)}><b className="play gold">▶</b> Watch Full Demo <Arrow /></button>
          </div>
          <div className="product-carousel" role="region" aria-roledescription="carousel" aria-label="AgentOS product screens">
            <button
              type="button"
              className="product-carousel-stage"
              aria-label={`Expand ${productScreens[productSlide].label} screenshot`}
              onPointerDown={(event) => {
                productSwipeStart.current = event.clientX;
                productSwipeMoved.current = false;
                setIsProductDragging(true);
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                const start = productSwipeStart.current;
                if (start === null) return;
                const distance = event.clientX - start;
                if (Math.abs(distance) > 6) productSwipeMoved.current = true;
                const maxDistance = event.currentTarget.clientWidth * 0.8;
                setProductDragOffset(Math.max(-maxDistance, Math.min(maxDistance, distance)));
              }}
              onPointerUp={(event) => {
                const start = productSwipeStart.current;
                const swipeDistance = start === null ? 0 : event.clientX - start;
                if (Math.abs(swipeDistance) > event.currentTarget.clientWidth * 0.16) {
                  productSwipeMoved.current = true;
                  setProductSlide((current) => (current + (swipeDistance > 0 ? -1 : 1) + productScreens.length) % productScreens.length);
                }
                productSwipeStart.current = null;
                setProductDragOffset(0);
                setIsProductDragging(false);
              }}
              onPointerCancel={() => { productSwipeStart.current = null; setProductDragOffset(0); setIsProductDragging(false); }}
              onClick={() => {
                if (!productSwipeMoved.current) setProductLightboxOpen(true);
              }}
            >
              <span className={`product-carousel-track ${isProductDragging ? "is-dragging" : ""}`} style={{ transform: `translate3d(calc(${-productSlide * 100}% + ${productDragOffset}px), 0, 0)` }}>
                {productScreens.map((screen) => <img key={screen.src} src={screen.src} alt={screen === productScreens[productSlide] ? `${screen.label} in AgentOS` : ""} draggable={false} />)}
              </span>
              <span className="product-carousel-expand" aria-hidden="true">↗</span>
            </button>
            <button type="button" className="product-carousel-arrow product-carousel-arrow--previous" aria-label="Previous product screen" onClick={() => setProductSlide((current) => (current - 1 + productScreens.length) % productScreens.length)}>←</button>
            <button type="button" className="product-carousel-arrow product-carousel-arrow--next" aria-label="Next product screen" onClick={() => setProductSlide((current) => (current + 1) % productScreens.length)}>→</button>
            <div className="product-carousel-footer">
              <span>{productScreens[productSlide].label}</span>
              <div className="product-carousel-dots" role="tablist" aria-label="Product screens">
                {productScreens.map((screen, index) => <button type="button" key={screen.src} role="tab" aria-label={`Show ${screen.label}`} aria-selected={index === productSlide} className={index === productSlide ? "active" : ""} onClick={() => setProductSlide(index)} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {productLightboxOpen && (
        <div className="product-lightbox-backdrop" role="presentation" onMouseDown={() => setProductLightboxOpen(false)}>
          <section className="product-lightbox" role="dialog" aria-modal="true" aria-labelledby="product-lightbox-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="product-lightbox-close" aria-label="Close screenshot" onClick={() => setProductLightboxOpen(false)}>×</button>
            <img src={productScreens[productSlide].src} alt={`${productScreens[productSlide].label} in AgentOS`} />
            <div className="product-lightbox-footer"><strong id="product-lightbox-title">{productScreens[productSlide].label}</strong><span>{productSlide + 1} / {productScreens.length}</span></div>
          </section>
        </div>
      )}

      <section className="use-cases page-pad" id="use-cases" aria-labelledby="use-cases-title">
        <div className="use-cases-copy"><div className="eyebrow">REAL OPERATIONS, NOT DEMOS</div><h2 id="use-cases-title">A workforce for the work<br />already on <span>your plate.</span></h2><p>AgentOS gives focused teams a place to run the recurring work that keeps a business moving.</p><a className="button button--ghost" href="#pricing">Explore plans <Arrow /></a></div>
        <div className="use-case-grid">{useCases.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">↗</i></article>)}</div>
      </section>

      <section className="pricing page-pad" id="pricing" aria-labelledby="pricing-title">
        <div className="section-kicker">DIGITAL WORKFORCE PLANS</div>
        <h2 className="pricing-title" id="pricing-title">Start free. Scale your<span className="mobile-line-break"><br /></span> <span className="pricing-title-accent" style={{ color: "var(--gold-soft)" }}>digital workforce.</span></h2>
        <p className="section-sub">Build your first AI team today,<span className="mobile-line-break"><br /></span> then expand as your operations grow.</p>
        <div className={`billing-toggle ${yearly ? "annual" : ""}`} role="group" aria-label="Billing cycle">
          <button type="button" aria-pressed={!yearly} className={!yearly ? "active" : ""} onClick={() => setYearly(false)}>Monthly</button>
          <button type="button" aria-pressed={yearly} className={yearly ? "active" : ""} onClick={() => setYearly(true)}>Annual</button>
          {yearly && <span>2 months free</span>}
        </div>
        <p className="pricing-includes">Every plan includes <b>agent creation</b>, customization, tools, integrations, channels, memory, goals, policies and BYOK.</p>
        <p className="pricing-cost-note"><b>Clear costs, separate layers.</b> AgentOS plans cover the software and workforce controls. Hosting and model usage are billed separately.</p>
        <div className="pricing-grid">
          {[...plans].sort((first, second) => Number(Boolean(second.popular)) - Number(Boolean(first.popular))).map((plan) => (
            <article className={`price-card ${plan.popular ? "popular" : ""} ${plan.limitedOffer ? "limited-offer" : ""} ${!(plan.available || plan.limitedOffer) ? "is-unavailable" : ""}`} key={plan.name}>
              {plan.popular && <div className="popular-label offer-label"><b>Launch offer</b><small>Pro free with first deployment</small></div>}
              <div className="plan-header"><h3>{plan.name}</h3><p>{plan.description}</p></div>
              {plan.limitedOffer ? <><div className="price price--offer"><strong>FREE</strong><span>with your first deployment</span><span className="old-price"><s>$79</s><small>/month</small></span></div><p className="launch-offer-note">No countdown. No card required for the launch offer.</p></> : <><div className="price"><sup>$</sup><strong>{yearly ? plan.yearly : plan.monthly}</strong>{plan.suffix === "/mo" ? <span>/month</span> : <span>forever</span>}</div><small className="price-billing">{plan.suffix === "forever" ? "No card required" : yearly ? "Billed annually" : "Billed monthly"}</small></>}
              {plan.note && <p className="plan-note">✦ {plan.note}</p>}
              {plan.railwayCredit && <div className="railway-credit"><b>+$5</b><span>Railway hosting credit</span><abbr title="Included credit for Railway hosting." data-tooltip="Included credit for Railway hosting." tabIndex={0}>i</abbr></div>}
              <ul>{plan.features.map((feature) => <li key={feature.label}>✓ {feature.tooltip ? <abbr title={feature.tooltip} data-tooltip={feature.tooltip} tabIndex={0}>{feature.label}</abbr> : <span>{feature.label}</span>}</li>)}</ul>
              {(plan.available || plan.limitedOffer) ? <button type="button" onClick={() => setDeployGuideOpen(true)} className={plan.limitedOffer ? "button button--pro deploy-cta" : "button button--dark deploy-cta"}><span>{plan.cta}</span><Arrow /></button> : <span className="button button--disabled" aria-disabled="true" title="Coming soon">{plan.cta}<small>Coming soon</small></span>}
            </article>
          ))}
        </div>
        <div className="pricing-notes"><span>▣ No credit card required</span><span>⬡ Bring your own keys</span><span>◈ Upgrade as your operations grow</span></div>
        <div className="enterprise-strip"><div><strong>Need dedicated infrastructure, SAML/SCIM, SLA or custom implementation?</strong><span>Bring AgentOS into your operating model with a tailored rollout.</span></div><a className="button button--ghost" href="#resources">Talk to Sales <Arrow /></a></div>
      </section>

      <section className="faq page-pad" id="faq" aria-labelledby="faq-title">
        <div className="faq-intro"><div className="section-kicker">FAQ</div><h2 id="faq-title">The details that<br />matter <span>before you deploy.</span></h2></div>
        <div className="faq-list">{faqs.slice(0, showAllFaqs ? faqs.length : 4).map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}{faqs.length > 4 && <button type="button" className="faq-expand" aria-expanded={showAllFaqs} onClick={() => setShowAllFaqs(!showAllFaqs)}>{showAllFaqs ? "Show fewer questions" : `Show all ${faqs.length} questions`} <Arrow /></button>}</div>
      </section>

      <section className="explore-ai page-pad" aria-labelledby="explore-ai-title">
        <style>{`@media (max-width: 760px) { .explore-ai-grid { grid-template-columns: repeat(5, 46px); justify-content: center; gap: 8px; } .explore-ai-card { min-height: 90px; gap: 5px; padding: 7px 0; border-color: transparent; background: transparent; box-shadow: none; font-size: 8px; } .explore-ai-card:hover { transform: none; border-color: transparent; background: transparent; box-shadow: none; } .explore-ai-icon { width: 40px; height: 40px; border-radius: 9px; } .explore-ai-icon svg { width: 25px; height: 25px; } }`}</style>
        <div className="explore-ai-intro">
          <div className="eyebrow">EXPLORE WITH AI</div>
          <h2 id="explore-ai-title">Understand AgentOS with your <span>favorite AI</span></h2>
          <p>Open AgentOS in your preferred AI assistant to explore its capabilities, deployment model, use cases, and how it compares with other agent platforms.</p>
        </div>
        <div className="explore-ai-grid">
          {AI_PROVIDERS.map((provider) => (
            <a
              className="explore-ai-card"
              href={provider.buildUrl(EXPLORE_AGENTOS_PROMPT)}
              key={provider.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore AgentOS with ${provider.name} (opens in a new tab)`}
            >
              <span className="explore-ai-icon">{provider.icon}</span>
              <span>{provider.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="final-cta page-pad">
        <div className="cta-panel">
          <div><h2>Ready to build your<br />AI workforce?</h2><p>Own the infrastructure, models and<br />workflow behind your digital team.</p></div>
          <button className="button footer-offer-cta deploy-cta" type="button" onClick={() => setDeployGuideOpen(true)}>Deploy AgentOS <Arrow /></button>
          <div className="cta-video" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/assets/footer-loop.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      <footer className="footer page-pad" id="resources">
        <div className="footer-brand"><Logo compact /><p>The AI workforce platform to build,<br />run, and scale digital workers.</p><div className="socials" aria-label="AgentOS social links"><a href="https://sapienx.app/" target="_blank" rel="noreferrer" aria-label="AgentOS website"><img className="social-icon" src="/assets/social/globe.svg" alt="" /></a><a href="https://t.me/sapienapp" target="_blank" rel="noreferrer" aria-label="AgentOS on Telegram"><img className="social-icon" src="/assets/social/telegram.svg" alt="" /></a><a href="https://x.com/sapienapp" target="_blank" rel="noreferrer" aria-label="AgentOS on X">𝕏</a><a href="https://www.linkedin.com/company/sapienxapp/" target="_blank" rel="noreferrer" aria-label="AgentOS on LinkedIn"><span className="social-linkedin">in</span></a><a href="https://github.com/SapienXai/AgentOS" target="_blank" rel="noreferrer" aria-label="AgentOS on GitHub"><img className="social-icon" src="/assets/social/github.svg" alt="" /></a></div></div>
        <div className="footer-links"><h4>Product</h4><a href="/product">Overview</a><a href="/features">Features</a><a href="/#pricing">Pricing</a><a href="/integrations">Integrations</a><a href="/changelog">Changelog</a></div>
        <div className="footer-links"><h4>Solutions</h4><a href="/solutions/solo-founders">Solo Founders</a><a href="/solutions/automation-agencies">Automation Agencies</a><a href="/solutions/startup-teams">Startup Teams</a><a href="/solutions/web3-communities">Web3 &amp; Communities</a></div>
        <div className="footer-links"><h4>Resources</h4><a href="/docs">Documentation</a><a href="/deployment-guide">Deployment Guide</a><a href="/openclaw-setup">OpenClaw Setup</a><a href="/templates">Agent Templates</a><a href="/faq">FAQ</a><a href="/support">Support</a></div>
        <div className="footer-links"><h4>Company</h4><a href="/about">About AgentOS</a><a href="https://github.com/SapienXai/AgentOS" target="_blank" rel="noreferrer">GitHub</a><a href="/contact">Contact</a><a href="/security">Security</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></div>
        <div className="footer-credit"><span>© 2026 AgentOS. All rights reserved.</span><strong>Designed and built by AI agents, powered by AgentOS.</strong><i>✦</i></div>
      </footer>
    </main>
  );
}
