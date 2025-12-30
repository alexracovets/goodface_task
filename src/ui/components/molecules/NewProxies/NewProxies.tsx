"use client";

import { AtomButton, PlusIcon } from "@atoms";

export const NewProxies = () => {
  return (
    <AtomButton variant="secondary">
      <PlusIcon className="w-[16px] xl:w-[1.6rem] h-[16px] xl:h-[1.6rem]" />
      Buy new proxies
    </AtomButton>
  );
};
