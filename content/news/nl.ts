import type { NewsPost } from "./types";

export const nl: NewsPost[] = [
  {
    slug: "electric-fleet-expansion",
    date: "2026-09-15",
    category: "Wagenpark",
    title: "Ons wagenpark verduurzaamt: zes elektrische vrachtwagens in dienst",
    excerpt:
      "Sinds deze maand rijden zes elektrische vrachtwagens vaste stedelijke routes in Antwerpen en Leuven. Een volgende stap naar een stiller en schoner wagenpark.",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Duurzaamheid is geen slogans maar een planning. Deze maand namen wij zes volledig elektrische vrachtwagens in dienst voor onze stadsdistributie in Antwerpen en Leuven.",
      },
      { type: "heading", text: "Waarom elektrisch?" },
      {
        type: "paragraph",
        text: "Stedelijke leveringen vragen veel stops en korte afstanden. Net daar spelen elektrische voertuigen hun voordeel uit: geen uitstoot ter plaatse, minder lawaai en lagere kosten per kilometer.",
      },
      {
        type: "list",
        items: [
          "Nul uitstoot tijdens de levering",
          "Stiller rijden in woonwijken",
          "Lagere energiekosten per kilometer",
          "Volledige integratie met onze eigen laadinfrastructuur",
        ],
      },
      { type: "heading", text: "Wat betekent dit voor uw zendingen?" },
      {
        type: "paragraph",
        text: "Niets verandert aan uw planning. Dezelfde chauffeurs, dezelfde afspraken — alleen met een schoner voertuig aan de deur. Voor grotere of langere opdrachten blijven onze Euro 6-trekkers de juiste keuze.",
      },
      {
        type: "quote",
        text: "Wij vergroenen niet om te pronken, maar omdat onze klanten er op termijn ook voordeel bij hebben.",
      },
    ],
  },
  {
    slug: "brexit-customs-guide",
    date: "2026-07-02",
    category: "Douane",
    title:
      "Zonder problemen naar het Verenigd Koninkrijk: zo werkt de douane vandaag",
    excerpt:
      "Papierwerk is de grootste reden waarom zendingen naar het VK vertraging oplopen. Met de juiste documenten van bij de start voorkomt u verrassingen aan de grens.",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Sinds de Brexit is elke zending naar het Verenigd Koninkrijk een internationale zending geworden. Wie de documenten tijdig voorbereidt, merkt daar in de praktijk weinig van.",
      },
      { type: "heading", text: "De documenten die u nodig heeft" },
      {
        type: "list",
        items: [
          "Een correcte handelsfactuur met goederencode (HS-code)",
          "Een CMR-vrachtbrief",
          "Een douaneaangifte voor uitvoer",
          "Bij bepaalde goederen: een oorsprongs- of vergunningbewijs",
        ],
      },
      { type: "heading", text: "Ons advies" },
      {
        type: "paragraph",
        text: "Bezorg ons de handelsfactuur minstens een dag voor de ophaling. Zo kunnen wij de aangifte voorbereiden en vertrekt de vrachtwagen zonder wachten aan de grens.",
      },
      {
        type: "list",
        items: [
          "Controleer de goederencode voor uw product",
          "Vermeld incoterms duidelijk op de factuur",
          "Bevestig de waarde en het land van oorsprong",
        ],
      },
    ],
  },
  {
    slug: "winter-driving-safety",
    date: "2026-05-20",
    category: "Veiligheid",
    title: "Voorbereid op de winter: zo houden wij uw leveringen op tijd",
    excerpt:
      "Koude maanden vragen extra voorbereiding: winterbanden, aangepaste routes en realtime opvolging houden uw goederen in beweging, ook bij vorst en sneeuw.",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "De winter stelt het transport op de proef. Daarom start onze voorbereiding ruim voor de eerste vorst.",
      },
      { type: "heading", text: "Onze voorbereiding" },
      {
        type: "list",
        items: [
          "Wettelijk verplichte winterbanden en aangepaste profieldiepte",
          "Extra controle van remmen, verlichting en accuspanning",
          "Winterkits met zout, verlichting en warme kledij per voertuig",
          "Standaard sneeuwkettingen voor internationale ritten",
        ],
      },
      { type: "heading", text: "Wat u van ons mag verwachten" },
      {
        type: "paragraph",
        text: "Bij winters weer informeren wij u vroegtijdig over aangepaste rijtijden. Onze dispatching volgt het weer en de toestand van de wegen op en schakelt bij wanneer nodig.",
      },
      {
        type: "list",
        items: [
          "Proactieve verwittiging bij verwachte vertraging",
          "Realtime tracking van elke zending",
          "Duidelijke afspraken over alternatieve leveringen",
        ],
      },
    ],
  },
];
