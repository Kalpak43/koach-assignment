"use client";
import { motion } from "motion/react";
import MemberCard from "@/components/member-card";
import Container from "@/components/ui/container";
import React from "react";

const teamMembers = [
  {
    name: "Tanushree Sharma",
    title: "Karmaveer Awardee, SDG Impact Startup Founder",
    specialty: "Founder experience, program design, startup operations",
    linkedin: "https://www.linkedin.com/in/tanushree-r-sharma/",
    image: "/assets/images/about/team/tanushree-sharma.webp",
  },
  {
    name: "Sonia Lal",
    title: "HR Leader, ex-BNP Paribas & UBS",
    specialty: "Corporate partnerships",
    linkedin: "https://www.linkedin.com/in/sonlal",
    image: "/assets/images/about/team/sonia-lal.webp",
  },
  {
    name: "Vrushali Ashdhir",
    title: "Finance Professional",
    specialty: "Community and Corporate Outreach",
    linkedin: "https://www.linkedin.com/in/vrushalibandal/",
    image: "/assets/images/about/team/vrushali-bandal.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Team() {
  return (
    <Container className="space-y-8">
      {/* Heading */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Meet the Team
        </h2>
      </motion.div>

      {/* Grid with staggered children */}
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
        {teamMembers.map((member) => (
          <motion.div key={member.name} variants={fadeUp}>
            <MemberCard {...member} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default Team;
