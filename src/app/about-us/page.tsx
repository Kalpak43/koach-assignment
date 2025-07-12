import Advisor from "@/components/sections/about/advisor";
import Difference from "@/components/sections/about/difference";
import HeroSection from "@/components/sections/about/hero";
import Team from "@/components/sections/about/team";
import Vision from "@/components/sections/about/vision";
import Who from "@/components/sections/about/who";
import React from "react";

function page() {
  return (
    <main>
      <HeroSection />
      <Vision />
      <Who />
      <Difference />
      <Team />
      <Advisor />
    </main>
  );
}

export default page;
