import { CoverageTeaser } from "@/components/home/coverage-teaser";
import { HomeHero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyUs } from "@/components/home/why-us";
import { CtaSection } from "@/components/layout/cta-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <WhyUs />
      <CoverageTeaser />
      <CtaSection />
    </>
  );
}
