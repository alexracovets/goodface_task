"use client";

import { usePathname } from "next/navigation";

import {
  NavigationAdditional,
  NavigationSections,
  NewProxies,
} from "@molecules";

import {
  LayoutDashboardIcon,
  CustomScroll,
  AtomWrapper,
  AtomButton,
  AtomLink,
  AtomHR,
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
                <LayoutDashboardIcon className="w-[20px] h-[20px] xl:w-[2rem] xl:h-[2rem]" />
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
