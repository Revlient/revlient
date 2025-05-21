"use client";
import { useEffect } from "react";
import { Curve, Ready, Marquee } from "@/components";
import { About, Clients, Hero, Projects } from "@/container";


export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
      
      
        // Add other options as needed
      });
      // Optionally, you can destroy the instance when the component unmounts
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  return (
    <>
      <div id="main"> {/* Add an id to the container */}
        <Curve backgroundColor={"#f1f1f1"}>
          <Hero />
          <div className="w-full bg-black text-red-500 z-10 relative  padding-y">
            <Marquee
              title="Revlient"
              className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
            />
          </div>
          <About />
          <Projects />
          <Clients />
          <Ready />
        </Curve>
      </div>
    </>
  );
}
