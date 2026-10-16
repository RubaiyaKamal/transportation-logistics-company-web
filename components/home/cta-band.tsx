import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export async function CtaBand() {
  const t = await getTranslations("Home.cta");

  return (
    <Section className="bg-brand-900">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {t("title")}
        </h2>
        <p className="max-w-xl text-brand-200">{t("description")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className={buttonVariants({
              size: "lg",
              className: "bg-white text-brand-900 hover:bg-brand-50",
            })}
          >
            {t("primary")}
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "border-brand-700 bg-transparent text-white hover:border-brand-500 hover:bg-brand-800",
            })}
          >
            {t("secondary")}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
