import * as React from "react";
import { cn } from "@utils";

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
}

export const VisuallyHidden = React.forwardRef<
  HTMLElement,
  VisuallyHiddenProps
>(({ className, as: Component = "span", ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0",
        "clip-[rect(0,0,0,0)]",
        className
      )}
      style={{
        clipPath: "inset(50%)",
        ...props.style,
      }}
      {...props}
    />
  );
});

VisuallyHidden.displayName = "VisuallyHidden";
