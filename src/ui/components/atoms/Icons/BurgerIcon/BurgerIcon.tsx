"use client";

interface BurgerIconProps {
  className?: string;
  active?: boolean;
}

export const BurgerIcon = ({ className, active }: BurgerIconProps) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300"
      >
        <path
          d="M4 6l16 0"
          className={`transition-all duration-300 ${
            active
              ? "translate-y-[6px] xl:translate-y-[0.6rem] rotate-45 origin-center"
              : "translate-y-0 rotate-0"
          }`}
          style={{
            transformBox: "fill-box",
          }}
        />
        <path
          d="M4 12l16 0"
          className={`transition-all duration-300 ${
            active ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transformBox: "fill-box",
          }}
        />
        <path
          d="M4 18l16 0"
          className={`transition-all duration-300 ${
            active
              ? "-translate-y-[6px] xl:-translate-y-[0.6rem] -rotate-45 origin-center"
              : "translate-y-0 rotate-0"
          }`}
          style={{
            transformBox: "fill-box",
          }}
        />
      </svg>
    </div>
  );
};
