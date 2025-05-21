"use client";
import {
  Capibilyties,
  
} from "@/container";
import { useEffect, useRef } from "react";
import { Curve, Ready } from "@/components";
import { AnimatedTestimonialsDemo } from "@/data/data";
import { LampDemoServ } from "@/data/data";



export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (containerRef.current) {
        const locomotiveScroll = new LocomotiveScroll({
        
          // Add other options as needed
        });
        // Optionally, you can destroy the instance when the component unmounts
        return () => {
          locomotiveScroll.destroy();
        };
      } else {
        console.error("Container element not found.");
      }
    })();
  }, []);


  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
      
          <LampDemoServ />
          
      
        <div className="mb-20">
    
          <Capibilyties />
        </div>
        <div className="mb-20">
          <AnimatedTestimonialsDemo />
        </div>
        
          <Ready />
       
      </Curve>
    </>
  );
}