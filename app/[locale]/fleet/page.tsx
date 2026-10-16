import {
  Check,
  Container as ContainerIcon,
  Package,
  Truck,
  Zap,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { company } from "@/content/placeholders";

const vehicleTypes = [
  { id: "tractor", Icon: Truck },
  { id: "trailer", Icon: ContainerIcon },
  { id: "rigid", Icon: Package },
  { id: "electric", Icon: Zap },
] as const;

export async function generateMetadata() {
  const t = await getTranslations("Fleet.hero");
  return { title: t("title"), description: t("description") };
}

export default async function FleetPage() {
  const t = await getTranslations("Fleet");
  const points = t.raw("sustainability.points") as string[];

  const stats = [
    { label: t("stats.trucks"), value: String(company.fleet.trucks) },
    { label: t("stats.trailers"), value: "95" },
    { label: t("stats.electric"), value: "6" },
    { label: t("stats.depots"), value: "2" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 rounded-card border border-border bg-surface-muted p-6"
            >
              <span className="text-3xl font-bold text-brand-700">
                {stat.value}
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </Container>
      </Section>
      <Section className="bg-surface-muted pt-0">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            title={t("types.title")}
            description={t("types.description")}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {vehicleTypes.map(({ id, Icon }) => (
              <div
                key={id}
                className="flex flex-col gap-3 rounded-card border border-border bg-surface p-6"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold">
                  {t(`types.items.${id}.title`)}
                </h3>
                <p className="text-sm text-body">
                  {t(`types.items.${id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            title={t("sustainability.title")}
            description={t("sustainability.description")}
          />
          <ul className="grid gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-body">{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
