import { useEffect, useRef } from "react";
import { Curve, Ready } from "@/components";
import { Projectspresentation } from "@/container";
import { LampDemoCraft } from "@/data/data";

export default function Presentation() {
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
      <div data-scroll-container ref={containerRef}>
        <Curve backgroundColor={"#f1f1f1"}>
          <LampDemoCraft />
          <Projectspresentation />
          <Ready />
        </Curve>
      </div>
    </>
  );
}
