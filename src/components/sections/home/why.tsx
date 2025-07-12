"use client";

import Container from "@/components/ui/container";
import React from "react";
import { motion } from "motion/react";

function Why() {
  return (
    <Container className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Why Nucleus Accelerator?
        </h2>
        <p>
          We don't just accelerate — we guide startups to expand globally with
          clarity, confidence, and real connections.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Market Entry Support
          </h3>
          <p className="text-gray-600">
            Hands-on market entry support for the APAC, US & EU.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Direct Access
          </h3>
          <p className="text-gray-600">
            Direct access to corporate insiders and decision-makers.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Cultural Coaching
          </h3>
          <p className="text-gray-600">
            Cultural coaching to pitch and lead across borders.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Global Strategies
          </h3>
          <p className="text-gray-600">
            Sales & fundraising strategies that win globally.
          </p>
        </div>
      </div>

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
