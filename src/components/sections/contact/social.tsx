"use client";
import Container from "@/components/ui/container";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Link from "next/link";

function Social() {
  return (
    <Container className="space-y-8 text-center">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
          Social Space
        </h2>
        <Button
          size={"icon"}
          className="bg-[#0e76a8] hover:bg-[#0e76a8]/90"
          asChild
        >
          <Link href={"https://www.linkedin.com/company/nucleusaccelerator/"}>
            <Linkedin />
          </Link>
        </Button>
      </motion.div>
    </Container>
  );
}

export default Social;
