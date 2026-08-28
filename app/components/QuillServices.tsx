"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

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

function ServiceIllustration({ type }: { type: Service["visual"] }) {
  if (type === "film") {
    return (
      <div className="relative h-[5.2rem] w-[7rem] shrink-0" aria-hidden="true">
        <span className="absolute right-0 top-1 h-14 w-16 rotate-[-7deg] rounded-full bg-[#316bff]/10" />
        <span className="absolute left-2 top-6 h-9 w-14 rounded-md border-2 border-[#0b0f17]/75 bg-[#0b0f17]/5" />
        <span className="absolute left-[3.65rem] top-[2.15rem] h-7 w-7 rounded-full border-[5px] border-[#316bff] bg-white shadow-sm" />
        <span className="absolute left-0 top-4 h-2 w-7 rounded-full bg-[#0b0f17]/75" />
        <span className="absolute bottom-1 left-4 h-1 w-20 rotate-[-7deg] rounded-full bg-[#316bff]" />
      </div>
    );
  }

  if (type === "learning") {
    return (
      <div className="relative h-[5.2rem] w-[7rem] shrink-0" aria-hidden="true">
        <span className="absolute inset-x-1 top-2 h-[4.15rem] rounded-xl border border-[#316bff]/20 bg-[#eef3ff] shadow-sm" />
        <span className="absolute left-3 top-4 h-8 w-10 rounded-lg bg-white" />
        <span className="absolute right-3 top-4 h-8 w-10 rounded-lg bg-[#316bff]/10" />
        <span className="absolute left-1/2 top-[1.9rem] flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#316bff] text-[0.65rem] text-white">▶</span>
        <span className="absolute bottom-1 right-0 h-8 w-8 rounded-full bg-[#316bff]/10" />
      </div>
    );
  }

  if (type === "awareness") {
    return (
      <div className="relative h-[5.2rem] w-[7rem] shrink-0" aria-hidden="true">
        <span className="absolute left-4 top-4 h-12 w-12 rotate-[-18deg] rounded-[50%_45%_45%_50%] border-[5px] border-[#316bff] bg-white" />
        <span className="absolute left-[3.35rem] top-[2.7rem] h-3 w-10 rotate-[28deg] rounded-full bg-[#316bff]" />
        <span className="absolute right-1 top-2 h-1 w-8 rotate-[-20deg] rounded-full bg-[#316bff]" />
        <span className="absolute right-0 top-6 h-1 w-7 rounded-full bg-[#316bff]" />
      </div>
    );
  }

  return (
    <div className="relative h-[5.2rem] w-[7rem] shrink-0" aria-hidden="true">
      <span className="absolute left-2 top-3 h-14 w-[5.6rem] rounded-xl border border-[#316bff]/20 bg-[#eef3ff] shadow-sm" />
      <span className="absolute right-0 top-0 flex h-10 w-10 rotate-[5deg] items-center justify-center rounded-xl bg-[#316bff] text-sm font-semibold text-white shadow-lg">AI</span>
      <span className="absolute bottom-2 left-6 h-1 w-16 rounded-full bg-[#0b0f17]/70" />
      <span className="absolute left-[2.15rem] top-[2.15rem] h-6 w-6 rounded-full border-[4px] border-[#316bff]" />
    </div>
  );
}

