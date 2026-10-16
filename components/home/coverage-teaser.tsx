import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export async function CoverageTeaser() {
  const t = await getTranslations("Home.coverage");
  const regions = t.raw("regions") as string[];

  return (
    <Section className="bg-brand-950 text-brand-100">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-widest text-brand-300 uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-xl text-brand-200">{t("description")}</p>
          <div>
            <Link
              href="/coverage"
              className={buttonVariants({ variant: "secondary" })}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {regions.map((region) => (
            <span
              key={region}
              className="rounded-full border border-brand-700 bg-brand-900 px-4 py-2 text-sm text-brand-100"
            >
              {region}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
