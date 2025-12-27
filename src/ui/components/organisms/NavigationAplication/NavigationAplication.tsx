"use client";

import { AtomWrapper } from "@atoms";
import { LogoNavPart } from "@molecules";

export const NavigationAplication = () => {
    return (
        <AtomWrapper
            variant="navigation_aplication"
            aria-label="Navigation Aplication"
            asChild
        >
            <nav>
                <LogoNavPart />
            </nav>
        </AtomWrapper>
    );
};