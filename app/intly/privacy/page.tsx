/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Privacy() {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={"/images/IntlyLogo.svg"}
        className="self-center"
        alt="Logo GeniusCodeCraft"
        width={128}
        height={128}
      />
      <p className="text-5xl">Politique de confidentialité et de sécurité</p>
      <p className="text-2xl self-start font-bold">1. Introduction</p>
      <p>
        Bienvenue sur Intly. Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données
        personnelles. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les
        utilisons et comment nous assurons leur protection. En utilisant notre application, vous acceptez les pratiques
        décrites dans cette politique.
      </p>
      <p className="text-2xl self-start font-bold">2. Collecte des informations</p>
      <p className="text-xl self-start font-bold">2.1. Informations que nous collectons</p>
      <p>Nous collectons différentes informations lorsque vous utilisez notre application, notamment :</p>
      <ul className="list-disc pl-2">
        <li>
          <strong>Informations personnelles :</strong> Adresse e-mail, prénom(s) ou surnom(s) de(vos) enfant(s) fournies
          lors de l'inscription ou de l'utilisation de services spécifiques.
        </li>
        <li>
          <strong>Données d&apos;utilisation :</strong> Informations sur la façon dont vous interagissez avec
          l&apos;application (actions effectuées).
        </li>
        <li>
          <strong>Données techniques :</strong> Type d’appareil, système d’exploitation, identifiants uniques, adresse
          IP.
        </li>
      </ul>
      <p className="text-xl self-start font-bold">2.2. Méthodes de collecte</p>
      <p>Nous recueillons des informations de différentes manières :</p>
      <ul className="list-disc pl-2">
        <li>
          <strong>Directement auprès de vous lorsque vous créez un compte ou utilisez des services.</strong>
        </li>
        <li>
          <strong>Automatiquement</strong> par le biais de cookies, balises web, et technologies similaires.
        </li>
      </ul>
      <p className="text-2xl self-start font-bold">3. Utilisation des informations</p>
      <p>Nous utilisons les données collectées pour :</p>
      <ul className="list-disc pl-2">
        <li>
          <strong>Fournir et améliorer nos services :</strong> Améliorer l'expérience utilisateur, fournir des
          fonctionnalités personnalisées, corriger des bugs, etc.
        </li>
        <li>
          <strong>Communiquer avec vous :</strong> Notifications importantes, mises à jour, réponses à vos questions.
        </li>
        <li>
          <strong>Analyser l&apos;utilisation :</strong> Pour mieux comprendre comment notre application est utilisée et
          identifier les tendances.
        </li>
        <li>
          <strong>Garantir la sécurité :</strong> Détecter et prévenir toute activité suspecte ou frauduleuse.
        </li>
        <li>
          <strong>Respecter nos obligations légales :</strong> Conformité avec les lois en vigueur.
        </li>
      </ul>
      <p className="text-xl self-start font-bold">4. Partage des informations</p>
      <p>
        Nous ne vendons, ni ne louons vos informations personnelles à des tiers. Nous partageons vos données dans les
        cas suivants :
      </p>
      <ul className="list-disc pl-2">
        <li>
          <strong>Fournisseurs de services tiers :</strong> Nous pouvons partager des informations avec des partenaires
          de confiance qui fournissent des services en notre nom (hébergement, analyse, assistance, etc.).
        </li>
        <li>
          <strong>Exigences légales :</strong> Si nécessaire pour se conformer à une obligation légale ou répondre à une
          demande gouvernementale.
        </li>
        <li>
          <strong>Sécurité et protection :</strong> Pour protéger nos droits, la sécurité de nos utilisateurs ou pour
          enquêter sur une activité frauduleuse.
        </li>
      </ul>
      <p className="text-xl self-start font-bold">5. Sécurité des données</p>
      <p>
        Nous mettons en place des mesures de sécurité techniques, administratives et physiques pour protéger vos données
        contre tout accès non autorisé, modification, divulgation ou destruction. Parmi ces mesures figurent :
      </p>
      <ul className="list-disc pl-2">
        <li>
          <strong>Chiffrement des données :</strong> Nous utilisons le chiffrement (SSL/TLS) pour protéger les
          transmissions de données sensibles.
        </li>
        <li>
          <strong>Contrôle d&apos;accès :</strong> Les données sont accessibles uniquement au personnel autorisé avec
          des niveaux d&apos;accès appropriés.
        </li>
        <li>
          <strong>Tests de sécurité réguliers :</strong> Nous procédons à des audits et des tests réguliers de notre
          infrastructure pour identifier et corriger les vulnérabilités potentielles.
        </li>
        <p>
          Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
          Bien que nous nous efforcions de protéger vos informations, nous ne pouvons garantir une sécurité absolue.
        </p>
      </ul>
      <p className="text-xl self-start font-bold">6. Vos droits</p>
      <p>
        Conformément aux lois en vigueur (telles que le RGPD pour les utilisateurs en Europe), vous avez des droits sur
        vos données personnelles, notamment :
      </p>
      <ul className="list-disc pl-2">
        <li>
          <strong>Accès</strong> : Vous pouvez demander une copie des données personnelles que nous détenons.
        </li>
        <li>
          <strong>Correction</strong> : Vous pouvez demander la rectification de données inexactes ou incomplètes.
        </li>
        <li>
          <strong>Suppression</strong> : Vous pouvez demander la suppression de vos données, sous certaines conditions.
        </li>
        <li>
          <strong>Limitation</strong> : Vous pouvez demander une limitation du traitement de vos données.
        </li>
        <li>
          <strong>Portabilité</strong> : Vous pouvez demander à recevoir vos données dans un format structuré et lisible
          par machine.
        </li>
        <li>
          <strong>Opposition</strong> : Vous pouvez vous opposer à l'utilisation de vos données à des fins de marketing
          direct ou dans d'autres contextes.
        </li>
      </ul>
      <p className="text-xl self-start font-bold">7. Cookies et technologies similaires</p>
      <p>
        Notre application utilise des cookies pour vous fournir une expérience utilisateur optimisée. Les cookies nous
        permettent de :
      </p>
      <ul className="list-disc pl-2">
        <li>Mémoriser vos préférences.</li>
        <li>Analyser l'utilisation de notre application.</li>
      </ul>
      <p>
        Vous pouvez configurer votre appareil pour refuser les cookies, mais cela peut affecter certaines
        fonctionnalités de l'application.
      </p>

      <p className="text-xl self-start font-bold">8. Modifications de la politique de confidentialité</p>
      <p>
        Nous pouvons modifier cette politique de confidentialité à tout moment. Les mises à jour seront publiées dans
        l'application et la date de la dernière modification sera actualisée en haut de cette page. Nous vous
        encourageons à consulter régulièrement cette politique pour rester informé des changements.
      </p>

      <p className="text-xl self-start font-bold">9. Contact</p>
      <p>
        Si vous avez des questions ou préoccupations concernant cette politique de confidentialité, ou si vous souhaitez
        exercer vos droits, veuillez nous contacter à l'adresse suivante :
      </p>
      <ul className="list-disc pl-2">
        <li>
          <strong>E-mail</strong> : matthieu@geniuscodecraft.io
        </li>
        <li>
          <strong>Adresse postale</strong> : GeniusCodeCraft, 57 Boulevard Victor Hugo, 93400 Saint-Ouen-Sur-Seine
        </li>
      </ul>
    </div>
  );
}
