"use client";

import React from "react";

import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  AtomWrapper,
  Accordion,
  AtomLink,
} from "@atoms";

import { NavigationIconType } from "@types";

interface NavigationAdditionalProps {
  additional: {
    name: string;
    icon: React.ReactNode;
    options: { name: string; link: string }[];
  }[];
}

export const NavigationAdditional = ({
  additional,
}: NavigationAdditionalProps) => {
  return (
    <AtomWrapper variant="navigation_additional" asChild>
      <Accordion type="multiple" className="w-full">
        {additional.map((item, idx) => (
          <AccordionItem key={idx} value={item.name}>
            <AccordionTrigger>
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
