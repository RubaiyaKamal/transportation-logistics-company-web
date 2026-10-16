"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const STORAGE_KEY = "scaldis.cookie-consent";

const listeners = new Set<() => void>();
let memoryValue: string | null = null;

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? memoryValue;
  } catch {
    return memoryValue;
  }
}

function getServerSnapshot() {
  return null;
}

function writeConsent(value: "accepted" | "declined") {
  memoryValue = value;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage may be unavailable (private mode); the in-memory value still applies.
  }
  listeners.forEach((listener) => listener());
}

export function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (consent !== null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label={t("title")}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface shadow-[0_-8px_30px_rgba(11,31,58,0.12)]"
    >
      <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-sm font-semibold text-ink">
            {t("title")}
          </p>
          <p className="max-w-2xl text-sm text-body">
            {t("description")}{" "}
            <Link
              href="/privacy"
              className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-800"
            >
              {t("privacy")}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => writeConsent("declined")}
          >
            {t("decline")}
          </Button>
          <Button size="sm" onClick={() => writeConsent("accepted")}>
            {t("accept")}
          </Button>
        </div>
      </Container>
    </div>
  );
}
