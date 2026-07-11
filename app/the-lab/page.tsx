import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SectionHeading from "@/app/components/SectionHeading";
import Dot from "@/app/components/Dot";
import LabRequestForm from "@/app/components/LabRequestForm";

export const metadata: Metadata = {
  title: "The Lab",
  description:
    "The SLD Lab is StoryLabDigital’s on-demand creative desk for AI imagery, short videos, voice-overs, avatars, social content and unusual creative requests.",
  alternates: {
    canonical: "/the-lab",
  },
  openGraph: {
    title: "The Lab | StoryLabDigital",
    description:
      "Bring the idea. StoryLabDigital will work out how to build it.",
    url: "/the-lab",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The SLD Lab by StoryLabDigital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lab | StoryLabDigital",
    description:
      "Bring the idea. StoryLabDigital will work out how to build it.",
    images: ["/og-image.jpg"],
  },
};

const principles = [
  "No monthly subscription",
  "No tokens to buy",
  "No software to learn",
  "A clear estimate before production begins",
];

const examples = [
  {
    type: "image",
    src: "/lab/poster-1.jpeg",
    label: "Concept art",
    description: "Campaign concepts and visual exploration.",
  },
  {
    type: "video",
    src: "/lab/reel-1.mp4",
    poster: "/lab/reel-1.jpeg",
    label: "Avatar video",
    description: "Presenter-led content without the studio booking.",
  },
  {
    type: "image",
    src: "/lab/poster-2.jpeg",
    label: "Animated visual",
    description: "Movement-ready visuals for digital content.",
  },
  {
    type: "image",
    src: "/lab/poster-3.jpeg",
    label: "Concept image",
    description: "A rough thought turned into something visible.",
  },
  {
    type: "video",
    src: "/lab/reel-2.mp4",
    poster: "/lab/reel-2.jpeg",
    label: "Animated video",
    description: "Short-form motion designed for attention.",
  },
  {
    type: "image",
    src: "/lab/poster-4.jpeg",
    label: "Cinematic poster",
    description: "High-concept artwork with campaign potential.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Send the idea",
    text: "Tell us what you want to create, where it needs to work and when you need it.",
  },
  {
    number: "02",
    title: "Get a clear estimate",
    text: "We choose the right production route and confirm the scope, timing and price.",
  },
  {
    number: "03",
    title: "Approve and pay",
    text: "Once the estimate is approved and payment is received, the work enters production.",
  },
  {
    number: "04",
    title: "Receive the finished work",
    text: "Your final files are delivered through a clean download link, ready to use.",
  },
];

const services = [
  {
    number: "01",
    title: "AI image creation",
    price: "Indicative from R99",
    text: "Campaign visuals, concept art, social imagery, product scenes and unusual visual experiments.",
  },
  {
    number: "02",
    title: "Short AI video",
    price: "Indicative from R350",
    text: "Short clips, animated scenes, transitions and social-ready cinematic moments.",
  },
  {
    number: "03",
    title: "Voice-over",
    price: "Indicative from R150",
    text: "Narration, explainers, character voices, announcements and short-form audio.",
  },
  {
    number: "04",
    title: "Avatar video",
    price: "Indicative from R450",
    text: "Presenter videos, announcements, training content and internal business communication.",
  },
  {
    number: "05",
    title: "Social reel",
    price: "Indicative from R500",
    text: "Short-form content created for LinkedIn, Instagram, WhatsApp or internal campaigns.",
  },
  {
    number: "06",
    title: "Custom Lab request",
    price: "Quoted per request",
    text: "A half-formed prompt, strange visual thought or idea that does not fit neatly into a category.",
  },
];

const fitChecks = [
  {
    title: "The Lab is a good fit when",
    items: [
      "The request is small, focused or experimental.",
      "You need a fast creative output rather than a full campaign.",
      "You know roughly what you need but not how to produce it.",
      "You want to test an idea before investing in something larger.",
    ],
  },
  {
    title: "StoryLabDigital takes over when",
    items: [
      "The project requires strategy, scripting or creative direction.",
      "There are multiple deliverables, stakeholders or approval rounds.",
      "The work forms part of a campaign, series or larger platform.",
      "The idea needs more than a quick production workflow.",
    ],
  },
];

