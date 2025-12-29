"use client";

import { NavigationAplication } from "@organisms";
import { AtomWrapper } from "@atoms";

import { ChildrenType } from "@types";

export const LayoutGoodface = ({ children }: ChildrenType) => {
  return (
    <AtomWrapper variant="goodface_wrapper">
      <NavigationAplication />
      {children}
    </AtomWrapper>
  );
};
