"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/container";
import FloatingPaths from "@/components/floating-paths";

function HeroSection() {
  const ref = useRef(null);

  // Track scroll within the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start when top hits top, end when bottom hits top
  });

  // Scale from 1 to 0.8 as it scrolls out of view
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.div className="relative min-h-screen bg-gradient-to-br from-slate-100 dark:from-slate-900/10 via-white dark:via-neutral-950 to-primary/10 dark:to-blue-900/10 overflow-y-hidden">
      <motion.div ref={ref} style={{ scale, opacity }}>
        <Container className="min-h-screen flex flex-col items-center justify-center gap-8 relative z-10">
          <div className="absolute inset-0 -z-1 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary dark:bg-blue-800 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 dark:bg-purple-800 rounded-full blur-3xl"
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 0.1,
                  staggerChildren: 0.5,
                  delayChildren: 0.5, // overall delay before children start animating
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="text-center space-y-4"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-4xl lg:text-6xl leading-snug font-[600] bg-gradient-to-r from-gray-500 via-slate-900 to-slate-700 text-transparent bg-clip-text"
            >
              About Nucleus Accelerator
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="max-w-3xl mx-auto"
            >
              Empowering startups worldwide with the expertise, connections, and
              guidance needed to scale globally and make a meaningful impact.
            </motion.p>
            {/* <Button size="lg">Click me</Button> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className=""
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      {/* Blend transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-neutral-950 pointer-events-none"></div>
    </motion.div>
  );
}

export default HeroSection;
