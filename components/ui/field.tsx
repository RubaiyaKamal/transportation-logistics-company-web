import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const controlClasses =
  "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink shadow-sm transition outline-none placeholder:text-cool focus:border-brand-400 focus:ring-2 focus:ring-brand-200 disabled:opacity-60";

export function Field({
  label,
  htmlFor,
  error,
  optional,
  optionalLabel,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  optionalLabel?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {optional && optionalLabel ? (
          <span className="ml-1 font-normal text-cool">({optionalLabel})</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlClasses, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea className={cn(controlClasses, className)} rows={5} {...props} />
  );
}

export function Select({ className, ...props }: ComponentProps<"select">) {
  return <select className={cn(controlClasses, className)} {...props} />;
}
