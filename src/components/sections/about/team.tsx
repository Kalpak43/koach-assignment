"use client";
import { motion } from "motion/react";
import MemberCard from "@/components/common/member-card";
import Container from "@/components/ui/container";
import React from "react";
import { cn } from "@/lib/utils";

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
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Meet the Team
        </h2>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={cn(
              index === teamMembers.length - 1 && teamMembers.length % 2 === 1
                ? "md:max-xl:col-span-2 md:max-xl:mx-auto"
                : ""
            )}
          >
            <MemberCard {...member} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default Team;
