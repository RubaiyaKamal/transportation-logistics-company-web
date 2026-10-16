import type { Locale } from "@/i18n/routing";
import { en } from "./en";
import { fr } from "./fr";
import { nl } from "./nl";
import type { NewsPost } from "./types";

export type { NewsBlock, NewsPost } from "./types";

const byLocale: Record<Locale, NewsPost[]> = { nl, fr, en };

export function getNews(locale: Locale): NewsPost[] {
  return [...byLocale[locale]].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string): NewsPost | undefined {
  return byLocale[locale].find((post) => post.slug === slug);
}

export function getNewsSlugs(): string[] {
  return nl.map((post) => post.slug);
}
