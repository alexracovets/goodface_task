"use client";

import { AtomButton, AtomText, DotsVerticalIcon, AtomWrapper } from "@atoms";

export const NavigationFooter = () => {
  return (
    <AtomWrapper variant="navigation_footer" asChild>
      <footer>
        <AtomWrapper>
          <AtomText variant="user_name">Henry Smith</AtomText>
          <AtomText variant="user_email">henry.smith@gmail.com</AtomText>
        </AtomWrapper>
        <AtomButton variant="user_details" aria-label="User details">
          <DotsVerticalIcon />
        </AtomButton>
      </footer>
    </AtomWrapper>
  );
};
