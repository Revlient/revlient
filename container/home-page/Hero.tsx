import { useState, useEffect } from 'react';
import { Globe } from '@/components/ui/globe';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Initial loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Slight delay for content reveal
    const contentTimer = setTimeout(() => {
      setContentReady(true);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Creative Intro Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="relative w-60 h-60 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: [0, 1, 1]
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.6, 1]
              }}
            >
              <motion.div
                className="absolute w-full h-full rounded-full"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{
                  scale: [0.4, 1.5, 1],
                  opacity: [0, 0.5, 0],
                  border: ["2px solid rgba(255,255,255,0.1)", "1px solid rgba(255,255,255,0.8)", "0px solid rgba(255,255,255,0)"]
                }}
                transition={{ duration: 1.5 }}
              />
              
              <motion.div
                className="relative h-36 w-36"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{
                  opacity: [0, 1, 1],
                  scale: [0.8, 1.05, 1],
                  rotateY: [-30, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.7, 1]
                }}
              >
                <Image
                  src="/revlogo.png"
                  alt="Revlient"
                  layout="fill"
                />
              </motion.div>
              
              <motion.div
                className="absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  boxShadow: [
                    "0 0 0 0 rgba(255,255,255,0)",
                    "0 0 30px 10px rgba(255,255,255,0.3)",
                    "0 0 0 0 rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 1.5 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial top-1/9 from-gray-900/0 via-gray-900/10 to-black/80 z-0" />
      
      {/* Globe with responsive positioning - STATIC VERSION */}
      <motion.div
        className={`absolute inset-0 flex pointer-events-none ${isMobile ? 'items-center justify-center' : 'left-[475px] top-[400px] justify-center'}`}
        style={isMobile ? {top: '89%', left: '45%', transform: 'translate(-50%, -50%)'} : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 0.75 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`${isMobile ? 'scale-[4.99]' : 'scale-[3]'} pointer-events-none`}>
          <Globe 
            className="pointer-events-none" 
            // Add these props to disable interactions (adjust based on your Globe component's API)
            interactive={false}
            autoRotate={true}
            rotateSpeed={0.5}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </div>
      </motion.div>

      {/* Content with creative reveal animations - adjusted for mobile/desktop */}
      <div className={`relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6 text-center ${isMobile ? '' : '-mt-20'}`}>
        {/* Logo instead of agency name */}
        <motion.div
          className="relative h-16 w-48 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : 15 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/revwhite.png"
            alt="Revlient"
            layout="fill"
            objectFit="contain"
            className="scale-[200%] sm:scale-150 md:scale-125"
          />
        </motion.div>
        
        {/* Elegant divider with creative animation */}
        <motion.div
          className="h-px bg-white/30 my-8 overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: contentReady ? 128 : 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="h-full w-full bg-white/90"
            initial={{ x: "-100%" }}
            animate={{ x: contentReady ? ["0%", "100%"] : "-100%" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              times: [0, 1],
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Main headline with creative reveal - adjusted for mobile */}
        <motion.div
          className="mb-10 overflow-visible"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl text-white leading-tight tracking-tight"
            initial={{ y: 50 }}
            animate={{ y: contentReady ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We Craft Digital Legacies
          </motion.h1>
        </motion.div>
        
        {/* Subheading with fade-in plus slight blur animation */}
        <motion.p
          className="text-lg md:text-4xl lg:text-3xl text-red-600 font-semibold font-NeueMontreal max-w-3xl"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: contentReady ? 1 : 0,
            filter: contentReady ? "blur(0px)" : "blur(10px)"
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Transforming visions into digital experiences that resonate and endure */}
        </motion.p>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      
      {/* Top subtle vignette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
    </div>
  );
}
