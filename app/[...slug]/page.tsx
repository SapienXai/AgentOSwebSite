import type { Metadata } from "next";
import Subpage from "../components/subpage";

const titles: Record<string, [string, string]> = {
  product: ["AgentOS Product — Build and Operate Digital Workers", "Build, manage and supervise a digital workforce from one operational workspace."],
  features: ["AgentOS Features — Build and Operate Digital Workers", "Everything your digital workforce needs to operate with clear context and control."],
  integrations: ["AgentOS Integrations — Connect Your Workforce", "Explore the verified tools, accounts and model providers available to AgentOS."],
  changelog: ["AgentOS Changelog", "Verified product updates and release history for AgentOS."],
  docs: ["AgentOS Documentation — Deploy and Operate AgentOS", "A practical entry point for deploying and operating AgentOS."],
  "deployment-guide": ["AgentOS Deployment Guide", "Verified deployment guidance for AgentOS on Railway."],
  "openclaw-setup": ["AgentOS OpenClaw Setup", "Understand the private OpenClaw runtime that underpins AgentOS."],
  templates: ["AgentOS Worker Templates", "Explore starter roles for your digital workforce."],
  faq: ["AgentOS FAQ", "Answers to common questions about AgentOS, deployment, data and control."],
  support: ["AgentOS Support", "Find documentation, open-source issue reporting and support paths."],
  about: ["About AgentOS", "AgentOS is building the operating system for digital workforces."],
  contact: ["Contact AgentOS", "Talk to AgentOS about deployment and product support."],
  security: ["AgentOS Security — Your Infrastructure, Your Control", "How AgentOS keeps infrastructure ownership and human control at the center."],
  privacy: ["AgentOS Privacy Policy", "Draft privacy policy structure for AgentOS."],
  terms: ["AgentOS Terms of Service", "Draft terms of service structure for AgentOS."],
  "solutions/solo-founders": ["AgentOS for Solo Founders — A Reviewable Digital Workforce", "Organize research, planning, content and follow-up while keeping founder review in the operating loop."],
  "solutions/automation-agencies": ["AgentOS for Automation Agencies", "Organize client-specific workspaces, recurring automation work and delivery review."],
  "solutions/startup-teams": ["AgentOS for Startup Teams", "Structure recurring research, growth, product and support operations in a shared workspace."],
  "solutions/web3-communities": ["AgentOS for Community Operations", "Organize community reporting, research, support preparation and human-approved public actions."],
};

export function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const key = slug.join("/");
    const [title, description] = titles[key] ?? titles[slug[0]] ?? ["AgentOS", "Build and operate your digital workforce."];
    return { title, description, alternates: { canonical: `/${key}` }, openGraph: { title, description }, twitter: { card: "summary_large_image", title, description } };
  });
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <Subpage slug={slug.join("/")} />;
}
