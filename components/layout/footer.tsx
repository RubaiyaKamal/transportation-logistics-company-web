import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { certifications, company } from "@/content/placeholders";
import { legalNav, primaryNav } from "@/lib/nav";

const socialLinks = [
  { href: company.social.linkedin, label: "LinkedIn" },
  { href: company.social.facebook, label: "Facebook" },
  { href: company.social.instagram, label: "Instagram" },
] as const;

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const t = await getTranslations("Nav");
  const f = await getTranslations("Footer");
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-brand-800 bg-brand-950 text-brand-100">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <p className="font-display text-lg font-bold text-white">
              {company.name}
            </p>
            <p className="text-sm leading-relaxed text-brand-200">
              {f("blurb")}
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold tracking-widest text-brand-300 uppercase">
                {f("certificationsTitle")}
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((certification) => (
                  <Badge
                    key={certification.id}
                    className="border-brand-700 bg-brand-900 text-brand-100"
                  >
                    {certification.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-brand-300 uppercase">
              {f("navTitle")}
            </p>
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-brand-200 hover:text-white"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest text-brand-300 uppercase">
              {f("contactTitle")}
            </p>
            <address className="flex flex-col gap-3 text-sm text-brand-200 not-italic">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.postalCode} {company.address.city}
                  <br />
                  {company.address.country}
                </span>
              </span>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="size-4 shrink-0" aria-hidden />
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {company.contact.email}
              </a>
              <span className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
                {company.contact.openingHours}
              </span>
            </address>
          </div>

          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-brand-300 uppercase">
                {f("legalTitle")}
              </p>
              {legalNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-brand-200 hover:text-white"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold tracking-widest text-brand-300 uppercase">
                {f("followTitle")}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {socialLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-brand-200 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-brand-800 pt-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. {f("rights")}
          </p>
          <p>
            {f("vatLabel")} {company.legal.vat} · {f("kboLabel")}{" "}
            {company.legal.kbo}
          </p>
        </div>
      </Container>
    </footer>
  );
}
