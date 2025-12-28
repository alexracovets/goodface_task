"use client";

import { useState } from "react";

import { AtomWrapper, AtomButton, AtomImage, AtomText } from "@atoms";

export const Notification = () => {
  const [notificationCount] = useState(2);
  return (
    <AtomButton variant="notification">
      <AtomImage
        src="./icons/bell.svg"
        alt="notification"
        variant="icon_medium"
      />
      {notificationCount > 0 && (
        <AtomWrapper variant="notification_count">
          <AtomText variant="notification_count">{notificationCount}</AtomText>
        </AtomWrapper>
      )}
    </AtomButton>
  );
};
