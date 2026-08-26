"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Dot from "@/app/components/Dot";

type HeaderProps = {
  variant?: "light" | "dark";
};

const navigation = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Field Notes",
    href: "/field-notes",
  },
  {
    label: "The Lab",
    href: "/the-lab",
  },
];

export default function Header({
  variant = "light",
}: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = variant === "dark";

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const headerClasses = isDark
    ? "border-white/10 bg-[#0b0f17]/90 text-white"
    : "border-black/10 bg-[#f7f7f5]/90 text-[#0b0f17]";

  const mutedTextClasses = isDark
    ? "text-white/55 hover:text-white"
    : "text-black/55 hover:text-black";

  const activeTextClasses = isDark
    ? "text-white"
    : "text-[#0b0f17]";

  const contactButtonClasses = isDark
    ? "border-white text-white hover:bg-white hover:text-[#0b0f17]"
    : "border-[#0b0f17] text-[#0b0f17] hover:bg-[#0b0f17] hover:text-white";

  const mobileBorderClasses = isDark
    ? "border-white/10"
    : "border-black/10";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${headerClasses}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="StoryLabDigital home"
          className="flex items-center gap-2 text-xl font-semibold tracking-[-0.04em]"
        >
          storylabdigital
          <Dot />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm md:flex"
        >
          {navigation.map((item) => {
            const active = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 transition-colors ${
                  active ? activeTextClasses : mutedTextClasses
                }`}
              >
                {item.label}

                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[#316bff] transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`border px-5 py-2.5 font-semibold transition-colors ${contactButtonClasses}`}
          >
            Start a conversation
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="relative grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <span
            aria-hidden="true"
            className={`absolute h-px w-5 transition duration-300 ${
              isDark ? "bg-white" : "bg-[#0b0f17]"
            } ${
              menuOpen
                ? "translate-y-0 rotate-45"
                : "-translate-y-[4px] rotate-0"
            }`}
          />

          <span
            aria-hidden="true"
            className={`absolute h-px w-5 transition duration-300 ${
              isDark ? "bg-white" : "bg-[#0b0f17]"
            } ${
              menuOpen
                ? "translate-y-0 -rotate-45"
                : "translate-y-[4px] rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t transition-[max-height,opacity] duration-300 md:hidden ${mobileBorderClasses} ${
          menuOpen
            ? "max-h-[calc(100svh-81px)] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex min-h-[calc(100svh-81px)] flex-col px-6 py-8"
        >
          <div>
            {navigation.map((item, index) => {
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`grid grid-cols-[2.5rem_1fr_auto] items-center border-t py-6 ${mobileBorderClasses}`}
                >
                  <span className="text-xs text-[#316bff]">
                    0{index + 1}
                  </span>

                  <span
                    className={`text-3xl font-light tracking-[-0.04em] ${
                      active ? activeTextClasses : mutedTextClasses
                    }`}
                  >
                    {item.label}
                  </span>

                  {active && <Dot className="h-2 w-2" />}
                </Link>
              );
            })}
          </div>

          <div className={`mt-auto border-t pt-6 ${mobileBorderClasses}`}>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`flex min-h-12 w-full items-center justify-center border px-6 py-3.5 text-sm font-semibold transition-colors ${contactButtonClasses}`}
            >
              Start a conversation
            </Link>

            <p
              className={`mt-6 text-xs uppercase tracking-[0.22em] ${
                isDark ? "text-white/35" : "text-black/35"
              }`}
            >
              Different. On Purpose.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
