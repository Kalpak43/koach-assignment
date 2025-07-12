"use client";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Briefcase, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const advisoryBoard = [
  {
    name: "Ramjee Pallela",
    title: "COO, Atal Incubation Centre",
    image: "/assets/images/about/advisors/ramjee-pallela.webp",
  },
  {
    name: "Ram Gopal",
    title: "Ex-CEO, Barclays Bank",
    image: "/assets/images/about/advisors/ram-gopal.webp",
  },
  {
    name: "Rajiv Agarwal",
    title: "Finance Professional",
    image: "/assets/images/about/advisors/rajiv-agarwal.webp",
  },
  {
    name: "Murtuza Haryanawalla",
    title: "Sr Director of Commercialization (Enterprise GTM), Startup Genome",
    image: "/assets/images/about/advisors/murtuza-haryanawalla.webp",
  },
];

function Advisor() {
  return (
    <Container className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Advisory Board
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {advisoryBoard.map((member) => {
          return (
            <div
              key={member.name}
              className="aspect-[6/7] bg-gray-400 rounded-lg overflow-hidden relative z-10 group border border-primary"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={800}
                className="h-full w-full object-cover relative group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-x-0 bottom-0  bg-primary h-fit lg:h-21 flex-1 backdrop-blur-md p-4 space-y-2">
                <div>
                  <h4 className="text-sm lg:text-base font-[600]">
                    {member.name}
                  </h4>
                  <h5 className="text-xs">{member.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Advisor;
