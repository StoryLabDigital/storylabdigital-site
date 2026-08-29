"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  { n: "01", title: "Film & campaign content", copy: "Brand films, campaigns and stories built around something worth saying.", detail: "FILM · CAMPAIGNS · BRANDED STORIES", image: "/quill/service-film.webp" },
  { n: "02", title: "Animated learning", copy: "Complex ideas turned into learning people actually want to finish.", detail: "SAVE SQUAD · TRAINING · ACADEMIES", image: "/quill/service-learning.webp" },
  { n: "03", title: "Explainers & awareness", copy: "Cyber awareness, change, internal communication and complex ideas made human.", detail: "AWARENESS · CHANGE · INTERNAL COMMS", image: "/quill/service-awareness.webp" },
  { n: "04", title: "AI-assisted production", copy: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.", detail: "CONCEPT ART · CHARACTERS · VOICE", image: "/quill/service-ai.webp" },
] as const;

function Card({ card }: { card: (typeof cards)[number] }) {
  return (
    <article className="relative min-h-[235px] overflow-hidden rounded-[1.35rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,.08)] sm:p-7">
      <div className="relative z-10 max-w-[58%]">
        <p className="font-mono text-xs font-bold tracking-[.18em] text-[#1463ff]">{card.n}</p>
        <h3 className="mt-2 text-[1.7rem] font-medium leading-[.95] tracking-[-.05em]">{card.title}</h3>
        <p className="mt-3 text-sm leading-5 text-black/55">{card.copy}</p>
      </div>
      <div className="absolute right-4 top-5 h-[46%] w-[39%]">
        <Image src={card.image} alt="" fill sizes="220px" className="object-contain" />
      </div>
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-black/10 pt-4 sm:left-7 sm:right-7">
        <p className="font-mono text-[8px] tracking-[.08em] text-black/38">{card.detail}</p>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#edf3ff] text-[#1463ff]">→</span>
      </div>
    </article>
  );
}

export default function QuillServices() {
  return (
    <section className="border-y border-black/10 bg-[#f7f7f5] py-16 sm:py-20 lg:py-24">
      <div className="sld-container">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#1463ff]">002.5 <span className="ml-3 text-black/45">Apparently I work here now</span></p>
              <h2 className="mt-5 text-5xl font-light leading-[.92] tracking-[-.06em] sm:text-6xl lg:text-[4.9rem]">Here&apos;s what we<br />actually do<span className="text-[#1463ff]">.</span></h2>
            </div>
            <p className="max-w-lg pb-2 text-base leading-7 text-black/50 lg:justify-self-end">Different problems need different ways of telling the story. Quill has been asked to explain.</p>
          </div>

          <div className="relative mt-10 grid gap-5 lg:grid-cols-[1fr_.92fr_1fr] lg:grid-rows-2">
            <Card card={cards[0]} />
            <div className="relative row-span-2 hidden min-h-[490px] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_40%,#fff_0%,#f3eee7_70%)] lg:block">
              <Image src="/quill/quill-director-seated.webp" alt="Quill seated in a director's chair holding coffee and a donut" fill sizes="430px" className="object-contain object-center p-3" priority />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#1463ff]">Quill · Employee #1</p>
                <p className="mt-1 font-mono text-[10px] text-black/45">Right. Apparently I&apos;m presenting this.</p>
              </div>
            </div>
            <Card card={cards[1]} />
            <Card card={cards[2]} />
            <Card card={cards[3]} />
          </div>

          <div className="mt-5 grid overflow-hidden rounded-[1.35rem] border border-black/10 bg-white shadow-[0_18px_50px_rgba(15,23,42,.07)] lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div className="flex items-center gap-5 p-6 sm:p-7">
              <div className="relative h-24 w-32 shrink-0 sm:w-40"><Image src="/quill/service-learning.webp" alt="" fill sizes="160px" className="object-contain" /></div>
              <div><p className="font-mono text-xs font-bold tracking-[.18em] text-[#1463ff]">05</p><h3 className="mt-1 text-3xl font-medium tracking-[-.05em]">Learning experiences</h3><p className="mt-1 text-sm leading-5 text-black/50">From onboarding and internal training to complete digital academies.</p></div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-t border-black/8 px-6 py-6 text-center lg:border-l lg:border-t-0">
              {['Strategy','Content','Platform','Learning'].map((x,i)=><div key={x}><span className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[#b9ceff] bg-[#f2f6ff] text-sm text-[#1463ff]">{i+1}</span><p className="mt-2 text-xs text-black/55">{x}</p></div>)}
            </div>
          </div>

          <div className="mt-5 grid gap-5 rounded-[1.35rem] bg-[#07101f] px-7 py-6 text-white sm:px-9 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <p className="font-mono text-sm italic leading-5 text-white/70">Still not sure<br />what you need?</p>
            <h3 className="text-3xl font-light tracking-[-.045em] lg:text-center lg:text-[2.35rem]"><span className="text-[#3d78ff]">Good.</span> Start with the problem.</h3>
            <Link href="/contact" className="sld-button sld-button-primary w-fit">Start a conversation <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
