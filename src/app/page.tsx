import Edge from "@/components/sections/home/edge";
import HeroSection from "@/components/sections/home/hero-section";
import Why from "@/components/sections/home/why";
import Work from "@/components/sections/home/work";
import WorkWith from "@/components/sections/home/work-with";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-white dark:bg-neutral-950">
      <HeroSection />
      <Work />
      <WorkWith />
      <Edge />
      <Why />
    </main>
  );
}
