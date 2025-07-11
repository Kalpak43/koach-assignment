import FloatingDoughnut from "@/components/floating-doughnut";
import FloatingPaths from "@/components/floating-paths";
import HeroSection from "@/components/sections/home/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950 ">
      {/* <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px]">
        <FloatingDoughnut position={0} />
        <FloatingDoughnut position={1} />
        <FloatingDoughnut position={-1} />
      </div> */}
      <HeroSection />
      
      <div className="h-screen"></div>
    </main>
  );
}
