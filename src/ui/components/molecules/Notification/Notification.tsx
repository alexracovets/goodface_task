"use client";

import { useState } from "react";

import { AtomWrapper, AtomButton, AtomText, BellIcon } from "@atoms";

export const Notification = () => {
  const [notificationCount] = useState(2);
  return (
    <AtomButton variant="notification">
      <BellIcon className="w-[20px] h-[20px]" />
      {notificationCount > 0 && (
        <AtomWrapper variant="notification_count">
          <AtomText variant="notification_count">{notificationCount}</AtomText>
        </AtomWrapper>
      )}
    </AtomButton>
  );
};
