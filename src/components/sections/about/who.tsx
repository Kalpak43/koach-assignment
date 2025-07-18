"use client";
import { motion } from "motion/react";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Who() {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Who We Are
        </h2>
        <motion.div
          className="space-y-4"
          variants={{
            hidden: {},
            visible: {
              transition: {
          staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp}>
            At Nucleus Accelerator, we believe great ideas deserve a global
            stage. We are a passionate team dedicated to helping startups not
            just dream big but expand boldly into the world's most dynamic
            markets.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Our mission is to bridge the gap between visionary founders and the
            corporate expertise, cultural understanding, and strategic guidance
            they need to thrive internationally. We don't just mentor — we walk
            alongside you, unlocking doors and smoothing the path to growth.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full h-full bg-gray-600 rounded-lg overflow-hidden shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/about/about.webp"
          alt="about"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </Container>
  );
}

export default Who;
