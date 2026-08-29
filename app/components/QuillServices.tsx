"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Film & campaign content",
    text: "Brand films, campaigns and stories built around something worth saying.",
    detail: "FILM · CAMPAIGNS · BRANDED STORIES",
    image: "/quill/service-film.webp",
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "SAVE SQUAD · TRAINING · ACADEMIES",
    image: "/quill/service-learning.webp",
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "AWARENESS · CHANGE · INTERNAL COMMS",
    image: "/quill/service-awareness.webp",
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "CONCEPT ART · CHARACTERS · VOICE",
    image: "/quill/service-ai.webp",
  },
] as const;

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-[0_22px_65px_rgba(11,15,23,0.09)] sm:p-7">
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#316bff]/5" />
      <div className="grid gap-5 sm:grid-cols-[1fr_9.5rem] sm:items-start">
        <div>
          <p className="sld-label text-[#316bff]">{service.number}</p>
          <h3 className="mt-3 text-[1.8rem] font-medium leading-[1.02] tracking-[-0.05em]">{service.title}</h3>
          <p className="mt-3 leading-6 text-black/55">{service.text}</p>
        </div>
        <div className="relative h-[7.6rem] overflow-hidden rounded-[1.1rem] bg-[#eef3ff]">
          <img
            src={service.image}
            alt=""
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(49,107,255,0.22),transparent_46%),linear-gradient(145deg,#f7f9ff,#e8efff)]" />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-3">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-black/40">{service.detail}</p>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef3ff] text-[#316bff]">→</span>
      </div>
    </article>
  );
}

export default function QuillServices() {
  return (
    <section className="border-y border-black/10 bg-[#f7f7f5] py-16 sm:py-20 lg:py-24">
      <div className="sld-container">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
          <span className="text-[#316bff]">002.5</span>
          <span>Apparently I work here now</span>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.1rem]">
            Here&apos;s what we<br />actually do<span className="text-[#316bff]">.</span>
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/55 sm:text-lg lg:justify-self-end">
            Different problems need different ways of telling the story. Quill has been asked to explain.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.88fr_1fr] lg:items-center">
          <div className="grid gap-6">
            <ServiceCard service={services[0]} />
            <ServiceCard service={services[2]} />
          </div>

          <figure className="relative order-first mx-auto w-full max-w-[29rem] text-center lg:order-none">
            <div className="relative mx-auto min-h-[29rem] sm:min-h-[34rem]">
              <div className="absolute inset-x-[12%] bottom-[5.5rem] h-[12rem] rounded-[1.4rem] bg-[linear-gradient(180deg,#a9743e,#7a4a22)] opacity-25 blur-[0.2px]" aria-hidden="true" />
              <img
                src="/quill/quill-director-seated.webp"
                alt="Quill seated in a director's chair holding a coffee mug and a donut"
                className="relative z-10 mx-auto h-[29rem] w-full object-contain sm:h-[34rem]"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/quill/quill-field-notes.webp";
                }}
              />
            </div>
            <figcaption className="relative z-20 -mt-4">
              <p className="sld-label text-[#316bff]">Quill · Employee #1</p>
              <p className="mt-2 font-mono text-sm leading-5 text-black/50">Right. Apparently I&apos;m presenting this.</p>
            </figcaption>
          </figure>

          <div className="grid gap-6">
            <ServiceCard service={services[1]} />
            <ServiceCard service={services[3]} />
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-black/10 bg-white px-6 py-6 shadow-[0_22px_65px_rgba(11,15,23,0.09)] sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <div className="flex items-center gap-5">
              <div className="hidden h-24 w-36 shrink-0 overflow-hidden rounded-[1rem] bg-[#eef3ff] sm:block">
                <img src="/quill/service-learning.webp" alt="" className="h-full w-full object-cover" onError={(event) => { event.currentTarget.style.display = "none"; }} />
              </div>
              <div>
                <p className="sld-label text-[#316bff]">05</p>
                <h3 className="mt-2 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">Learning experiences</h3>
                <p className="mt-2 max-w-2xl text-lg leading-7 text-black/55">From onboarding and internal training to complete digital academies.</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {["Strategy", "Content", "Platform", "Learning"].map((step, index) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#316bff]/25 bg-[#eef3ff] text-[#316bff] sm:h-12 sm:w-12">{index + 1}</div>
                  <p className="mt-2 font-mono text-[0.52rem] uppercase tracking-[0.06em] text-black/40 sm:text-[0.58rem]">{step}</p>
                  {index < 3 ? <span className="absolute -right-2 top-3 hidden text-[#316bff] sm:block">→</span> : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.8rem] bg-[#0b0f17] px-7 py-8 text-white shadow-[0_26px_80px_rgba(11,15,23,0.16)] sm:px-9 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_auto_1.6fr_auto] lg:items-center">
            <p className="rotate-[-2deg] text-xl italic leading-7 text-white/80">Still not sure<br />what you need?</p>
            <span className="hidden h-14 w-px bg-white/15 lg:block" />
            <p className="text-3xl font-light tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]">
              <span className="text-[#5c8aff]">Good.</span> Start with the problem<span className="text-[#316bff]">.</span>
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-7 rounded-full bg-[#316bff] px-7 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5">
              Start a conversation <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
