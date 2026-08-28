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
    position: "lg:left-0 lg:top-[10%] lg:w-[30%] xl:w-[28%]",
    direction: -34,
    range: [0.0, 0.08],
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "Save Squad · Training · Academies",
    position: "lg:right-0 lg:top-[7%] lg:w-[30%] xl:w-[28%]",
    direction: 34,
    range: [0.12, 0.24],
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "Awareness · Change · Internal comms",
    position: "lg:left-[1%] lg:bottom-[22%] lg:w-[29%] xl:w-[27%]",
    direction: -34,
    range: [0.28, 0.40],
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "Concept art · Characters · Voice",
    position: "lg:right-[1%] lg:bottom-[20%] lg:w-[30%] xl:w-[28%]",
    direction: 34,
    range: [0.44, 0.56],
  },
  {
    number: "05",
    title: "Learning experiences",
    text: "From onboarding and internal training to complete digital academies.",
    detail: "Strategy → Content → Platform → Learning",
    position: "lg:left-[24%] lg:bottom-[2%] lg:w-[52%]",
    direction: 0,
    range: [0.60, 0.72],
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
  const inputRange = [...service.range];
  const opacity = useTransform(progress, inputRange, [0, 1]);
  const x = useTransform(progress, inputRange, [service.direction, 0]);
  const y = useTransform(progress, inputRange, [service.number === "05" ? 24 : 10, 0]);

  return (
    <motion.article
      style={reduceMotion ? undefined : { opacity, x, y }}
      className={`relative z-30 mb-5 border border-black/15 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.07)] sm:p-7 lg:absolute lg:mb-0 ${service.position}`}
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
    offset: ["start 78%", "end 85%"],
  });

  const quillOpacity = useTransform(scrollYProgress, [0, 0.04], [0.35, 1]);
  const quillScale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);
  const conclusionOpacity = useTransform(scrollYProgress, [0.74, 0.84], [0, 1]);
  const conclusionY = useTransform(scrollYProgress, [0.74, 0.84], [16, 0]);

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

      <div ref={stageRef} className="sld-container relative pb-20 pt-14 sm:pb-24 lg:h-[155svh] lg:pb-0 lg:pt-12">
        <div className="lg:sticky lg:top-[calc(var(--header-height)+1rem)] lg:h-[calc(100svh-var(--header-height)-2rem)] lg:min-h-[720px]">
          <div className="relative mx-auto h-full max-w-[1320px] lg:px-2">
            <motion.figure
              style={reduceMotion ? undefined : { opacity: quillOpacity, scale: quillScale }}
              className="relative z-10 mx-auto mb-10 w-full max-w-[16rem] lg:absolute lg:left-1/2 lg:top-[8%] lg:mb-0 lg:w-[24%] lg:max-w-[19rem] lg:-translate-x-1/2"
            >
              <div className="relative mx-auto aspect-[2/3] w-full">
                <Image
                  src="/quill/quill-field-notes.webp"
                  alt="Quill, StoryLabDigital Employee Number One, presenting the studio services"
                  fill
                  sizes="(max-width: 1024px) 256px, 304px"
                  className="object-contain object-bottom"
                />
              </div>
              <figcaption className="relative -mt-5 bg-[#f7f7f5] pt-3 text-center">
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
                  className="relative z-20 mb-5 border border-black/15 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.05)] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="sld-label text-[#316bff]">{service.number}</p>
                    <span className="h-2 w-2 rounded-full bg-[#316bff]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em]">{service.title}</h3>
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
              className="mt-8 border border-[#0b0f17] bg-[#0b0f17] p-6 text-white sm:p-7 lg:absolute lg:bottom-[1%] lg:left-[5%] lg:right-[5%] lg:mt-0"
            >
              <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <p className="font-mono text-xs leading-5 text-white/55 sm:text-sm">Still not sure<br />what you need?</p>
                <h3 className="text-3xl font-light tracking-[-0.045em] sm:text-4xl lg:text-center lg:text-[2.45rem]">
                  <span className="text-[#6f97ff]">Good.</span> Start with the problem<span className="text-[#316bff]">.</span>
                </h3>
                <Link href="/contact" className="sld-button sld-button-primary w-fit">
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
