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

  const videos = [
    "save-squad.mp4",
    "kayak-hippo.mp4",
    "clickbait-chaos.mp4",
    "wifi-trap.mp4",
    "ebnet-financial-roadmap.mp4",
    "reforms-in-the-roar.mp4",
    "seeds-of-growth.mp4",
    "ebnet-top-gun.mp4",
    "motswedi-corporate-video.mp4",
  ];

  const Divider = () => (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );

  return (
    <div className={`${bodyFont.className} min-h-screen bg-neutral-950 text-white`}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8 lg:py-28">
          
          {/* TEXT */}
          <div>
            <h1 className={`${headingFont.className} text-4xl sm:text-5xl lg:text-6xl max-w-xl`}>
              We turn business messages into video people actually understand, remember, and act on.
            </h1>

            <p className="mt-5 max-w-md text-base text-white/70">
              From explainers to campaign visuals, StoryLabDigital helps brands communicate with clarity, impact, and cinematic edge.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#work" className="rounded-2xl bg-white px-6 py-3 text-black text-sm">
                View Work
              </a>
              <a href="#contact" className="rounded-2xl border border-white/20 px-6 py-3 text-sm">
                Start a Project
              </a>
            </div>
          </div>

          {/* HERO VIDEO */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4">
            <div className="aspect-video overflow-hidden rounded-[1.5rem]">
              <video
                className="h-full w-full object-cover"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* VIDEO GRID */}
      <section id="work" className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm text-white/60 mb-6">See what StoryLabDigital looks like in motion.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video} className="aspect-video overflow-hidden rounded-xl border border-white/10">
              <video
                className="w-full h-full object-cover"
                src={`/videos/${video}`}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* PROBLEM STATEMENT */}
      <section className="mx-auto max-w-4xl px-6 text-center">
        <h2 className={`${headingFont.className} text-3xl sm:text-4xl`}>
          Most businesses don’t have a content problem. They have a communication problem.
        </h2>

        <p className="mt-6 text-white/60">
          Long decks get ignored. Flat messaging gets forgotten. Strong visual storytelling changes that.
        </p>
      </section>

      <Divider />

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Explain complex ideas",
            text: "Turn technical or strategic content into something people actually understand.",
          },
          {
            title: "Launch with impact",
            text: "Create campaign visuals that grab attention and elevate your brand.",
          },
          {
            title: "Train and communicate better",
            text: "Replace boring internal content with engaging, effective video.",
          },
        ].map((item) => (
          <div key={item.title} className="border border-white/10 p-6 rounded-2xl">
            <h3 className={`${headingFont.className} text-xl`}>{item.title}</h3>
            <p className="mt-3 text-white/60">{item.text}</p>
          </div>
        ))}
      </section>

      <Divider />

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-6 md:grid-cols-4">
        {[
          ["01", "Discovery"],
          ["02", "Concept"],
          ["03", "Production"],
          ["04", "Delivery"],
        ].map(([step, title]) => (
          <div key={step} className="border border-white/10 p-6 rounded-2xl">
            <p className="text-white/40">{step}</p>
            <h4 className={`${headingFont.className} mt-2`}>{title}</h4>
          </div>
        ))}
      </section>

      <Divider />

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-4xl px-6 text-center pb-24">
        <h2 className={`${headingFont.className} text-4xl`}>
          Let’s build something people actually watch.
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <a href="mailto:hello@storylabdigital.co.za" className="bg-white text-black px-6 py-3 rounded-2xl">
            Email Us
          </a>
          <a href="https://wa.me/27729857003" className="border border-white/20 px-6 py-3 rounded-2xl">
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}