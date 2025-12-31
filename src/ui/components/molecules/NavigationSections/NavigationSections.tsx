"use client";

import { usePathname } from "next/navigation";
import React from "react";

import {
  AtomButton,
  AtomLink,
  AtomText,
  AtomWrapper,
  LiveLog,
  EyeIcon,
  MonitorIcon,
  SelectAll,
  ClipboardList,
  UsersIcon,
  BasketIcon,
  KeyIcon,
  CoinIcon,
  UserPlusIcon,
  variantsAtomWrapper,
} from "@atoms";

import { NavigationIconType } from "@types";
import { cn } from "@utils";

const navigationSections = [
  {
    title: "System Overview",
    content: [
      {
        name: "Observability Overview",
        icon: <EyeIcon />,
        link: "#",
      },
      {
        name: "Live Log Monitor",
        icon: <MonitorIcon />,
        link: "#",
        live: true,
      },
    ],
  },
  {
    title: "My Services",
    content: [
      {
        name: "Summary",
        icon: <SelectAll />,
        link: "#",
      },
      {
        name: "Proxy List",
        icon: <ClipboardList />,
        link: "#",
      },
      {
        name: "User Settings",
        icon: <UsersIcon />,
        link: "#",
      },
      {
        name: "All Products",
        icon: <BasketIcon />,
        link: "/",
      },
    ],
  },
  {
    title: "Developer Section",
    content: [
      {
        name: "API Keys",
        icon: <KeyIcon />,
        link: "#",
      },
      {
        name: "Proxy List",
        icon: <ClipboardList />,
        link: "#",
      },
    ],
  },
  {
    title: "Affiliate Programs",
    content: [
      {
        name: "Resellers Statistics",
        icon: <CoinIcon />,
        link: "#",
      },
      {
        name: "Affiliate Program",
        icon: <UserPlusIcon />,
        link: "#",
      },
    ],
  },
];

// Допоміжна функція для додавання класів розміру до іконок
const renderIcon = (icon: React.ReactNode) => {
  if (!React.isValidElement(icon)) return icon;

  const existingClassName =
    (icon.props as { className?: string })?.className || "";
  const iconClassName = cn(
    variantsAtomWrapper({ variant: "icon" }),
    existingClassName
  );

  return React.cloneElement(icon as React.ReactElement<NavigationIconType>, {
    className: iconClassName,
  });
};

export const NavigationSections = () => {
  const pathname = usePathname();
  return (
    <>
      {navigationSections.map((section, idx) => {
        return (
          <AtomWrapper variant="list" key={idx}>
            <AtomText variant="navigation_section_title">
              {section.title}
            </AtomText>
            <AtomWrapper variant="hero_content">
              {section.content.map((item) => (
                <AtomButton
                  key={item.name}
                  aria-label={`Go to ${item.name}`}
                  variant="navigation_item"
                  data-active={item.link === pathname}
                  asChild
                >
                  <AtomLink href={item.link}>
                    <AtomWrapper variant="navigation_item_content">
                      {renderIcon(item.icon)}
                      {item.name}
                    </AtomWrapper>
                    {item.live && <LiveLog variant="icon" />}
                  </AtomLink>
                </AtomButton>
              ))}
            </AtomWrapper>
          </AtomWrapper>
        );
      })}
    </>
  );
};
