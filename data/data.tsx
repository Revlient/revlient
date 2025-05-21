import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LampContainer } from "@/components/ui/lamp";
import { HeroParallax } from "@/components/ui/hero-parallax";



import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";


export function AnimatedTestimonialsDemo() {
  const testimonials = [ {
    quote:
      "Medcity International is a leading pan-India institute for IELTS, German, and language training, with expert study abroad and India services.",
    name: "Medcity International Academy",
    designation: "Education",
    src: "/b2.png",
  },
    {
      quote:
        "Soumya Shyam is a renowned celebrity makeup artist, trusted by top names across India for her signature style and flawless artistry.",
      name: "Soumya Shayam",
      designation: "Beauty Artist",
      src: "/b5.png",
    },
    {
      quote:
        "BlackOnyx International LLC recruits talent from India, Oman, and Dubai, supplying top-tier staff to leading hotels and companies in Dubai and Oman, with strong expertise in hospitality and cleaning services.",
      name: "Black Onyx",
      designation: "Recruiting Agency",
      src: "/b4.png",
    },
    {
      quote:
        "Gloria Global Ventures LLP specializes in IELTS, German, and language training, delivering focused, high-quality coaching to help students achieve global language proficiency.",
      name: "Gloria Global Ventures LLP.",
      designation: "Education",
      src: "/b1.png",
    },
    {
      quote:
        "BamBrush specializes in eco-friendly bamboo brushes, supplying sustainable solutions to resorts and exporting globally.",
      name: "Bam Brush",
      designation: "natural product",
      src: "/b3.png",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;

};





export function TimelineDemo() {
  const data = [
    {
      title: "Client Requirements & Discovery",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Before crafting any strategy, we take the time to deeply understand your business, goals, and audience. Our team conducts thorough market research to align our approach with your brand identity.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/1.jpeg" alt="Discovery Phase" width={250} height={250} layout="intrinsic" />
            
          </div>
        </div>
      ),
    },
    {
      title: "Strategy & Planning",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Our experts map out a strategic plan that includes content, branding, and tech solutions. Every decision is backed by data to ensure maximum impact.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/2.jpeg" alt="Strategy Session" width={250} height={250} layout="intrinsic" />
           
          </div>
        </div>
      ),
    },
    {
      title: "Execution & Implementation",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-4">
            Our team launches campaigns, develops websites, and executes branding strategies with precision, ensuring a seamless experience.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              𝌞 Content Strategy & Branding
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              🖥️ Website & Tech Development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              📱 Social Media & Community Management
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              💸 Paid Marketing & Ad Campaigns
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              📈 Performance Analytics & Optimization
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Image src="/3.jpeg" alt="Execution Process" width={250} height={250} layout="intrinsic" />
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-gray-900 p-8 rounded-xl">
      <Timeline data={data} />
    </div>
  );
}

export function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex text-9xl items-center justify-center relative">
    <div className="h-[40rem] text-4xl flex items-center justify-center absolute">
      <TextHoverEffect text="REVLIENT." />
    </div>
    <TextHoverEffect text="REVLIENT." />
  </div>


  );
};

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b3.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b4.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b4.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/revlogo.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b3.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b4.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b3.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  }
];








export function LampDemoCraft() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        WORKS<br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoServ() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        TASKS <br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoTeam() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        TEAM <br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}








