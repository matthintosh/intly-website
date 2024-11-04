"use client";
import Image from "next/image";
import Link from "next/link";

export default function Intly() {
  return (
    <div className="bg-intly bg-no-repeat bg-[center_bottom_-5rem]">
      <div className="flex flex-col min-h-screen min-w-full justify-center items-center backdrop-brightness-[0.25]">
        <Image src={"/images/IntlyLogo.svg"} alt="Logo Intly" width={100} height={100} />
        <p className="text-6xl md:text-8xl text-[#387ADF]">Intly</p>
        <p className="text-xl text-[#387ADF] mt-2">Votre journée, leurs aventures.</p>
        <div className="md:flex gap-6 mt-6 flex-wrap">
          <a href="https://apps.apple.com/fr/app/intly/id6736653996">
            <Image
              src={"/images/AppStoreDownload.svg"}
              alt="app store download"
              style={{ objectFit: "contain" }}
              width={200}
              height={50}
              className="mb-6 md:m-0"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=io.geniuscodecraft.intly&pcampaignid=web_share">
            <Image
              src={"/images/GooglePlayDownload.png"}
              alt="app store download"
              style={{ objectFit: "contain" }}
              width={200}
              height={50}
            />
          </a>
        </div>
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
    </div>
  );
}
