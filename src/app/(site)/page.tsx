import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import ServiceCardStack from "@/components/ServiceCardStack";
import TimesChangeScrolly from "@/components/TimesChangeScrolly";
import HorizontalIndustries from "@/components/HorizontalIndustries";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ServiceCardStack />
      <TimesChangeScrolly />
      <HorizontalIndustries />
      <Testimonials />
      <CTABanner />
    </>
  );
}
