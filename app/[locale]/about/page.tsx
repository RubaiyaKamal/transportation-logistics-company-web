import { getTranslations } from "next-intl/server";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { companyValues } from "@/content/about";
import { certifications, company } from "@/content/placeholders";

export async function generateMetadata() {
  const t = await getTranslations("About.hero");
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage() {
  const t = await getTranslations("About");
  const footer = await getTranslations("Footer");

  const facts = [
    { label: t("facts.founded"), value: String(company.founded) },
    { label: t("facts.employees"), value: String(company.fleet.employees) },
    { label: t("facts.trucks"), value: String(company.fleet.trucks) },
    {
      label: t("facts.countries"),
      value: `${company.fleet.countriesServed}+`,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {t("story.title")}
            </h2>
            <p className="text-lg text-body">{t("story.p1")}</p>
            <p className="text-body">{t("story.p2")}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 self-start rounded-card border border-border bg-surface-muted p-6">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="text-2xl font-bold text-brand-700">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="flex flex-col gap-12">
          <SectionHeading title={t("values.title")} align="center" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map(({ id, Icon }) => (
              <div key={id} className="flex flex-col gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-900 text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold">
                  {t(`values.items.${id}.title`)}
                </h3>
                <p className="text-sm text-body">
                  {t(`values.items.${id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col gap-8">
          <SectionHeading title={footer("certificationsTitle")} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col gap-1 rounded-card border border-border bg-surface p-5"
              >
                <span className="font-semibold">{cert.label}</span>
                <span className="text-sm text-muted">{cert.note}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
