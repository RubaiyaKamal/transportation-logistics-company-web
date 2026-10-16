import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import LocaleSwitcher from "@/components/locale-switcher";
import { company } from "@/content/placeholders";
import { primaryNav } from "@/lib/nav";
import { MobileNav } from "./mobile-nav";

export async function Header() {
  const t = await getTranslations("Nav");
  const items = primaryNav.map((item) => ({
    href: item.href,
    label: t(item.labelKey),
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold text-brand-900"
        >
          <span
            className="inline-block size-2.5 rounded-full bg-brand-500"
            aria-hidden
          />
          {company.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-900 hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <Link
            href="/quote"
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            {t("quote")}
          </Link>
          <MobileNav items={items} quoteLabel={t("quote")} />
        </div>
      </Container>
    </header>
  );
}
