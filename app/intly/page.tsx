"use client";
import Image from "next/image";
import Link from "next/link";

export default function Intly() {
  return (
    <div className="flex flex-col min-h-screen min-w-full justify-center items-center">
      <Image src={"/images/IntlyLogo.svg"} alt="Logo Intly" width={100} height={100} />
      <p className="text-6xl md:text-8xl text-[#387ADF]">Intly</p>
      <p className="text-xl text-[#387ADF] mt-2">Votre journée, leurs aventures.</p>
      <p className="text-white mt-8 text-xl">Béta publique bientôt disponible</p>
      <footer className="absolute bottom-3 flex flex-col md:flex-row gap-6 flex-wrap items-center text-white">
        <Link className="text-gray-400" href="/intly/legal">
          Mentions légales
        </Link>
        <Link className="text-gray-400" href="/intly/privacy">
          Politique de confidentialité et de sécurité
        </Link>
        <Link className="text-gray-400" href="/intly/support">
          Support
        </Link>
      </footer>
    </div>
  );
}
