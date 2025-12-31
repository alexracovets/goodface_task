"use client";

import { AtomButton, AtomText, DotsVerticalIcon } from "@atoms";

export const NavigationFooter = () => {
  return (
    <div className="flex justify-between items-center gap-x-[8px] xl:gap-x-[0.8rem] py-[12px] xl:py-[1.2rem] pr-[12px] xl:pr-[1.2rem] pl-[16px] xl:pl-[1.6rem] border-t border-grey-200">
      <div>
        <AtomText variant="user_name">Henry Smith</AtomText>
        <AtomText variant="user_email">henry.smith@gmail.com</AtomText>
      </div>
      <AtomButton variant="user_details" aria-label="User details">
        <DotsVerticalIcon />
      </AtomButton>
    </div>
  );
};
