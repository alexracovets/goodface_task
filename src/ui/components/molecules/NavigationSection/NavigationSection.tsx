"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { AtomButton, AtomLink, AtomText, AtomWrapper } from "@atoms";

import { NavigationIconType } from "@types";

interface NavigationSectionProps {
  title: string;
  content: { name: string; icon: React.ReactNode; link: string }[];
}

export const NavigationSection = ({
  title,
  content,
}: NavigationSectionProps) => {
  const pathname = usePathname();
  return (
    <AtomWrapper variant="navigation_section">
      <AtomText variant="navigation_section_title">{title}</AtomText>
      <AtomWrapper variant="navigation_section_content">
        {content.map((item) => (
          <AtomButton
            key={item.name}
            variant="navigation_item"
            data-active={item.link === pathname}
            asChild
          >
            <AtomLink href={item.link}>
              {React.isValidElement(item.icon)
                ? React.cloneElement(
                    item.icon as React.ReactElement<NavigationIconType>,
                    {
                      className: `w-[20px] h-[20px] ${
                        (item.icon.props as { className?: string })
                          ?.className || ""
                      }`.trim(),
                    }
                  )
                : item.icon}
              {item.name}
            </AtomLink>
          </AtomButton>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};
