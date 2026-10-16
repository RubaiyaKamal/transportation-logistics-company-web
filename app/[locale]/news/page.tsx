import { ArrowRight } from "lucide-react";
import { getFormatter, getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CtaSection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n/routing";
import { getNews } from "@/content/news";

export async function generateMetadata() {
  const t = await getTranslations("NewsPage.hero");
  return { title: t("title"), description: t("description") };
}

export default async function NewsPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("NewsPage");
  const format = await getFormatter();
  const posts = getNews(locale);

  return (
    <>
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Section>
        <Container>
          {posts.length === 0 ? (
            <p className="text-body">{t("empty")}</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={{
                    pathname: "/news/[slug]",
                    params: { slug: post.slug },
                  }}
                  className="group flex flex-col gap-4 rounded-card border border-border bg-surface p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>
                      {format.dateTime(new Date(post.date), {
                        dateStyle: "long",
                      })}
                    </time>
                  </div>
                  <h2 className="text-lg font-semibold group-hover:text-brand-800">
                    {post.title}
                  </h2>
                  <p className="text-sm text-body">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
                    {t("readMore")}
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
