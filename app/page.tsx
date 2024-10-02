"use client";
import Image from "next/image";
import { PORTFOLIO_WEBSITE } from "./constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-full justify-center items-center p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src={"/images/GeniusCodeCraftLogo.svg"} alt="Logo GeniusCodeCraft" width={300} height={300} />
      <p className="text-2xl sm:text-5xl md:text-8xl bg-gradient-to-br from-[#EF32D9] to-[#00D3CF] inline-block text-transparent bg-clip-text">
        GeniusCodeCraft
      </p>
      <button
        onClick={() => window.open(PORTFOLIO_WEBSITE, "_blank")}
        className="border-solid  border-2 border-white rounded-full p-4 mt-16 hover:scale-95 text-white"
      >
        Connect
      </button>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
