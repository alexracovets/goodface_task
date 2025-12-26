"use client";

import { space_grotesk } from "@fonts";
import "@styles/globals.css";

interface TemplateDefaultProps {
    children: React.ReactNode;
}

export const TemplateDefault = ({ children }: TemplateDefaultProps) => {
    return (
        <html lang="en">
            <body
                className={`${space_grotesk.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
};