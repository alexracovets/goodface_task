"use client";

import { usePathname } from "next/navigation";

import {
  NavigationAdditional,
  NavigationSections,
  NewProxies,
} from "@molecules";
import {
  AtomWrapper,
  AtomHR,
  CustomScroll,
  AtomButton,
  AtomLink,
} from "@atoms";

export const NavigationContent = () => {
  const pathname = usePathname();

  return (
    <CustomScroll className="h-full">
      <AtomWrapper variant="navigation_content">
        <NewProxies />
        <AtomWrapper variant="navigation_section_content">
          <AtomButton
            variant="navigation_item"
            data-active={"#" === pathname}
            asChild
          >
            <AtomLink href={"#"}>
              <AtomWrapper variant="navigation_item_content">
                
                Dashboard
              </AtomWrapper>
            </AtomLink>
          </AtomButton>
        </AtomWrapper>
        <NavigationSections />
        <AtomHR />
        <NavigationAdditional />
      </AtomWrapper>
    </CustomScroll>
  );
};
