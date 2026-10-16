import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "fr", "en"],
  defaultLocale: "nl",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/about": {
      nl: "/over-ons",
      fr: "/a-propos",
      en: "/about",
    },
    "/services": {
      nl: "/diensten",
      fr: "/services",
      en: "/services",
    },
    "/services/[slug]": {
      nl: "/diensten/[slug]",
      fr: "/services/[slug]",
      en: "/services/[slug]",
    },
    "/fleet": {
      nl: "/wagenpark",
      fr: "/flotte",
      en: "/fleet",
    },
    "/team": {
      nl: "/team",
      fr: "/equipe",
      en: "/team",
    },
    "/coverage": {
      nl: "/werkgebied",
      fr: "/couverture",
      en: "/coverage",
    },
    "/quote": {
      nl: "/offerte-aanvragen",
      fr: "/demande-de-devis",
      en: "/quote",
    },
    "/contact": "/contact",
    "/news": {
      nl: "/nieuws",
      fr: "/actualites",
      en: "/news",
    },
    "/news/[slug]": {
      nl: "/nieuws/[slug]",
      fr: "/actualites/[slug]",
      en: "/news/[slug]",
    },
    "/privacy": {
      nl: "/privacy",
      fr: "/confidentialite",
      en: "/privacy",
    },
    "/cookies": "/cookies",
    "/terms": {
      nl: "/algemene-voorwaarden",
      fr: "/conditions-generales",
      en: "/terms",
    },
    "/legal-notice": {
      nl: "/juridische-informatie",
      fr: "/mentions-legales",
      en: "/legal-notice",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
