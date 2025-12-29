"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { AtomButton, AtomLink, AtomText, AtomWrapper, LiveLog, EyeIcon, MonitorIcon, SelectAll, ClipboardList, UsersIcon, BasketIcon, KeyIcon, CoinIcon, UserPlusIcon } from "@atoms";

import { NavigationIconType } from "@types";

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


export const NavigationSections = () => {
  const pathname = usePathname();
  return (
    <>
      {navigationSections.map((section, idx) => {
        return (
          <AtomWrapper variant="navigation_section" key={idx}>
            <AtomText variant="navigation_section_title">{section.title}</AtomText>
            <AtomWrapper variant="navigation_section_content">
              {section.content.map((item) => (
                <AtomButton
                  key={item.name}
                  variant="navigation_item"
                  data-active={item.link === pathname}
                  asChild
                >
                  <AtomLink href={item.link}>
                    <AtomWrapper variant="navigation_item_content">
                      {React.isValidElement(item.icon)
                        ? React.cloneElement(
                          item.icon as React.ReactElement<NavigationIconType>,
                          {
                            className: `w-[20px] h-[20px] ${(item.icon.props as { className?: string })
                              ?.className || ""
                              }`.trim(),
                          }
                        )
                        : item.icon}
                      {item.name}
                    </AtomWrapper>
                    {item.live && <LiveLog className="w-[20px] h-[20px]" />}
                  </AtomLink>
                </AtomButton>
              ))}
            </AtomWrapper>
          </AtomWrapper >
        )
      })
      }
    </>
  );
};
