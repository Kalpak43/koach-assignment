import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  className,
  ...rest
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("max-w-7xl mx-auto px-8 py-16", className)}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Container;
