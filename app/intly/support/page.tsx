/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Legal() {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={"/images/IntlyLogo.svg"}
        className="self-center"
        alt="Logo GeniusCodeCraft"
        width={128}
        height={128}
      />
      <p className="text-5xl">Support et assistance</p>
      <p className="text-2xl self-start font-bold">Une question ? un problème avec l'application ?</p>
      <p>
        Pour toute question ou assistance dans l'utilisation de l'application Intly, merci d'envoyer un email à{" "}
        <strong>matthieu@geniuscodecraft.io</strong>
      </p>
    </div>
  );
}
