import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { NewsBody } from "@/components/news/news-body";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n/routing";
import { getNewsSlugs, getPost } from "@/content/news";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale as Locale, slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale as Locale, slug);
  if (!post) notFound();

  const t = await getTranslations("NewsPage");
  const format = await getFormatter();

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <time dateTime={post.date}>
            {format.dateTime(new Date(post.date), { dateStyle: "long" })}
          </time>
          <span aria-hidden>·</span>
          <span>{t("readingTime", { minutes: post.readingMinutes })}</span>
        </div>
      </PageHeader>
      <Section>
        <Container className="flex max-w-3xl flex-col gap-10">
          <article>
            <NewsBody blocks={post.body} />
          </article>
          <div>
            <Link
              href="/news"
              className={buttonVariants({ variant: "outline" })}
            >
              <ArrowLeft className="size-4" aria-hidden />
              {t("backToNews")}
            </Link>
          </div>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
