"use client";

import {
  NavigationAdditional,
  NavigationSections,
  NewProxies,
} from "@molecules";
import { AtomWrapper, AtomHR } from "@atoms";

export const NavigationContent = () => {
  return (
    <AtomWrapper variant="navigation_content">
      <NewProxies />
      <NavigationSections />
      <AtomHR />
      <NavigationAdditional />
    </AtomWrapper>
  );
};
