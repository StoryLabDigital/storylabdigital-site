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
    icon: "REC",
    position: "lg:left-0 lg:top-[9%] lg:w-[30%] xl:w-[28%]",
    direction: -34,
    range: [0.0, 0.08],
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "Save Squad · Training · Academies",
    icon: "▶",
    position: "lg:right-0 lg:top-[7%] lg:w-[30%] xl:w-[28%]",
    direction: 34,
    range: [0.12, 0.24],
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "Awareness · Change · Internal comms",
    icon: "↗",
    position: "lg:left-[1%] lg:bottom-[29%] lg:w-[29%] xl:w-[27%]",
    direction: -34,
    range: [0.28, 0.4],
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "Concept art · Characters · Voice",
    icon: "AI",
    position: "lg:right-[1%] lg:bottom-[28%] lg:w-[30%] xl:w-[28%]",
    direction: 34,
    range: [0.44, 0.56],
  },
  {
    number: "05",
    title: "Learning experiences",
    text: "From onboarding and internal training to complete digital academies.",
    detail: "Strategy → Content → Platform → Learning",
    icon: "→",
    position: "lg:left-[11%] lg:bottom-[18%] lg:w-[78%]",
    direction: 0,
    range: [0.6, 0.72],
  },
] as const;

type Service = (typeof services)[number];

