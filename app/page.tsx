import { Space_Grotesk, Manrope } from "next/font/google";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function StoryLabDigitalSite() {
  const heroVideo = "/videos/af-karabo.mp4";
  const featuredVideo = "/videos/motswedi-corporate-video.mp4";

  const videos = [
    "save-squad.mp4",
    "kayak-hippo.mp4",
    "clickbait-chaos.mp4",
    "reforms-in-the-roar.mp4",
    "ebnet-financial-roadmap.mp4",
    "wifi-trap.mp4",
    "impersonation-invasion.mp4",
    "ebnet-top-gun.mp4",
    "seeds-of-growth.mp4",
  ];

  const useCases = [
    {
      title: "Explain complex ideas",
      text: "Turn technical, strategic, or operational content into something people actually understand.",
    },
    {
      title: "Launch with impact",
      text: "Create campaign and promo visuals that grab attention and strengthen brand presence.",
    },
    {
      title: "Train and communicate better",
      text: "Replace forgettable internal content with engaging, effective video people will actually watch.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      text: "We get clear on the message, audience, and outcome.",
    },
    {
      step: "02",
      title: "Concept",
      text: "We shape the story and visual direction.",
    },
    {
      step: "03",
      title: "Production",
      text: "Fast, sharp execution powered by creative thinking and AI-driven workflows.",
    },
    {
      step: "04",
      title: "Delivery",
      text: "Finished assets ready to launch, present, or publish.",
    },
  ];

  const Divider = () => (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );

  const SectionIntro = ({
    eyebrow,
    title,
    text,
  }: {
    eyebrow?: string;
    title: string;
    text?: string;
  }) => (
    <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-blue-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`${headingFont.className} text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl`}
      >
        {title}
      </h2>
      {text ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );

  return (
    <div className={`${bodyFont.className} min-h-screen bg-neutral-950 text-white`}>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className={`${headingFont.className} text-lg font-semibold tracking-tight`}>
              StoryLabDigital
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Visual storytelling for business
            </p>
          </div>
          
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
            <div className="relative z-10">
              <p className="mb-5 inline-flex w-fit items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                One story. Clear message. Strong impact.
              </p>

              <h1
                className={`${headingFont.className} max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl`}
              >
                We turn business messages into video people actually understand,
                remember, and act on.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-white/70 sm:text-lg">
                From explainers to campaign visuals, StoryLabDigital helps brands
                communicate with clarity, impact, and cinematic edge.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.01]"
                >
                  Our Work
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Start a Project
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40">
                <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                  <video
                    className="h-full w-full object-cover"
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* REEL INTRO */}
        <section>
          <SectionIntro
            eyebrow="The Work"
            title="See what StoryLabDigital looks like in motion."
            text="The fastest way to understand what we do is to watch it."
          />
        </section>

        <section id="work" className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video}
                className="group aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30"
              >
                <video
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  src={`/videos/${video}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* PROBLEM / SOLUTION */}
        <section>
          <SectionIntro
            eyebrow="The Problem"
            title="Most businesses don’t have a content problem. They have a communication problem."
            text="Long decks get ignored. Flat messaging gets forgotten. Strong visual storytelling changes that."
          />
        </section>

        <Divider />

        {/* USE CASES */}
        <section id="use-cases">
          <SectionIntro
            eyebrow="What This Solves"
            title="Built for the moments where message matters."
            text="Clear outcomes. Better understanding. Stronger attention."
          />
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <h3 className={`${headingFont.className} text-2xl font-semibold text-white`}>
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </section>

        <Divider />

        {/* FEATURED PROJECT */}
        <section>
          <SectionIntro
            eyebrow="Featured Range"
            title="Corporate clarity. Creative control."
            text="From polished business communication to bold cinematic concepts, StoryLabDigital knows when to stay sharp and when to push the edge."
          />
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/6 to-blue-500/5 p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <div className="aspect-video">
                <video
                  className="h-full w-full object-cover"
                  src={featuredVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-200/75">
                Featured Project
              </p>
              <h3
                className={`${headingFont.className} mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl`}
              >
                Business storytelling that still leaves a mark.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                This is the balance we bring to the table: work that earns trust in
                corporate rooms while still feeling crafted, visual, and worth watching.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* PROCESS */}
        <section id="process">
          <SectionIntro
            eyebrow="The Process"
            title="Simple. Clear. Built to move."
            text="No bloated process. No confusion. Just a sharp path from message to finished video."
          />
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-blue-200/80">{item.step}</p>
              <h3 className={`${headingFont.className} mt-4 text-2xl font-medium text-white`}>
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </section>

        <Divider />

        {/* CTA */}
        <section id="contact" className="pb-24">
          <SectionIntro
            eyebrow="Ready To Start?"
            title="Let’s build something people actually watch."
            text="If your message matters, it deserves more than another forgettable deck or flat campaign asset."
          />
        </section>

        <section className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/5 p-8 text-center lg:p-12">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@storylabdigital.co.za?subject=StoryLabDigital%20Project%20Enquiry"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black"
              >
                Start a Project
              </a>
              <a
                href="https://wa.me/27729857003"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-6 text-sm text-white/55">
              hello@storylabdigital.co.za
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}