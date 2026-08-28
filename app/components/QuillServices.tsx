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
    image: "/quill/service-film.webp",
    alt: "Professional film camera representing StoryLabDigital film and campaign production",
    position: "lg:left-0 lg:top-[7%] lg:w-[31%] xl:w-[29%]",
    direction: -34,
    range: [0, 0.08],
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "Save Squad · Training · Academies",
    image: "/quill/service-learning.webp",
    alt: "Animated learning screen representing StoryLabDigital learning content",
    position: "lg:right-0 lg:top-[6%] lg:w-[31%] xl:w-[29%]",
    direction: 34,
    range: [0.12, 0.24],
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "Awareness · Change · Internal comms",
    image: "/quill/service-awareness.webp",
    alt: "Megaphone representing StoryLabDigital awareness and explainer content",
    position: "lg:left-[1%] lg:bottom-[25%] lg:w-[30%] xl:w-[28%]",
    direction: -34,
    range: [0.28, 0.4],
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "Concept art · Characters · Voice",
    image: "/quill/service-ai.webp",
    alt: "AI production workstation representing StoryLabDigital AI-assisted production",
    position: "lg:right-[1%] lg:bottom-[24%] lg:w-[30%] xl:w-[28%]",
    direction: 34,
    range: [0.44, 0.56],
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
  const y = useTransform(progress, inputRange, [10, 0]);

  return (
    <motion.article
      style={reduceMotion ? undefined : { opacity, x, y }}
      className={`relative z-30 mb-5 overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-[0_26px_80px_rgba(11,15,23,0.10)] sm:p-7 lg:absolute lg:mb-0 ${service.position}`}
    >
      <span className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#316bff]/5" />
      <div className="grid gap-4 sm:grid-cols-[1fr_8.75rem] sm:items-start">
        <div className="min-w-0">
          <p className="sld-label text-[#316bff]">{service.number}</p>
          <h3 className="mt-3 text-[1.65rem] font-medium leading-[1.01] tracking-[-0.05em] sm:text-[1.9rem]">
            {service.title}
          </h3>
          <p className="mt-3 leading-6 text-black/55">{service.text}</p>
        </div>

        <div className="relative mx-auto h-[7.2rem] w-full max-w-[8.75rem] overflow-hidden rounded-[1rem] bg-[#f6f8ff] sm:mt-1">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="140px"
            className="object-contain p-1"
          />
        </div>
      </div>

      <p className="mt-5 border-t border-black/10 pt-3 pr-10 font-mono text-[0.62rem] uppercase leading-5 tracking-[0.1em] text-black/38">
        {service.detail}
      </p>
      <span aria-hidden="true" className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#eef3ff] text-[#316bff]">→</span>
    </motion.article>
  );
}

function MobileCard({ service }: { service: Service }) {
  return (
    <article className="relative mb-5 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,15,23,0.08)] sm:p-7">
      <div className="grid gap-5 sm:grid-cols-[1fr_9rem] sm:items-start">
        <div>
          <p className="sld-label text-[#316bff]">{service.number}</p>
          <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">{service.title}</h3>
          <p className="mt-3 leading-7 text-black/55">{service.text}</p>
        </div>
        <div className="relative h-28 overflow-hidden rounded-2xl bg-[#f6f8ff]">
          <Image src={service.image} alt={service.alt} fill sizes="144px" className="object-contain p-2" />
        </div>
      </div>
      <p className="mt-5 border-t border-black/10 pt-3 font-mono text-[0.65rem] uppercase leading-5 tracking-[0.1em] text-black/38">{service.detail}</p>
    </article>
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
            <motion.figure
              style={reduceMotion ? undefined : { opacity: quillOpacity, scale: quillScale }}
              className="relative z-10 mx-auto mb-10 w-full max-w-[18rem] lg:absolute lg:left-1/2 lg:top-[1%] lg:mb-0 lg:w-[31%] lg:max-w-[24rem] lg:-translate-x-1/2"
            >
              <div className="relative mx-auto aspect-[0.55] w-full">
                <Image
                  src="/quill/quill-seated-director-hd.webp"
                  alt="Quill seated in a director's chair holding coffee and a donut"
                  fill
                  sizes="(max-width: 1024px) 288px, 384px"
                  className="object-contain object-center"
                  priority={false}
                />
              </div>

              <div aria-hidden="true" className="pointer-events-none absolute left-[-2.6rem] top-[8rem] hidden rotate-[-8deg] lg:block">
                <div className="h-1 w-11 rounded-full bg-[#316bff]" />
                <div className="mt-2 h-1 w-8 translate-x-2 rotate-[18deg] rounded-full bg-[#316bff]" />
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute right-[-4.5rem] top-[6rem] hidden rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-sm lg:block">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-black/45">Idea → Story → Impact</p>
              </div>

              <figcaption className="relative z-30 -mt-2 text-center">
                <p className="sld-label text-[#316bff]">Quill · Employee #1</p>
                <p className="mt-2 font-mono text-xs leading-5 text-black/50 sm:text-sm">
                  Right. Apparently I&apos;m presenting this.
                </p>
              </figcaption>
            </motion.figure>

            <div className="lg:hidden">
              {services.map((service) => (
                <MobileCard key={service.number} service={service} />
              ))}
            </div>

            <div className="hidden lg:block">
              {services.map((service) => (
                <ServiceCard key={service.number} service={service} progress={scrollYProgress} reduceMotion={reduceMotion} />
              ))}
            </div>

            <motion.article
              style={reduceMotion ? undefined : { opacity: learningOpacity, y: learningY }}
              className="relative z-40 mt-5 overflow-hidden rounded-[1.7rem] border border-black/10 bg-white px-6 py-6 shadow-[0_24px_72px_rgba(11,15,23,0.10)] sm:px-8 lg:absolute lg:bottom-[1%] lg:left-[8%] lg:right-[8%] lg:mt-0"
            >
              <div className="grid gap-6 lg:grid-cols-[9rem_1.25fr_1fr] lg:items-center">
                <div className="relative hidden h-[6.5rem] overflow-hidden rounded-2xl bg-[#f6f8ff] lg:block">
                  <Image src="/quill/service-learning-strip.webp" alt="Digital learning experience visual" fill sizes="144px" className="object-cover" />
                </div>
                <div>
                  <p className="sld-label text-[#316bff]">05</p>
                  <h3 className="mt-2 text-3xl font-medium tracking-[-0.045em]">Learning experiences</h3>
                  <p className="mt-2 max-w-xl leading-6 text-black/55">From onboarding and internal training to complete digital academies.</p>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["Strategy", "Content", "Platform", "Learning"].map((step, index) => (
                    <div key={step} className="text-center">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#316bff]/20 bg-[#eef3ff] text-sm text-[#316bff]">{index + 1}</div>
                      <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-[0.08em] text-black/40">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>

      <div className="sld-container pb-16 pt-5 sm:pb-20 lg:pt-6">
        <div className="overflow-hidden rounded-[1.8rem] bg-[#0b0f17] px-6 py-7 text-white shadow-[0_24px_80px_rgba(11,15,23,0.16)] sm:px-8 lg:px-10 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_auto_1.5fr_auto] lg:items-center">
            <p className="rotate-[-2deg] text-lg italic leading-6 text-white/80">Still not sure<br />what you need?</p>
            <span className="hidden h-12 w-px bg-white/15 lg:block" />
            <h3 className="text-3xl font-light tracking-[-0.045em] sm:text-4xl lg:text-center lg:text-[2.45rem]">
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
