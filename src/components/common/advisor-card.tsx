import Image from "next/image";
import React from "react";

interface AdvisorCardProps {
  name: string;
  image: string;
  title: string;
}

function AdvisorCard({
  name,
  image,
  title,
}: AdvisorCardProps) {
  return (
    <div
      key={name}
      className="aspect-[6/7] bg-gray-400 rounded-lg overflow-hidden relative z-10 group border border-primary"
    >
      <Image
        src={image}
        alt={name}
        width={600}
        height={800}
        className="h-full w-full object-cover relative group-hover:scale-110 transition-all duration-500"
      />

      <div className="absolute inset-x-0 bottom-0  bg-primary h-fit lg:h-21 flex-1 backdrop-blur-md p-4 space-y-2">
        <div>
          <h4 className="text-sm lg:text-base font-[600]">{name}</h4>
          <h5 className="text-xs">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default AdvisorCard;
