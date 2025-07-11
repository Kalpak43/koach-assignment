"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatingDoughnut({ position }: { position: number }) {
  const rings = Array.from({ length: 24 }, (_, index) => {
    const radius = 80 + index * 8;
    const circumference = 2 * Math.PI * radius;
    const strokeWidth = 0.8 + index * 0.05;
    const opacity = 0.08 + index * 0.02;

    return {
      id: index,
      radius,
      circumference,
      strokeWidth,
      opacity,
      cx: 350 + position * 20,
      cy: 200 + position * 15,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none h-full w-full">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 600 600"
        fill="none"
        height={600}
        width={600}
      >
        <title>Background Doughnut</title>
        {rings.map((ring) => (
          <motion.circle
            key={ring.id}
            cx={ring.cx}
            cy={ring.cy}
            r={ring.radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={ring.strokeWidth}
            strokeOpacity={ring.opacity}
            strokeDasharray={ring.circumference}
            initial={{
              strokeDashoffset: ring.circumference,
              opacity: 0.3,
            }}
            animate={{
              strokeDashoffset: [ring.circumference, 0, -ring.circumference],
              opacity: [0.3, ring.opacity, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: ring.id * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
