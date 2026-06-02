"use client";

import React from "react";
import { Space_Grotesk, Manrope } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* =================================================================
   EDIT YOUR CONTENT HERE
   -----------------------------------------------------------------
   1. WORK   — give each video a real title, client, category, result.
   2. POSTER — export one frame per video into /public/posters/.
   3. TESTIMONIALS — swap in real quotes + names (huge credibility win).
   4. FORMSPREE_ID — create a free form at formspree.io and paste the
      ID below (looks like "xyzabcde"). Until then the form falls back
      to opening the visitor's email client.
   5. ABOUT — your name + bio.
================================================================= */

const FORMSPREE_ID = "xzdwlaby";

const sldLogo = "/icon.png";

const heroVideo = "/videos/AER.mp4";
const heroPoster = "/posters/AER.jpg";

type Work = {
  file: string;
  poster: string;
  title: string;
  client: string;
  category: string;
  result: string;
};

const WORK: Work[] = [
  { file: "cofi.mp4", poster: "/posters/cofi.jpg", title: "CoFi", client: "EBnet", category: "Promo", result: "Opening video for Webinar introducing host." },
  { file: "kayak-hippo.mp4", poster: "/posters/kayak-hippo.jpg", title: "Kayak & Hippo", client: "EBnet", category: "Campaign", result: "Attention-grabbing campaign visual." },
  { file: "clickbait-chaos.mp4", poster: "/posters/clickbait-chaos.jpg", title: "Clickbait Chaos", client: "Datagr8", category: "Awareness", result: "Cut through the noise with a sharp narrative." },
  { file: "reforms-in-the-roar.mp4", poster: "/posters/reforms-in-the-roar.jpg", title: "Reforms in the Roar", client: "Motswedi", category: "Explainer", result: "Made policy change easy to follow." },
  { file: "thriller-webinar.mp4", poster: "/posters/thriller-webinar.jpg", title: "Thriller Webinar", client: "EBnet", category: "Promo", result: "Drove sign-ups with a cinematic teaser." },
  { file: "wifi-trap.mp4", poster: "/posters/wifi-trap.jpg", title: "WiFi Trap", client: "Datagr8", category: "Cyber Awareness", result: "Security message people actually remembered." },
  { file: "impersonation-invasion.mp4", poster: "/posters/impersonation-invasion.jpg", title: "Impersonation Invasion", client: "Datagr8", category: "Cyber Awareness", result: "Brought a fraud risk to life visually." },
  { file: "ebnet-top-gun.mp4", poster: "/posters/ebnet-top-gun.jpg", title: "EBnet: Top Gun", client: "EBnet", category: "Promo", result: "Bold concept that strengthened brand on Webinar opening video." },
  { file: "seeds-of-growth.mp4", poster: "/posters/seeds-of-growth.jpg", title: "Seeds of Growth", client: "Motswedi", category: "Corporate", result: "Communicated growth strategy with clarity." },
];

const FEATURED = {
  video: "/videos/motswedi-corporate-video.mp4",
  poster: "/posters/motswedi.jpg",
  client: "Motswedi",
  category: "Corporate Brand Video",
};

const clientLogos = [
  "ebnet.png",
  "alexander-forbes.png",
  "datagr8.png",
  "bonofide.png",
  "icts.png",
  "motswedi.png",
];

const TESTIMONIALS = [
  {
    quote: "What impressed us most was not just the final product, but the way Chris approached every challenge. Whether it was video production, digital content, webinars, or creative problem-solving, he always found a way to make things work. StoryLabDigital feels less like an external service provider and more like an extension of your team. Reliable, innovative, and always willing to go the extra mile.",
    name: "Leon",
    role: "COO",
    company: "EBnet",
  },
  {
    quote: "Working with Chris and StoryLabDigital has been an absolute game changer. From concept to final delivery, every project was handled with creativity, professionalism, and an incredible attention to detail. The ability to take complex ideas and turn them into engaging visual stories is something truly unique. The quality of work consistently exceeded our expectations, and the turnaround times were exceptional.",
    name: "Justin",
    role: "CTO",
    company: "Datagr8",
  },
];

