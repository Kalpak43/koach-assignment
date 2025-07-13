"use client";
import Container from "@/components/ui/container";
import React from "react";
import { motion } from "motion/react";

function Message() {
  return (
    <>
      <Container className="space-y-8 text-center">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
            For Startups
          </h2>
          <p>Want to expand into the APAC, US or EU with expert support?</p>
        </motion.div>
      </Container>

      <Container className="space-y-8 text-center">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
            For Mentors & Corporate Partners
          </h2>
          <p>Looking to support or collaborate with emerging founders?</p>
        </motion.div>
      </Container>

      <Container className="space-y-8 text-center">
        <motion.h2
          className="text-xl font-[500]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Email us at{" "}
          <a
            href="mailto:hello@nucleusaccelerator.com"
            className="text-primary hover:underline"
          >
            hello@nucleusaccelerator.com
          </a>
        </motion.h2>
      </Container>
    </>
  );
}

export default Message;
