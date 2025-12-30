"use client";

import {
  NavigationAdditional,
  NavigationSections,
  NewProxies,
} from "@molecules";
import { AtomWrapper, AtomHR, CustomScroll } from "@atoms";

export const NavigationContent = () => {
  return (
    <CustomScroll className="h-full">
      <AtomWrapper variant="navigation_content">
        <NewProxies />
        <NavigationSections />
        <AtomHR />
        <NavigationAdditional />
      </AtomWrapper>
    </CustomScroll>
  );
};
