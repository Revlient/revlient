import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll events to show/hide the navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        className="w-full h-[8vh] bg-slate-400 bg-opacity-50 rounded-sm padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
        animate={hidden ? "hidden" : "visible"}
      >
        <div className="w-[60%]">
          <Link href={"/"}>
            <Image
              src="/revlogo.png"
              alt="nuke logo"
              width={110}
              height={140}
            />
          </Link>
        </div>
        <div className="flex gap-x-[20px] w-[50%]">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className={`w-fit paragraph font-medium font-NeueMontreal text-white capitalize flex flex-col hover ${
                item.id === 5 && "ml-auto"
              }`}
              href={item.href}
            >
              <TextHover
                titile1={item.title}
                titile2={item.title}
              />
            </Link>
          ))}
        </div>
      </motion.nav>
      
      <MobileNav />
    </>
  );
}