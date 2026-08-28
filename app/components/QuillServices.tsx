"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const quillDirectorSrc = "data:image/webp;base64,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";

const services = [
  {
    number: "01",
    title: "Film & campaign content",
    text: "Brand films, campaigns and stories built around something worth saying.",
    detail: "Film · Campaigns · Branded stories",
    visual: "film",
    position: "lg:left-0 lg:top-[7%] lg:w-[31%] xl:w-[29%]",
    direction: -34,
    range: [0, 0.08],
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "Save Squad · Training · Academies",
    visual: "learning",
    position: "lg:right-0 lg:top-[6%] lg:w-[31%] xl:w-[29%]",
    direction: 34,
    range: [0.12, 0.24],
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "Awareness · Change · Internal comms",
    visual: "awareness",
    position: "lg:left-[1%] lg:bottom-[25%] lg:w-[30%] xl:w-[28%]",
    direction: -34,
    range: [0.28, 0.4],
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "Concept art · Characters · Voice",
    visual: "ai",
    position: "lg:right-[1%] lg:bottom-[24%] lg:w-[30%] xl:w-[28%]",
    direction: 34,
    range: [0.44, 0.56],
  },
] as const;

type Service = (typeof services)[number];

function ServiceArt({ type }: { type: Service["visual"] }) {
  if (type === "film") {
    return (
      <svg viewBox="0 0 150 100" className="h-[5.6rem] w-[8rem] shrink-0" aria-hidden="true">
        <path d="M28 71C65 40 91 35 126 44" fill="none" stroke="#316bff" strokeWidth="16" strokeLinecap="round" opacity=".14" />
        <rect x="28" y="33" width="58" height="38" rx="7" fill="white" stroke="#111827" strokeWidth="4" />
        <rect x="22" y="24" width="31" height="9" rx="4" fill="#111827" />
        <circle cx="88" cy="52" r="20" fill="white" stroke="#316bff" strokeWidth="8" />
        <path d="M103 70l22 10" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "learning") {
    return (
      <svg viewBox="0 0 150 100" className="h-[5.6rem] w-[8rem] shrink-0" aria-hidden="true">
        <path d="M21 27C65 8 112 12 135 31" fill="none" stroke="#316bff" strokeWidth="14" strokeLinecap="round" opacity=".12" />
        <rect x="19" y="24" width="112" height="59" rx="13" fill="#eef3ff" stroke="#316bff" strokeOpacity=".25" strokeWidth="3" />
        <rect x="28" y="33" width="39" height="28" rx="7" fill="white" />
        <rect x="73" y="33" width="45" height="28" rx="7" fill="#dfe8ff" />
        <circle cx="76" cy="59" r="16" fill="#316bff" />
        <path d="M72 51l12 8-12 8z" fill="white" />
      </svg>
    );
  }

  if (type === "awareness") {
    return (
      <svg viewBox="0 0 150 100" className="h-[5.6rem] w-[8rem] shrink-0" aria-hidden="true">
        <path d="M25 72C54 48 86 37 126 31" fill="none" stroke="#316bff" strokeWidth="16" strokeLinecap="round" opacity=".12" />
        <path d="M33 48h27l31-19v42L60 55H33z" fill="white" stroke="#316bff" strokeWidth="7" strokeLinejoin="round" />
        <path d="M53 56l12 22" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
        <path d="M103 29l15-11M109 48h20M102 66l15 12" stroke="#316bff" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 150 100" className="h-[5.6rem] w-[8rem] shrink-0" aria-hidden="true">
      <path d="M23 72C62 43 97 34 130 38" fill="none" stroke="#7b61ff" strokeWidth="16" strokeLinecap="round" opacity=".13" />
      <rect x="24" y="31" width="83" height="50" rx="10" fill="#eef3ff" stroke="#316bff" strokeOpacity=".25" strokeWidth="3" />
      <path d="M40 70h70" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <circle cx="60" cy="56" r="13" fill="white" stroke="#316bff" strokeWidth="6" />
      <rect x="91" y="18" width="42" height="39" rx="10" fill="#316bff" />
      <text x="112" y="43" textAnchor="middle" fill="white" fontSize="19" fontWeight="700">AI</text>
    </svg>
  );
}

function ServiceCard({ service, progress, reduceMotion }: {
  service: Service;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const range = [...service.range];
  const opacity = useTransform(progress, range, [0, 1]);
  const x = useTransform(progress, range, [service.direction, 0]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.article
      style={reduceMotion ? undefined : { opacity, x, y }}
      className={`relative z-30 mb-5 overflow-hidden rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_28px_85px_rgba(11,15,23,0.10)] sm:p-7 lg:absolute lg:mb-0 ${service.position}`}
    >
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#316bff]/5" />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="sld-label text-[#316bff]">{service.number}</p>
          <h3 className="mt-3 text-[1.7rem] font-medium leading-[1.01] tracking-[-0.05em] sm:text-[1.95rem]">{service.title}</h3>
        </div>
        <ServiceArt type={service.visual} />
      </div>
      <p className="mt-3 max-w-[28rem] leading-6 text-black/55">{service.text}</p>
      <div className="mt-5 flex items-end justify-between gap-5 border-t border-black/10 pt-3">
        <p className="font-mono text-[0.62rem] uppercase leading-5 tracking-[0.1em] text-black/38">{service.detail}</p>
        <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef3ff] text-[#316bff]">→</span>
      </div>
    </motion.article>
  );
}

function QuillDirector({ reduceMotion, opacity, scale }: {
  reduceMotion: boolean | null;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  return (
    <motion.figure
      style={reduceMotion ? undefined : { opacity, scale }}
      className="relative z-20 mx-auto mb-10 w-full max-w-[18rem] lg:absolute lg:left-1/2 lg:top-[1%] lg:mb-0 lg:w-[27%] lg:max-w-[21rem] lg:-translate-x-1/2"
    >
      <div className="relative mx-auto h-[31rem] overflow-hidden rounded-[2rem] sm:h-[33rem] lg:h-[32rem]">
        <img
          src={quillDirectorSrc}
          alt="Quill seated in a director's chair holding coffee and a donut"
          className="h-full w-full scale-[1.08] object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f7f7f5] to-transparent" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute left-[-2.6rem] top-[7.5rem] hidden rotate-[-8deg] lg:block">
        <div className="h-1 w-11 rounded-full bg-[#316bff]" />
        <div className="mt-2 h-1 w-8 translate-x-2 rotate-[18deg] rounded-full bg-[#316bff]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-[-4.4rem] top-[5.5rem] hidden rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-sm lg:block">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-black/45">Idea → Story → Impact</p>
      </div>

      <figcaption className="relative z-30 -mt-5 bg-[#f7f7f5] pt-3 text-center">
        <p className="sld-label text-[#316bff]">Quill · Employee #1</p>
        <p className="mt-2 font-mono text-xs leading-5 text-black/50 sm:text-sm">Right. Apparently I&apos;m presenting this.</p>
      </figcaption>
    </motion.figure>
  );
}

function LearningCard({ progress, reduceMotion }: {
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const opacity = useTransform(progress, [0.58, 0.7], [0, 1]);
  const y = useTransform(progress, [0.58, 0.7], [20, 0]);

  return (
    <motion.div
      style={reduceMotion ? undefined : { opacity, y }}
      className="absolute bottom-[3.5%] left-[8%] right-[8%] z-40 overflow-hidden rounded-[1.9rem] border border-black/10 bg-white px-7 py-6 shadow-[0_28px_90px_rgba(11,15,23,0.11)]"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex items-center gap-5">
          <div aria-hidden="true" className="hidden h-20 w-28 items-end gap-1.5 sm:flex">
            {[34, 46, 59, 72].map((h) => <span key={h} className="w-6 rounded-t bg-[#0b0f17]" style={{ height: h }} />)}
          </div>
          <div>
            <p className="sld-label text-[#316bff]">05</p>
            <h3 className="mt-2 text-3xl font-medium tracking-[-0.045em]">Learning experiences</h3>
            <p className="mt-2 max-w-xl text-lg leading-7 text-black/55">From onboarding and internal training to complete digital academies.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {["Strategy", "Content", "Platform", "Learning"].map((step, index) => (
            <div key={step} className="relative text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#316bff]/25 bg-[#eef3ff] text-[#316bff]">{index + 1}</div>
              <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-black/40">{step}</p>
              {index < 3 ? <span aria-hidden="true" className="absolute -right-2 top-3 text-[#316bff]">→</span> : null}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function QuillServices() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start 78%", "end 88%"] });
  const quillOpacity = useTransform(scrollYProgress, [0, 0.04], [0.45, 1]);
  const quillScale = useTransform(scrollYProgress, [0, 0.08], [0.97, 1]);

  return (
    <section className="border-y border-black/10 bg-[#f7f7f5]">
      <div className="sld-container pt-20 sm:pt-24 lg:pt-28">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
          <span className="text-[#316bff]">002.5</span>
          <span>Apparently I work here now</span>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">Here&apos;s what we<br />actually do<span className="text-[#316bff]">.</span></h2>
          <p className="max-w-xl text-base leading-8 text-black/55 sm:text-lg lg:justify-self-end">Different problems need different ways of telling the story. Quill has been asked to explain.</p>
        </div>
      </div>

      <div ref={stageRef} className="sld-container relative pt-12 lg:h-[118svh] lg:pt-8">
        <div className="lg:sticky lg:top-[calc(var(--header-height)+0.6rem)] lg:h-[calc(100svh-var(--header-height)-1.2rem)] lg:min-h-[730px]">
          <div className="relative mx-auto h-full max-w-[1320px] lg:px-2">
            <QuillDirector reduceMotion={reduceMotion} opacity={quillOpacity} scale={quillScale} />

            <div className="lg:hidden">
              {services.map((service) => (
                <motion.article key={service.number} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="relative z-20 mb-5 overflow-hidden rounded-[1.6rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.08)]">
                  <div className="flex items-start justify-between gap-4"><div><p className="sld-label text-[#316bff]">{service.number}</p><h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">{service.title}</h3></div><ServiceArt type={service.visual} /></div>
                  <p className="mt-3 leading-7 text-black/55">{service.text}</p>
                  <p className="mt-5 border-t border-black/10 pt-3 font-mono text-[0.62rem] uppercase leading-5 tracking-[0.1em] text-black/38">{service.detail}</p>
                </motion.article>
              ))}
              <div className="mb-8 rounded-[1.6rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.08)]"><p className="sld-label text-[#316bff]">05</p><h3 className="mt-3 text-2xl font-medium">Learning experiences</h3><p className="mt-3 leading-7 text-black/55">From onboarding and internal training to complete digital academies.</p></div>
            </div>

            <div className="hidden lg:block">
              {services.map((service) => <ServiceCard key={service.number} service={service} progress={scrollYProgress} reduceMotion={reduceMotion} />)}
              <LearningCard progress={scrollYProgress} reduceMotion={reduceMotion} />
            </div>
          </div>
        </div>
      </div>

      <div className="sld-container pb-16 pt-5 sm:pb-20 lg:pt-8">
        <div className="overflow-hidden rounded-[1.8rem] border border-[#0b0f17] bg-[#0b0f17] px-7 py-8 text-white shadow-[0_26px_80px_rgba(11,15,23,0.16)] lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_auto_1.6fr_auto] lg:items-center">
            <p className="rotate-[-2deg] text-xl italic leading-7 text-white/80">Still not sure<br />what you need?</p>
            <span className="hidden h-14 w-px bg-white/15 lg:block" />
            <h3 className="text-3xl font-light tracking-[-0.045em] sm:text-4xl lg:text-center lg:text-[2.65rem]"><span className="text-[#6f97ff]">Good.</span> Start with the problem<span className="text-[#316bff]">.</span></h3>
            <Link href="/contact" className="inline-flex w-fit items-center gap-5 rounded-full bg-[#316bff] px-7 py-4 text-sm font-semibold text-white transition hover:translate-x-0.5">Start a conversation <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
