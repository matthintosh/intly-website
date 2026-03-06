"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpen, Briefcase, Rss } from "lucide-react";
import { PORTFOLIO_WEBSITE } from "./constants";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen min-w-full font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/20 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00D3CF]/20 blur-[120px] animate-[pulse_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#EC4899]/10 blur-[100px] animate-[pulse_8s_ease-in-out_infinite_4s]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20">
        {/* Logo */}
        <div className="mb-6 animate-[fadeIn_0.8s_ease-out]">
          <Image
            src="/images/GeniusCodeCraftLogo.svg"
            alt="GeniusCodeCraft"
            width={80}
            height={80}
            className="drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          />
        </div>

        {/* Company name */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-[#EF32D9] via-[#8B5CF6] to-[#00D3CF] inline-block text-transparent bg-clip-text animate-[fadeIn_1s_ease-out]">
          GeniusCodeCraft
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-base sm:text-lg text-white/50 tracking-wide animate-[fadeIn_1.2s_ease-out] text-center max-w-md">
          Imagine, create, build and scale your ideas.
        </p>

        {/* Divider */}
        <div className="mt-12 mb-10 w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-3xl animate-[fadeIn_1.4s_ease-out]">
          {/* Intly App card */}
          <a
            href="/intly"
            className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] shadow-lg shadow-[#8B5CF6]/20">
                <BookOpen size={20} className="text-white" />
              </div>
              <ArrowUpRight
                size={18}
                className="text-white/30 transition-all duration-300 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Intly</h2>
              <p className="mt-1 text-sm text-white/40 leading-relaxed">
                Turn your children&apos;s photos into magical stories.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/30">Available on iOS &amp; Android</span>
            </div>
          </a>

          {/* Pulse card */}
          <div
            className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#F59E0B]/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EF4444] shadow-lg shadow-[#F59E0B]/20">
                <Rss size={20} className="text-white" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/40">
                Coming soon
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Pulse</h2>
              <p className="mt-1 text-sm text-white/40 leading-relaxed">
                A clean, open-source RSS reader for iOS.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F59E0B]/60" />
              <span className="text-xs text-white/30">iOS &middot; Open Source</span>
            </div>
          </div>

          {/* Portfolio card */}
          <a
            href={PORTFOLIO_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D3CF]/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(0,211,207,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D3CF] to-[#8B5CF6] shadow-lg shadow-[#00D3CF]/20">
                <Briefcase size={20} className="text-white" />
              </div>
              <ArrowUpRight
                size={18}
                className="text-white/30 transition-all duration-300 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Portfolio</h2>
              <p className="mt-1 text-sm text-white/40 leading-relaxed">
                Explore my work, projects, and professional journey.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight size={12} className="text-white/30" />
              <span className="text-xs text-white/30">matthintosh.github.io</span>
            </div>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-center pb-8">
        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} GeniusCodeCraft. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
