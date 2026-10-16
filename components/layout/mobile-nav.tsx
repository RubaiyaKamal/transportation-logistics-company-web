"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import type { NavHref } from "@/lib/nav";

export function MobileNav({
  items,
  quoteLabel,
}: {
  items: { href: NavHref; label: string }[];
  quoteLabel: string;
}) {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex size-11 items-center justify-center rounded-full text-brand-900 hover:bg-brand-50"
      >
        <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
        {open ? (
          <X className="size-5" aria-hidden />
        ) : (
          <Menu className="size-5" aria-hidden />
        )}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-border bg-surface p-6 shadow-lg"
        >
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-brand-900 hover:bg-brand-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className={buttonVariants({ className: "mt-3" })}
            >
              {quoteLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
