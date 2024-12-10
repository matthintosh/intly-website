"use client";
import { Award, Palette, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Intly() {
  return (
    <div className="bg-white h-screen w-screen dark:bg-black flex flex-col">
      <AppBar />
      <div className="mt-14">
        <Introduction />
        <Features />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
}

const AppBar = () => {
  return (
    <div className="fixed w-full flex gap-3 p-2 h-14 bg-white items-center shadow flex-wrap dark:bg-black text-black dark:text-white z-20 dark:shadow-slate-900">
      <Image src={"/images/IntlyLogo.svg"} alt="Logo Intly" width={40} height={60} style={{ objectFit: "contain" }} />
      <p className="text-4xl text-[#387ADF]">Intly</p>
      <div className="hidden md:flex md:flex-1 "></div>
      <p>Fonctionnalités</p>
      <p>Comment ca marche ?</p>
      <button className={"bg-[#387ADF] text-white rounded-full p-2 "}>Télécharger</button>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="position-relative flex-1 flex p-2 flex-col gap-6 justify-center bg-intly items-center bg-no-repeat bg-[center_bottom_-5rem] py-64 bg-white dark:bg-gray-950">
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
      <p className="text-2xl md:text-4xl text-[#387ADF]">Transforme les photos de tes enfants en histoires magiques</p>
      <p className="text-xl text-[#676767] mt-2">
        Avec Intly, transforme les précieux moments de tes enfants en contes enchanteurs qu'ils aimeront lire encore et
        encore.
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex-1 flex flex-col gap-12 justify-center items-center bg-[#387ADF] text-white py-12 md:py-24 md:px-12">
      <p className="text-4xl">Fonctionnalités</p>
      <div className="md:flex p-2">
        <div className="flex flex-1 flex-col gap-2 p-2 items-center">
          <Award size={36} />
          <p className="text-2xl">Intuitif</p>
          <p className="text-xl">Sélectionne simplement les photos que tu souhaite pour ton histoire</p>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-2 items-center">
          <ShieldCheck size={36} />
          <p className="text-2xl">Sécurisé</p>
          <p className="text-xl">Tes photos sont protégées et personne d'autre que toi peut y avoir accès</p>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-2 items-center">
          <Palette size={36} />
          <p className="text-2xl">Personnalisable</p>
          <p className="text-xl">
            Tu peux choisir un thème à ton histoire afin de rendre cette dernière encore plus passionnante
          </p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="flex-1 flex flex-col gap-12 justify-center items-center py-12 md:py-24 bg-white dark:bg-gray-950">
      {" "}
      <p className="text-4xl text-center">Comment ca marche ?</p>
      <div className="md:flex p-2">
        <div className="flex-1 flex flex-col gap-2 p-2 items-center">
          <p className="text-2xl bg-black rounded-full text-white h-12 w-12 flex items-center justify-center dark:bg-white dark:text-black">
            1
          </p>
          <p className="text-2xl">Télécharge</p>
          <p className="text-xl">Ajoute les photos que tu souhaite include dans ton histoire</p>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-2 items-center">
          <p className="text-2xl bg-black rounded-full text-white h-12 w-12 flex items-center justify-center dark:bg-white dark:text-black">
            2
          </p>
          <p className="text-2xl">Personnalise</p>
          <p className="text-xl">Sélectionne un thème afin de donner vie à ton récit (optionnel)</p>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-2 items-center">
          <p className="text-2xl bg-black rounded-full text-white h-12 w-12 flex items-center justify-center dark:bg-white dark:text-black">
            3
          </p>
          <p className="text-2xl">Lis</p>
          <p className="text-xl">Partage un moment unique en lisant ton histoire avec ton (tes) enfant(s)</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex-1 flex flex-col md:flex-row gap-6 flex-wrap justify-center text-white">
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
  );
};
