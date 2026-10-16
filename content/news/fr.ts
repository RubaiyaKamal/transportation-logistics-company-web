import type { NewsPost } from "./types";

export const fr: NewsPost[] = [
  {
    slug: "electric-fleet-expansion",
    date: "2026-09-15",
    category: "Flotte",
    title: "Notre flotte se verdit : six camions électriques mis en service",
    excerpt:
      "Depuis ce mois, six camions entièrement électriques assurent les tournées urbaines fixes à Anvers et à Louvain. Une étape de plus vers une flotte plus silencieuse et plus propre.",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "La durabilité n'est pas un slogan mais une planification. Ce mois-ci, nous avons mis en service six camions entièrement électriques pour notre distribution urbaine à Anvers et à Louvain.",
      },
      { type: "heading", text: "Pourquoi l'électrique ?" },
      {
        type: "paragraph",
        text: "Les livraisons en ville impliquent de nombreux arrêts et de courtes distances. C'est précisément là que les véhicules électriques tirent leur avantage : aucune émission sur place, moins de bruit et un coût au kilomètre réduit.",
      },
      {
        type: "list",
        items: [
          "Zéro émission pendant la livraison",
          "Roulement plus silencieux dans les quartiers résidentiels",
          "Coûts énergétiques au kilomètre plus faibles",
          "Intégration complète à notre propre infrastructure de recharge",
        ],
      },
      { type: "heading", text: "Qu'est-ce que cela change pour vos envois ?" },
      {
        type: "paragraph",
        text: "Rien ne change pour votre planification : les mêmes chauffeurs, les mêmes engagements — simplement un véhicule plus propre à votre porte. Pour les missions plus longues, nos tracteurs Euro 6 restent le bon choix.",
      },
      {
        type: "quote",
        text: "Nous nous verdissons non pas pour la vitrine, mais parce que nos clients en bénéficient aussi sur le long terme.",
      },
    ],
  },
  {
    slug: "brexit-customs-guide",
    date: "2026-07-02",
    category: "Douane",
    title:
      "Vers le Royaume-Uni sans encombre : comment fonctionne la douane aujourd'hui",
    excerpt:
      "La paperasse est la principale cause de retard des envois vers le Royaume-Uni. Avec les bons documents dès le départ, vous évitez les surprises à la frontière.",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Depuis le Brexit, chaque envoi vers le Royaume-Uni est devenu un envoi international. Celui qui prépare ses documents à temps ne s'en aperçoit guère en pratique.",
      },
      { type: "heading", text: "Les documents nécessaires" },
      {
        type: "list",
        items: [
          "Une facture commerciale avec le code marchandises",
          "Une lettre de voiture CMR",
          "Une déclaration douanière à l'exportation",
          "Pour certaines marchandises, une preuve d'origine ou une autorisation",
        ],
      },
      { type: "heading", text: "Notre conseil" },
      {
        type: "paragraph",
        text: "Transmettez-nous vos documents à temps : nous préparons la déclaration et le camion franchit la frontière sans attente inutile.",
      },
      {
        type: "list",
        items: [
          "Vérifiez le code marchandises de votre produit",
          "Indiquez clairement les incoterms",
          "Précisez la valeur et l'origine des marchandises",
        ],
      },
    ],
  },
  {
    slug: "winter-driving-safety",
    date: "2026-05-20",
    category: "Sécurité",
    title: "L'hiver sans accroc : comment nous sécurisons vos livraisons",
    excerpt:
      "Le froid impose des précautions : équipements, planification et suivi en temps réel maintiennent vos marchandises en mouvement.",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "L'hiver met la logistique à l'épreuve. C'est pourquoi nous nous préparons bien avant les premières gelées.",
      },
      { type: "heading", text: "Notre préparation" },
      {
        type: "list",
        items: [
          "Pneus hiver et sculptures en bon état",
          "Entretien renforcé des freins, feux et batteries",
          "Équipement de sécurité à bord de chaque véhicule",
          "Chaînes de neige prêtes pour les missions internationales",
        ],
      },
      { type: "heading", text: "Ce que nous vous garantissons" },
      {
        type: "paragraph",
        text: "En cas de conditions difficiles, nous vous informons sans attendre. Notre dispatching suit la météo et l'état des routes et adapte la planification.",
      },
      {
        type: "list",
        items: [
          "Information proactive en cas de retard prévu",
          "Suivi en temps réel de chaque envoi",
          "Conventions claires sur les livraisons alternatives",
        ],
      },
    ],
  },
];
