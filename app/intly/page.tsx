"use client";

import {
  Camera,
  ShieldCheck,
  Palette,
  Upload,
  Wand2,
  BookOpen,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Intly() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] dark:bg-[#0C0A1D] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0C0A1D]/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/images/IntlyLogo.svg"
              alt="Logo Intly"
              width={36}
              height={36}
            />
            <span className="text-2xl font-bold gradient-text">Intly</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-intly-purple transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-intly-purple transition-colors"
            >
              Comment ça marche
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
            >
              <Sparkles size={16} />
              Télécharger
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0C0A1D]/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 dark:text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              Fonctionnalités
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 dark:text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              Comment ça marche
            </a>
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-bg"
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles size={16} />
              Télécharger
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse-soft" />
        <div
          className="absolute top-40 right-0 w-80 h-80 bg-pink-300/30 dark:bg-pink-900/20 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-amber-200/30 dark:bg-amber-900/10 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8">
              <Sparkles size={14} />
              Propulsé par l&apos;Intelligence Artificielle
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme les photos de tes enfants en{" "}
              <span className="gradient-text">histoires magiques</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Avec Intly, transforme les précieux moments de tes enfants en
              contes enchanteurs qu&apos;ils aimeront lire encore et encore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/fr/app/intly/id6736653996"
                className="transform hover:scale-105 transition-transform"
              >
                <Image
                  src="/images/AppStoreDownload.svg"
                  alt="Télécharger sur l'App Store"
                  width={180}
                  height={54}
                  style={{ objectFit: "contain" }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.geniuscodecraft.intly&pcampaignid=web_share"
                className="transform hover:scale-105 transition-transform"
              >
                <Image
                  src="/images/GooglePlayDownload.png"
                  alt="Télécharger sur Google Play"
                  width={180}
                  height={54}
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-[4rem] blur-2xl" />

              <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-purple-500/10 border border-gray-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-black">
                  <Image
                    src="/images/Intro.png"
                    alt="Intly - Liste des histoires"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "Intuitif",
      description:
        "Sélectionne simplement les photos que tu souhaites pour créer ton histoire en quelques secondes.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: ShieldCheck,
      title: "Sécurisé",
      description:
        "Tes photos sont protégées et personne d'autre que toi ne peut y avoir accès. Ta vie privée est notre priorité.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Palette,
      title: "Personnalisable",
      description:
        "Choisis un thème pour ton histoire afin de la rendre encore plus passionnante et unique.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tout ce dont tu as besoin
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Intly combine simplicité, sécurité et créativité pour offrir une
            expérience magique à toute la famille.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-white/5 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg`}
              >
                <feature.icon size={24} />
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Upload,
      title: "Télécharge",
      description:
        "Ajoute les photos que tu souhaites inclure dans ton histoire.",
    },
    {
      number: "2",
      icon: Wand2,
      title: "Personnalise",
      description:
        "Sélectionne un thème afin de donner vie à ton récit (optionnel).",
    },
    {
      number: "3",
      icon: BookOpen,
      title: "Lis",
      description:
        "Partage un moment unique en lisant ton histoire avec ton (tes) enfant(s).",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Crée une histoire personnalisée en seulement 3 étapes simples.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 dark:from-purple-700 dark:via-pink-700 dark:to-amber-700" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white text-2xl font-bold mb-6 shadow-lg shadow-purple-500/25 z-10">
                {step.number}
              </div>

              <div className="flex justify-center mb-4">
                <step.icon
                  size={32}
                  className="text-gray-700 dark:text-gray-300"
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative animate-float">
              <div className="absolute -inset-8 bg-gradient-to-r from-pink-400/20 to-amber-400/20 rounded-[4rem] blur-2xl" />
              <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-pink-500/10 border border-gray-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-black">
                  <Image
                    src="/images/Intro2.png"
                    alt="Intly - Lecture d'une histoire"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Des histoires qui prennent{" "}
              <span className="gradient-text">vie</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Chaque histoire est unique, générée par l&apos;intelligence
              artificielle à partir des photos de tes enfants. Regarde-les
              devenir les héros de leurs propres aventures.
            </p>

            <div className="space-y-4">
              {[
                "Histoires personnalisées avec les photos de tes enfants",
                "Plusieurs thèmes disponibles pour varier les aventures",
                "Interface simple adaptée à toute la famille",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-left">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="download" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="mx-auto mb-6 text-white/80" size={40} />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à créer des histoires magiques ?
        </h2>

        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Télécharge Intly gratuitement et commence à transformer les photos de
          tes enfants en aventures extraordinaires.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/fr/app/intly/id6736653996"
            className="transform hover:scale-105 transition-transform"
          >
            <Image
              src="/images/AppStoreDownload.svg"
              alt="Télécharger sur l'App Store"
              width={200}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=io.geniuscodecraft.intly&pcampaignid=web_share"
            className="transform hover:scale-105 transition-transform"
          >
            <Image
              src="/images/GooglePlayDownload.png"
              alt="Télécharger sur Google Play"
              width={200}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0A0818] border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/images/IntlyLogo.svg"
              alt="Logo Intly"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold gradient-text">Intly</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/intly/legal"
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/intly/privacy"
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/intly/support"
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Support
            </Link>
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Intly
          </p>
        </div>
      </div>
    </footer>
  );
};
