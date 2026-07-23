import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentOS — Build and Run Your AI Workforce",
  description: "Create digital workers, connect tools and channels, assign real work, and manage your entire AI workforce from one operating system.",
  metadataBase: new URL("https://agentos-ai-workforce.akgulkazim.chatgpt.site"),
  icons: {
    icon: "/assets/agentlogo.webp",
    shortcut: "/assets/agentlogo.webp",
    apple: "/assets/agentlogo.webp",
  },
  openGraph: {
    title: "AgentOS — Build and Run Your AI Workforce",
    description: "Create digital workers, connect tools and channels, assign real work, and manage your entire AI workforce from one operating system.",
    type: "website",
    images: [{ url: "/assets/socialimage.jpeg", width: 1475, height: 913, alt: "AgentOS — Build and Run Your AI Workforce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentOS — Build and Run Your AI Workforce",
    description: "Create digital workers, connect tools and channels, assign real work, and manage your entire AI workforce from one operating system.",
    images: ["/assets/socialimage.jpeg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
