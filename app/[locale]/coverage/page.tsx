import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { company } from "@/content/placeholders";

export async function generateMetadata() {
  const t = await getTranslations("Coverage.hero");
  return { title: t("title"), description: t("description") };
}

export default async function CoveragePage() {
  const t = await getTranslations("Coverage");
  const regions = t.raw("regions.items") as string[];

  const depots = [
    { title: t("depots.primaryTitle"), address: company.address },
    { title: t("depots.secondaryTitle"), address: company.secondDepot },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container className="flex flex-col gap-10">
          <SectionHeading
            title={t("regions.title")}
            description={t("regions.description")}
          />
          <ul className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <li
                key={region}
                className="rounded-full border border-border bg-surface-muted px-4 py-2 text-sm"
              >
                {region}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">{t("mapNote")}</p>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="flex flex-col gap-10">
          <SectionHeading title={t("depots.title")} />
          <div className="grid gap-6 sm:grid-cols-2">
            {depots.map((depot) => (
              <div
                key={depot.title}
                className="flex items-start gap-4 rounded-card border border-border bg-surface p-6"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{depot.title}</span>
                  <address className="text-sm text-body not-italic">
                    {depot.address.street}
                    <br />
                    {depot.address.postalCode} {depot.address.city}
                    <br />
                    {depot.address.country}
                  </address>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
