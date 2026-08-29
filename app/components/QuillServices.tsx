"use client";

import Link from "next/link";

const services = [
  { number: "01", title: "Film & campaign content", text: "Brand films, campaigns and stories built around something worth saying.", detail: "FILM · CAMPAIGNS · BRANDED STORIES", visual: "film" },
  { number: "02", title: "Animated learning", text: "Complex ideas turned into learning people actually want to finish.", detail: "SAVE SQUAD · TRAINING · ACADEMIES", visual: "learning" },
  { number: "03", title: "Explainers & awareness", text: "Cyber awareness, change, internal communication and complex ideas made human.", detail: "AWARENESS · CHANGE · INTERNAL COMMS", visual: "awareness" },
  { number: "04", title: "AI-assisted production", text: "Concept art, characters, voice and rapid content. New tools without sacrificing the craft.", detail: "CONCEPT ART · CHARACTERS · VOICE", visual: "ai" },
] as const;

type Visual = (typeof services)[number]["visual"];

function ServiceVisual({ type }: { type: Visual }) {
  if (type === "film") {
    return <svg viewBox="0 0 180 130" className="h-full w-full" aria-hidden="true"><rect x="24" y="42" width="98" height="58" rx="10" fill="#111827"/><rect x="40" y="31" width="52" height="12" rx="6" fill="#374151"/><circle cx="117" cy="70" r="24" fill="#316bff"/><circle cx="117" cy="70" r="12" fill="#fff"/><path d="M22 108h130" stroke="#316bff" strokeWidth="5" strokeLinecap="round"/></svg>;
  }
  if (type === "learning") {
    return <svg viewBox="0 0 180 130" className="h-full w-full" aria-hidden="true"><rect x="18" y="26" width="144" height="78" rx="15" fill="#dfe8ff" stroke="#8fb0ff" strokeWidth="2"/><rect x="31" y="38" width="46" height="30" rx="8" fill="#fff"/><rect x="84" y="38" width="61" height="30" rx="8" fill="#c7d7ff"/><circle cx="90" cy="82" r="18" fill="#316bff"/><path d="M86 73l15 9-15 9z" fill="#fff"/></svg>;
  }
  if (type === "awareness") {
    return <svg viewBox="0 0 180 130" className="h-full w-full" aria-hidden="true"><path d="M28 62l74-28v62L28 72z" fill="#316bff"/><rect x="32" y="70" width="18" height="40" rx="7" transform="rotate(-16 32 70)" fill="#111827"/><path d="M113 46l25-12M116 64h30M113 82l25 12" stroke="#316bff" strokeWidth="5" strokeLinecap="round"/></svg>;
  }
  return <svg viewBox="0 0 180 130" className="h-full w-full" aria-hidden="true"><rect x="18" y="31" width="130" height="74" rx="13" fill="#151a35" stroke="#8d72ff" strokeWidth="2"/><rect x="34" y="47" width="96" height="42" rx="8" fill="#22284d"/><circle cx="57" cy="68" r="15" fill="#316bff"/><rect x="80" y="55" width="32" height="8" rx="4" fill="#6b7280"/><rect x="80" y="70" width="24" height="8" rx="4" fill="#4b5563"/><rect x="125" y="22" width="42" height="38" rx="10" fill="#316bff"/><text x="146" y="47" fill="white" fontSize="17" textAnchor="middle" fontFamily="Arial" fontWeight="700">AI</text></svg>;
}

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
        <div className="h-[7.6rem] overflow-hidden rounded-[1.1rem] bg-[#eef3ff] p-2">
          <ServiceVisual type={service.visual} />
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
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45"><span className="text-[#316bff]">002.5</span><span>Apparently I work here now</span></div>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.1rem]">Here&apos;s what we<br />actually do<span className="text-[#316bff]">.</span></h2>
          <p className="max-w-xl text-base leading-8 text-black/55 sm:text-lg lg:justify-self-end">Different problems need different ways of telling the story. Quill has been asked to explain.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.88fr_1fr] lg:items-center">
          <div className="grid gap-6"><ServiceCard service={services[0]} /><ServiceCard service={services[2]} /></div>

          <figure className="relative order-first mx-auto w-full max-w-[29rem] text-center lg:order-none">
            <div className="relative mx-auto h-[34rem] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_22%,rgba(49,107,255,0.12),transparent_38%),linear-gradient(180deg,#fbfbfa,#efe7dc)]">
              <div className="absolute left-1/2 top-[30%] h-[14rem] w-[15rem] -translate-x-1/2 rounded-[1.2rem] border-[12px] border-[#a86d32] border-b-0 opacity-95" aria-hidden="true" />
              <div className="absolute left-1/2 top-[55%] h-4 w-[18rem] -translate-x-1/2 rounded-full bg-[#a86d32]" aria-hidden="true" />
              <div className="absolute left-[23%] top-[57%] h-[13rem] w-3 origin-top rotate-[13deg] rounded-full bg-[#8a5527]" aria-hidden="true" />
              <div className="absolute right-[23%] top-[57%] h-[13rem] w-3 origin-top -rotate-[13deg] rounded-full bg-[#8a5527]" aria-hidden="true" />
              <img src="/quill/quill-coffee.webp" alt="Quill, StoryLabDigital Employee Number One" className="absolute left-1/2 top-4 z-10 h-[31rem] w-[88%] -translate-x-1/2 object-contain object-top" />
              <div className="absolute right-[13%] top-[35%] z-20 h-16 w-16 rounded-full border-[9px] border-[#ff8fb8] bg-[#ffc550] shadow-lg" aria-hidden="true"><span className="absolute left-3 top-2 h-1.5 w-4 rotate-12 rounded bg-[#316bff]"/><span className="absolute right-2 top-6 h-1.5 w-3 -rotate-12 rounded bg-[#ff6b35]"/><span className="absolute bottom-2 left-5 h-1.5 w-3 rotate-45 rounded bg-white"/></div>
            </div>
            <figcaption className="relative z-20 mt-4"><p className="sld-label text-[#316bff]">Quill · Employee #1</p><p className="mt-2 font-mono text-sm leading-5 text-black/50">Right. Apparently I&apos;m presenting this.</p></figcaption>
          </figure>

          <div className="grid gap-6"><ServiceCard service={services[1]} /><ServiceCard service={services[3]} /></div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-black/10 bg-white px-6 py-6 shadow-[0_22px_65px_rgba(11,15,23,0.09)] sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <div className="flex items-center gap-5"><div className="hidden h-24 w-36 shrink-0 rounded-[1rem] bg-[#eef3ff] p-2 sm:block"><ServiceVisual type="learning" /></div><div><p className="sld-label text-[#316bff]">05</p><h3 className="mt-2 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">Learning experiences</h3><p className="mt-2 max-w-2xl text-lg leading-7 text-black/55">From onboarding and internal training to complete digital academies.</p></div></div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">{["Strategy", "Content", "Platform", "Learning"].map((step, index) => <div key={step} className="relative text-center"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#316bff]/25 bg-[#eef3ff] text-[#316bff] sm:h-12 sm:w-12">{index + 1}</div><p className="mt-2 font-mono text-[0.52rem] uppercase tracking-[0.06em] text-black/40 sm:text-[0.58rem]">{step}</p>{index < 3 ? <span className="absolute -right-2 top-3 hidden text-[#316bff] sm:block">→</span> : null}</div>)}</div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.8rem] bg-[#0b0f17] px-7 py-8 text-white shadow-[0_26px_80px_rgba(11,15,23,0.16)] sm:px-9 lg:px-10"><div className="grid gap-6 lg:grid-cols-[0.8fr_auto_1.6fr_auto] lg:items-center"><p className="rotate-[-2deg] text-xl italic leading-7 text-white/80">Still not sure<br />what you need?</p><span className="hidden h-14 w-px bg-white/15 lg:block" /><p className="text-3xl font-light tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]"><span className="text-[#5c8aff]">Good.</span> Start with the problem<span className="text-[#316bff]">.</span></p><Link href="/contact" className="inline-flex items-center justify-center gap-7 rounded-full bg-[#316bff] px-7 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5">Start a conversation <span>→</span></Link></div></div>
      </div>
    </section>
  );
}
