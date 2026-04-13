import { Space_Grotesk, Manrope } from "next/font/google";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type WorkItem = {
  title: string;
  subtitle: "Save Squad" | "Impersonation Invasion" | "Thriller Webinar";
  description: string;
};

export default function StoryLabDigitalSite() {
  const heroVideo = "/videos/af-karabo.mp4";

  const work: WorkItem[] = [
    {
      title: "Animated Storytelling",
      subtitle: "Save Squad",
      description:
        "Character-driven visual storytelling that turns a message into something memorable and engaging.",
    },
    {
      title: "Concept Campaigns",
      subtitle: "Impersonation Invasion",
      description:
        "Bold creative direction for campaigns that need a strong hook and a distinct visual identity.",
    },
    {
      title: "Cinematic Webinar Promos",
      subtitle: "Thriller Webinar",
      description:
        "High-impact themed promo content designed to grab attention before your audience can scroll past.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      text: "We unpack your message, audience, and objective so the story actually does a job.",
    },
    {
      step: "02",
      title: "Script & Concept",
      text: "We shape your idea into a clear visual direction with a strong narrative spine.",
    },
    {
      step: "03",
      title: "Production",
      text: "AI-driven workflows and creative direction combine to produce fast, sharp, polished output.",
    },
    {
      step: "04",
      title: "Delivery",
      text: "You get a finished video asset ready for presentations, campaigns, training, or launch.",
    },
  ];

  const services = [
    "Animated explainer videos",
    "Campaign visuals and promo videos",
    "Branded storytelling content",
    "Training and presentation support videos",
  ];

  const highlights = [
    "Clearer communication for complex ideas",
    "Stronger brand presence and recall",
    "Fast production powered by AI-driven workflows",
    "Creative execution that still feels human and intentional",
  ];

  const aboutPoints = [
    "StoryLabDigital turns business stories into visual experiences that audiences understand, remember, and respond to.",
    "We help corporates and growing SMEs replace flat presentations and forgettable decks with cinematic, strategic video content.",
    "From explainers to campaign visuals, the goal stays the same: make your message hit harder.",
  ];

  const videoMap: Record<WorkItem["subtitle"], string> = {
    "Save Squad": "/videos/save-squad.mp4",
    "Impersonation Invasion": "/videos/impersonation-invasion.mp4",
    "Thriller Webinar": "/videos/thriller-webinar.mp4",
  };

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
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                One story. Clear message. Strong impact.
              </div>

              <h1
                className={`${headingFont.className} max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl`}
              >
                We turn business stories and complex ideas into video people actually understand and remember.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                StoryLabDigital creates animated explainers, campaign visuals, and cinematic brand content for corporates and growing SMEs that need clarity, attention, and a stronger brand presence.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.01]"
                >
                  Book a Call
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Watch Our Work
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["Fast", "AI-powered production"],
                  ["Clear", "Business-first storytelling"],
                  ["Bold", "Premium visual direction"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm text-white/60">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                  <div className="relative h-full w-full">
                    <video
                      className="h-full w-full object-cover"
                      src={heroVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-xs uppercase tracking-[0.25em] text-white/50">
                      <span>Featured Reel</span>
                      <span>AF Karabo</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p
                        className={`${headingFont.className} max-w-sm text-2xl font-medium leading-tight text-white`}
                      >
                        Cinematic, attention-grabbing visual storytelling built to stop the scroll and sharpen your brand presence.
                      </p>
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {["Save Squad", "Impersonation", "Thriller"].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-black/40 p-3 text-xs text-white/70 backdrop-blur-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/30">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-white/55 lg:grid-cols-3 lg:px-8">
            <p>Long documents get ignored.</p>
            <p>Presentations get forgotten.</p>
            <p>Strong visual storytelling cuts through the noise.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">
                About StoryLabDigital
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-4xl font-semibold tracking-tight sm:text-5xl`}
              >
                Business stories deserve more than boring slides.
              </h2>
            </div>
            <div className="space-y-5">
              {aboutPoints.map((point) => (
                <p key={point} className="text-lg leading-8 text-white/70">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Selected Work</p>
            <h2
              className={`${headingFont.className} mt-4 text-4xl font-semibold tracking-tight sm:text-5xl`}
            >
              See what your brand could look like.
            </h2>
            <p className="mt-4 text-lg text-white/65">
              A mix of animation, concept-driven storytelling, and cinematic promo work designed to hold attention.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {work.map((item) => (
              <article
                key={item.subtitle}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                  <video
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    src={videoMap[item.subtitle]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-200/70">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">What We Do</p>
              <h2
                className={`${headingFont.className} mt-4 text-4xl font-semibold tracking-tight sm:text-5xl`}
              >
                Visual storytelling built for business.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                StoryLabDigital helps corporates and SMEs explain, promote, and elevate their message through animated explainer videos and creative visual content.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-white/50">Core services</p>
              <div className="mt-5 space-y-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/80"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">
                  Why StoryLabDigital
                </p>
                <h2
                  className={`${headingFont.className} mt-4 text-4xl font-semibold tracking-tight sm:text-5xl`}
                >
                  Not just video. Strategic storytelling.
                </h2>
              </div>
              <div className="space-y-5 text-white/70">
                <p>
                  We blend AI-powered production with a creative human eye to build content that looks sharp, moves fast, and still feels intentional.
                </p>
                <p>
                  This is not filler content. It is communication designed to create clarity, hold attention, and strengthen how your brand is perceived.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Process</p>
            <h2
              className={`${headingFont.className} mt-4 text-4xl font-semibold tracking-tight sm:text-5xl`}
            >
              Simple. Clear. Effective.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
          <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/5 p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">
                  Ready to start?
                </p>
                <h2
                  className={`${headingFont.className} mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl`}
                >
                  Let’s turn your story into something people actually watch.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Whether you need an animated explainer, a campaign visual, or a sharper way to present your message, StoryLabDigital is built to help your brand stand out.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6">
                <p className="text-sm font-medium text-white/50">Contact</p>
                <div className="mt-6 space-y-4 text-sm text-white/80">
                  <a
                    href="mailto:hello@storylabdigital.co.za?subject=StoryLabDigital%20Enquiry"
                    className="block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/5"
                  >
                    hello@storylabdigital.co.za
                  </a>
                  <a
                    href="https://wa.me/27729857003"
                    className="block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/5"
                  >
                    Chat on WhatsApp: +27 72 985 7003
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@storylabdigital.co.za?subject=StoryLabDigital%20Enquiry"
                    className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black"
                  >
                    Email StoryLabDigital
                  </a>
                  <a
                    href="#work"
                    className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white"
                  >
                    View Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}