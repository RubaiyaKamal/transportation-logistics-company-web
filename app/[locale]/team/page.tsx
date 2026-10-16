import { getTranslations } from "next-intl/server";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { teamMembers } from "@/content/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export async function generateMetadata() {
  const t = await getTranslations("Team.hero");
  return { title: t("title"), description: t("description") };
}

export default async function TeamPage() {
  const t = await getTranslations("Team");

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container className="flex flex-col gap-12">
          <p className="max-w-3xl text-lg text-body">{t("intro")}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-start gap-4 rounded-card border border-border bg-surface p-6"
              >
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand-900 text-lg font-semibold text-white">
                  {initials(member.name)}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{member.name}</span>
                  <span className="text-sm text-muted">
                    {t(`roles.${member.role}`)}
                  </span>
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
