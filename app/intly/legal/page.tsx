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
      <p className="text-5xl">Mentions Légales</p>
      <p className="text-2xl self-start font-bold">1. Éditeur de l'application</p>
      <p>
        L'application <strong>Intly</strong> est éditée par :<br />
        <strong>GeniusCodeCraft</strong>,<br />
        Société au capital de 1000€, immatriculée au Registre du Commerce et des Sociétés sous le numéro 983532367,
        <br />
        dont le siège social est situé au 57 Boulevard Victor Hugo à Saint-Ouen-Sur-Seine.
      </p>
      <p>
        Numéro de téléphone : 06 51 32 51 18
        <br />
        Adresse e-mail : matthieu@geniuscodecraft.io
      </p>

      <p className="text-2xl self-start font-bold">2. Directeur de publication</p>
      <p>
        Le directeur de publication de l'application est <strong>Matthieu Rocher</strong>, en qualité de CEO.
      </p>

      <p className="text-2xl self-start font-bold">3. Hébergement de l'application</p>
      <p>
        L'application est hébergée et accessible sur les stores applicatifs fournis par <strong>Google</strong> et{" "}
        <strong>Apple</strong>.
      </p>

      <p className="text-2xl self-start font-bold">4. Propriété intellectuelle</p>
      <p>
        Le contenu de l'application, incluant, de façon non limitative, les textes, images, vidéos, graphiques, logos,
        icônes, sons, et autres éléments, est la propriété exclusive de <strong>GeniusCodeCraft</strong>, sauf mentions
        contraires. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale
        ou partielle de l'application, par quelque procédé que ce soit, est interdite sans l'autorisation écrite
        préalable de l'éditeur.
      </p>
      <p>
        Toute exploitation non autorisée de l'application ou de son contenu engage la responsabilité de l'utilisateur et
        constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété
        intellectuelle.
      </p>

      <p className="text-2xl self-start font-bold">5. Protection des données personnelles</p>
      <p>
        Les informations personnelles pouvant être collectées via l'application sont traitées dans le respect de la
        législation en vigueur concernant la protection des données personnelles. Pour plus d'informations, veuillez
        consulter notre <a href="[lien vers la politique de confidentialité]">Politique de Confidentialité</a>.
      </p>

      <p className="text-2xl self-start font-bold">6. Responsabilité</p>
      <p>
        <strong>GeniusCodeCraft</strong> ne pourra être tenu responsable des dommages directs ou indirects causés au
        matériel de l'utilisateur lors de l'accès à l'application, résultant soit de l'utilisation d'un matériel non
        adapté, soit de l'apparition d'un bug ou d'une incompatibilité.
      </p>
      <p>
        L'éditeur de l'application s'efforce de fournir des informations aussi précises que possible, mais ne peut
        garantir l'exactitude, la complétude, ou l'actualité des informations présentes dans l'application.
      </p>

      <p className="text-2xl self-start font-bold">7. Droit applicable et juridiction</p>
      <p>
        Les présentes mentions légales sont régies par la loi française. Tout litige relatif à l'application sera soumis
        à la compétence exclusive des tribunaux français.
      </p>

      <p className="text-2xl self-start font-bold">8. Contact</p>
      <p>
        Pour toute question ou information complémentaire relative aux mentions légales de l'application, vous pouvez
        nous contacter à l'adresse suivante :<br />
        <strong>matthieu@geniuscodecraft.io</strong>
        <br />
        Ou par courrier à :<br />
        <strong>GeniusCodeCraft, 57 Boulevard Victor Hugo, 93400 Saint-Ouen-Sur-Seine</strong>.
      </p>
    </div>
  );
}
