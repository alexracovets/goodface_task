"use client";

import { useFormContext } from "react-hook-form";

import { AtomText, AtomWrapper, FormField, Slider } from "@atoms";

interface ProxiesCountPickProps {
    name: string;
    min: number;
    max: number;
    breaker: number;
}

export const ProxiesCountPick = ({ name, min, max, breaker }: ProxiesCountPickProps) => {
    const form = useFormContext();

    return (
        <FormField control={form.control} name={name} render={({ field }) => {
            const value = Array.isArray(field.value) ? field.value : [field.value ?? 0];
            return (
                <AtomWrapper className="flex flex-col gap-[12px]">
                    <Slider
                        value={value}
                        min={min}
                        max={max}
                        onValueChange={(newValue: number[]) => {
                            field.onChange(newValue[0]);
                        }}
                    />
                    <div className="flex justify-between items-center">
                        {Array.from({ length: Math.floor((max - min) / breaker) + 1 }, (_, index) => (
                            <div key={index} className="w-[8px] h-[8px] bg-grey-100 rounded-full">
                                <AtomText className="text-[14px] leading-[20px] tracking-[-0.2px] text-grey-500">{min + index * breaker}</AtomText>
                            </div>
                        ))}
                    </div>
                </AtomWrapper>
            );
        }} />
    );
};