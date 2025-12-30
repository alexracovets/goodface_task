"use client";

import { PointerEventHandler } from "react";

import { AtomImage, AtomWrapper } from "@atoms";
import { cn } from "@utils";

interface Option {
  label: string;
  value: string;
  image: string;
  available: number;
}

interface NovaPoshtaSelectType {
  isOpen: boolean;
  options: Option[];
  onDropdownPointerDown?: PointerEventHandler<HTMLDivElement>;
  selectItem: (option: Option) => void;
  selectedItem: Option;
}

export const InputSelect = ({
  options,
  selectItem,
  selectedItem,
  onDropdownPointerDown,
  isOpen,
}: NovaPoshtaSelectType) => {
  return (
    <>
      {isOpen && (
        <AtomWrapper
          onPointerDownCapture={onDropdownPointerDown}
          className="flex flex-col w-full py-[4px] border border-grey-300 rounded-[4px]"
          asChild
        >
          <ul>
            {options.map((option, idx) => (
              <AtomWrapper
                key={idx}
                onClick={() => selectItem(option)}
                aria-selected={option === selectedItem}
                variant="select_dropdown_item"
                className={cn(option.available === 0 && "grayscale")}
                asChild
              >
                <li>
                  <AtomWrapper variant="dropdown_item_inner">
                    <AtomImage
                      src={option.image}
                      alt={option.label}
                      variant="location"
                    />
                    {option.label}
                  </AtomWrapper>
                  <AtomWrapper variant="dropdown_item_additional">
                    <p>{option.available} available</p>
                  </AtomWrapper>
                </li>
              </AtomWrapper>
            ))}
          </ul>
        </AtomWrapper>
      )}
    </>
  );
};
