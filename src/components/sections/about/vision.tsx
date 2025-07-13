"use client";
import { motion } from "motion/react";

import Container from "@/components/ui/container";
import React from "react";

function Vision() {
  return (
    <Container className="space-y-8 text-center">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Our Vision
        </h2>
        <p>
          To empower startups worldwide, guiding them with heart and expertise
          to grow boldly and make a meaningful impact across global markets.
        </p>
      </motion.div>
    </Container>
  );
}

export default Vision;
