"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

import {
  AtomWrapper,
  AtomText,
  AtomLink,
  SheetTrigger,
  BurgerIcon,
  AtomButton,
} from "@atoms";

import { Notification } from "@molecules";
import { cn } from "@utils";

interface NavigationHeaderProps {
  isInsideSheet?: boolean;
  isModal?: boolean;
}

export const NavigationHeader = ({
  isInsideSheet = false,
  isModal = false,
}: NavigationHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(true);
  const [isShadow, setIsShadow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!scrollY) return null;

    const previous = scrollY.getPrevious();

    if (previous !== undefined) {
      const headerHeight = headerRef.current?.clientHeight || 60;
      const scrollThreshold = headerHeight + 40;
      const scrollDelta = latest - previous;
      setIsShadow(latest > headerHeight);
      setIsSticky(scrollDelta < 0 || latest < scrollThreshold);
    }
  });

  return (
    <AtomWrapper variant="logo_nav_part" asChild>
      <motion.header
        ref={headerRef}
        initial="visible"
        animate={isSticky ? "visible" : "hidden"}
        variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "max-sm:fixed! w-full z-10 translate-y-0",
          isShadow && !isModal ? "shadow-md" : "shadow-none"
        )}
        inert={!isSticky ? true : undefined}
      >
        <AtomLink href="/">
          <AtomText variant="logo">Logo</AtomText>
        </AtomLink>
        <AtomWrapper variant="burger_wrapper">
          <Notification />
          {isInsideSheet && (
            <SheetTrigger asChild>
              <AtomButton variant="burger_button" aria-label="Navigation menu">
                <BurgerIcon
                  className="w-[40px] xl:w-16 h-[40px] xl:h-16"
                  active={isModal}
                />
              </AtomButton>
            </SheetTrigger>
          )}
        </AtomWrapper>
      </motion.header>
    </AtomWrapper>
  );
};
