"use client";

import { AtomButton, AtomText, DotsVerticalIcon } from "@atoms";

export const NavigationFooter = () => {
  return (
    <div className="flex justify-between items-center gap-x-[8px] py-[12px] pr-[12px] pl-[16px] border-t border-grey-200">
      <div>
        <AtomText variant="user_name">Henry Smith</AtomText>
        <AtomText variant="user_email">henry.smith@gmail.com</AtomText>
      </div>
      <AtomButton variant="user_details">
        <DotsVerticalIcon className="w-[20px] h-[20px]" />
      </AtomButton>
    </div>
  );
};