const ABOUT = {
  founder: "Chris Combrinck",
  role: "Founder & Creative Director",
  bio: "StoryLabDigital was built on a simple idea: great stories create attention, but great execution creates results. We help businesses, brands, and individuals transform ideas into engaging digital experiences through video production, AI-powered content creation, visual storytelling, podcasts, webinars, social media content, and digital solutions that actually move the needle. With over 25 years of real-world business experience across operations, sales, technology, media, and digital transformation, we understand both the creative and commercial side of a project. That means we don't just create content that looks good — we create content with purpose. Whether it's a cinematic brand video, an animated explainer, a podcast production, a webinar, or a complete digital campaign, our focus remains the same: create work that captures attention, tells a compelling story, and leaves a lasting impression.",
};

/* ================================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ---- Branded preloader ---- */
function Preloader() {
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <img src={sldLogo} alt="StoryLabDigital" className="h-16 w-16 object-contain" />
            <div className="h-px w-40 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-blue-400"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className={`${headingFont.className} text-sm uppercase tracking-[0.35em] text-white/60`}>
              StoryLabDigital
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ---- Magnetic button ---- */
function Magnetic({ children, className = "", href, onClick }: {
  children: React.ReactNode; className?: string; href?: string; onClick?: () => void;
}) {
  const ref = React.useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.25;
    setPos({ x, y });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const style = { transform: `translate(${pos.x}px, ${pos.y}px)`, transition: "transform 0.15s ease-out" };

  if (href) {
    return (
      <a ref={ref as any} href={href} onMouseMove={onMove} onMouseLeave={reset} style={style} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref as any} onClick={onClick} onMouseMove={onMove} onMouseLeave={reset} style={style} className={className}>
      {children}
    </button>
  );
}

/* ---- Watermark ---- */
function VideoWatermark() {
  return (
    <div className="pointer-events-none absolute bottom-3 right-3 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/45 p-1.5 shadow-lg backdrop-blur-md">
      <img src={sldLogo} alt="SLD" className="h-full w-full object-contain opacity-90" />
    </div>
  );
}

/* ---- Lazy video (poster until in view, tap for sound) ---- */
function LazyVideo({ src, poster }: { src: string; poster: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }),
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full w-full">
      {inView ? (
        <video className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.08] group-hover:brightness-110"
          src={src} poster={poster} autoPlay muted loop playsInline preload="none" controls={false} />
      ) : (
        <img src={poster} alt="" className="h-full w-full object-cover" loading="lazy" />
      )}
    </div>
  );
}

