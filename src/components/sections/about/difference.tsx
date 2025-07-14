"use client";
import { motion } from "motion/react";
import Container from "@/components/ui/container";
import React from "react";
import { ExternalLink, Target, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/common/grid"), { ssr: false });

const reasons = [
  {
    icon: ExternalLink,
    title: "Real Connections",
    description:
      "Work with former executives and industry leaders who open real doors, not just give advice.",
  },
  {
    icon: Target,
    title: "Tailored Approach",
    description:
      "Tailored support built around your unique vision and growth journey.",
  },
  {
    icon: Zap,
    title: "Complete Ecosystem",
    description:
      "From cultural coaching to sales, legal, and fundraising — everything you need to scale globally.",
  },
];

function Difference() {
  return (
    <Container className="space-y-8">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          What Makes Us Different?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            className="h-full p-4 border border-[#80828280] rounded-md flex flex-col items-center text-center gap-4 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <reason.icon className="size-12 flex-shrink-0 text-primary" />
            <div className="space-y-2">
              <h3 className="text-xl font-[600] lg:max-xl:min-h-[3.5rem]">
                {reason.title}
              </h3>
              <p className="flex-1">{reason.description}</p>
            </div>
            <Grid />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default Difference;
