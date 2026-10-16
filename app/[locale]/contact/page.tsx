import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { company } from "@/content/placeholders";

export async function generateMetadata() {
  const t = await getTranslations("Contact.hero");
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  const tel = company.contact.phone.replace(/\s+/g, "");

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <dl className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col">
                  <dt className="font-semibold">{t("details.address")}</dt>
                  <dd>
                    <address className="text-sm text-body not-italic">
                      {company.address.street}
                      <br />
                      {company.address.postalCode} {company.address.city}
                      <br />
                      {company.address.country}
                    </address>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col">
                  <dt className="font-semibold">{t("details.phone")}</dt>
                  <dd>
                    <a
                      href={`tel:${tel}`}
                      className="text-sm text-body hover:text-brand-700"
                    >
                      {company.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col">
                  <dt className="font-semibold">{t("details.email")}</dt>
                  <dd>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-sm text-body hover:text-brand-700"
                    >
                      {company.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col">
                  <dt className="font-semibold">{t("details.hours")}</dt>
                  <dd className="text-sm text-body">
                    {company.contact.openingHours}
                  </dd>
                </div>
              </div>
            </dl>
            <p className="text-sm text-muted">{t("mapNote")}</p>
          </div>
          <div className="flex flex-col gap-6 rounded-card border border-border bg-surface-muted p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{t("formTitle")}</h2>
              <p className="text-sm text-body">{t("formDescription")}</p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
