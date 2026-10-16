import { Check, Mail, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { company } from "@/content/placeholders";
import { services } from "@/content/services";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  const t = await getTranslations("Services.items");
  return { title: t(`${service.id}.title`) };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }

  const items = await getTranslations("Services.items");
  const details = await getTranslations("Services.details");
  const common = await getTranslations("Common");
  const features = details.raw(`${service.id}.features`) as string[];
  const others = services.filter((item) => item.id !== service.id);

  return (
    <>
      <PageHeader
        eyebrow={items(`${service.id}.title`)}
        title={items(`${service.id}.summary`)}
        description={details(`${service.id}.intro`)}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {items(`${service.id}.title`)}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-body">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <h3 className="text-sm font-semibold tracking-widest text-muted uppercase">
                {common("getInTouch")}
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <a
                  href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
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
            </div>
          </div>
          <div className="flex flex-col gap-4 self-start rounded-card border border-border bg-surface-muted p-6">
            <h2 className="text-lg font-semibold">{common("requestQuote")}</h2>
            <p className="text-sm text-body">{company.contact.openingHours}</p>
            <Link
              href="/quote"
              className={buttonVariants({ className: "justify-center" })}
            >
              {common("requestQuote")}
            </Link>
            <div className="flex flex-col gap-2 border-t border-border pt-4 text-sm">
              {others.map((item) => (
                <Link
                  key={item.id}
                  href={{
                    pathname: "/services/[slug]",
                    params: { slug: item.slug },
                  }}
                  className="text-body transition hover:text-brand-700"
                >
                  {items(`${item.id}.title`)}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
