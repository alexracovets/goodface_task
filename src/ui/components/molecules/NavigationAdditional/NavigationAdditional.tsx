"use client";

import React from "react";

import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  AtomWrapper,
  ReceiptIcon,
  HelpCircle,
  Accordion,
  AtomLink,
} from "@atoms";

import { NavigationIconType } from "@types";


const navigationAdditional = [
  {
    name: "Billing",
    icon: <ReceiptIcon />,
    options: [
      {
        name: "Billing 1",
        link: "#",
      },
      {
        name: "Billing 2",
        link: "#",
      },
      {
        name: "Billing 3",
        link: "#",
      },
    ],
  },
  {
    name: "Help",
    icon: <HelpCircle />,
    options: [
      {
        name: "Help 1",
        link: "#",
      },
      {
        name: "Help 2",
        link: "#",
      },
      {
        name: "Help 3",
        link: "#",
      },
    ],
  },
];

export const NavigationAdditional = () => {
  return (
    <AtomWrapper variant="navigation_additional" asChild>
      <Accordion type="multiple" className="w-full">
        {navigationAdditional.map((item, idx) => (
          <AccordionItem key={idx} value={item.name}>
            <AccordionTrigger>
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
            </AccordionTrigger>
            <AccordionContent>
              <AtomWrapper variant="navigation_additional_content">
                {item.options.map((option, idx) => (
                  <AtomLink
                    key={idx}
                    href={option.link}
                    variant="navigation_additional_item"
                  >
                    {option.name}
                  </AtomLink>
                ))}
              </AtomWrapper>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AtomWrapper>
  );
};
