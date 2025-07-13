import { Briefcase, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface MemberCardProps {
  name: string;
  image: string;
  title: string;
  specialty: string;
  linkedin: string;
}

function MemberCard({
  name,
  image,
  title,
  specialty,
  linkedin,
}: MemberCardProps) {
  return (
    <div
      key={name}
      className="aspect-[3/4] lg:aspect-[6/7] bg-gray-400 rounded-lg overflow-hidden relative z-10 group border border-primary"
    >
      <Image
        src={image}
        alt={name}
        width={600}
        height={800}
        className="h-full w-full object-cover relative group-hover:scale-110 transition-all duration-500"
      />

      <div className="absolute inset-x-0 bottom-0  bg-primary *:h-fit flex-1 backdrop-blur-md p-4 space-y-2">
        <div>
          <h4 className="text-sm lg:text-base font-[600]">{name}</h4>
          <h5 className="text-xs lg:text-sm">{title}</h5>
        </div>

        <div className="member-card group-hover:max-h-48! overflow-hidden transition-all duration-700 text-xs lg:text-sm space-y-2">
          <h6 className="font-[600]">
            <Briefcase className="size-4 inline mr-2" /> SPECIALIZATION
          </h6>
          <p>{specialty}</p>
          <Button
            variant="default"
            className="w-full bg-[#0e76a8] hover:bg-[#0e76a8]/90"
            asChild
          >
            <Link href={linkedin}>
              <Linkedin /> Linkedin
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