function ServiceCard({
  service,
  progress,
  reduceMotion,
}: {
  service: Service;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const inputRange = [...service.range];
  const opacity = useTransform(progress, inputRange, [0, 1]);
  const x = useTransform(progress, inputRange, [service.direction, 0]);
  const y = useTransform(progress, inputRange, [10, 0]);

  return (
    <motion.article
      style={reduceMotion ? undefined : { opacity, x, y }}
      className={`relative z-30 mb-5 overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-[0_26px_80px_rgba(11,15,23,0.10)] sm:p-7 lg:absolute lg:mb-0 ${service.position}`}
    >
      <span className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#316bff]/5" />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="sld-label text-[#316bff]">{service.number}</p>
          <h3 className="mt-3 text-[1.65rem] font-medium leading-[1.01] tracking-[-0.05em] sm:text-[1.9rem]">
            {service.title}
          </h3>
        </div>
        <ServiceIllustration type={service.visual} />
      </div>
      <p className="mt-3 max-w-[28rem] leading-6 text-black/55">{service.text}</p>
      <p className="mt-5 border-t border-black/10 pt-3 font-mono text-[0.62rem] uppercase leading-5 tracking-[0.1em] text-black/38">
        {service.detail}
      </p>
      <span aria-hidden="true" className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#eef3ff] text-[#316bff]">→</span>
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
      className="relative z-10 mx-auto mb-10 w-full max-w-[17rem] lg:absolute lg:left-1/2 lg:top-[2%] lg:mb-0 lg:w-[27%] lg:max-w-[21rem] lg:-translate-x-1/2"
    >
      <div className="relative mx-auto h-[31rem] w-full max-w-[20rem] sm:h-[33rem] lg:h-[32rem]">
        <div aria-hidden="true" className="absolute bottom-[4.1rem] left-1/2 z-0 h-[13.5rem] w-[15rem] -translate-x-1/2">
          <div className="absolute left-[1.55rem] top-0 h-[9.2rem] w-2 rotate-[7deg] rounded-full bg-[#7a4d28]" />
          <div className="absolute right-[1.55rem] top-0 h-[9.2rem] w-2 -rotate-[7deg] rounded-full bg-[#7a4d28]" />
          <div className="absolute left-1/2 top-[4.8rem] h-5 w-[13.2rem] -translate-x-1/2 rounded bg-[#b57b40] shadow-sm" />
          <div className="absolute left-[2rem] top-[3.1rem] h-3 w-[4.2rem] rounded bg-[#b57b40]" />
          <div className="absolute right-[2rem] top-[3.1rem] h-3 w-[4.2rem] rounded bg-[#b57b40]" />
          <div className="absolute bottom-0 left-[2.2rem] h-2 w-[10rem] rotate-[38deg] rounded-full bg-[#5a3923]" />
          <div className="absolute bottom-0 right-[2.2rem] h-2 w-[10rem] -rotate-[38deg] rounded-full bg-[#5a3923]" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 h-[26.5rem] overflow-hidden">
          <Image
            src="/quill/quill-field-notes.webp"
            alt="Quill, StoryLabDigital Employee Number One, presenting the studio services"
            fill
            sizes="(max-width: 1024px) 272px, 336px"
            className="object-contain object-top"
          />
        </div>

        <div aria-hidden="true" className="absolute right-[0.4rem] top-[11.2rem] z-20 h-[5rem] w-[5rem] rotate-[8deg] rounded-full border-[0.72rem] border-[#f59ab2] bg-[#f7c45b] shadow-[0_8px_25px_rgba(11,15,23,0.13)]">
          <span className="absolute left-[0.1rem] top-[0.2rem] h-1 w-2 rotate-[20deg] rounded-full bg-[#316bff]" />
          <span className="absolute right-[0.25rem] top-[0.6rem] h-1 w-2 rotate-[-20deg] rounded-full bg-[#ff7c42]" />
          <span className="absolute bottom-[0.4rem] left-[0.7rem] h-1 w-2 rotate-[35deg] rounded-full bg-white" />
          <span className="absolute bottom-[0.55rem] right-[0.35rem] h-1 w-2 rotate-[-28deg] rounded-full bg-[#316bff]" />
        </div>

        <div className="pointer-events-none absolute bottom-[3.8rem] left-0 right-0 z-20 h-[9rem] bg-gradient-to-t from-[#f7f7f5] via-[#f7f7f5]/94 to-transparent" />
        <div aria-hidden="true" className="absolute bottom-[5.8rem] left-1/2 z-30 h-[4.7rem] w-[9.4rem] -translate-x-1/2 rounded-[50%] bg-[#d6a16d]/12 blur-xl" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute left-[-2.4rem] top-[8rem] hidden rotate-[-8deg] lg:block">
        <div className="h-1 w-11 rounded-full bg-[#316bff]" />
        <div className="mt-2 h-1 w-8 translate-x-2 rotate-[18deg] rounded-full bg-[#316bff]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-[-4rem] top-[6rem] hidden rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-sm lg:block">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-black/45">Idea → Story → Impact</p>
      </div>

      <figcaption className="relative z-30 -mt-7 bg-[#f7f7f5] pt-3 text-center">
        <p className="sld-label text-[#316bff]">Quill · Employee #1</p>
        <p className="mt-2 font-mono text-xs leading-5 text-black/50 sm:text-sm">
          Right. Apparently I&apos;m presenting this.
        </p>
      </figcaption>
    </motion.figure>
  );
}

export default function QuillServices() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 78%", "end 88%"],
  });

  const quillOpacity = useTransform(scrollYProgress, [0, 0.04], [0.45, 1]);
  const quillScale = useTransform(scrollYProgress, [0, 0.08], [0.97, 1]);
  const learningOpacity = useTransform(scrollYProgress, [0.58, 0.7], [0, 1]);
  const learningY = useTransform(scrollYProgress, [0.58, 0.7], [20, 0]);

  return (
    <section className="border-y border-black/10 bg-[#f7f7f5]">
      <div className="sld-container pt-20 sm:pt-24 lg:pt-28">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
          <span className="text-[#316bff]">002.5</span>
          <span>Apparently I work here now</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
            Here&apos;s what we
            <br />
            actually do<span className="text-[#316bff]">.</span>
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/55 sm:text-lg lg:justify-self-end">
            Different problems need different ways of telling the story. Quill has been asked to explain.
          </p>
        </div>
      </div>

      <div ref={stageRef} className="sld-container relative pt-12 lg:h-[118svh] lg:pt-8">
        <div className="lg:sticky lg:top-[calc(var(--header-height)+0.6rem)] lg:h-[calc(100svh-var(--header-height)-1.2rem)] lg:min-h-[730px]">
          <div className="relative mx-auto h-full max-w-[1320px] lg:px-2">
            <QuillDirector reduceMotion={reduceMotion} opacity={quillOpacity} scale={quillScale} />

            <div className="lg:hidden">
              {services.map((service) => (
                <motion.article
                  key={service.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-20 mb-5 overflow-hidden rounded-[1.55rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.08)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="sld-label text-[#316bff]">{service.number}</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">{service.title}</h3>
                    </div>
                    <ServiceIllustration type={service.visual} />
                  </div>
                  <p className="mt-3 leading-7 text-black/55">{service.text}</p>
                  <p className="mt-5 border-t border-black/10 pt-3 font-mono text-[0.65rem] uppercase leading-5 tracking-[0.1em] text-black/38">{service.detail}</p>
                </motion.article>
              ))}
            </div>

            <div className="hidden lg:block">
              {services.map((service) => (
                <ServiceCard key={service.number} service={service} progress={scrollYProgress} reduceMotion={reduceMotion} />
              ))}
            </div>

            <motion.article
              style={reduceMotion ? undefined : { opacity: learningOpacity, y: learningY }}
              className="relative z-40 mt-5 overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-[0_26px_80px_rgba(11,15,23,0.10)] sm:p-7 lg:absolute lg:bottom-[2.5%] lg:left-[8%] lg:right-[8%] lg:mt-0 lg:px-8 lg:py-5"
            >
              <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
                <div className="flex items-start gap-5">
                  <div className="hidden h-[5rem] w-[7rem] shrink-0 items-end gap-1 sm:flex" aria-hidden="true">
                    {["Learn", "Engage", "Apply", "Grow"].map((label, index) => (
                      <span key={label} className="flex h-[calc(2rem+var(--lift))] w-6 items-end justify-center rounded-t bg-[#0b0f17] pb-1 font-mono text-[0.42rem] uppercase text-white" style={{ "--lift": `${index * 0.35}rem` } as React.CSSProperties}>{label.slice(0, 1)}</span>
                    ))}
                  </div>
                  <div>
                    <p className="sld-label text-[#316bff]">05</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-[-0.045em] sm:text-[1.85rem]">Learning experiences</h3>
                    <p className="mt-2 max-w-[34rem] leading-6 text-black/55">From onboarding and internal training to complete digital academies.</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {["Strategy", "Content", "Platform", "Learning"].map((step, index) => (
                    <div key={step} className="relative text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#316bff]/20 bg-[#eef3ff] text-[#316bff]">{index + 1}</div>
                      <p className="mt-2 font-mono text-[0.56rem] uppercase tracking-[0.08em] text-black/45">{step}</p>
                      {index < 3 ? <span className="absolute -right-2 top-3 text-[#316bff]">→</span> : null}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>

      <div className="sld-container relative z-20 -mt-[1px] pb-16 pt-4 sm:pb-20 lg:pt-6">
        <div className="overflow-hidden rounded-[1.8rem] border border-[#0b0f17] bg-[#0b0f17] px-6 py-7 text-white shadow-[0_24px_80px_rgba(11,15,23,0.18)] sm:px-8 lg:px-10 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_auto_1.45fr_auto] lg:items-center">
            <p className="rotate-[-2deg] text-lg italic leading-6 text-white/80">
              Still not sure
              <br />
              what you need?
            </p>
            <span className="hidden h-12 w-px bg-white/15 lg:block" />
            <h3 className="text-3xl font-light tracking-[-0.045em] sm:text-4xl lg:text-center lg:text-[2.55rem]">
              <span className="text-[#6f97ff]">Good.</span> Start with the problem<span className="text-[#316bff]">.</span>
            </h3>
            <Link href="/contact" className="inline-flex w-fit items-center gap-5 rounded-full bg-[#316bff] px-6 py-4 text-sm font-semibold text-white transition hover:translate-x-0.5">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
