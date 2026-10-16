import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <Container className="flex w-full max-w-xl flex-1 flex-col items-start justify-center gap-4 py-24">
      <p className="text-sm font-semibold tracking-widest text-brand-500 uppercase">
        404
      </p>
      <h1 className="text-3xl font-bold sm:text-4xl">{t("title")}</h1>
      <p className="text-body">{t("description")}</p>
      <Link href="/" className={buttonVariants({ className: "mt-2" })}>
        {t("backHome")}
      </Link>
    </Container>
  );
}
