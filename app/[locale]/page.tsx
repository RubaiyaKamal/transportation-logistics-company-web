import { CoverageTeaser } from "@/components/home/coverage-teaser";
import { CtaBand } from "@/components/home/cta-band";
import { HomeHero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyUs } from "@/components/home/why-us";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <WhyUs />
      <CoverageTeaser />
      <CtaBand />
    </>
  );
}
