"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import {
  SheetContent,
  SheetTrigger,
  AtomWrapper,
  AtomButton,
  AtomText,
  AtomLink,
  Sheet,
} from "@atoms";

import {
  NavigationHeader,
  NavigationContent,
  NavigationFooter,
} from "@molecules";

import { useMobile } from "@hooks";

export const NavigationAplication = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile === false || isMobile === undefined) {
    return (
      <AtomWrapper
        variant="navigation_aplication"
        aria-label="Navigation Aplication"
        asChild
      >
        <nav>
          <NavigationHeader />
          <NavigationContent />
          <NavigationFooter />
        </nav>
      </AtomWrapper>
    );
  }

  return (
    <>
      <AtomWrapper
        variant="navigation_aplication"
        aria-label="Navigation Aplication"
        asChild
      >
        <nav>
          <AtomWrapper variant="logo_nav_part" asChild>
            <header className="flex items-center justify-between">
              <AtomLink href="/">
                <AtomText variant="logo">Logo</AtomText>
              </AtomLink>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <AtomButton
                    variant="notification"
                    className="border-none"
                    aria-label="Відкрити меню"
                  >
                    <Menu className="w-6 h-6" />
                  </AtomButton>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-full p-0 flex flex-col bg-base-white border-grey-200"
                >
                  <AtomWrapper
                    variant="navigation_aplication"
                    className="h-full"
                    asChild
                  >
                    <nav className="flex flex-col h-full">
                      <NavigationHeader />
                      <NavigationContent />
                      <NavigationFooter />
                    </nav>
                  </AtomWrapper>
                </SheetContent>
              </Sheet>
            </header>
          </AtomWrapper>
        </nav>
      </AtomWrapper>
    </>
  );
};
