import { getTranslations } from "next-intl/server";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { ServiceGrid } from "@/components/services/service-grid";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

const processSteps = ["request", "plan", "drive", "deliver"] as const;

export async function generateMetadata() {
  const t = await getTranslations("ServicesPage.hero");
  return { title: t("title"), description: t("description") };
}

export default async function ServicesPage() {
  const t = await getTranslations("ServicesPage");

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container className="flex flex-col gap-12">
          <ServiceGrid />
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={t("process.eyebrow")}
            title={t("process.title")}
            description={t("process.description")}
            align="center"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step} className="flex flex-col gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold">
                  {t(`process.steps.${step}.title`)}
                </h3>
                <p className="text-sm text-body">
                  {t(`process.steps.${step}.description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
