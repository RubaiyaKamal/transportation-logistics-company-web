import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function HomePage() {
  const t = await getTranslations("Home");

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-24">
      <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
        {t("hero.eyebrow")}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {t("hero.title")}
      </h1>
      <p className="max-w-2xl text-lg text-slate-600">{t("hero.subtitle")}</p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/quote"
          className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
        >
          {t("hero.primaryCta")}
        </Link>
        <Link
          href="/services"
          className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900"
        >
          {t("hero.secondaryCta")}
        </Link>
      </div>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div>
          <dt className="text-sm text-slate-500">{t("stats.years")}</dt>
          <dd className="text-3xl font-bold text-slate-900">20</dd>
        </div>
        <div>
          <dt className="text-sm text-slate-500">{t("stats.trucks")}</dt>
          <dd className="text-3xl font-bold text-slate-900">85</dd>
        </div>
        <div>
          <dt className="text-sm text-slate-500">{t("stats.countries")}</dt>
          <dd className="text-3xl font-bold text-slate-900">12</dd>
        </div>
        <div>
          <dt className="text-sm text-slate-500">{t("stats.onTime")}</dt>
          <dd className="text-3xl font-bold text-slate-900">98,5%</dd>
        </div>
      </dl>
    </main>
  );
}
