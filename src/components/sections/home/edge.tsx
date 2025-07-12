"use client";

import Container from "@/components/ui/container";
import React from "react";
import { Heart, Network, Cog, Layers } from "lucide-react";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/grid"), { ssr: false });

const edges = [
  {
    icon: Heart,
    title: "Founder-First, Not Fund-First",
    description:
      "We're not chasing portfolios. We're building global operators.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Network,
    title: "Access to Real Corporate Insiders",
    description:
      "Our network includes decision-makers, not just mentors. Think: former execs, procurement leads, GTM strategists.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cog,
    title: "Execution Over Theory",
    description:
      "We don't just advise — we help you build the roadmap and walk it with you.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Layers,
    title: "Custom Tracks for Real Problems",
    description:
      "From regulatory compliance to pilot pitching — our curriculum is modular, practical, and designed for global readiness.",
    color: "from-purple-500 to-indigo-500",
  },
];

function Edge() {
  return (
    <Container className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">Our Edge</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {edges.map((edge) => {
          return (
            <div
              key={edge.title}
              className="h-full p-4 border border-[#80828280] rounded-md flex flex-col gap-4 relative z-10"
            >
              <edge.icon className="size-12 flex-shrink-0 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-[600]">{edge.title}</h3>
                <p className="flex-1">{edge.description}</p>
              </div>
              <Grid />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Edge;
