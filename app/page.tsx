"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">→</span>;

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
  { icon: "◈", title: "Intelligent by Design", copy: "Purpose-built AI workers for real business outcomes." },
  { icon: "◇", title: "Workforce at Scale", copy: "Deploy thousands of digital workers in minutes." },
  { icon: "⌾", title: "Secure by Default", copy: "Enterprise-grade security and data privacy." },
  { icon: "▥", title: "Measurable Impact", copy: "Track performance and ROI in real time." },
];

const workers = [
  { name: "Operator", team: "Operations", copy: "Keeps everything running smoothly.", icon: "▦", cls: "operator", image: "/assets/workers/cutouts/operator.png", bio: "The always-on coordinator that routes work, monitors execution, and keeps your operation moving.", specialties: ["Workflow orchestration", "Task routing", "SLA monitoring"], skills: ["Prioritization", "Tool calling", "Escalation logic"], metrics: [["99.9%", "Workflow uptime"], ["24/7", "Active coverage"], ["1.4s", "Avg. response"]] },
  { name: "Analyst", team: "Analytics", copy: "Turns data into decisions.", icon: "◎", cls: "analyst", image: "/assets/workers/cutouts/analyst.png", bio: "A sharp research partner that translates raw data into clear signals, opportunities, and decisions.", specialties: ["Market intelligence", "Data synthesis", "Executive briefs"], skills: ["Deep research", "SQL analysis", "Insight writing"], metrics: [["82%", "Faster insight"], ["12K+", "Sources reviewed"], ["Daily", "Signal reports"]] },
  { name: "Builder", team: "Engineering", copy: "Builds, automates and scales.", icon: "⌁", cls: "builder", image: "/assets/workers/cutouts/builder.png", bio: "The hands-on maker for launching automations, connecting systems, and turning concepts into production.", specialties: ["Automation design", "System integration", "Rapid prototyping"], skills: ["API workflows", "QA checks", "Deployment"], metrics: [["40%", "Faster delivery"], ["120+", "Flows deployed"], ["8 min", "Avg. setup"]] },
  { name: "Guardian", team: "Security", copy: "Protects what matters most.", icon: "⬡", cls: "guardian", image: "/assets/workers/cutouts/guardian.png", bio: "Your vigilant security partner, continuously checking access, data movement, and operational risk.", specialties: ["Access governance", "Risk detection", "Audit readiness"], skills: ["Policy checks", "Threat triage", "Secure handoffs"], metrics: [["0", "Critical gaps"], ["24/7", "Risk monitoring"], ["100%", "Audit trail"]] },
];

