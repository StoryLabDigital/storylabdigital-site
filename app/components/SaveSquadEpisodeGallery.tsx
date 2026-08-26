"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import type { SaveSquadEpisode } from "@/data/save-squad";

type SaveSquadEpisodeGalleryProps = {
  episodes: SaveSquadEpisode[];
};

export default function SaveSquadEpisodeGallery({
  episodes,
}: SaveSquadEpisodeGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const activeEpisode = episodes[activeIndex];

  const selectEpisode = (index: number) => {
    setActiveIndex(index);

    if (index !== activeIndex) {
      window.setTimeout(() => {
        playerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
    }
  };

  return (
    <div>
      <div ref={playerRef} className="scroll-mt-28">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="sld-label text-[#6f97ff]">
              Episode {String(activeEpisode.number).padStart(2, "0")}
            </p>
            <h3 className="mt-3 max-w-4xl text-2xl font-light tracking-[-0.035em] sm:text-4xl">
              {activeEpisode.title}
            </h3>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${activeEpisode.youtubeId}`}
            target="_blank"
            rel="noreferrer"
            className="sld-text-link w-fit text-white"
          >
            Watch on YouTube
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="aspect-video overflow-hidden bg-black ring-1 ring-white/15">
          <iframe
            key={activeEpisode.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${activeEpisode.youtubeId}?rel=0`}
            title={`Save Squad Episode ${activeEpisode.number}: ${activeEpisode.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((episode, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={episode.youtubeId}
              type="button"
              onClick={() => selectEpisode(index)}
              aria-pressed={isActive}
              className={`group text-left transition-colors ${
                isActive ? "bg-[#316bff]" : "bg-[#111722] hover:bg-[#182131]"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={episode.image}
                  alt={episode.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>

              <div className="p-5">
                <p className={`sld-label ${isActive ? "text-white/65" : "text-[#6f97ff]"}`}>
                  {String(episode.number).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base font-light leading-6 text-white sm:text-lg">
                  {episode.title}
                </p>
              </div>
            </button>
          );
        })}

        <div className="flex min-h-64 items-center justify-center bg-white p-10 sm:col-span-2 sm:p-14 lg:col-span-2">
          <div className="w-full max-w-sm text-center">
            <p className="sld-label mb-8 text-black/35">Created for</p>
            <Image
              src="/logos/alexander-forbes.png"
              alt="Alexforbes"
              width={500}
              height={176}
              sizes="(max-width: 640px) 70vw, 24rem"
              className="mx-auto h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
