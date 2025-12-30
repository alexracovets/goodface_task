"use client";

import { useFormContext } from "react-hook-form";
import {
  useRef,
  useState,
  PointerEventHandler,
  useCallback,
  useEffect,
} from "react";

import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  AtomButton,
  InputSelect,
  AtomWrapper,
  AtomImage,
  ChevronDownIcon,
} from "@atoms";

import { FormItemType, LocationType } from "@types";
import { cn } from "@utils";

interface FormElementSelectProps {
  name: string;
  label: string;
  placeholder: string;
  wrapperVariant?: FormItemType["variant"];
  className?: string;
  options: LocationType[];
}

export const FormElementSelect = ({
  name,
  label,
  wrapperVariant,
  className,
  placeholder,
  options,
}: FormElementSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const ignoreBlurRef = useRef(false);
  const inputRef = useRef<HTMLButtonElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const form = useFormContext();

  const handleDropdownPointerDown: PointerEventHandler<HTMLDivElement> = () => {
    ignoreBlurRef.current = true;
    window.setTimeout(() => {
      ignoreBlurRef.current = false;
    }, 0);
  };

  const selectItem = (option: LocationType) => {
    form.setValue(name, option);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleButtonBlur = useCallback(
    (event: React.FocusEvent<HTMLButtonElement>) => {
      if (ignoreBlurRef.current) {
        event.preventDefault();
        window.requestAnimationFrame(() => {
          inputRef.current?.focus();
        });
        return;
      }

      setIsFocused(false);
    },
    [ignoreBlurRef]
  );

  const handleButtonFocus = () => {
    setIsFocused(true);
  };

  const autoOpenChecker = useCallback(() => {
    if (!isMouseEnter && !isFocused) {
      setIsOpen(options.length > 0 && isFocused);
    }
  }, [options, isFocused, isMouseEnter]);

  useEffect(() => {
    window.setTimeout(() => {
      autoOpenChecker();
    }, 0);
  }, [autoOpenChecker]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (
        wrapperRef.current &&
        target &&
        !wrapperRef.current.contains(target)
      ) {
        setIsMouseEnter(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem
            ref={wrapperRef}
            variant={wrapperVariant}
            className={className}
            onMouseEnter={() => setIsMouseEnter(true)}
          >
            <FormMessage />
            <FormLabel asChild className="cursor-auto">
              <p>{label}</p>
            </FormLabel>
            <FormControl>
              <AtomWrapper>
                <AtomButton
                  ref={inputRef}
                  type="button"
                  variant="select"
                  onClick={handleClick}
                  onFocus={handleButtonFocus}
                  onBlur={handleButtonBlur}
                >
                  <AtomWrapper variant="dropdown_item_inner">
                    <AtomImage
                      src={field.value.image}
                      alt={field.value.label}
                      variant="location"
                    />
                    {field.value.label || placeholder}
                  </AtomWrapper>
                  <ChevronDownIcon
                    className={cn(
                      "text-grey-700 w-[20px] h-[20px] transition-all duration-300 ease-in-out",
                      isOpen && "rotate-180"
                    )}
                  />
                </AtomButton>
                <InputSelect
                  onDropdownPointerDown={handleDropdownPointerDown}
                  options={options as LocationType[]}
                  isOpen={isOpen}
                  selectItem={selectItem}
                  selectedItem={field.value}
                />
              </AtomWrapper>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
