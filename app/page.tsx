import FAQ from "@/components/Home/FAQ/FAQ";
import Hero from "@/components/Home/Hero/Hero";
import Journey from "@/components/Home/Journey/Journey";
import Medications from "@/components/Home/Medications/Medications";
import Logos from "@/components/Logos/Logos";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Logos />
      <Journey />
      <div id="about">
        <Medications />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
}
