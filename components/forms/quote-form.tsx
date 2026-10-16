"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { FormStatus } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { services } from "@/content/services";

type QuoteValues = {
  company: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  pickup: string;
  delivery: string;
  cargo: string;
  weight: string;
  date: string;
  message: string;
  consent: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuoteForm() {
  const t = useTranslations("Forms");
  const items = useTranslations("Services.items");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    defaultValues: {
      company: "",
      name: "",
      email: "",
      phone: "",
      service: "",
      pickup: "",
      delivery: "",
      cargo: "",
      weight: "",
      date: "",
      message: "",
      consent: false,
    },
  });

  const submit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/quote", {
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t("labels.company")}
          htmlFor="company"
          error={errors.company?.message}
        >
          <Input
            id="company"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            {...register("company", { required: t("required") })}
          />
        </Field>
        <Field
          label={t("labels.name")}
          htmlFor="name"
          error={errors.name?.message}
        >
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name", { required: t("required") })}
          />
        </Field>
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
            {...register("email", {
              required: t("required"),
              pattern: { value: emailPattern, message: t("invalidEmail") },
            })}
          />
        </Field>
        <Field
          label={t("labels.phone")}
          htmlFor="phone"
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone", { required: t("required") })}
          />
        </Field>
      </div>
      <Field
        label={t("labels.service")}
        htmlFor="service"
        error={errors.service?.message}
      >
        <Select
          id="service"
          defaultValue=""
          aria-invalid={Boolean(errors.service)}
          {...register("service", { required: t("required") })}
        >
          <option value="" disabled>
            {t("labels.servicePlaceholder")}
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {items(`${service.id}.title`)}
            </option>
          ))}
        </Select>
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t("labels.pickup")}
          htmlFor="pickup"
          error={errors.pickup?.message}
        >
          <Input
            id="pickup"
            aria-invalid={Boolean(errors.pickup)}
            {...register("pickup", { required: t("required") })}
          />
        </Field>
        <Field
          label={t("labels.delivery")}
          htmlFor="delivery"
          error={errors.delivery?.message}
        >
          <Input
            id="delivery"
            aria-invalid={Boolean(errors.delivery)}
            {...register("delivery", { required: t("required") })}
          />
        </Field>
        <Field
          label={t("labels.cargo")}
          htmlFor="cargo"
          optional
          optionalLabel={t("labels.optional")}
        >
          <Input id="cargo" {...register("cargo")} />
        </Field>
        <Field
          label={t("labels.weight")}
          htmlFor="weight"
          optional
          optionalLabel={t("labels.optional")}
        >
          <Input id="weight" inputMode="numeric" {...register("weight")} />
        </Field>
      </div>
      <Field
        label={t("labels.date")}
        htmlFor="date"
        optional
        optionalLabel={t("labels.optional")}
      >
        <Input id="date" type="date" {...register("date")} />
      </Field>
      <Field
        label={t("labels.message")}
        htmlFor="message"
        optional
        optionalLabel={t("labels.optional")}
      >
        <Textarea id="message" {...register("message")} />
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
