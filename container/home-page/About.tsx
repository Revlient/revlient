"use client";
import { Instagram, Linkedin, MessageCircle, ChevronRight } from "lucide-react";
import { FeaturesSectionDemo } from "@/components/ui/bentogrid";

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/revlient/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/+916238714197?text=Dear%20Revlient%20Marketing%20Team%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20services%20and%20ongoing%20projects.%20Could%20you%20please%20provide%20more%20details%20or%20let%20me%20know%20a%20suitable%20time%20to%20discuss%20further%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C%20Client", icon: <MessageCircle size={20} /> },
];

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "Maximize your brand's reach with our tailored social media strategies.",
    color: "#FF4D4D",
  },
  {
    id: 2,
    title: "Tech Solutions",
    description: "Empower your business with innovative tech solutions tailored to your needs.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Software Development",
    description: "Build powerful software applications with our expert development team.",
    color: "#FF4D4D",
  },
  {
    id: 4,
    title: "Website Creation",
    description: "Create stunning websites that captivate audiences and drive engagement.",
    color: "#4ECDC4",
  }
];

export default function About() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Refined background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-red-500/10 to-transparent blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-500/10 to-transparent blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl bg-gradient-to-b from-white/3 to-transparent opacity-5 rounded-full blur-3xl" />
      
      {/* Header Section - Refined typography and spacing */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-24">
        <div className="mb-7">
          <span className="px-5 py-1.5 bg-white/5 rounded-full text-xs tracking-widest font-medium text-teal-400 border border-white/5 uppercase">
            Creative Solutions
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
          Welcome to <span className="text-red-500">Revlient</span>
        </h1>
        
        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          We provide cutting-edge solutions in Social Media Marketing, tech innovations, software development, and website creation.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a 
            href="/contact" 
            className="px-8 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-full hover:shadow-lg hover:translate-y-px transition-all duration-300 flex items-center gap-2"
          >
            Start a Project <ChevronRight size={16} />
          </a>
          <a 
            href="/services" 
            className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm"
          >
            Explore Services 
          </a>
        </div>
      </div>

      {/* Services Section - Elegant grid with improved spacing */}
      <div id="services" className="w-full max-w-5xl mx-auto relative z-10 mb-24">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 flex flex-col h-full group hover:bg-white/8 transition-all duration-300"
            >
              <div className="w-12 h-1 mb-6" style={{ backgroundColor: service.color }}></div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: service.color }}>
                {service.title}
              </h3>
              <p className="text-gray-300 font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links Section - Refined */}
      <div className="pt-16 border-t border-white/5 relative z-10">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Connect With Us
        </h2>
        
        <div className="flex flex-wrap justify-center gap-5">
          {socialLinks.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 bg-white/5 rounded-xl border border-white/5 text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-teal-400">{item.icon}</div>
              <span className="font-medium">{item.title}</span>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p className="tracking-wide uppercase text-xs">Explore More</p>
        </div>
        
      </div>
    </section>
  );
}