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
    position:
      "lg:left-0 lg:top-[12%] lg:w-[30%] xl:w-[28%]",
    direction: -36,
    range: [0.08, 0.20, 0.34],
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "Save Squad · Training · Academies",
    position:
      "lg:right-0 lg:top-[7%] lg:w-[30%] xl:w-[28%]",
    direction: 36,
    range: [0.22, 0.34, 0.48],
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "Awareness · Change · Internal comms",
    position:
      "lg:left-[2%] lg:bottom-[21%] lg:w-[29%] xl:w-[27%]",
    direction: -36,
    range: [0.38, 0.50, 0.64],
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "Concept art · Characters · Voice",
    position:
      "lg:right-[1%] lg:bottom-[19%] lg:w-[30%] xl:w-[28%]",
    direction: 36,
    range: [0.54, 0.66, 0.80],
  },
  {
    number: "05",
    title: "Learning experiences",
    text: "From onboarding and internal training to complete digital academies.",
    detail: "Strategy → Content → Platform → Learning",
    position:
      "lg:left-[25%] lg:bottom-0 lg:w-[50%]",
    direction: 0,
    range: [0.68, 0.80, 0.92],
  },
] as const;

type Service = (typeof services)[number];

function ServiceCard({
  service,
  progress,
  reduceMotion,
}: {
  service: Service;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const opacity = useTransform(
    progress,
    [service.range[0], service.range[1], service.range[2]],
    [0, 1, 1],
  );
  const x = useTransform(
    progress,
    [service.range[0], service.range[1]],
    [service.direction, 0],
  );
  const y = useTransform(
    progress,
    [service.range[0], service.range[1]],
    [service.number === "05" ? 28 : 12, 0],
  );

  return (
    <motion.article
      style={reduceMotion ? undefined : { opacity, x, y }}
      className={`relative z-30 mb-5 border border-black/15 bg-white/95 p-6 shadow-[0_18px_60px_rgba(11,15,23,0.06)] backdrop-blur-sm sm:p-7 lg:absolute lg:mb-0 ${service.position}`}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="sld-label text-[#316bff]">{service.number}</p>
        <span className="h-2 w-2 rounded-full bg-[#316bff]" />
      </div>

      <h3 className="mt-5 text-2xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-[1.8rem]">
        {service.title}
      </h3>
      <p className="mt-3 leading-6 text-black/55">{service.text}</p>
      <p className="mt-5 border-t border-black/10 pt-3 font-mono text-[0.65rem] uppercase leading-5 tracking-[0.1em] text-black/38">
        {service.detail}
      </p>
    </motion.article>
  );
}

export default function QuillServices() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  const quillScale = useTransform(scrollYProgress, [0, 0.16, 1], [0.92, 1, 1]);
  const quillOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const conclusionOpacity = useTransform(scrollYProgress, [0.82, 0.94], [0, 1]);
  const conclusionY = useTransform(scrollYProgress, [0.82, 0.94], [18, 0]);

  return (
    <section className="overflow-hidden border-y border-black/10 bg-[#f7f7f5]">
      <div className="sld-container pt-20 sm:pt-24 lg:pt-28">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
          <span className="text-[#316bff]">002.5</span>
          <span>Apparently I work here now</span>
          <span aria-hidden="true" className="hidden font-mono text-black/30 sm:inline">
            ↝
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
            Here&apos;s what we
            <br />
            actually do<span className="text-[#316bff]">.</span>
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/55 sm:text-lg lg:justify-self-end">
            Different problems need different ways of telling the story. Quill
            has been asked to explain.
          </p>
        </div>
      </div>

      <div
        ref={stageRef}
        className="sld-container relative pb-20 pt-14 sm:pb-24 lg:h-[170svh] lg:pb-0 lg:pt-12"
      >
        <div className="lg:sticky lg:top-[calc(var(--header-height)+1.25rem)] lg:h-[calc(100svh-var(--header-height)-2.5rem)] lg:min-h-[690px]">
          <div className="relative mx-auto h-full max-w-[1320px] lg:px-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[10%] hidden h-[66%] w-px -translate-x-1/2 bg-black/8 lg:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[12%] right-[12%] top-[43%] hidden h-px bg-black/8 lg:block"
            />

            <motion.figure
              style={
                reduceMotion
                  ? undefined
                  : { opacity: quillOpacity, scale: quillScale }
              }
              className="relative z-10 mx-auto mb-10 w-full max-w-[18rem] lg:absolute lg:left-1/2 lg:top-[7%] lg:mb-0 lg:w-[28%] lg:max-w-[22rem] lg:-translate-x-1/2"
            >
              <div className="relative mx-auto aspect-[2/3] w-full">
                <Image
                  src="/quill/quill-field-notes.webp"
                  alt="Quill, StoryLabDigital Employee Number One, presenting the studio services"
                  fill
                  sizes="(max-width: 1024px) 288px, 352px"
                  className="object-contain object-bottom"
                  priority={false}
                />
              </div>

              <figcaption className="relative -mt-5 border-t border-black/15 bg-[#f7f7f5]/95 pt-4 text-center backdrop-blur-sm">
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
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-20 mb-5 border border-black/15 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.05)] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="sld-label text-[#316bff]">{service.number}</p>
                    <span className="h-2 w-2 rounded-full bg-[#316bff]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-black/55">{service.text}</p>
                  <p className="mt-5 border-t border-black/10 pt-3 font-mono text-[0.65rem] uppercase leading-5 tracking-[0.1em] text-black/38">
                    {service.detail}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="hidden lg:block">
              {services.map((service) => (
                <ServiceCard
                  key={service.number}
                  service={service}
                  progress={scrollYProgress}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            <motion.div
              style={
                reduceMotion
                  ? undefined
                  : { opacity: conclusionOpacity, y: conclusionY }
              }
              className="mt-8 border border-[#0b0f17] bg-[#0b0f17] p-6 text-white sm:p-7 lg:absolute lg:bottom-[1.5%] lg:left-[6%] lg:right-[6%] lg:mt-0"
            >
              <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <p className="font-mono text-xs leading-5 text-white/55 sm:text-sm">
                  Still not sure
                  <br />
                  what you need?
                </p>
                <h3 className="text-3xl font-light tracking-[-0.045em] sm:text-4xl lg:text-center lg:text-[2.6rem]">
                  <span className="text-[#6f97ff]">Good.</span> Start with the
                  problem<span className="text-[#316bff]">.</span>
                </h3>
                <Link
                  href="/contact"
                  className="sld-button sld-button-primary w-fit"
                >
                  Start a conversation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
