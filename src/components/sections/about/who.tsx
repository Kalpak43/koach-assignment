import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

function Who() {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Who We Are
        </h2>

        <div className="space-y-4">
          <p>
            At Nucleus Accelerator, we believe great ideas deserve a global
            stage. We are a passionate team dedicated to helping startups not
            just dream big but expand boldly into the world's most dynamic
            markets.
          </p>
          <p>
            Our mission is to bridge the gap between visionary founders and the
            corporate expertise, cultural understanding, and strategic guidance
            they need to thrive internationally. We don't just mentor — we walk
            alongside you, unlocking doors and smoothing the path to growth.
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-gray-600 rounded-lg overflow-hidden shadow-md">
        <Image
          src="/assets/images/about/about.webp"
          alt="about"
          width={600}
          height={400}
          className=""
        />
      </div>
    </Container>
  );
}

export default Who;
