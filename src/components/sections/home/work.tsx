"use client";
import { motion } from "motion/react";
import Container from "@/components/ui/container";
import React from "react";
import {
  Globe,
  Users,
  Presentation,
  TrendingUp,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/common/grid"), { ssr: false });

const services = [
  {
    icon: Globe,
    title: "Market Entry Strategy Workshops",
    description:
      "Understand the real-world complexity of expanding in APAC, US and EU. Our strategy workshops decode local regulations, customer expectations, and go-to-market playbooks so you can enter with confidence not guesswork.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Corporate Connect & Expansion Coaching",
    description:
      "We match you with vetted corporate professionals who act as your trusted expansion allies opening doors, navigating business culture, and helping you land your first pilots, clients, or partnerships.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Presentation,
    title: "Cultural & Executive Coaching",
    description:
      "From boardrooms in Berlin to investor meetings in San Francisco - we prepare you to lead with clarity and cultural intelligence. Learn how to pitch, negotiate, and manage cross-border teams like a seasoned global founder.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Sales Acceleration & Enterprise Pitch Coaching",
    description:
      "Land your first enterprise deal with expert guidance on how to pitch, price, and position for large, complex organizations. We help you build trust, shorten cycles, and convert pilots into paying customers.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: DollarSign,
    title: "Fundraising & Investor Readiness",
    description:
      "Tailored support to craft your pitch, polish your data room, and engage with global investors. Our investor network spans angels, VCs, and family offices looking for globally scalable ventures.",
    color: "from-indigo-500 to-purple-500",
  },
];

function Work() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = React.useCallback(() => {
    if (api) {
      intervalRef.current = setInterval(() => {
        const selected = api.selectedScrollSnap();
        const lastIndex = api.scrollSnapList().length - 1;

        if (selected === lastIndex) {
          api.scrollTo(0);
        } else {
          api.scrollNext();
        }
      }, 3000);
    }
  }, [api]);

  const stopAutoplay = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      stopAutoplay();
      startAutoplay();
    });

    api.on("reInit", () => {
      stopAutoplay();
      startAutoplay();
    });

    // Start autoplay when component mounts
    startAutoplay();

    // Clean up interval on component unmount
    return () => {
      stopAutoplay();
    };
  }, [api, startAutoplay, stopAutoplay]);

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
          What We Do
        </h2>
        <p>
          We go beyond mentorship — we embed you in a network of corporate
          insiders, strategic advisors, and hands-on coaches who will walk with
          you through every stage of your international expansion journey.
        </p>
      </motion.div>

      <div className="space-y-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 h-full">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  className="p-1 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="p-4 border border-[#80828280] rounded-md flex flex-col gap-4 items-start relative z-10 h-full">
                    <service.icon className="size-8 flex-shrink-0 text-primary" />
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-[600] min-h-[3.5rem] flex items-start">
                        {service.title}
                      </h3>
                      <p>{service.description}</p>
                    </div>
                    <Grid />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* controls */}
          <div className="flex items-center justify-between mt-4 px-4">
            <div className="flex gap-2">
              {Array.from({ length: count / 2 + 3 - 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`size-2 rounded-full ${
                    index + 1 === current ? "bg-primary" : "bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 left-auto right-auto top-auto cursor-pointer" />
              <CarouselNext className="static translate-x-0 translate-y-0 left-auto right-auto top-auto cursor-pointer" />
            </div>
          </div>
        </Carousel>
      </div>
    </Container>
  );
}

export default Work;
