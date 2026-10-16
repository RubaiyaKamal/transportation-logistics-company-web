import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { company } from "@/content/placeholders";

export async function HomeHero() {
  const t = await getTranslations("Home");

  const stats = [
    { key: "years", value: "20" },
    { key: "trucks", value: `${company.fleet.trucks}` },
    { key: "countries", value: `${company.fleet.countriesServed}+` },
    { key: "onTime", value: `${company.fleet.onTimeDelivery}%` },
  ] as const;

  return (
    <>
      <Section className="bg-gradient-to-b from-brand-50 via-white to-white pt-20 pb-12 sm:pt-28 sm:pb-16">
        <Container className="flex flex-col items-start gap-6">
          <Badge>{t("hero.eyebrow")}</Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="max-w-2xl text-lg text-body">{t("hero.subtitle")}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/quote" className={buttonVariants({ size: "lg" })}>
              {t("hero.primaryCta")}
            </Link>
            <Link
              href="/services"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {t("hero.secondaryCta")}
            </Link>
          </div>
          <p className="text-sm text-muted">{t("hero.trust")}</p>
        </Container>
      </Section>

      <Section className="pt-0 pb-16 sm:pb-24">
        <Container>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="rounded-card border border-border bg-surface-muted p-6"
              >
                <dd className="font-display text-3xl font-bold text-ink">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-muted">
                  {t(`stats.${stat.key}`)}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
