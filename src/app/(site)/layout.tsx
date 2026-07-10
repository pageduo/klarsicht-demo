import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SectionNav from "@/components/SectionNav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <SectionNav />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
