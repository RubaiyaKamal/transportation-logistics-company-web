"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { FormStatus } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/field";

type ContactValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const t = useTranslations("Forms");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  const submit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("request failed");
      }
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  });

  if (status === "success") {
    return (
      <FormStatus
        variant="success"
        title={t("successTitle")}
        description={t("successMessage")}
      >
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          {t("sendAnother")}
        </Button>
      </FormStatus>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5">
      <Field
        label={t("labels.name")}
        htmlFor="name"
        error={errors.name?.message}
      >
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name", { required: t("required") })}
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t("labels.company")}
          htmlFor="company"
          optional
          optionalLabel={t("labels.optional")}
        >
          <Input
            id="company"
            autoComplete="organization"
            {...register("company")}
          />
        </Field>
        <Field
          label={t("labels.phone")}
          htmlFor="phone"
          optional
          optionalLabel={t("labels.optional")}
        >
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
          />
        </Field>
      </div>
      <Field
        label={t("labels.email")}
        htmlFor="email"
        error={errors.email?.message}
      >
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: t("required"),
            pattern: { value: emailPattern, message: t("invalidEmail") },
          })}
        />
      </Field>
      <Field
        label={t("labels.message")}
        htmlFor="message"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            required: t("required"),
            minLength: { value: 10, message: t("tooShort") },
          })}
        />
      </Field>
      <label className="flex items-start gap-3 text-sm text-body">
        <input
          type="checkbox"
          className="mt-0.5 size-4 rounded border-border text-brand-600"
          aria-invalid={Boolean(errors.consent)}
          {...register("consent", { required: t("consentRequired") })}
        />
        <span>
          {t("labels.consent")}
          {errors.consent ? (
            <span className="ml-1 text-red-600">{errors.consent.message}</span>
          ) : null}
        </span>
      </label>
      {status === "error" ? (
        <FormStatus
          variant="error"
          title={t("errorTitle")}
          description={t("errorMessage")}
        />
      ) : null}
      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </div>
    </form>
  );
}
