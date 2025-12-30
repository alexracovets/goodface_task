"use client";

import { useState, useEffect } from "react";

import { SheetContent, SheetTitle, AtomWrapper, Sheet } from "@atoms";

import {
  NavigationHeader,
  NavigationContent,
  NavigationFooter,
} from "@molecules";

import { useMobile } from "@hooks";

export const NavigationAplication = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  return (
    <>
      {isMobile ? (
        <AtomWrapper
          variant="navigation_aplication"
          aria-label="Navigation Aplication"
          asChild
        >
          <nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
              <NavigationHeader isInsideSheet={true} isModal={isOpen} />
              <SheetContent
                side="left"
                className="max-sm:w-full flex flex-col bg-base-white border-grey-200 top-[70px] h-[calc(100vh-70px)]"
              >
                <SheetTitle
                  className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0"
                  style={{ clipPath: "inset(50%)" }}
                >
                  Navigation Menu
                </SheetTitle>
                <NavigationContent />
                <NavigationFooter />
              </SheetContent>
            </Sheet>
          </nav>
        </AtomWrapper>
      ) : (
        <AtomWrapper
          variant="navigation_aplication"
          aria-label="Navigation Aplication"
          asChild
        >
          <nav>
            <NavigationHeader isInsideSheet={false} />
            <NavigationContent />
            <NavigationFooter />
          </nav>
        </AtomWrapper>
      )}
    </>
  );
};
