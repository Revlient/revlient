"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTestimonialsDemo } from "@/data/data";



export default function Clients() {
 

  return (
    <section className="padding-y">
      <h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Our Clients
      </h1>
      
      <AnimatedTestimonialsDemo />
    
    
      
    </section>
  );
}