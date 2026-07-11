import Link from "next/link";

import Dot from "@/app/components/Dot";

type FooterProps = {
  variant?: "light" | "dark";
};

export default function Footer({
  variant = "light",
}: FooterProps) {
  const isDark = variant === "dark";

  const footerClasses = isDark
    ? "border-white/10 bg-[#0b0f17] text-white"
    : "border-black/10 bg-white text-[#0b0f17]";

  const mutedClasses = isDark
    ? "text-white/45"
    : "text-black/45";

  const linkClasses = isDark
    ? "text-white/60 hover:text-white"
    : "text-black/60 hover:text-black";

  return (
    <footer className={`border-t ${footerClasses}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:grid-cols-[1.2fr_auto] sm:items-end lg:grid-cols-[1.2fr_auto_auto] lg:px-10">
        <div>
          <Link
            href="/"
            aria-label="StoryLabDigital home"
            className="inline-flex items-center gap-2 text-xl font-semibold tracking-[-0.04em]"
          >
            storylabdigital
            <Dot />
          </Link>

          <p className={`mt-3 max-w-md text-sm leading-6 ${mutedClasses}`}>
            Independent Creative Studio · Ideas Worth Remembering.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className={`flex flex-wrap gap-x-5 gap-y-3 text-sm ${linkClasses}`}
        >
          <Link
            href="/work"
            className="transition-colors"
          >
            Work
          </Link>

          <Link
            href="/field-notes"
            className="transition-colors"
          >
            Field Notes
          </Link>

          <Link
            href="/the-lab"
            className="transition-colors"
          >
            The Lab
          </Link>

          <Link
            href="/contact"
            className="transition-colors"
          >
            Contact
          </Link>

          <a
            href="https://www.linkedin.com/in/chris-combrinck-9060891b8"
            target="_blank"
            rel="noreferrer"
            className="transition-colors"
          >
            LinkedIn
          </a>
        </nav>

        <div
          className={`text-sm sm:col-span-2 lg:col-span-1 lg:text-right ${mutedClasses}`}
        >
          <p>© {new Date().getFullYear()} StoryLabDigital</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em]">
            Different. On Purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}