"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Film & campaign content",
    text: "Brand films, campaigns and stories built around something worth saying.",
    detail: "Film · Campaigns · Branded stories",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=82",
    fallback: "🎥",
  },
  {
    number: "02",
    title: "Animated learning",
    text: "Complex ideas turned into learning people actually want to finish.",
    detail: "Save Squad · Training · Academies",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=82",
    fallback: "▶",
  },
  {
    number: "03",
    title: "Explainers & awareness",
    text: "Cyber awareness, change, internal communication and complex ideas made human.",
    detail: "Awareness · Change · Internal comms",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=82",
    fallback: "📣",
  },
  {
    number: "04",
    title: "AI-assisted production",
    text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.",
    detail: "Concept art · Characters · Voice",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=82",
    fallback: "AI",
  },
] as const;

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="overflow-hidden rounded-[1.65rem] border border-black/10 bg-white shadow-[0_22px_70px_rgba(11,15,23,0.09)]">
      <div className="grid min-h-[16.5rem] md:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col p-6 sm:p-7">
          <p className="sld-label text-[#316bff]">{service.number}</p>
          <h3 className="mt-3 text-[1.65rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[1.9rem]">{service.title}</h3>
          <p className="mt-4 leading-6 text-black/55">{service.text}</p>
          <p className="mt-auto border-t border-black/10 pt-4 font-mono text-[0.62rem] uppercase leading-5 tracking-[0.1em] text-black/38">{service.detail}</p>
        </div>
        <div className="relative min-h-[12rem] overflow-hidden bg-[#eef3ff] md:min-h-full">
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-[#316bff]/40">{service.fallback}</div>
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(event) => { event.currentTarget.style.display = "none"; }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#316bff]/10 via-transparent to-white/10" />
        </div>
      </div>
    </article>
  );
}

function QuillDirector() {
  return (
    <figure className="mx-auto w-full max-w-[22rem]">
      <div className="relative mx-auto h-[31rem] overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_90px_rgba(11,15,23,0.12)]">
        <div aria-hidden="true" className="absolute left-1/2 top-[4.1rem] h-[18rem] w-[16rem] -translate-x-1/2 rounded-[1.6rem] border-[10px] border-[#9b642e] bg-[#17191f] shadow-lg" />
        <div aria-hidden="true" className="absolute left-1/2 top-[19rem] h-5 w-[18rem] -translate-x-1/2 rounded-full bg-[#b97a38]" />
        <div aria-hidden="true" className="absolute left-[3.7rem] top-[19.4rem] h-[10rem] w-3 rotate-[17deg] rounded-full bg-[#8d5829]" />
        <div aria-hidden="true" className="absolute right-[3.7rem] top-[19.4rem] h-[10rem] w-3 -rotate-[17deg] rounded-full bg-[#8d5829]" />
        <div aria-hidden="true" className="absolute left-[5.4rem] top-[22rem] h-3 w-[13rem] rotate-[38deg] rounded-full bg-[#70421f]" />
        <div aria-hidden="true" className="absolute right-[5.4rem] top-[22rem] h-3 w-[13rem] -rotate-[38deg] rounded-full bg-[#70421f]" />

        <img
          src="/quill/quill-coffee.webp"
          alt="Quill seated in a director's chair holding his coffee mug and a donut"
          className="absolute left-1/2 top-[1rem] z-10 h-[29rem] w-auto -translate-x-1/2 object-contain"
        />

        <div aria-hidden="true" className="absolute right-[2.5rem] top-[12.4rem] z-30 h-[4.8rem] w-[4.8rem] rounded-full bg-[#ff7ca5] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
          <span className="absolute inset-[0.55rem] rounded-full bg-[#ffc54f]" />
          <span className="absolute left-1/2 top-1/2 h-[1.1rem] w-[1.1rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7f7f5]" />
          <span className="absolute left-[1rem] top-[0.55rem] h-1 w-2 rotate-[20deg] rounded bg-[#316bff]" />
          <span className="absolute right-[0.75rem] top-[1rem] h-1 w-2 -rotate-[15deg] rounded bg-[#f05335]" />
          <span className="absolute bottom-[0.7rem] left-[1.2rem] h-1 w-2 rotate-[45deg] rounded bg-white" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[9rem] bg-gradient-to-t from-white via-white/95 to-transparent" />
      </div>
      <figcaption className="relative z-30 -mt-2 pt-4 text-center">
        <p className="sld-label text-[#316bff]">Quill · Employee #1</p>
        <p className="mt-2 font-mono text-sm leading-6 text-black/50">Right. Apparently I&apos;m presenting this.</p>
      </figcaption>
    </figure>
  );
}

export default function QuillServices() {
  return (
    <section className="border-y border-black/10 bg-[#f7f7f5]">
      <div className="sld-container pb-20 pt-20 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
          <span className="text-[#316bff]">002.5</span>
          <span>Apparently I work here now</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
            Here&apos;s what we<br />actually do<span className="text-[#316bff]">.</span>
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/55 sm:text-lg lg:justify-self-end">
            Different problems need different ways of telling the story. Quill has been asked to explain.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.72fr_1fr] lg:items-start xl:gap-8">
          <div className="space-y-6">
            <ServiceCard service={services[0]} />
            <ServiceCard service={services[2]} />
          </div>

          <QuillDirector />

          <div className="space-y-6">
            <ServiceCard service={services[1]} />
            <ServiceCard service={services[3]} />
          </div>
        </div>

        <article className="mt-10 overflow-hidden rounded-[1.8rem] border border-black/10 bg-white px-6 py-7 shadow-[0_22px_70px_rgba(11,15,23,0.08)] sm:px-8 lg:px-10 lg:py-8">
          <div className="grid gap-7 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="sld-label text-[#316bff]">05</p>
              <h3 className="mt-2 text-3xl font-medium tracking-[-0.045em] sm:text-[2rem]">Learning experiences</h3>
              <p className="mt-3 max-w-2xl text-lg leading-7 text-black/55">From onboarding and internal training to complete digital academies.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Strategy", "Content", "Platform", "Learning"].map((step, index) => (
                <div key={step} className="rounded-2xl bg-[#eef3ff] px-3 py-5 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#316bff] shadow-sm">{index + 1}</div>
                  <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-black/45">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-10 overflow-hidden rounded-[1.8rem] bg-[#0b0f17] px-6 py-8 text-white shadow-[0_26px_80px_rgba(11,15,23,0.16)] sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_auto_1.5fr_auto] lg:items-center">
            <p className="rotate-[-2deg] text-lg italic leading-6 text-white/80">Still not sure<br />what you need?</p>
            <span className="hidden h-14 w-px bg-white/15 lg:block" />
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
