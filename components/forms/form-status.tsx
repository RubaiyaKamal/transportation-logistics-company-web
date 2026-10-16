import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FormStatus({
  variant,
  title,
  description,
  children,
}: {
  variant: "success" | "error";
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col gap-3 rounded-card border p-6",
        variant === "success"
          ? "border-brand-200 bg-brand-50"
          : "border-red-200 bg-red-50"
      )}
    >
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-body">{description}</p>
      {children ? <div>{children}</div> : null}
    </div>
  );
}
