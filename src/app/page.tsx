import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { AreasCards } from "@/components/home/AreasCards";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { CampaignHighlight } from "@/components/home/CampaignHighlight";
import { HowToHelp } from "@/components/home/HowToHelp";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <AreasCards />
      <ImpactNumbers />
      <CampaignHighlight />
      <HowToHelp />
    </>
  );
}
