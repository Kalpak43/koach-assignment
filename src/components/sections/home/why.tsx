"use client";

import Container from "@/components/ui/container";
import React from "react";
import { motion } from "motion/react";

function Why() {
  return (
    <Container className="space-y-12">
      {/* Heading Block */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Why Nucleus Accelerator?
        </h2>
        <p>
          We don't just accelerate — we guide startups to expand globally with
          clarity, confidence, and real connections.
        </p>
      </motion.div>

      {/* Grid Block with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[
          {
            title: "Market Entry Support",
            description: "Hands-on market entry support for the APAC, US & EU.",
          },
          {
            title: "Direct Access",
            description:
              "Direct access to corporate insiders and decision-makers.",
          },
          {
            title: "Cultural Coaching",
            description: "Cultural coaching to pitch and lead across borders.",
          },
          {
            title: "Global Strategies",
            description: "Sales & fundraising strategies that win globally.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Final Quote Block (already animated) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="pt-4 border-t border-gray-200"
      >
        <h3 className="text-lg text-gray-700 leading-relaxed">
          We Don't Just Accelerate — We{" "}
          <span className="text-primary">Expand</span>.
        </h3>
      </motion.div>
    </Container>
  );
}

export default Why;
