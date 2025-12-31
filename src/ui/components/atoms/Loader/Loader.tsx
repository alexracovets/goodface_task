"use client";

import { LuLoaderCircle } from "react-icons/lu";
import { motion } from "framer-motion";

import { cn } from "@utils";

export const Loader = ({ absolute }: { absolute?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className={cn(
        "top-0 left-0 flex justify-center items-center bg-white z-1000",
        absolute ? "absolute w-full h-full" : "fixed w-dvw h-dvh"
      )}
      tabIndex={-1}
      aria-hidden="true"
      role="presentation"
    >
      <LuLoaderCircle className="animate-spin text-[4rem] text-primary-500" />
    </motion.div>
  );
};
