"use client";

import {
  AtomWrapper,
  AtomText,
  AtomLink,
  SheetTrigger,
  BurgerIcon,
  AtomButton,
} from "@atoms";

import { Notification } from "@molecules";

interface NavigationHeaderProps {
  isInsideSheet?: boolean;
  isModal?: boolean;
}

export const NavigationHeader = ({
  isInsideSheet = false,
  isModal = false,
}: NavigationHeaderProps) => {
  return (
    <AtomWrapper variant="logo_nav_part" asChild>
      <header>
        <AtomLink href="/">
          <AtomText variant="logo">Logo</AtomText>
        </AtomLink>
        <AtomWrapper variant="burger_wrapper">
          <Notification />
          {isInsideSheet && (
            <SheetTrigger asChild>
              <AtomButton variant="burger_button" aria-label="Open menu">
                <BurgerIcon className="w-[40px] h-[40px]" active={isModal} />
              </AtomButton>
            </SheetTrigger>
          )}
        </AtomWrapper>
      </header>
    </AtomWrapper>
  );
};
