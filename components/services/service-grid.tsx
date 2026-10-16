import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";

export async function ServiceGrid({ className }: { className?: string }) {
  const items = await getTranslations("Services.items");
  const common = await getTranslations("Common");

  return (
    <div className={className ?? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
      {services.map(({ id, slug, Icon }) => (
        <Link
          key={id}
          href={{ pathname: "/services/[slug]", params: { slug } }}
          className="group flex flex-col gap-4 rounded-card border border-border bg-surface p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Icon className="size-6" aria-hidden />
          </span>
          <h3 className="text-lg font-semibold">{items(`${id}.title`)}</h3>
          <p className="text-sm text-body">{items(`${id}.summary`)}</p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
            {common("learnMore")}
            <ArrowRight className="size-4" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  );
}