function ServiceVisual({ icon }: { icon: Service["icon"] }) {
  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#eef3ff] text-sm font-semibold tracking-[0.08em] text-[#316bff] sm:h-16 sm:w-16">
      <span className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-[#316bff]/10" />
      <span className="relative">{icon}</span>
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
  const y = useTransform(
    progress,
    inputRange,
    [service.number === "05" ? 22 : 10, 0],
  );

  const isWide = service.number === "05";

  return (
    <motion.article
      style={reduceMotion ? undefined : { opacity, x, y }}
      className={`relative z-30 mb-5 overflow-hidden rounded-[1.4rem] border border-black/10 bg-white/98 p-6 shadow-[0_22px_70px_rgba(11,15,23,0.10)] sm:p-7 lg:absolute lg:mb-0 ${service.position}`}
    >
      <span className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[#316bff]/5" />
      <div className={isWide ? "grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center" : ""}>
        <div>
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="sld-label text-[#316bff]">{service.number}</p>
              <h3 className="mt-3 text-2xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-[1.8rem]">
                {service.title}
              </h3>
            </div>
            <ServiceVisual icon={service.icon} />
          </div>
          <p className="mt-3 max-w-[36rem] leading-6 text-black/55">{service.text}</p>
          <p className="mt-5 border-t border-black/10 pt-3 font-mono text-[0.65rem] uppercase leading-5 tracking-[0.1em] text-black/38">
            {service.detail}
          </p>
        </div>
        {isWide ? (
          <div className="hidden items-center gap-3 pr-2 lg:flex" aria-hidden="true">
            {["Strategy", "Content", "Platform", "Learning"].map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="mx-auto h-8 w-8 rounded-full border border-[#316bff]/25 bg-[#eef3ff]" />
                  <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-black/40">{step}</p>
                </div>
                {index < 3 ? <span className="text-[#316bff]">→</span> : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function QuillServices() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 78%", "end 85%"],
  });

  const quillOpacity = useTransform(scrollYProgress, [0, 0.04], [0.35, 1]);
  const quillScale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);
  const conclusionOpacity = useTransform(scrollYProgress, [0.74, 0.84], [0, 1]);
  const conclusionY = useTransform(scrollYProgress, [0.74, 0.84], [14, 0]);

  return (
    <section className="overflow-hidden border-y border-black/10 bg-[#f7f7f5]">
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

      <div
        ref={stageRef}
        className="sld-container relative pb-16 pt-14 sm:pb-20 lg:h-[138svh] lg:pb-0 lg:pt-10"
      >
        <div className="lg:sticky lg:top-[calc(var(--header-height)+0.75rem)] lg:h-[calc(100svh-var(--header-height)-1.5rem)] lg:min-h-[740px]">
          <div className="relative mx-auto h-full max-w-[1320px] lg:px-2">
            <motion.figure
              style={reduceMotion ? undefined : { opacity: quillOpacity, scale: quillScale }}
              className="relative z-10 mx-auto mb-10 w-full max-w-[16rem] lg:absolute lg:left-1/2 lg:top-[5%] lg:mb-0 lg:w-[25%] lg:max-w-[20rem] lg:-translate-x-1/2"
            >
              <div className="relative mx-auto h-[29rem] w-full max-w-[19rem] overflow-hidden sm:h-[31rem] lg:h-[30rem]">
                <div aria-hidden="true" className="absolute bottom-[4.5rem] left-1/2 z-0 h-[8.5rem] w-[12rem] -translate-x-1/2">
                  <div className="absolute left-[1.2rem] top-[1rem] h-[6.2rem] w-2 rotate-[12deg] rounded-full bg-[#8c6037]" />
                  <div className="absolute right-[1.2rem] top-[1rem] h-[6.2rem] w-2 -rotate-[12deg] rounded-full bg-[#8c6037]" />
                  <div className="absolute left-1/2 top-[2rem] h-4 w-[10.5rem] -translate-x-1/2 rounded bg-[#b8834d]" />
                  <div className="absolute bottom-0 left-[2rem] h-2 w-[8.5rem] rotate-[34deg] rounded-full bg-[#5f4127]" />
                  <div className="absolute bottom-0 right-[2rem] h-2 w-[8.5rem] -rotate-[34deg] rounded-full bg-[#5f4127]" />
                </div>
                <Image
                  src="/quill/quill-field-notes.webp"
                  alt="Quill, StoryLabDigital Employee Number One, presenting the studio services"
                  fill
                  sizes="(max-width: 1024px) 256px, 320px"
                  className="relative z-10 object-contain object-top"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[7.5rem] bg-gradient-to-t from-[#f7f7f5] via-[#f7f7f5]/92 to-transparent" />
              </div>

              <div aria-hidden="true" className="pointer-events-none absolute left-[-1.5rem] top-[7rem] hidden rotate-[-8deg] lg:block">
                <div className="h-1 w-10 rounded-full bg-[#316bff]" />
                <div className="mt-2 h-1 w-7 translate-x-2 rotate-[18deg] rounded-full bg-[#316bff]" />
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute right-[-3rem] top-[5.5rem] hidden rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-sm lg:block">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-black/45">Idea → Story → Impact</p>
              </div>

              <figcaption className="relative z-30 -mt-7 bg-[#f7f7f5] pt-3 text-center">
                <p className="sld-label text-[#316bff]">Quill · Employee #1</p>
                <p className="mt-2 font-mono text-xs leading-5 text-black/50 sm:text-sm">
                  Right. Apparently I&apos;m presenting this.
                </p>
              </figcaption>
            </motion.figure>

            <div className="lg:hidden">
              {services.map((service) => (
                <motion.article
                  key={service.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-20 mb-5 overflow-hidden rounded-[1.35rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.08)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="sld-label text-[#316bff]">{service.number}</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">{service.title}</h3>
                    </div>
                    <ServiceVisual icon={service.icon} />
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

            <motion.div
              style={reduceMotion ? undefined : { opacity: conclusionOpacity, y: conclusionY }}
              className="mt-8 overflow-hidden rounded-[1.6rem] border border-[#0b0f17] bg-[#0b0f17] px-6 py-7 text-white shadow-[0_22px_70px_rgba(11,15,23,0.16)] sm:px-8 lg:absolute lg:bottom-[1.5%] lg:left-[5%] lg:right-[5%] lg:mt-0 lg:px-9 lg:py-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.75fr_auto_1.5fr_auto] lg:items-center">
                <p className="rotate-[-2deg] text-lg italic leading-6 text-white/80">
                  Still not sure
                  <br />
                  what you need?
                </p>
                <span className="hidden h-12 w-px bg-white/15 lg:block" />
                <h3 className="text-3xl font-light tracking-[-0.045em] sm:text-4xl lg:text-center lg:text-[2.45rem]">
                  <span className="text-[#6f97ff]">Good.</span> Start with the problem<span className="text-[#316bff]">.</span>
                </h3>
                <Link href="/contact" className="inline-flex w-fit items-center gap-5 rounded-full bg-[#316bff] px-6 py-4 text-sm font-semibold text-white transition hover:translate-x-0.5">
                  Start a conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
