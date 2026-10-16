import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default async function HomePage() {
  const t = await getTranslations("Home");

  const stats = [
    { key: "years", value: "20" },
    { key: "trucks", value: "85" },
    { key: "countries", value: "12" },
    { key: "onTime", value: "98,5%" },
  ] as const;

  return (
    <main className="flex-1">
      <Section className="pt-20 pb-12 sm:pt-28 sm:pb-16">
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
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="rounded-card border border-border bg-surface-muted p-6"
              >
                <dd className="text-3xl font-bold text-ink">{stat.value}</dd>
                <dt className="mt-1 text-sm text-muted">
                  {t(`stats.${stat.key}`)}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </main>
  );
}
