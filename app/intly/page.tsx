"use client";
import Image from "next/image";

export default function Intly() {
  return (
    <div className="flex flex-col min-h-screen min-w-full justify-center items-center p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src={"/images/IntlyLogo.svg"} alt="Logo Intly" width={100} height={100} />
      <p className="text-6xl md:text-8xl text-[#387ADF]">Intly</p>
      <p className="text-xl  text-[#387ADF]">Votre journée, leurs aventures.</p>
      <p className="text-white mt-8 text-xl">Béta publique bientôt disponible</p>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
