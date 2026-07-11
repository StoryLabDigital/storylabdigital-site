"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { WorkItem } from "@/data/work";

type WorkGalleryProps = {
  items: WorkItem[];
};

export default function WorkGallery({
  items,
}: WorkGalleryProps) {
  const [activeItem, setActiveItem] =
    useState<WorkItem | null>(null);

  useEffect(() => {
    if (!activeItem) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeItem]);

  return (
    <>
      <div className="grid gap-px overflow-hidden bg-black/10 md:grid-cols-2">
  {items.map((item, index) => {
    const isLeadItem = index === 0;
    const remainingItemCount = items.length - 1;
    const isLastItem = index === items.length - 1;
    const hasOddRemainingCount = remainingItemCount % 2 !== 0;

    const isWide =
      isLeadItem || (isLastItem && hasOddRemainingCount);

          return (
            <article
              id={item.slug}
              key={item.slug}
              className={[
                "group bg-[#0b0f17]",
                isWide ? "md:col-span-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                aria-label={`Play ${item.title}`}
                className="block w-full text-left"
              >
                <div
                  className={[
                    "relative overflow-hidden",
                    isWide ? "aspect-video" : "aspect-[4/3]",
                  ].join(" ")}
                >
                  <Image
                    src={item.poster}
                    alt={`${item.title} poster`}
                    fill
                    sizes={
                      isWide
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover opacity-80 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/55">
                      <span>{item.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.category}</span>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div>
                        <h2 className="text-3xl font-light tracking-[-0.04em] sm:text-4xl">
                          {item.title}
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-sm font-semibold uppercase tracking-[0.18em] text-[#316bff]"
                      >
                        Play film
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>

      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} video`}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/92 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveItem(null);
            }
          }}
        >
          <div className="w-full max-w-6xl">
            <div className="mb-5 flex items-start justify-between gap-6 text-white">
              <div>
                <p className="sld-label text-[#316bff]">
                  {activeItem.client} · {activeItem.category}
                </p>

                <h2 className="mt-3 text-2xl font-light tracking-[-0.035em] sm:text-3xl">
                  {activeItem.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="border border-white/25 px-4 py-2 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>

            <div className="sld-media-frame sld-aspect-video">
              <video
                key={activeItem.video}
                className="h-full w-full object-contain"
                src={activeItem.video}
                poster={activeItem.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-white/55">
              {activeItem.description}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}