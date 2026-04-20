import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gnanendra Naidu | AI Agent Interface Portfolio",
  description:
    "AI systems interface portfolio highlighting deployments, pipelines, and real-world engineering work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
