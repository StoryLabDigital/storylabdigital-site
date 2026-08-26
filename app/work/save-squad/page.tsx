import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SaveSquadEpisodeGallery from "../../components/SaveSquadEpisodeGallery";
import SectionHeading from "../../components/SectionHeading";

import {
  saveSquadEpisodes,
  saveSquadTestimonial,
} from "@/data/save-squad";

export const metadata: Metadata = {
  title: "Save Squad | Alexforbes Case Study",
  description:
    "How StoryLabDigital adapted Alexforbes financial-literacy stories into a complete ten-episode animated learning series.",
  alternates: {
    canonical: "/work/save-squad",
  },
  openGraph: {
    title: "Save Squad | StoryLabDigital",
    description:
      "Ten animated stories created for Alexforbes to make financial lessons engaging, accessible and memorable.",
    url: "/work/save-squad",
    images: [
      {
        url: "/save-squad/hero.webp",
        width: 1800,
        height: 1013,
        alt: "Save Squad animated financial-literacy series for Alexforbes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save Squad | StoryLabDigital",
    description:
      "Ten animated stories created for Alexforbes to make financial lessons engaging, accessible and memorable.",
    images: ["/save-squad/hero.webp"],
  },
};

const deliverables = [
  "Story adaptation",
  "Visual development",
  "Character-led animation",
  "Narration and sound",
  "Editing and delivery",
  "Ten connected episodes",
] as const;

export default function SaveSquadCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#0b0f17]">
      <Header />

      <main id="main-content">
        <section className="border-b border-black/10">
          <div className="sld-container grid items-end gap-10 py-14 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div>
              <div className="flex flex-col items-start gap-4">
                <Image
                  src="/logos/alexander-forbes.png"
                  alt="Alexforbes"
                  width={500}
                  height={176}
                  priority
                  className="h-auto w-44 sm:w-52"
                />
                <p className="sld-label text-[#316bff]">
                  In collaboration with StoryLabDigital
                </p>
              </div>

              <h1 className="sld-display mt-7 max-w-5xl">
                Save Squad
                <span className="text-[#316bff]">.</span>
              </h1>
            </div>

            <div className="border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="sld-body-large max-w-xl text-black/58">
                Ten animated stories designed to turn financial lessons into
                something younger audiences could understand, enjoy and
                remember.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b0f17] py-5 sm:py-8">
          <div className="sld-container">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/save-squad/hero.webp"
                alt="Save Squad animated heroes with the Alexforbes logo"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 bg-white">
          <div className="sld-container grid gap-px bg-black/10 md:grid-cols-3">
            {[
              ["10", "episodes"],
              ["10", "timeless stories"],
              ["1", "connected learning world"],
            ].map(([value, label]) => (
              <div key={label} className="bg-white px-6 py-10 sm:px-8 sm:py-12">
                <p className="text-5xl font-light tracking-[-0.06em] text-[#316bff] sm:text-6xl">
                  {value}
                </p>
                <p className="sld-label mt-4 text-black/45">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <div className="sld-container">
            <SectionHeading
              number="001"
              label="The challenge"
              title={
                <>
                  Complex enough to matter.
                  <br />
                  <span className="text-[#316bff]">Simple enough to remember.</span>
                </>
              }
              text="Financial education matters early, but information alone rarely holds attention. Alexforbes had a collection of financial-literacy stories rooted in familiar fables and folk parables. The opportunity was to transform that source material into an animated series with energy, personality and a consistent world of its own."
            />

            <div className="mt-12 grid gap-px overflow-hidden bg-black/10 sm:mt-16 md:grid-cols-2">
              <article className="bg-white p-8 sm:p-10">
                <p className="sld-label text-[#316bff]">The source</p>
                <h2 className="sld-heading-three mt-6">
                  Stories with something useful to say.
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-black/58">
                  Alexforbes supplied the original book, financial lessons and
                  story material. Each tale carried a practical idea about
                  saving, patience, planning, value or better money decisions.
                </p>
              </article>

              <article className="bg-[#316bff] p-8 text-white sm:p-10">
                <p className="sld-label text-white/65">The response</p>
                <h2 className="sld-heading-three mt-6">
                  Build a world, not ten disconnected videos.
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-white/75">
                  StoryLabDigital adapted the material into a complete animated
                  series, developing the visual language, characters, scenes,
                  narration, sound and final episode delivery.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="sld-container">
            <SectionHeading
              number="002"
              label="What we delivered"
              title={
                <>
                  One production system.
                  <br />
                  Ten finished stories.
                </>
              }
              text="A series this size needs more than individual good ideas. It needs a repeatable production approach that protects consistency while giving every episode its own personality."
            />

            <div className="mt-12 grid gap-px overflow-hidden bg-black/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item, index) => (
                <div key={item} className="bg-[#f7f7f5] p-7 sm:p-8">
                  <p className="sld-label text-[#316bff]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-6 text-xl font-light tracking-[-0.025em] sm:text-2xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0f17] py-20 text-white sm:py-24 lg:py-28">
          <div className="sld-container">
            <SectionHeading
              number="003"
              label="The complete series"
              theme="dark"
              title={
                <>
                  Ten stories.
                  <br />
                  Ten smart money moves.
                </>
              }
              text="Watch the official Save Squad episodes published by Alexforbes. Select an episode below to play it without leaving the case study."
            />

            <div className="mt-12 sm:mt-16">
              <SaveSquadEpisodeGallery episodes={saveSquadEpisodes} />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <div className="sld-container">
            <SectionHeading
              number="004"
              label="The result"
              title={
                <>
                  From source material
                  <br />
                  to a launch-ready series.
                </>
              }
            />

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-[0.8fr_1.2fr]">
              <p className="sld-label text-[#316bff]">Completed · Approved · Launched</p>
              <div>
                <p className="sld-body-large max-w-3xl text-black/65">
                  The complete ten-episode series was delivered to Alexforbes,
                  approved and launched through its public marketing channels.
                  The project shows what happens when financial education is
                  treated as a creative storytelling challenge rather than
                  another content requirement.
                </p>
                <p className="mt-6 max-w-2xl leading-7 text-black/48">
                  The original stories and financial-learning material were
                  supplied by Alexforbes. StoryLabDigital adapted and produced
                  the animated series.
                </p>
              </div>
            </div>
          </div>
        </section>

        {saveSquadTestimonial ? (
          <section className="border-y border-black/10 bg-white py-20 sm:py-24">
            <div className="sld-container">
              <p className="sld-label text-[#316bff]">Client voice</p>
              <blockquote className="sld-heading-three mt-8 max-w-5xl">
                “{saveSquadTestimonial.quote}”
              </blockquote>
              <p className="mt-8 text-sm text-black/55">
                {saveSquadTestimonial.name} · {saveSquadTestimonial.role}
              </p>
            </div>
          </section>
        ) : null}

        <section className="bg-[#316bff] py-20 text-white sm:py-24">
          <div className="sld-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="sld-label text-white/65">Have something complex to explain?</p>
              <h2 className="sld-heading-one mt-8 max-w-5xl">
                Turn the lesson
                <br />
                into a story.
              </h2>
            </div>

            <Link
              href="/contact?project=Animated%20learning%20series"
              className="sld-button sld-button-outline-light w-fit"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
