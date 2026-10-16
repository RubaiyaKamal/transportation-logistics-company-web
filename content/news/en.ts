import type { NewsPost } from "./types";

export const en: NewsPost[] = [
  {
    slug: "electric-fleet-expansion",
    date: "2026-09-15",
    category: "Fleet",
    title: "Our fleet goes green: six electric trucks in service",
    excerpt:
      "Since this month, six fully electric trucks run fixed urban routes in Antwerp and Leuven. Another step towards a quieter, cleaner fleet.",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Sustainability is not a slogan but a plan. This month we put six fully electric trucks into service for our city distribution in Antwerp and Leuven.",
      },
      { type: "heading", text: "Why electric?" },
      {
        type: "paragraph",
        text: "Urban deliveries mean many stops and short distances. That is exactly where electric vehicles shine: no local emissions, less noise and a lower cost per kilometre.",
      },
      {
        type: "list",
        items: [
          "Zero emissions during delivery",
          "Quieter driving in residential areas",
          "Lower energy costs per kilometre",
          "Fully integrated with our own charging infrastructure",
        ],
      },
      { type: "heading", text: "What does this mean for your shipments?" },
      {
        type: "paragraph",
        text: "Nothing changes in your planning: the same drivers, the same commitments — just a cleaner vehicle at your door. For larger or longer runs, our Euro 6 tractor units remain the right choice.",
      },
      {
        type: "quote",
        text: "We don't go green for show, but because our customers benefit from it in the long run.",
      },
    ],
  },
  {
    slug: "brexit-customs-guide",
    date: "2026-07-02",
    category: "Customs",
    title: "Shipping to the UK without trouble: how customs works today",
    excerpt:
      "Paperwork is the main reason shipments to the UK get delayed. With the right documents from the start, you avoid surprises at the border.",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Since Brexit, every shipment to the United Kingdom has become an international shipment. Those who prepare their documents in time hardly notice it in practice.",
      },
      { type: "heading", text: "The documents you need" },
      {
        type: "list",
        items: [
          "A commercial invoice including the commodity code",
          "A CMR consignment note",
          "An export customs declaration",
          "For certain goods, proof of origin or a permit",
        ],
      },
      { type: "heading", text: "Our advice" },
      {
        type: "paragraph",
        text: "Send us your documents in time and we prepare the declaration, so the truck crosses the border without needless waiting.",
      },
      {
        type: "list",
        items: [
          "Check the commodity code for your product",
          "State the incoterms clearly",
          "Specify the value and origin of the goods",
        ],
      },
    ],
  },
  {
    slug: "winter-driving-safety",
    date: "2026-05-20",
    category: "Safety",
    title: "A winter without disruption: how we keep your deliveries safe",
    excerpt:
      "Cold weather demands precautions: equipment, planning and real-time tracking keep your goods moving.",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Winter puts logistics to the test. That is why we prepare well before the first frost.",
      },
      { type: "heading", text: "Our preparation" },
      {
        type: "list",
        items: [
          "Winter tyres and healthy tread depth",
          "Extra checks on brakes, lights and batteries",
          "Safety equipment on board every vehicle",
          "Snow chains ready for international runs",
        ],
      },
      { type: "heading", text: "What we guarantee you" },
      {
        type: "paragraph",
        text: "In difficult conditions we inform you without delay. Our dispatch team monitors weather and road conditions and adjusts the plan when needed.",
      },
      {
        type: "list",
        items: [
          "Proactive notice of any expected delay",
          "Real-time tracking of every shipment",
          "Clear agreements on alternative deliveries",
        ],
      },
    ],
  },
];
