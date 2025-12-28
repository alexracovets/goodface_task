"use client";

import { AtomWrapper } from "@atoms";
import {
  NavigationHeader,
  NavigationContent,
  NavigationFooter,
} from "@molecules";

export const NavigationAplication = () => {
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
};
