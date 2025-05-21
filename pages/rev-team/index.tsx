import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Curve } from "@/components";
import { LampDemoTeam } from "@/data/data";
import Spline from "@splinetool/react-spline";

const teamMembers = [
  {
    name: "DEVJITH ANOOP",
    role: "CEO",
    image: "/dev.jpeg",
    description: "Visionary leader driving innovation & strategy.",
  },
  {
    name: "ADITHYAN",
    role: "Co-Founder",
    image: "/adi.jpeg",
    description: "Strategist & problem solver shaping the future.",
  },
  {
    name: "RAGHAV KRISHNA",
    role: "Tech & Software Developer",
    image: "/rag.jpeg",
    description: "Building seamless digital experiences & products.",
  },
  {
    name: "JITHU FRANCIS",
    role: "Tech & Software Developer",
    image: "/jithu.png",
    description: "Building seamless digital experiences & products.",
  },
  {
    name: "DEEPSHIKHA", 
    role: "Web Experience Designer",
    image: "/nsg.jpeg",
    description: "Crafting smooth and intuitive user interfaces for seamless digital experiences.",
  },
];

export default function MeetOurTeam() {
  const [index, setIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Hide scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle when Spline is loaded
  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  return (
    <Curve backgroundColor={"#f1f1f1"}>
      {/* Spline container - made responsive */}
      <div className="relative w-full h-screen">
        {/* Loading animation */}
        <AnimatePresence>
          {!isSplineLoaded && (
            <motion.div 
              className="absolute inset-0 z-20 bg-white flex flex-col justify-center items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src="/revnav.png" 
                alt="RevLogo"
                className="h-24 w-auto object-contain mb-6"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mt-4"
              >
                <motion.div
                  className="h-full bg-black rounded-full"
                  animate={{ x: [-256, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <p className="mt-4 text-gray-600 font-medium animate-pulse">RevBot Loading...</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Spline
          scene="https://prod.spline.design/qspgYwptxDY4ANel/scene.splinecode"
          className="w-full h-full"
          onLoad={handleSplineLoad}
        />
        
        {/* Full-width black footer with centered logo */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-black z-10 flex justify-center items-center rounded-t-3xl">
          <img 
            src="/revlogo.png" 
            alt="RevLogo" 
            className="h-16 w-auto object-contain"
          />
        </div>
        
        {/* Centered scroll indicator for all screen sizes */}
        <AnimatePresence>
          {showScrollIndicator && isSplineLoaded && (
            <motion.div 
              className="absolute bottom-10 text-red-500 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-lg font-medium mb-2">Scroll Down</p>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <LampDemoTeam />
      
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-white text-black pt-32 px-4">
        {/* Quote - centered and responsive on all devices */}
        <h1 className="absolute top-16 md:top-28 italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter font-light text-gray-700 text-center w-full max-w-xl mx-auto px-4 mb-16">
          &quot;Alone, we shine. Together, we set the world ablaze with greatness&quot;
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center text-center max-w-4xl w-full px-4 sm:px-6 md:px-8 mt-16 md:mt-24"
          >
            <motion.img
              src={teamMembers[index].image}
              alt={teamMembers[index].name}
              className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-lg border border-gray-300 mb-12"
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex flex-col items-center max-w-sm mt-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{teamMembers[index].name}</h2>
              <p className="text-base md:text-lg text-gray-600 mt-4 uppercase tracking-wide">
                {teamMembers[index].role}
              </p>
              <p className="mt-8 text-gray-700 leading-relaxed text-sm md:text-base">
                {teamMembers[index].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow navigation - horizontally split on both sides */}
        <div className="absolute left-4 sm:left-8 md:left-12 lg:left-24 top-1/2 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="p-3 sm:p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
          </button>
        </div>
        
        <div className="absolute right-4 sm:right-8 md:right-12 lg:right-24 top-1/2 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="p-3 sm:p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
          </button>
        </div>
      </section>
    </Curve>
  );
}