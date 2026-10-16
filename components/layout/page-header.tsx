import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-brand-50 to-white pt-14 pb-12 sm:pt-20 sm:pb-16">
      <Container className="flex flex-col gap-4">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-widest text-brand-500 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-lg text-body">{description}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
