"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Briefcase, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const teamMembers = [
  {
    name: "Tanushree Sharma",
    title: "Karmaveer Awardee, SDG Impact Startup Founder",
    specialty: "Founder experience, program design, startup operations",
    linkedin: "https://www.linkedin.com/in/tanushree-r-sharma/",
    image: "/assets/images/about/team/tanushree-sharma.webp",
  },
  {
    name: "Sonia Lal",
    title: "HR Leader, ex-BNP Paribas & UBS",
    specialty: "Corporate partnerships",
    linkedin: "https://www.linkedin.com/in/sonlal",
    image: "/assets/images/about/team/sonia-lal.webp",
  },
  {
    name: "Vrushali Ashdhir",
    title: "Finance Professional",
    specialty: "Community and Corporate Outreach",
    linkedin: "https://www.linkedin.com/in/vrushalibandal/",
    image: "/assets/images/about/team/vrushali-bandal.webp",
  },
];

function Team() {
  return (
    <Container className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Meet the Team
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => {
          return (
            <div
              key={member.name}
              className="aspect-[3/4] lg:aspect-[6/7] bg-gray-400 rounded-lg overflow-hidden relative z-10 group border border-primary"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={800}
                className="h-full w-full object-cover relative group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-x-0 bottom-0  bg-primary *:h-fit flex-1 backdrop-blur-md p-4 space-y-2">
                <div>
                  <h4 className="text-sm lg:text-base font-[600]">
                    {member.name}
                  </h4>
                  <h5 className="text-xs lg:text-sm">{member.title}</h5>
                </div>

                <div className="max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-700 text-xs lg:text-sm space-y-2">
                  <h6 className="font-[600]">
                    <Briefcase className="size-4 inline mr-2" /> SPECIALIZATION
                  </h6>
                  <p>{member.specialty}</p>
                  <Button
                    variant="default"
                    className="w-full bg-[#0e76a8] hover:bg-[#0e76a8]/90"
                    asChild
                  >
                    <Link href={member.linkedin}>
                      <Linkedin /> Linkedin
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Team;
