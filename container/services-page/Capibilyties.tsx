"use client";

import { useState, useEffect } from "react";
import { TimelineDemo } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";

const serviceItems = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Strategic social media marketing to elevate your brand's digital presence",
    icon: "📱",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    gradient: "from-purple-500 to-indigo-600",
    services: [
      { id: 101, title: "Content Strategy", href: "#", icon: "📝" },
      { id: 102, title: "Community Management", href: "#", icon: "👥" },
      { id: 103, title: "Paid Social Campaigns", href: "#", icon: "💰" },
      { id: 104, title: "Social Analytics", href: "#", icon: "📊" },
    ],
  },
  {
    id: 2,
    title: "Branding",
    description: "Crafting distinctive brand identities that capture attention and create connections",
    icon: "🎨",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    gradient: "from-pink-500 to-rose-600",
    services: [
      { id: 201, title: "Brand Identity", href: "#", icon: "🔍" },
      { id: 202, title: "Logo Design", href: "#", icon: "✒️" },
      { id: 203, title: "Brand Guidelines", href: "#", icon: "📘" },
      { id: 204, title: "Brand Strategy", href: "#", icon: "🧠" },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    description: "Beautiful, functional websites that deliver exceptional user experiences",
    icon: "💻",
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    gradient: "from-cyan-500 to-blue-600",
    services: [
      { id: 301, title: "Website Design", href: "#", icon: "🎭" },
      { id: 302, title: "Website Revamp", href: "#", icon: "🔄" },
      { id: 303, title: "E-commerce", href: "#", icon: "🛒" },
      { id: 304, title: "CMS Development", href: "#", icon: "⚙️" },
    ],
  },
  {
    id: 4,
    title: "Tech Solutions",
    description: "Innovative technical solutions tailored to your unique business challenges",
    icon: "🚀",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    gradient: "from-amber-500 to-orange-600",
    services: [
      { id: 401, title: "System Integration", href: "#", icon: "🔌" },
      { id: 402, title: "Workflow Automation", href: "#", icon: "⚡" },
      { id: 403, title: "Custom Development", href: "#", icon: "🛠️" },
      { id: 404, title: "Technical Consultation", href: "#", icon: "💡" },
    ],
  },
];

export default function CreativeServicesGrid() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Improved resize handling
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width set
    setWindowWidth(window.innerWidth);

    // Add and remove event listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedService = serviceItems.find((item) => item.id === activeService);

  const openModal = (id: number) => {
    setActiveService(id);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // More responsive grid logic
  const getGridColumns = () => {
    if (windowWidth < 640) return "grid-cols-1";
    if (windowWidth < 1024) return "grid-cols-2";
    return "grid-cols-4";
  };

  // Accessibility and SEO improvements
  return (
    <div 
      className="w-full bg-gradient-to-b from-black via-black to-gray-900 text-white py-12 md:py-20 px-4 md:px-8"
      aria-label="Our Creative Services"
    >
      {/* Header Section with Enhanced Typography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center space-y-6 md:space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Creative
          </span>{" "}
          Services
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Elevate your brand with expert solutions tailored to your unique vision and goals. 
          We transform challenges into opportunities.
        </p>
      </motion.div>

      {/* Services Grid with Enhanced Hover Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`max-w-7xl mx-auto grid ${getGridColumns()} gap-6 md:gap-10 mt-12 md:mt-16`}
      >
        {serviceItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1 * index,
              type: "spring",
              stiffness: 100
            }}
            className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl group transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <div 
              className={`absolute inset-0 opacity-30 bg-gradient-to-br ${item.gradient} transition-all duration-500 group-hover:opacity-50`} 
            />
            <div className="relative p-6 md:p-8 flex flex-col h-full space-y-4">
              <div className="text-5xl mb-2 transform transition-transform group-hover:rotate-6">
                {item.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {item.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg flex-grow line-clamp-3">
                {item.description}
              </p>
              <button
                onClick={() => openModal(item.id)}
                aria-label={`Explore ${item.title} Services`}
                className="w-full py-3 px-6 bg-white text-black text-base md:text-lg font-semibold rounded-xl 
                  hover:bg-gray-100 transition transform hover:scale-105 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal with Enhanced Interactions */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                type: "spring", 
                damping: 15, 
                stiffness: 300 
              }}
              className="bg-white text-black border border-gray-200 p-8 md:p-12 rounded-3xl max-w-xl w-full space-y-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button with Better Interaction */}
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-500 hover:text-black hover:rotate-90 transition-all duration-300 text-2xl"
              >
                ✖
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{selectedService.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {selectedService.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg mb-6">
                {selectedService.description}
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selectedService.services.map((service, index) => (
                  <motion.a
                    key={service.id}
                    href={service.href}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.1 + (index * 0.1)
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)"
                    }}
                    className="flex items-center gap-4 bg-gray-100 border border-gray-200 p-4 rounded-xl 
                      transition-all duration-300 hover:bg-gray-200 focus:outline-none 
                      focus:ring-2 focus:ring-blue-500"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="text-base md:text-lg font-medium text-gray-900">
                      {service.title}
                    </h3>
                  </motion.a>
                ))}
              </div>

              {/* Contact Button with Dynamic Color */}
              <button
                onClick={() => window.location.href = "/contact"}
                className={`w-full py-4 px-6 ${selectedService.color} text-white text-lg font-bold 
                  rounded-xl transition duration-300 hover:opacity-90 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-white`}
              >
                Contact Us Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Section with Subtle Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 md:mt-24"
      >
        <TimelineDemo />
      </motion.div>
    </div>
  );
}