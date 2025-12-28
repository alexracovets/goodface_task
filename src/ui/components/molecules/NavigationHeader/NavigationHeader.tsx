"use client";

import { AtomWrapper, AtomText, AtomLink } from "@atoms";
import { Notification } from "@molecules";

export const NavigationHeader = () => {
  return (
    <AtomWrapper variant="logo_nav_part" asChild>
      <header>
        <AtomLink href="/">
          <AtomText variant="logo">Logo</AtomText>
        </AtomLink>
        <Notification />
      </header>
    </AtomWrapper>
  );
};
