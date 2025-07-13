"use client";
import { motion } from "motion/react";
import AdvisorCard from "@/components/advisor-card";
import Container from "@/components/ui/container";
import React from "react";

const advisoryBoard = [
  {
    name: "Ramjee Pallela",
    title: "COO, Atal Incubation Centre",
    image: "/assets/images/about/advisors/ramjee-pallela.webp",
  },
  {
    name: "Ram Gopal",
    title: "Ex-CEO, Barclays Bank",
    image: "/assets/images/about/advisors/ram-gopal.webp",
  },
  {
    name: "Rajiv Agarwal",
    title: "Finance Professional",
    image: "/assets/images/about/advisors/rajiv-agarwal.webp",
  },
  {
    name: "Murtuza Haryanawalla",
    title: "Sr Director of Commercialization (Enterprise GTM), Startup Genome",
    image: "/assets/images/about/advisors/murtuza-haryanawalla.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Advisor() {
  return (
    <Container className="space-y-8">
      {/* Animated Heading */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Advisory Board
        </h2>
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-4 gap-4"
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
        {advisoryBoard.map((advisor) => (
          <motion.div key={advisor.name} variants={fadeUp}>
            <AdvisorCard {...advisor} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default Advisor;