const plans = [
  { name: "Free", description: "Build your first AI team.", monthly: 0, yearly: 0, suffix: "forever", note: "Core agent builder and BYOK included.", railwayCredit: true, available: true, features: [{ label: "1 Workspace" }, { label: "3 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "3 Connected Accounts" }, { label: "1 Concurrent Operation", tooltip: "One actively running agent operation at a time." }, { label: "7-Day Activity History" }], cta: "Deploy Free", href: "https://railway.com/deploy/agentos-1?referralCode=w43Gta&utm_medium=integration&utm_source=template&utm_campaign=generic" },
  { name: "Builder", description: "For solo founders building an AI workforce.", monthly: 19, yearly: 16, suffix: "/mo", available: false, features: [{ label: "3 Workspaces" }, { label: "10 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "15 Connected Accounts" }, { label: "3 Concurrent Operations", tooltip: "Operations that can run simultaneously across your workforce." }, { label: "25 Scheduled Automations" }, { label: "30-Day Activity History" }], cta: "Start Building" },
  { name: "Pro", description: "For teams running agents in production.", monthly: 79, yearly: 66, suffix: "/mo", available: false, limitedOffer: true, href: "https://railway.com/deploy/agentos-1?referralCode=w43Gta&utm_medium=integration&utm_source=template&utm_campaign=generic", features: [{ label: "10 Workspaces" }, { label: "50 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "5 Operator Seats" }, { label: "10 Concurrent Operations", tooltip: "Operations that can run simultaneously across your workforce." }, { label: "100 Scheduled Automations" }, { label: "Approvals, Analytics and Cost Controls" }, { label: "90-Day Activity History" }], cta: "Claim Free Pro", popular: true },
  { name: "Scale", description: "For agencies and companies operating multiple AI teams.", monthly: 199, yearly: 166, suffix: "/mo", available: false, features: [{ label: "25 Workspaces" }, { label: "200 Active Digital Workers", tooltip: "An AI worker configured to pursue goals, use tools and complete work." }, { label: "20 Operator Seats" }, { label: "30 Concurrent Operations", tooltip: "Operations that can run simultaneously across your workforce." }, { label: "500 Scheduled Automations" }, { label: "RBAC, Audit Logs and Multi-Workspace Controls" }, { label: "1-Year Activity History" }], cta: "Start Scaling" },
];

export default function Home() {
  const [yearly, setYearly] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<typeof workers[number] | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [proOfferSeconds, setProOfferSeconds] = useState(300);

  useEffect(() => {
    const storageKey = "agentos-pro-launch-offer-ends-at-v2";
    const storedValue = window.localStorage.getItem(storageKey);
    const offerEnd = storedValue === null ? Date.now() + 300_000 : Number(storedValue);
    if (storedValue === null) window.localStorage.setItem(storageKey, String(offerEnd));
    const updateOffer = () => setProOfferSeconds(Math.max(0, Math.ceil((offerEnd - Date.now()) / 1000)));
    updateOffer();
    const interval = window.setInterval(updateOffer, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  const proOfferTime = `${String(Math.floor(proOfferSeconds / 60)).padStart(2, "0")}:${String(proOfferSeconds % 60).padStart(2, "0")}`;

  return (
    <main id="top">
      <header className="nav-shell">
        <Logo animated />
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
        </nav>
        <a className="button button--small nav-cta" href="#pricing">Start Free <Arrow /></a>
        <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
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
          <p>Deploy digital workers that think, act,<br className="desktop-only" /> and deliver—at scale.</p>
          <div className="hero-actions">
            {proOfferSeconds > 0 ? <a className="button button--pro hero-offer-cta" href="#pricing"><time className="button-countdown" dateTime={`PT${proOfferSeconds}S`}>{proOfferTime}</time><span>Claim Free Pro</span><Arrow /></a> : <a className="button" href="#pricing">Start Free <Arrow /></a>}
            <button className="button button--ghost" type="button" onClick={() => setDemoOpen(true)}><b className="play">▶</b> Watch Demo</button>
          </div>
          <div className="stats" aria-label="Platform statistics">
            <div><i>♧</i><span><strong>10K+</strong><small>Active Agents</small></span></div>
            <div><i>◉</i><span><strong>1M+</strong><small>Tasks Completed</small></span></div>
            <div><i>⬡</i><span><strong>99.9%</strong><small>Uptime</small></span></div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span /></div>
      </section>

      <section className="trusted page-pad" aria-label="Trusted teams">
        <p>TRUSTED BY INNOVATIVE TEAMS</p>
        <div className="logo-row">
          <span><b>✣</b> OrdinalMaxi</span>
          <span><b>Ⓒ</b> CoinCollect</span>
          <span className="sapien">SapienX</span>
          <span><b>◎</b> echo</span>
          <span><b>◉</b> Orbital Labs</span>
        </div>
      </section>

      <section className="feature-strip page-pad" id="solutions">
        <div className="feature-panel">
          {features.map((feature) => (
            <article key={feature.title}>
              <i>{feature.icon}</i>
              <div><h3>{feature.title}</h3><p>{feature.copy}</p></div>
            </article>
          ))}
        </div>
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

      <section className="product page-pad" id="product">
        <div className="product-panel">
          <div className="product-copy">
            <div className="eyebrow">SEE IT IN ACTION</div>
            <h2>One platform.<br className="product-desktop-line-break" /> Every agent.<br /><span style={{ color: "var(--gold-soft)" }}>Total control.</span></h2>
            <p>Manage context, tools, accounts, models<span className="mobile-line-break"><br /></span> and tasks in a single, powerful workspace.</p>
            <button type="button" className="button button--ghost" onClick={() => setDemoOpen(true)}><b className="play gold">▶</b> Watch Full Demo <Arrow /></button>
          </div>
          <div className="dashboard" id="dashboard" aria-label="AgentOS mission control preview">
            <aside>
              <Logo compact />
              <small>×</small>
              <div className="side-active">◧ <span>Mission Control</span></div>
              <div>◉ <span>Dashboard</span></div>
              <b>OPERATIONS</b>
              <div>♙ <span>Agents</span></div>
              <div>✓ <span>Tasks</span></div>
              <div>□ <span>Files</span></div>
              <div>▣ <span>Accounts</span></div>
              <div>◇ <span>Models</span></div>
              <div>⌘ <span>Integrations</span></div>
              <b>SYSTEM</b>
              <div>⚙ <span>Settings</span></div>
            </aside>
            <div className="mission">
              <div className="mission-head">
                <div><span className="app-icon">⌘</span><small>Mission Control</small><p>What should your agents work on?</p></div>
                <div className="mini-tabs"><b>Outreach</b><span>Research</span><span>Content</span><span>Analysis</span></div>
                <div className="mission-actions"><span>◎ Focus</span><button>↗ Create Task</button></div>
              </div>
              <div className="agent-list">
                <h4>Active Agents</h4>
                {["Outreach Guy", "Product Hunt Strategist", "Research Analyst"].map((agent, index) => (
                  <div className="agent-row" key={agent}>
                    <i>{index === 1 ? "◉" : "◎"}</i><span><b>{agent}</b><small>{index === 2 ? "Idle" : "Running"}</small></span><em>⌁</em>
                  </div>
                ))}
              </div>
            </div>
            <div className="task-view">
              <div className="task-top"><span>◷ Task · 1</span><small>◉ Results　◎</small></div>
              <h4>Outreach to design agencies</h4>
              <p>Find and email design agencies about AgentOS partnership.</p>
              <b className="accepted">✓ ACCEPTED　▷</b>
              <small>REVIEW ACCEPTED</small>
              <div className="chips"><span>▱ Source</span><span>▣ Sessions 5</span><span>↻ Turns 6</span><span>◫ Tokens 12K</span><span>◉ Runs 10</span></div>
              <small>LATEST RESULT</small>
              <p>6 new opportunities added to CRM.</p>
              <div className="follow">Ask a follow-up... <b>›</b></div>
            </div>
          </div>
        </div>
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
        <div className="pricing-grid">
          {[...plans].sort((first, second) => Number(Boolean(second.popular)) - Number(Boolean(first.popular))).map((plan) => (
            <article className={`price-card ${plan.popular ? "popular" : ""} ${plan.limitedOffer && proOfferSeconds > 0 ? "limited-offer" : ""} ${!(plan.available || (plan.limitedOffer && proOfferSeconds > 0)) ? "is-unavailable" : ""}`} key={plan.name}>
              {plan.popular && <div className={`popular-label ${plan.limitedOffer && proOfferSeconds > 0 ? "offer-label" : ""}`}>{plan.limitedOffer && proOfferSeconds > 0 ? <><b>Free Forever</b><small>No card required</small></> : "Most Popular"}</div>}
              <div className="plan-header"><h3>{plan.name}</h3><p>{plan.description}</p></div>
              {plan.limitedOffer && proOfferSeconds > 0 ? <><div className="price price--offer"><strong>FREE</strong><span>for your first Pro launch</span><span className="old-price"><s>$79</s><small>/month</small></span></div><div className="pro-countdown"><span>Launch offer ends in</span><time dateTime={`PT${proOfferSeconds}S`}>{proOfferTime}</time></div></> : <><div className="price"><sup>$</sup><strong>{yearly ? plan.yearly : plan.monthly}</strong>{plan.suffix === "/mo" ? <span>/month</span> : <span>forever</span>}</div><small className="price-billing">{plan.suffix === "forever" ? "No card required" : yearly ? "Billed annually" : "Billed monthly"}</small></>}
              {plan.note && <p className="plan-note">✦ {plan.note}</p>}
              {plan.railwayCredit && <div className="railway-credit"><b>+$5</b><span>Railway hosting credit</span><abbr title="Included credit for Railway hosting." data-tooltip="Included credit for Railway hosting." tabIndex={0}>i</abbr></div>}
              <ul>{plan.features.map((feature) => <li key={feature.label}>✓ {feature.tooltip ? <abbr title={feature.tooltip} data-tooltip={feature.tooltip} tabIndex={0}>{feature.label}</abbr> : <span>{feature.label}</span>}</li>)}</ul>
              {(plan.available || (plan.limitedOffer && proOfferSeconds > 0)) ? <a href={plan.href || "#top"} target={plan.href ? "_blank" : undefined} rel={plan.href ? "noreferrer" : undefined} className={plan.limitedOffer ? "button button--pro" : "button button--dark"}>{plan.limitedOffer && proOfferSeconds > 0 && <time className="button-countdown" dateTime={`PT${proOfferSeconds}S`}>{proOfferTime}</time>}<span>{plan.cta}</span><Arrow /></a> : <span className="button button--disabled" aria-disabled="true" title="Coming soon">{plan.cta}<small>Coming soon</small></span>}
            </article>
          ))}
        </div>
        <div className="pricing-notes"><span>▣ No credit card required</span><span>⬡ Bring your own keys</span><span>◈ Upgrade as your operations grow</span></div>
        <div className="enterprise-strip"><div><strong>Need dedicated infrastructure, SAML/SCIM, SLA or custom implementation?</strong><span>Bring AgentOS into your operating model with a tailored rollout.</span></div><a className="button button--ghost" href="#resources">Talk to Sales <Arrow /></a></div>
      </section>

      <section className="final-cta page-pad">
        <div className="cta-panel">
          <div><h2>Ready to build your<br />AI workforce?</h2><p>Join thousands running agents<br />like a company.</p></div>
          {proOfferSeconds > 0 ? <a className="button button--pro footer-offer-cta" href="#pricing"><time className="button-countdown" dateTime={`PT${proOfferSeconds}S`}>{proOfferTime}</time><span>Claim Free Pro</span><Arrow /></a> : <a className="button" href="#pricing">Start Free Now <Arrow /></a>}
          <div className="cta-video" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/assets/footer-loop.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      <footer className="footer page-pad" id="resources">
        <div className="footer-brand"><Logo compact /><p>The AI workforce platform to build,<br />run, and scale digital workers.</p><div className="socials" aria-label="SapienX social links"><a href="https://sapienx.app/" target="_blank" rel="noreferrer" aria-label="SapienX website"><span className="social-globe">◎</span></a><a href="https://t.me/sapienapp" target="_blank" rel="noreferrer" aria-label="SapienX on Telegram"><span className="social-telegram">➤</span></a><a href="https://x.com/sapienapp" target="_blank" rel="noreferrer" aria-label="SapienX on X">𝕏</a><a href="https://www.linkedin.com/company/sapienxapp/" target="_blank" rel="noreferrer" aria-label="SapienX on LinkedIn"><span className="social-linkedin">in</span></a></div></div>
        <div className="footer-links"><h4>Product</h4><a href="#top">Overview</a><a href="#solutions">Features</a><a href="#product">Integrations</a><a href="#top">Updates</a></div>
        <div className="footer-links"><h4>Solutions</h4><a href="#solutions">By Use Case</a><a href="#solutions">By Industry</a><a href="#top">Templates</a><a href="#top">Customers</a></div>
        <div className="footer-links"><h4>Resources</h4><a href="#top">Docs</a><a href="#top">Guides</a><a href="#top">Blog</a><a href="#top">Help Center</a></div>
        <div className="footer-links"><h4>Company</h4><a href="#company">About Us</a><a href="#company">Careers</a><a href="#company">Contact</a><a href="#company">Privacy</a></div>
        <div className="footer-credit"><span>Designed and built by</span><strong>AI agents, powered by AgentOS.</strong><i>✦</i></div>
      </footer>
    </main>
  );
}
