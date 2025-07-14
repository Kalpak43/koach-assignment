import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nucleus Accelerator",
  description:
    "A hands-on, founder-first platform designed to help high-potential startups break into and scale across the global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${poppins.variable} antialiased font-poppins`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
