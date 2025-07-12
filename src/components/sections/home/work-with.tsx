"use client";

import Container from "@/components/ui/container";
import React from "react";
import { CheckCircle, Rocket, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const criteria = [
  "Ready to scale into international markets",
  "Backed by a validated product, early traction, and a hungry team",
  "Curious, coachable, and committed to growth",
];

function WorkWith() {
  return (
    <Container className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Who We Work With
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We work with startups who are:
        </p>
      </div>

      <div className="space-y-4">
        {criteria.map((criterion, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{criterion}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="pt-4 border-t border-gray-200"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're a seed-stage founder or a post-Series A team, if you're
          serious about global expansion —{" "}
          <span className="font-semibold text-primary">we're here for it.</span>
        </p>
      </motion.div>
    </Container>
  );
}

export default WorkWith;