export default function TheLabPage() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      <Header variant="dark" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="absolute right-[8%] top-24 h-3 w-3 rounded-full bg-[#316bff]"
          />

          <div className="mx-auto grid min-h-[calc(100svh-81px)] max-w-7xl items-end gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                The SLD Lab · On-demand creative desk
              </p>

              <h1 className="mt-8 max-w-5xl text-[clamp(3.6rem,10vw,7.5rem)] font-light leading-[0.9] tracking-[-0.065em]">
                You bring
                <br />
                the idea.
                <br />
                <span className="text-[#316bff]">
                  We build the thing.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Images, short videos, voice-overs, avatars and strange
                requests—without another subscription, another platform or
                another piece of software you need to pretend you understand.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
  href="#request"
  className="inline-flex min-h-12 items-center justify-center bg-[#316bff] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2459db] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#316bff]"
>
  Send the idea
</a>

                <a
                  href="#examples"
                  className="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#0b0f17] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  See what comes out
                </a>
              </div>
            </div>

            <aside className="border border-white/15 bg-white/[0.035] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#316bff]">
                No nonsense included
              </p>

              <div className="mt-8">
                {principles.map((principle) => (
                  <p
                    key={principle}
                    className="border-t border-white/15 py-5 text-xl font-light leading-snug tracking-[-0.02em] sm:text-2xl"
                  >
                    {principle}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                  <span className="mr-4 text-[#316bff]">001</span>
                  What The Lab is
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-4xl font-light leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Not every idea needs
                  <br />
                  a campaign team.
                </h2>

                <div className="mt-10 grid gap-6 text-base leading-8 text-white/60 sm:grid-cols-2 sm:text-lg">
                  <p>
                    Sometimes you need one image, one clip, one voice-over or
                    one weird visual experiment—and you need it without turning
                    the request into a three-week procurement event.
                  </p>

                  <p>
                    The Lab gives smaller creative requests access to the same
                    thinking and production engine behind StoryLabDigital,
                    scaled to suit the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section
          id="examples"
          className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] py-24 sm:py-28 lg:py-36"
        >
          <SectionHeading
            number="002"
            label="What comes out"
            title={
              <>
                Real outputs.
                <br />
                <span className="text-[#316bff]">
                  No stock excuses.
                </span>
              </>
            }
            text="A selection of stills and clips created through the same production engine behind StoryLabDigital."
            theme="dark"
          />

          <div className="mx-auto mt-14 grid max-w-7xl gap-px overflow-hidden bg-white/10 px-6 sm:mt-16 sm:grid-cols-2 lg:px-10">
            {examples.map((item, index) => (
              <article
                key={item.src}
                className={`group relative overflow-hidden bg-black ${
                  index === 0 || index === 5
                    ? "sm:col-span-2 lg:grid lg:grid-cols-[1.2fr_0.8fr]"
                    : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes={
                        index === 0 || index === 5
                          ? "(max-width: 768px) 100vw, 70vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                      className="object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
                    />
                  ) : (
                    <video
                      className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:opacity-100"
                      src={item.src}
                      poster={item.poster}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls
                    />
                  )}
                </div>

                <div
                  className={`border-t border-white/10 p-6 ${
                    index === 0 || index === 5
                      ? "lg:flex lg:flex-col lg:justify-end lg:border-l lg:border-t-0 lg:p-9"
                      : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#316bff]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-5 text-2xl font-light tracking-[-0.03em] sm:text-3xl">
                    {item.label}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-24 sm:py-28 lg:py-36">
          <SectionHeading
            number="003"
            label="How it works"
            title={
              <>
                Four steps.
                <br />
                No circus.
              </>
            }
            text="The request stays simple, the scope stays clear and nobody needs a twelve-slide status deck."
            theme="dark"
          />

          <div className="mx-auto mt-14 grid max-w-7xl gap-px bg-white/10 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
            {process.map((step) => (
              <article
                key={step.number}
                className="min-h-72 bg-[#0b0f17] p-7 sm:p-8"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-[#316bff]">
                  {step.number}
                </p>

                <h3 className="mt-16 text-2xl font-light leading-tight tracking-[-0.03em]">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-28 lg:py-36">
          <SectionHeading
            number="004"
            label="What you can request"
            title={
              <>
                Choose a format.
                <br />
                Or ignore the list.
              </>
            }
            text="The categories help us route the request. They are not creative handcuffs."
            theme="dark"
          />

          <div className="mx-auto mt-14 max-w-7xl px-6 sm:mt-16 lg:px-10">
            <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="flex min-h-80 flex-col border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.035] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <p className="text-xs text-[#316bff]">
                      {service.number}
                    </p>

                    <p className="text-right text-xs uppercase leading-5 tracking-[0.18em] text-white/40">
                      {service.price}
                    </p>
                  </div>

                  <div className="mt-auto pt-16">
                    <h3 className="text-2xl font-light tracking-[-0.03em] sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/50">
                      {service.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-xs leading-6 text-white/35">
              Starting prices are indicative only. Final pricing depends on
              complexity, duration, source material, licensing, delivery format
              and the number of required outputs.
            </p>
          </div>
        </section>

        {/* Fit */}
        <section className="py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              <span className="text-[#316bff]">005</span>
              <span>Where the line sits</span>
            </div>

            <h2 className="mt-9 max-w-5xl text-4xl font-light leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Small request?
              <br />
              The Lab.
              <br />
              Bigger opportunity?
              <br />
              StoryLabDigital.
            </h2>

            <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-2">
              {fitChecks.map((group) => (
                <article
                  key={group.title}
                  className="bg-[#0b0f17] p-7 sm:p-10"
                >
                  <h3 className="text-2xl font-light tracking-[-0.03em] sm:text-3xl">
                    {group.title}
                  </h3>

                  <div className="mt-10">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/15 py-5"
                      >
                        <Dot className="mt-2 h-2 w-2 shrink-0" />

                        <p className="text-sm leading-7 text-white/60">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#316bff]"
              >
                Discuss a larger project
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Revision statement */}
        <section className="border-y border-white/10 bg-[#316bff] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
              Good to know
            </p>

            <h2 className="mt-8 max-w-6xl text-4xl font-light leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              One revision is included. A bottomless pit of “one more change”
              is not.
            </h2>
          </div>
        </section>

        {/* Request form */}
        <section
          id="request"
          className="scroll-mt-24 py-24 sm:py-28 lg:py-36"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
            <div>
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                <span className="text-[#316bff]">006</span>
                <span>Send the idea</span>
              </div>

              <h2 className="mt-9 text-4xl font-light leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Messy is fine.
                <br />
                Boring is optional.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/55 sm:text-lg">
                Tell us what you are thinking—even when the thought is still
                held together by screenshots, voice notes and unreasonable
                optimism.
              </p>

              <div className="mt-10 border-t border-white/15 pt-6 text-sm leading-7 text-white/45">
                <p>Requests are reviewed before production begins.</p>
                <p>Estimates are normally sent within 24 business hours.</p>
                <p className="mt-4">
                  Prefer email?
                  <br />
                  <a
  href="mailto:hello@storylabdigital.co.za"
  className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#316bff]"
>
  hello@storylabdigital.co.za
</a>
                </p>
              </div>
            </div>

            <LabRequestForm />
          </div>
        </section>

        {/* Final statement */}
        <section className="border-t border-white/10 bg-white/[0.025]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                The SLD Lab
              </p>

              <p className="mt-5 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
                Ideas do not need to arrive finished.
                <span className="text-[#316bff]"> They just need to arrive.</span>
              </p>
            </div>

            <a
              href="#request"
              className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#316bff]"
            >
              Send yours
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>

      <Footer variant="dark" />
    </div>
  );
}