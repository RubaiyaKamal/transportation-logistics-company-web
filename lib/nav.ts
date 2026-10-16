export const primaryNav = [
  { href: "/services", labelKey: "services" },
  { href: "/fleet", labelKey: "fleet" },
  { href: "/coverage", labelKey: "coverage" },
  { href: "/team", labelKey: "team" },
  { href: "/news", labelKey: "news" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
] as const;

export const legalNav = [
  { href: "/privacy", labelKey: "privacy" },
  { href: "/cookies", labelKey: "cookies" },
  { href: "/terms", labelKey: "terms" },
  { href: "/legal-notice", labelKey: "legalNotice" },
] as const;

export type NavHref =
  (typeof primaryNav)[number]["href"] | (typeof legalNav)[number]["href"];
