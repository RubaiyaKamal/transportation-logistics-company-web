"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onLocaleChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error The pathname and params were read from the current
      // route, so their combination is always valid.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="sr-only">{t("label")}</span>
      <select
        className="rounded border border-slate-300 bg-white px-2 py-1 text-sm"
        value={locale}
        onChange={(event) => onLocaleChange(event.target.value)}
        aria-label={t("label")}
      >
        {routing.locales.map((option) => (
          <option key={option} value={option}>
            {t(option)}
          </option>
        ))}
      </select>
    </label>
  );
}
