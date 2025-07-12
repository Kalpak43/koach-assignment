import ContactForm from "@/components/sections/contact/contact-form";
import HeroSection from "@/components/sections/contact/hero";
import Message from "@/components/sections/contact/message";
import React from "react";

function page() {
  return (
    <main>
      <HeroSection />
      <Message />
      <ContactForm />
    </main>
  );
}

export default page;
