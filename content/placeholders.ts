// ---------------------------------------------------------------------------
// SINGLE SOURCE OF PLACEHOLDERS
// ---------------------------------------------------------------------------
// Every fabricated/placeholder value for the client lives here so it can be
// found and swapped in one place. Search for "TODO(client)" to review each one.
// ---------------------------------------------------------------------------

export const company = {
  name: "Scaldis Logistics BV", // TODO(client): confirm legal trading name
  shortName: "Scaldis Logistics",
  tagline: "Reliable freight. Across Belgium and Europe.",
  founded: 2004,
  baseCity: "Antwerp",
  country: "Belgium",
  address: {
    street: "Noorderlaan 125",
    postalCode: "2030",
    city: "Antwerpen",
    country: "Belgium",
    region: "Antwerp",
  }, // TODO(client): confirm registered address
  secondDepot: {
    street: "Zone Wijgmaal 14",
    postalCode: "3018",
    city: "Leuven",
    country: "Belgium",
  }, // TODO(client): optional second depot
  contact: {
    phone: "+32 3 000 00 00", // TODO(client)
    whatsapp: "+32 470 00 00 00", // TODO(client)
    email: "info@scaldis-logistics.be", // TODO(client)
    openingHours: "Mon-Fri 07:00-18:00, 24/7 dispatch line",
  },
  legal: {
    vat: "BE 0123.456.789", // TODO(client): BTW/TVA number
    kbo: "0123.456.789", // TODO(client): KBO/BCE number
    iban: "BE00 0000 0000 0000", // TODO(client)
    cmrInsurance: "CMR insurance. Policy number on request.", // TODO(client)
  },
  fleet: {
    trucks: 85,
    employees: 120,
    countriesServed: 25,
    onTimeDelivery: 98,
  },
  social: {
    // TODO(client): real profiles
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const certifications = [
  { id: "iso9001", label: "ISO 9001", note: "Quality management" },
  { id: "iso14001", label: "ISO 14001", note: "Environmental management" },
  { id: "aeo", label: "AEO", note: "Authorised Economic Operator" },
  {
    id: "co2",
    label: "CO2 Performance Ladder",
    note: "Sustainability certification",
  },
] as const; // TODO(client): verify certifications and levels
