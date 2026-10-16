import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scaldislogistics.be";

type Href = Parameters<typeof getPathname>[0]["href"];

export function absoluteUrl(
  href: Href,
  locale: Locale = routing.defaultLocale
): string {
  return new URL(getPathname({ href, locale }), siteUrl).toString();
}

export function getAlternates(href: Href) {
  return {
    canonical: absoluteUrl(href),
    languages: {
      ...Object.fromEntries(
        routing.locales.map((locale) => [locale, absoluteUrl(href, locale)])
      ),
      "x-default": absoluteUrl(href),
    },
  };
}
