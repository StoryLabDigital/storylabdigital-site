"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Film & campaign content",
    text: "Brand films, campaigns and stories built around something worth saying.",
    detail: "Film · Campaigns · Branded stories",
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "Save Squad · Training · Explainers",
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "Awareness · Change · Internal comms",
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "Concept art · Characters · Voice",
  },
  {
    number: "05",
    title: "Learning experiences",
    text: "From onboarding and internal training to complete digital academies.",
    detail: "Strategy → Content → Platform → Learning",
  },
] as const;

const cardPositions = [
  "lg:col-start-1 lg:row-start-1 lg:self-end",
  "lg:col-start-3 lg:row-start-1 lg:self-end",
  "lg:col-start-1 lg:row-start-2 lg:self-start",
  "lg:col-start-3 lg:row-start-2 lg:self-start",
  "lg:col-start-2 lg:row-start-3 lg:self-start",
] as const;

export default function QuillServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden border-y border-black/10 bg-[#f7f7f5]">
      <div className="sld-container pt-20 sm:pt-24 lg:pt-28">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
          <span className="text-[#316bff]">002.5</span>
          <span>Apparently I work here now</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
            Here&apos;s what we
            <br />
            actually do<span className="text-[#316bff]">.</span>
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/55 sm:text-lg lg:justify-self-end">
            Different problems need different ways of telling the story. Quill
            has been asked to explain. Management accepts no responsibility for
            what happens next.
          </p>
        </div>
      </div>

      <div className="sld-container pb-20 pt-16 sm:pb-24 lg:pb-28 lg:pt-20">
        <div className="relative lg:grid lg:grid-cols-[1fr_0.82fr_1fr] lg:grid-rows-[minmax(18rem,auto)_minmax(18rem,auto)_auto] lg:gap-x-10 lg:gap-y-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[7%] hidden h-[64%] w-px -translate-x-1/2 bg-black/10 lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-[35%] hidden h-px bg-black/10 lg:block"
          />

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 40, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto mb-12 w-full max-w-[22rem] lg:sticky lg:top-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:self-start"
          >
            <div className="relative mx-auto aspect-[2/3] w-full">
              <Image
                src="/quill/quill-coffee.webp"
                alt="Quill, StoryLabDigital Employee Number One, presenting the studio services"
                fill
                sizes="(max-width: 1024px) 352px, 380px"
                className="object-contain object-bottom"
              />
            </div>
            <figcaption className="relative -mt-4 border-t border-black/15 bg-[#f7f7f5] pt-5">
              <p className="sld-label text-[#316bff]">Quill · Employee #1</p>
              <p className="mt-2 font-mono text-xs leading-6 text-black/50 sm:text-sm">
                Right. Apparently I&apos;m presenting this.
              </p>
            </figcaption>
          </motion.figure>

          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: index === 4 ? 30 : 18,
                      x: index < 4 ? (index % 2 === 0 ? -28 : 28) : 0,
                    }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.62,
                delay: reduceMotion ? 0 : 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative z-20 mb-5 border border-black/15 bg-[#f7f7f5]/95 p-7 backdrop-blur-sm sm:p-8 lg:mb-0 ${cardPositions[index]}`}
            >
              <div className="flex items-center justify-between gap-5">
                <p className="sld-label text-[#316bff]">{service.number}</p>
                <span className="h-2 w-2 rounded-full bg-[#316bff]" />
              </div>
              <h3 className="mt-8 text-2xl font-medium tracking-[-0.04em] sm:text-[2rem]">
                {service.title}
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-black/55">
                {service.text}
              </p>
              <p className="mt-7 border-t border-black/10 pt-4 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.12em] text-black/38">
                {service.detail}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 border-t border-black/15 pt-10 sm:mt-20 lg:mt-24"
        >
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="sld-label text-[#316bff]">Quill&apos;s conclusion</p>
              <h3 className="mt-5 text-4xl font-light tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Still not sure what you need?
                <br />
                <span className="text-[#316bff]">Good.</span> Start with the
                problem.
              </h3>
            </div>
            <Link href="/contact" className="sld-button sld-button-primary w-fit">
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
