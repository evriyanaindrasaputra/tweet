"use client";
import  { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "@remix-run/react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { cn } from "~/lib/utils";

type NavItem = {
  name: string
  link: string
  icon?: JSX.Element
}

const navItems : NavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border  border-white/[0.4] rounded-full  bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
        <Link
        key={`link=${idx}`} // Ensure `idx` is defined in your component's scope 
        to={navItem.link} 
        className={cn(
          "relative text-neutral-100 items-center flex space-x-1  dark:hover:text-neutral-200 hover:text-neutral-500"
        )}
      >
        {navItem.name} {/* Assuming you want to display the name of the nav item 
        u cann add more items here :) */}
      </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
