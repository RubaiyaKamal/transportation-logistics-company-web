import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { whyPoints } from "@/content/home";

export async function WhyUs() {
  const t = await getTranslations("Home.why");

  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map(({ id, Icon }) => (
            <div key={id} className="flex flex-col gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-900 text-white">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">
                {t(`items.${id}.title`)}
              </h3>
              <p className="text-sm text-body">
                {t(`items.${id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
