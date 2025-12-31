"use client";

import { NavigationAplication } from "@organisms";
import { AtomWrapper, Loader } from "@atoms";

import { ChildrenType } from "@types";
import { useMobile } from "@hooks";

export const LayoutGoodface = ({ children }: ChildrenType) => {
  const isMobile = useMobile();

  return (
    <AtomWrapper variant="goodface_wrapper">
      <NavigationAplication />
      {children}
      {isMobile === undefined && <Loader />}
    </AtomWrapper>
  );
};