/* ---- Lightbox ---- */
function Lightbox({ item, onClose }: { item: Work | null; onClose: () => void }) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (item) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} aria-label="Close"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-2xl">
              <video className="h-full w-full" src={`/videos/${item.file}`} poster={item.poster}
                autoPlay loop playsInline controls />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className={`${headingFont.className} text-xl font-semibold text-white`}>{item.title}</h3>
                <p className="text-sm text-white/60">{item.client} · {item.result}</p>
              </div>
              <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs uppercase tracking-wider text-blue-200">
                {item.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function StoryLabDigitalSite() {
  const [lightbox, setLightbox] = React.useState<Work | null>(null);

  const Divider = () => (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );

  const SectionIntro = ({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) => (
    <motion.div className="mx-auto max-w-4xl px-6 text-center lg:px-8"
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-blue-300/80">{eyebrow}</p>
      ) : null}
      <h2 className={`${headingFont.className} text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl`}>{title}</h2>
      {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">{text}</p> : null}
    </motion.div>
  );

  return (
    <div className={`${bodyFont.className} min-h-screen bg-neutral-950 text-white`}>
      <Preloader />
      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className={`${headingFont.className} text-lg font-semibold tracking-tight`}>StoryLabDigital</p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Visual storytelling for business</p>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
  <a href="#work" className="transition hover:text-white">Work</a>
  <a href="#about" className="transition hover:text-white">About</a>
  <a href="#process" className="transition hover:text-white">Process</a>

  <a
    href="/the-lab"
    className="rounded-xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-2.5 font-medium text-cyan-200 transition-all duration-300 hover:scale-[1.03] hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
  >
    🧪 THE LAB
  </a>

  <a href="#contact" className="rounded-xl bg-white px-6 py-2.5 font-medium text-black transition hover:scale-[1.02]">
    Start a Project
  </a>
</nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
            <motion.div className="relative z-10" variants={stagger} initial="hidden" animate="visible">
              <motion.p variants={fadeUp} className="mb-5 inline-flex w-fit items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                One story. Clear message. Strong impact.
              </motion.p>
              <motion.h1 variants={fadeUp} className={`${headingFont.className} max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl`}>
                We turn business messages into video people actually understand, remember, and act on.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-md text-base leading-7 text-white/70 sm:text-lg">
                From explainers to campaign visuals, StoryLabDigital helps brands communicate with clarity, impact, and cinematic edge.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <Magnetic href="#work" className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.01]">
                  Watch the Work
                </Magnetic>
                <Magnetic href="#contact" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                  Start a Project
                </Magnetic>
                <Magnetic href="/the-lab" className="rounded-2xl border border-blue-400/40 bg-blue-400/10 px-6 py-3 text-sm font-medium text-blue-200 transition hover:bg-blue-400/20">
                  Enter THE LAB
                </Magnetic>
              </motion.div>
            </motion.div>

            <motion.div className="relative z-10"
              initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40">
                <div className="group relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                  <LazyVideo src={heroVideo} poster={heroPoster} />
                  <VideoWatermark />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* WORK */}
        <section>
          <SectionIntro eyebrow="The Work" title="Selected Work"
            text="A collection of explainers, campaign visuals, cinematic concepts, and business storytelling projects. Click any project to watch it full-screen with sound." />
        </section>

        <motion.section id="work" className="mx-auto mt-12 max-w-7xl px-6 lg:px-8"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WORK.map((item) => (
              <motion.button
                key={item.file}
                variants={fadeUp}
                onClick={() => setLightbox(item)}
                whileHover={{ y: -12, scale: 1.03, rotateX: 4, rotateY: 4 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-blue-400/15 bg-black/40 text-left shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-sm hover:border-blue-400/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-blue-500/10" />
                  </div>
                  <LazyVideo src={`/videos/${item.file}`} poster={item.poster} />
                  <VideoWatermark />
                  {/* play affordance */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-neutral-950/60 px-4 py-3">
                  <div>
                    <p className={`${headingFont.className} text-sm font-medium text-white`}>{item.title}</p>
                    <p className="text-xs text-white/55">{item.result}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-blue-400/30 bg-blue-400/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-blue-200">
                    {item.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* PROBLEM */}
        <section>
          <SectionIntro eyebrow="The Problem"
            title="Most businesses don’t have a content problem. They have a communication problem."
            text="Long decks get ignored. Flat messaging gets forgotten. Strong visual storytelling changes that." />
        </section>

        <Divider />

        {/* THE LAB PROMO */}
<motion.section
  className="mx-auto max-w-5xl px-6 lg:px-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={fadeUp}
>
  <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-white/5 p-10 text-center">

    <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
      🧪 THE LAB
    </p>

    <h3
      className={`${headingFont.className} mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl`}
    >
      Got an idea at 2am?
    </h3>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
      Need a video tomorrow?
      <br />
      Want an avatar talking to your customers?
      <br />
      Need images for a campaign?
      <br />
      Have a completely ridiculous idea you want to see come to life?
    </p>

    <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-cyan-100/80">
      Good.
      <br />
      That's exactly why THE LAB exists.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {[
        "AI Images",
        "AI Videos",
        "Voice Overs",
        "Avatar Videos",
        "Social Content",
        "Weird Requests Welcome",
      ].map((item) => (
        <span
          key={item}
          className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100"
        >
          {item}
        </span>
      ))}
    </div>

    <a
      href="/the-lab"
      className="mt-10 inline-flex items-center justify-center rounded-2xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-8 py-4 text-base font-medium text-cyan-100 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
    >
      🧪  Enter THE LAB
    </a>

  </div>
</motion.section>

        <Divider />

        {/* USE CASES */}
        <section id="use-cases">
          <SectionIntro eyebrow="What This Solves" title="Built for the moments where message matters."
            text="Clear outcomes. Better understanding. Stronger attention." />
        </section>

        <motion.section className="mx-auto mt-12 grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {[
            { title: "Explain complex ideas", text: "Turn technical, strategic, or operational content into something people actually understand." },
            { title: "Launch with impact", text: "Create campaign visuals that grab attention and strengthen brand presence." },
            { title: "Train and communicate better", text: "Replace forgettable internal content with engaging, effective video people will actually watch." },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className={`${headingFont.className} text-2xl font-semibold text-white`}>{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        <Divider />

        {/* FEATURED */}
        <section>
          <SectionIntro eyebrow="Featured Range" title="Corporate clarity. Creative control."
            text="From polished business communication to bold cinematic concepts, StoryLabDigital knows when to stay sharp and when to push the edge." />
        </section>

        <motion.section className="mx-auto mt-12 max-w-7xl px-6 lg:px-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/6 to-blue-500/5 p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-8">
            <div className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <div className="relative aspect-video">
                <LazyVideo src={FEATURED.video} poster={FEATURED.poster} />
                <VideoWatermark />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-200/75">Featured Project · {FEATURED.client}</p>
              <h3 className={`${headingFont.className} mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl`}>
                Business storytelling that still leaves a mark.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                This is the balance we bring to the table: work that earns trust in corporate rooms while still feeling crafted, visual, and worth watching.
              </p>
              <span className="mt-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs uppercase tracking-wider text-blue-200">
                {FEATURED.category}
              </span>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* BRANDS */}
        <section>
          <SectionIntro eyebrow="Brands" title="Brands we have worked with."
            text="A few of the businesses we have supported through visual storytelling, digital content, and communication work." />
        </section>

        <motion.section className="relative mx-auto mt-12 max-w-7xl overflow-hidden px-6 py-8 lg:px-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
          <div className="flex animate-logo-scroll gap-12 whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={`${logo}-${index}`}
                className="flex h-24 min-w-[220px] items-center justify-center rounded-2xl border border-white/10 bg-white px-8 shadow-lg shadow-black/20 transition hover:scale-[1.03] hover:border-blue-400/40">
                <img src={`/logos/${logo}`} alt={logo.replace(".png", "")}
                  className="max-h-14 w-auto object-contain transition duration-300 hover:scale-110" />
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* TESTIMONIALS */}
        <section>
          <SectionIntro eyebrow="In Their Words" title="What clients say." />
        </section>

        <motion.section className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:px-8"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} variants={fadeUp}
              className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="mb-4 text-blue-400/40">
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
              </svg>
              <p className="text-lg leading-8 text-white/80">{t.quote}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className={`${headingFont.className} text-sm font-medium text-white`}>{t.name}</p>
                <p className="text-sm text-white/55">{t.role} · {t.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <Divider />

        {/* ABOUT */}
        <section id="about">
          <SectionIntro eyebrow="Who We Are" title="More Than Content. 
          We Build Digital Experiences." />
        </section>

        <motion.section className="mx-auto mt-12 max-w-4xl px-6 lg:px-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
            <p className="text-lg leading-8 text-white/75">{ABOUT.bio}</p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className={`${headingFont.className} text-base font-medium text-white`}>{ABOUT.founder}</p>
              <p className="text-sm text-white/55">{ABOUT.role}</p>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* PROCESS */}
        <section id="process">
          <SectionIntro eyebrow="The Process" title="Simple. Clear. Built to move."
            text="No bloated process. No confusion. Just a sharp path from message to finished video." />
        </section>

        <motion.section className="mx-auto mt-12 grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {[
            { step: "01", title: "Discovery", text: "We get clear on the message, audience, and outcome." },
            { step: "02", title: "Concept", text: "We shape the story and visual direction." },
            { step: "03", title: "Production", text: "Fast, sharp execution powered by creative thinking and AI-driven workflows." },
            { step: "04", title: "Delivery", text: "Finished assets ready to launch, present, or publish." },
          ].map((item) => (
            <motion.div key={item.step} variants={fadeUp} whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-blue-200/80">{item.step}</p>
              <h3 className={`${headingFont.className} mt-4 text-2xl font-medium text-white`}>{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        <Divider />

        {/* CREDIBILITY */}
        <motion.section className="mx-auto max-w-5xl px-6 lg:px-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center lg:p-10">
            <h3 className={`${headingFont.className} text-2xl font-semibold tracking-tight text-white sm:text-3xl`}>
              Trusted by businesses who need clarity, not noise.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65">
              Based in Cape Town, South Africa · Working with clients locally and remotely
            </p>
          </div>
        </motion.section>

        <Divider />

        {/* CTA */}
        <section id="contact" className="pb-12">
          <SectionIntro eyebrow="Ready To Start?" title="Let’s build something people actually watch."
            text="If your message matters, it deserves more than another forgettable deck or flat campaign asset." />
        </section>

        <motion.section className="mx-auto max-w-2xl px-6 pb-24 lg:px-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <ContactForm />
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-neutral-950">
  <div className="mx-auto max-w-7xl px-6 py-10 text-center lg:px-8">

    <p className={`${headingFont.className} text-lg text-white/80`}>
      StoryLabDigital
    </p>

    <p className="mt-3 text-sm text-white/50">
      Cape Town, South Africa · hello@storylabdigital.co.za
    </p>

    <div className="mt-5">
      <a
        href="/the-lab"
        className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-2.5 text-sm font-medium text-cyan-200 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-100 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
      >
        🧪 Enter THE LAB
      </a>
    </div>

    <p className="mt-6 text-sm text-white/40">
      © {new Date().getFullYear()} StoryLabDigital. All rights reserved.
    </p>

  </div>
</footer>
    </div>
  );
}

/* ---- Contact form (Formspree) ---- */
function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [type, setType] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const usingFormspree = Boolean(FORMSPREE_ID);

  const submit = async () => {
    if (!name || !email || !type || !budget || !message) {
      alert("Please complete all required fields.");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, company, type, budget, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setCompany("");
        setType("");
        setBudget("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-blue-400/50";

  const label = "mb-2 block text-sm font-medium text-white/70";

  if (status === "sent") {
    return (
      <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/5 p-10 text-center">
        <h3 className={`${headingFont.className} text-2xl font-semibold text-white`}>Thanks — message sent.</h3>
        <p className="mt-3 text-white/65">We&apos;ll be in touch shortly. For anything urgent, WhatsApp us directly.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              setStatus("idle");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Back To StoryLabDigital
          </button>

          <a href="https://wa.me/27729857003" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/5 p-6 lg:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Your Name *</label>
          <input className={field} placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label className={label}>Email Address *</label>
          <input className={field} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label className={label}>Company</label>
          <input className={field} placeholder="Company name" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>

        <div>
          <label className={label}>Project Type *</label>
          <select className={field} value={type} onChange={(e) => setType(e.target.value)}>
            <option className="bg-neutral-900" value="">Select project type</option>
            <option className="bg-neutral-900">Explainer</option>
            <option className="bg-neutral-900">Campaign / Promo</option>
            <option className="bg-neutral-900">Corporate / Brand</option>
            <option className="bg-neutral-900">Training / Internal</option>
            <option className="bg-neutral-900">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className={label}>Estimated Budget *</label>
        <select className={field} value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option className="bg-neutral-900" value="">Select budget range</option>
          <option className="bg-neutral-900">Under R10k</option>
          <option className="bg-neutral-900">R10k – R30k</option>
          <option className="bg-neutral-900">R30k – R75k</option>
          <option className="bg-neutral-900">R75k+</option>
          <option className="bg-neutral-900">Not sure yet</option>
        </select>
      </div>

      <div className="mt-4">
        <label className={label}>Project Details *</label>
        <textarea
          className={`${field} min-h-[120px] resize-y`}
          placeholder="Tell us about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {status === "error" ? (
        <p className="mt-3 text-sm text-red-300">Something went wrong. Please email hello@storylabdigital.co.za directly.</p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        <button onClick={submit} disabled={status === "sending"}
          className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Send Enquiry"}
        </button>

        <a href="https://wa.me/27729857003" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
          WhatsApp
        </a>
      </div>

      <p className="mt-5 text-center text-sm text-white/55">hello@storylabdigital.co.za</p>
    </div>
  );
}