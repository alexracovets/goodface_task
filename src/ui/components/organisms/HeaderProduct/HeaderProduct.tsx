"use client";

import { FaChevronLeft } from "react-icons/fa6";

import { AtomImage, AtomLink, Button } from "@atoms";

export const HeaderProduct = () => {
    return (
        <header>
            <nav>
                <AtomLink href="/" variant="default">
                    <Button variant="back">
                        <AtomImage
                            src="/icons/chevron-left.svg"
                            alt="chevron-left"
                            variant="icon"
                        />
                        Back to all
                    </Button>
                </AtomLink>
            </nav>
        </header>
    );
};