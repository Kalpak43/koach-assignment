"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { name: "home", link: "/" },
  { name: "about us", link: "/about-us" },
  { name: "contact us", link: "/contact-us" },
];

// Parent container variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "backInOut",
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

// Child (nav item) variants
const navItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 max-w-7xl my-4 mx-4 xl:mx-auto py-4 px-6 rounded-xl flex items-center justify-between gap-8 bg-white/60 backdrop-blur-md shadow-[0px_0px_4px_rgba(251,196,26,0.3),0px_0px_8px_rgb(251,196,26,0.1)]"
        variants={headerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="logo" width={30} height={30} />
          <p className="font-[600] text-[#808282] max-md:text-sm">
            Nucleus Accelerator
          </p>
        </div>

        <nav
          className={cn(
            "max-md:hidden flex items-center gap-8 text-[#808282] max-md:shadow-[0px_0px_4px_rgba(251,196,26,0.3),0px_0px_8px_rgb(251,196,26,0.1)]"
          )}
        >
          {links.map((l) => (
            <motion.div key={l.name} variants={navItemVariants}>
              <Link
                href={l.link}
                className={cn(
                  "capitalize",
                  pathname == l.link && "text-primary"
                )}
              >
                {l.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((x) => !x)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "fixed top-22 inset-x-0 z-50 max-w-7xl mx-4 mt-2 xl:mx-auto py-4 px-6 rounded-xl flex flex-col items-center justify-between gap-8 bg-white/60 backdrop-blur-md shadow-[0px_0px_4px_rgba(251,196,26,0.3),0px_0px_8px_rgb(251,196,26,0.1)]"
            )}
          >
            {links.map((l) => (
              <Link
                href={l.link}
                className={cn(
                  "capitalize",
                  pathname === l.link && "text-primary"
                )}
              >
                {l.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
