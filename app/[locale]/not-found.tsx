import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-start gap-4 px-6 py-24">
      <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
        404
      </p>
      <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
      <p className="text-slate-600">{t("description")}</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
      >
        {t("backHome")}
      </Link>
    </main>
  );
}
