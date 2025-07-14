"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <>
      <motion.footer
        className="bg-white py-8 text-center border-t border-gray-200 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="space-y-2">
              <Link href={"/"} className="flex items-center gap-2">
                <Image src={"/logo.png"} alt="logo" width={30} height={30} />
                <p className="font-[600] text-[#808282] max-md:text-sm">
                  Nucleus Accelerator
                </p>
              </Link>

              <p className="text-gray-600">
                Where Global Startups Launch, Learn & Lead
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Nucleus Accelerator. All rights
            reserved.
          </p>
        </div>
      </motion.footer>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          size={"icon"}
          className="bg-[#0e76a8] hover:bg-[#0e76a8]/90 fixed z-50 bottom-0 right-0 m-2"
          asChild
        >
          <Link href={"https://www.linkedin.com/company/nucleusaccelerator/"}>
            <Linkedin />
          </Link>
        </Button>
      </motion.div>
    </>
  );
}
