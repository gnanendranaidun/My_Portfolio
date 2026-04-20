"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { SystemOverviewSection } from "@/components/portfolio/SystemOverviewSection";
import { CapabilitiesSection } from "@/components/portfolio/CapabilitiesSection";
import { DeploymentsSection } from "@/components/portfolio/DeploymentsSection";
import { FieldOperationsSection } from "@/components/portfolio/FieldOperationsSection";
import { SystemLogsSection } from "@/components/portfolio/SystemLogsSection";
import { TransmitSignalSection } from "@/components/portfolio/TransmitSignalSection";

const navItems = [
  { label: "Signal Received", href: "#signal" },
  { label: "System Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Deployments", href: "#deployments" },
  { label: "Field Operations", href: "#field-operations" },
  { label: "System Logs", href: "#system-logs" },
  { label: "Transmit Signal", href: "#transmit" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-20 border-b border-red-500/30 bg-black/80 px-4 py-3 backdrop-blur"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-zinc-300 transition hover:border-red-400/60 hover:text-red-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      <main className="relative mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 sm:px-6 sm:py-8">
        <HeroSection />
        <SystemOverviewSection />
        <CapabilitiesSection />
        <DeploymentsSection />
        <FieldOperationsSection />
        <SystemLogsSection />
        <TransmitSignalSection />
      </main>
    </div>
  );
}
