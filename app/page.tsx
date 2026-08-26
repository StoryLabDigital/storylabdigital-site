import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClientLogoGrid from "./components/ClientLogoGrid";
import FeaturedWork from "./components/FeaturedWork";
import FieldNotesFeature from "./components/FieldNotesFeature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionHeading from "./components/SectionHeading";
import Testimonials from "./components/Testimonials";
import VideoFrame from "./components/VideoFrame";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ideas Worth Remembering",
  description:
    "StoryLabDigital is an independent creative studio creating memorable work through film, animation, AI-assisted production and digital experiences.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StoryLabDigital | Ideas Worth Remembering",
    description:
      "Independent Creative Studio. Different. On Purpose.",
    url: "/",
  },
};

const principles = [
  {
    number: "01",
    title: "Curiosity",
    text: "creates better business.",
  },
  {
    number: "02",
    title: "Ideas",
    text: "before deliverables.",
  },
  {
    number: "03",
    title: "Different",
    text: "on purpose.",
  },
  {
    number: "04",
    title: "AI",
    text: "amplifies creativity. It does not replace it.",
  },
  {
    number: "05",
    title: "Partnerships",
    text: "over transactions.",
  },
] as const;

const questions = [
  {
    expected: "What video do you need?",
    better: "What should people remember?",
  },
  {
    expected: "What should we make?",
    better: "Why does this deserve to exist?",
  },
  {
    expected: "What is the deliverable?",
    better: "What is the opportunity?",
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#0b0f17]">
      <Header />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-black/10">
          <div
            aria-hidden="true"
            className="absolute right-[8%] top-16 h-3 w-3 rounded-full bg-[#316bff] sm:top-24"
          />

          <div className="sld-container grid min-h-[calc(100svh-var(--header-height))] items-end gap-14 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
            <div className="pb-2">
              <p className="sld-label text-black/45">
                Independent Creative Studio
              </p>

              <h1 className="sld-display-xl mt-8 max-w-5xl">
                Ideas worth
                <br />
                remembering
                <span className="text-[#316bff]">.</span>
              </h1>

              <p className="sld-body-large mt-9 max-w-xl text-black/58">
                We help people, businesses, brands and agencies turn ideas into stories that people remember. Work that earns attention instead of asking for it.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="sld-button sld-button-primary"
                >
                  Explore the work
                </Link>

                <Link
                  href="/field-notes"
                  className="sld-button sld-button-secondary"
                >
                  Read Field Notes
                </Link>
              </div>
            </div>

            <aside className="border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pb-3 lg:pl-10 lg:pt-0">
              <div className="grid gap-8">
                <div>
                  <p className="sld-label text-[#316bff]">Different</p>
                  <p className="mt-3 text-2xl font-light tracking-[-0.035em]">
                    On Purpose.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6">
                  <p className="sld-label text-black/40">Based in</p>
                  <p className="mt-3 text-lg font-light">
                    Cape Town
                    <br />
                    Working worldwide
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6">
                  <p className="sld-label text-black/40">Built around</p>
                  <p className="mt-3 text-lg font-light">
                    Curiosity
                    <br />
                    Ideas
                    <br />
                    Craft
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container">
            <SectionHeading
              number="001"
              label="A note on attention"
              title={
                <>
                  Most businesses do not need more content.
                  <br />
                  <span className="text-[#316bff]">
                    They need something worth remembering.
                  </span>
                </>
              }
              text="We do not begin with cameras. We do not begin with software. We begin with curiosity."
            />
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="sld-container py-8 sm:py-12">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="sld-label text-[#316bff]">Featured film</p>
                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
                  What If
                  <span className="text-[#316bff]">?</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-black/50">
                A question led film about possibility, curiosity and the
                courage to explore before everything makes sense.
              </p>
            </div>

            <VideoFrame
              src={siteConfig.assets.whatIfVideo}
              poster={siteConfig.assets.whatIfPoster}
              title="What If — StoryLabDigital brand film"
              controls
              priority
            />
          </div>
        </section>

        <section className="sld-section bg-white">
          <div className="sld-container">
            <SectionHeading
              number="002"
              label="How we think"
              title={
                <>
                  The medium changes.
                  <br />
                  The thinking does not.
                </>
              }
            />

            <div className="mt-20">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-4 border-t border-black/15 py-7 sm:grid-cols-[5rem_1fr] sm:items-baseline"
                >
                  <p className="sld-label text-[#316bff]">
                    {principle.number}
                  </p>

                  <p className="text-2xl font-light tracking-[-0.035em] sm:text-4xl">
                    <span className="font-medium">{principle.title}</span>{" "}
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                number="003"
                label="Selected work"
                title={
                  <>
                    Work that refuses
                    <br />
                    to disappear quietly.
                  </>
                }
                text="Film, animation, AI-assisted production, learning and digital experiences built around the idea, not the format."
              />

              <Link
                href="/work"
                className="sld-text-link w-fit shrink-0"
              >
                View all work
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <article className="mt-16 overflow-hidden bg-[#0b0f17] text-white">
              <Link
                href="/work/save-squad"
                aria-label="Explore the Save Squad case study"
                className="group grid lg:grid-cols-[1.2fr_0.8fr]"
              >
                <div className="relative aspect-video overflow-hidden bg-white lg:aspect-auto lg:min-h-[31rem]">
                  <Image
                    src="/save-squad/hero.webp"
                    alt="Save Squad animated heroes created for Alexforbes"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-between gap-16 p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="sld-label text-[#6f97ff]">
                      New case study · Alexforbes
                    </p>
                    <h3 className="sld-heading-three mt-7">
                      Ten stories.
                      <br />
                      One animated learning world.
                    </h3>
                    <p className="mt-6 max-w-lg leading-7 text-white/62">
                      How StoryLabDigital adapted financial-literacy stories
                      into the complete ten-episode Save Squad series.
                    </p>
                  </div>

                  <span className="sld-text-link w-fit text-white">
                    Explore Save Squad
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </article>

            <FeaturedWork excludeSlugs={["save-squad"]} />
          </div>
        </section>

        <section className="sld-section bg-[#0b0f17] text-white">
          <div className="sld-container">
            <SectionHeading
              number="004"
              label="Questions we ask"
              theme="dark"
              title={
                <>
                  Great work starts
                  <br />
                  with better questions
                  <span className="text-[#316bff]">.</span>
                </>
              }
            />

            <div className="mt-20">
              {questions.map((question) => (
                <article
                  key={question.expected}
                  className="grid gap-5 border-t border-white/15 py-8 md:grid-cols-2"
                >
                  <p className="text-white/35">
                    Instead of: {question.expected}
                  </p>

                  <p className="text-2xl font-light tracking-[-0.035em] sm:text-3xl">
                    We ask: {question.better}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container">
            <SectionHeading
              number="005"
              label="Proof"
              title={
                <>
                  Trusted to think.
                  <br />
                  Trusted to deliver.
                </>
              }
            />

            <ClientLogoGrid className="mt-16" />
          </div>
        </section>

        <section className="sld-section border-y border-black/10 bg-white">
          <div className="sld-container">
            <FieldNotesFeature />
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container">
            <SectionHeading
              number="007"
              label="Client voices"
              title={
                <>
                  Better than another
                  <br />
                  “great service” badge.
                </>
              }
            />

            <Testimonials className="mt-16" />
          </div>
        </section>

        <section className="bg-[#316bff] py-20 text-white sm:py-24">
          <div className="sld-container">
            <p className="sld-label text-white/65">The SLD Lab</p>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="sld-heading-one max-w-5xl">
                You bring the strange idea.
                <br />
                We build the thing.
              </h2>

              <Link
                href="/the-lab"
                className="sld-button sld-button-outline-light w-fit"
              >
                Enter The Lab
              </Link>
            </div>
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="sld-label text-[#316bff]">Start here</p>

              <h2 className="sld-heading-one mt-8 max-w-5xl">
                Let&apos;s build something worth remembering
                <span className="text-[#316bff]">.</span>
              </h2>

              <p className="sld-body-large mt-7 max-w-2xl text-black/58">
                Bring the problem, the half formed thought or the idea that has
                been sitting in your head longer than it should.
              </p>
            </div>

            <Link
              href="/contact"
              className="sld-button sld-button-primary w-fit"
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
