import { Hero } from "@/components/sections/hero";
import { StackStrip } from "@/components/sections/stack-strip";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { ProductionGrade } from "@/components/sections/production-grade";
import { Pricing } from "@/components/sections/pricing";
import { Excluded } from "@/components/sections/excluded";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StackStrip />
      <Work />
      <Process />
      <ProductionGrade />
      <Pricing />
      <Excluded />
      <Guarantee />
      <Faq />
      <FinalCta />
    </>
  );
}
