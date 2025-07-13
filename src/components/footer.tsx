"use client";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-white py-8 text-center border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 space-y-8 flex flex-col items-center justify-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="logo" width={30} height={30} />
          <p className="font-[600] text-[#808282] max-md:text-sm">
            Nucleus Accelerator
          </p>
        </Link>

        <p className="text-gray-600 mb-8 text-lg">
          Where Global Startups Launch, Learn & Lead
        </p>

        <div className="flex justify-center space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Nucleus Accelerator. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
}
