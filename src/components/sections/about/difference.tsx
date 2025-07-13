"use client";
import { motion } from "motion/react";
import Container from "@/components/ui/container";
import React from "react";
import { ExternalLink, Target, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/grid"), { ssr: false });

const reasons = [
  {
    icon: ExternalLink,
    title: "Founder-First, Not Fund-First",
    description:
      "We're not chasing portfolios. We're building global operators.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Access to Real Corporate Insiders",
    description:
      "Our network includes decision-makers, not just mentors. Think: former execs, procurement leads, GTM strategists.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Execution Over Theory",
    description:
      "We don't just advise — we help you build the roadmap and walk it with you.",
    color: "from-green-500 to-emerald-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Difference() {
  return (
    <Container className="space-y-8">
      {/* Heading */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          What Makes Us Different?
        </h2>
      </motion.div>

      {/* Grid Wrapper with Staggering */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {reasons.map((reason) => (
          <motion.div
            key={reason.title}
            className="h-full p-4 border border-[#80828280] rounded-md flex flex-col items-center text-center gap-4 relative z-10"
            variants={fadeUp}
          >
            <reason.icon className="size-12 flex-shrink-0 text-primary" />
            <div className="space-y-2">
              <h3 className="text-xl font-[600]">{reason.title}</h3>
              <p className="flex-1">{reason.description}</p>
            </div>
            <Grid />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default Difference;
