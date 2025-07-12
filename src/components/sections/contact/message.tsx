import Container from "@/components/ui/container";
import React from "react";

function Message() {
  return (
    <>
      <Container className="space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
            For Startups
          </h2>

          <p>Want to expand into the APAC, US or EU with expert support?</p>
        </div>
      </Container>
      <Container className="space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
            For Mentors & Corporate Partners
          </h2>

          <p>Looking to support or collaborate with emerging founders?</p>
        </div>
      </Container>
      <Container className="space-y-8 text-center">
        <h2 className="text-xl font-[500]">
          Email us at{" "}
          <a href="mailto:hello@nucleusaccelerator.com" className="text-primary hover:underline">
            hello@nucleusaccelerator.com
          </a>
        </h2>
      </Container>
    </>
  );
}

export default Message;
