import type { ReactNode } from "react";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: ReactNode;
  text?: string;
  theme?: "light" | "dark";
};

export default function SectionHeading({
  number,
  label,
  title,
  text,
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  const eyebrowColour = isDark ? "text-white/45" : "text-black/45";
  const titleColour = isDark ? "text-white" : "text-[#0b0f17]";
  const textColour = isDark ? "text-white/55" : "text-black/55";

  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
      <div
        className={`flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] ${eyebrowColour}`}
      >
        <span className="text-[#316bff]">{number}</span>
        <span>{label}</span>
      </div>

      <h2
        className={`mt-8 max-w-5xl text-4xl font-light leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-7xl ${titleColour}`}
      >
        {title}
      </h2>

      {text ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${textColour}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}