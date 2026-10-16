import { Check, Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { QuoteForm } from "@/components/forms/quote-form";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { company } from "@/content/placeholders";

export async function generateMetadata() {
  const t = await getTranslations("Quote");
  return { title: t("hero.title"), description: t("hero.description") };
}

export default async function QuotePage() {
  const t = await getTranslations("Quote");
  const common = await getTranslations("Common");
  const points = t.raw("asidePoints") as string[];
  const tel = company.contact.phone.replace(/\s+/g, "");

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-6 rounded-card border border-border bg-surface p-6 sm:p-8 lg:col-span-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{t("formTitle")}</h2>
              <p className="text-sm text-body">{t("formDescription")}</p>
            </div>
            <QuoteForm />
          </div>
          <aside className="flex flex-col gap-6 self-start">
            <div className="flex flex-col gap-4 rounded-card border border-border bg-surface-muted p-6">
              <h2 className="text-lg font-semibold">{t("asideTitle")}</h2>
              <ul className="flex flex-col gap-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-sm text-body">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-card border border-border bg-surface p-6 text-sm">
              <span className="font-semibold">{common("getInTouch")}</span>
              <a
                href={`tel:${tel}`}
                className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900"
              >
                <Phone className="size-4" aria-hidden />
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900"
              >
                <Mail className="size-4" aria-hidden />
                {company.contact.email}
              </a>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
