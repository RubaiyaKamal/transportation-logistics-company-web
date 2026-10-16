import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ServiceGrid } from "@/components/services/service-grid";

export async function ServicesOverview() {
  const t = await getTranslations("Home.services");

  return (
    <Section className="bg-surface-muted">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />
        <ServiceGrid />
        <div className="flex justify-center">
          <Link
            href="/services"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            {t("cta")}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
