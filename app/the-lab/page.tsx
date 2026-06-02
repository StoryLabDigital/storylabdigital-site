"use client";

import React from "react";
import { Space_Grotesk, Manrope } from "next/font/google";
import { motion } from "framer-motion";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const FORMSPREE_ID = "xzdwlaby";
const sldLogo = "/icon.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const clientLogos = [
  "ebnet.png",
  "alexander-forbes.png",
  "datagr8.png",
  "bonofide.png",
  "icts.png",
  "motswedi.png",
];

const services = [
  { title: "AI Image Creation", price: "From R99", text: "Product visuals, concept art, campaign images, profile assets and strange visual experiments." },
  { title: "Short AI Video", price: "From R350", text: "Short clips, animated scenes, cinematic moments and social-ready videos." },
  { title: "Voice-over", price: "From R150", text: "Narration, explainer reads, character voices and short-form audio." },
  { title: "Avatar Video", price: "From R450", text: "Presenter-style videos, business messages, announcements and explainers." },
  { title: "Social Reel", price: "From R500", text: "Short, sharp content built for LinkedIn, Instagram, WhatsApp or internal sharing." },
  { title: "Custom Lab Request", price: "Quote-based", text: "Half-baked prompt? Weird idea? Chaotic vision? Send it in. That is why THE LAB exists." },
];

const steps = [
  { step: "01", title: "Submit Your Idea", text: "Tell us what you want created. Image, video, voice-over, avatar, reel or custom request." },
  { step: "02", title: "We Price It", text: "We review the request, choose the right production route and send you a creation estimate." },
  { step: "03", title: "You Approve & Pay", text: "If the price works, we send a PayFast payment request. Once paid, production begins." },
  { step: "04", title: "We Create & Deliver", text: "Your final file is delivered via download link, Google Drive, Dropbox or WeTransfer." },
];

const popularRequests = [
  "Turn my selfie into a cinematic poster",
  "Create a LinkedIn promo video",
  "Generate product or brand visuals",
  "Create an AI voice-over for a presentation",
  "Make a talking avatar introduction",
  "Create a short social media reel",
];

export default function TheLabPage() {
  return (
    <div className={`${bodyFont.className} min-h-screen bg-neutral-950 text-white`}>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src={sldLogo} alt="StoryLabDigital" className="h-9 w-9 object-contain" />
            <div>
              <p className={`${headingFont.className} text-lg font-semibold tracking-tight`}>StoryLabDigital</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">THE LAB</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#how" className="transition hover:text-white">How It Works</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#request" className="rounded-xl bg-white px-4 py-2 font-medium text-black transition hover:scale-[1.02]">
              Send Your Idea
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-28">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.p variants={fadeUp} className="mb-5 inline-flex w-fit items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                AI content creation on demand
              </motion.p>

              <motion.h1 variants={fadeUp} className={`${headingFont.className} max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl`}>
                Stop paying monthly for AI tools you barely use.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Need an image, video, voice-over or avatar? Tell us what you want. We price it. You approve it. We create it.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <a href="#request" className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
                  Send Your Idea Into THE LAB
                </a>
                <a href="#how" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                  See How It Works
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/5 p-6 shadow-2xl shadow-black/40"
            >
             <p className="text-sm uppercase tracking-[0.28em] text-blue-200/80">What happens next</p>

<h2 className={`${headingFont.className} mt-4 text-3xl font-semibold text-white`}>
  You bring the idea. We build the thing.
</h2>

<p className="mt-5 text-base leading-7 text-white/65">
  Submit your request and we’ll review what you need, estimate the production cost, and send you a clear price before anything starts.
</p>

<div className="mt-8 grid gap-3">
  {[
    "No monthly subscription",
    "No tokens to buy upfront",
    "No software to learn",
    "No payment until you approve the estimate",
  ].map((item) => (
    <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white/80">
      {item}
    </div>
  ))}
</div>

<a
  href="#request"
  className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
>
  Start A Lab Request
</a>
            </motion.div>
          </div>
        </section>

        <Divider />

        <SectionIntro
          eyebrow="Built By StoryLabDigital"
          title="The same creative engine. Now available on demand."
          text="StoryLabDigital creates business videos, campaign visuals, explainers and AI-powered content for brands that need attention without the usual production circus."
        />

        <motion.section className="relative mx-auto mt-10 max-w-7xl overflow-hidden px-6 py-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {clientLogos.map((logo) => (
              <div key={logo} className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white px-5">
                <img src={`/logos/${logo}`} alt={logo.replace(".png", "")} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        <SectionIntro
          eyebrow="Why THE LAB Exists"
          title="Because paying monthly for tools you barely use is madness with a login screen."
          text="THE LAB is built for once-off content requests, test ideas, quick campaigns, business visuals and creative experiments that need output without subscription drama."
        />

        <Divider />

        <section id="how">
          <SectionIntro
            eyebrow="How It Works"
            title="Simple process. No circus."
            text="Request first. Quote first. Payment before production. Clean, clear and easy."
          />
        </section>

        <motion.section className="mx-auto mt-12 grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {steps.map((item) => (
            <motion.div key={item.step} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-blue-200/80">{item.step}</p>
              <h3 className={`${headingFont.className} mt-4 text-2xl font-medium text-white`}>{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        <Divider />

        <section id="services">
          <SectionIntro
            eyebrow="What You Can Request"
            title="Send the idea. We’ll figure out the production route."
            text="Pricing depends on complexity, generation costs, editing time and delivery requirements."
          />
        </section>

        <motion.section className="mx-auto mt-12 grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {services.map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="rounded-[2rem] border border-blue-400/15 bg-white/5 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-200/80">{item.price}</p>
              <h3 className={`${headingFont.className} mt-4 text-2xl font-semibold text-white`}>{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        <Divider />

        <section>
          <SectionIntro
            eyebrow="Popular Lab Requests"
            title="Not sure what to ask for? Start here."
            text="People often know they need content, but not what to type. These are the kinds of requests THE LAB is built for."
          />
        </section>

        <motion.section className="mx-auto mt-12 grid max-w-5xl gap-4 px-6 sm:grid-cols-2 lg:px-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {popularRequests.map((request) => (
            <motion.div key={request} variants={fadeUp} className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white/75">
              {request}
            </motion.div>
          ))}
        </motion.section>

        <Divider />

        <motion.section className="mx-auto max-w-5xl px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/6 to-blue-500/5 p-8 text-center lg:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-blue-200/80">Important</p>
            <h3 className={`${headingFont.className} mt-4 text-3xl font-semibold tracking-tight text-white`}>
              One revision included. Extra changes are quoted separately.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65">
              THE LAB is fast, flexible and experimental — but not a bottomless pit of “just one more change.”
            </p>
          </div>
        </motion.section>

        <Divider />

        <section id="request" className="pb-12">
          <SectionIntro
            eyebrow="Send Your Idea"
            title="Put your request into THE LAB."
            text="Complete the form. We’ll review it and send a creation estimate within 24 business hours."
          />
        </section>

        <motion.section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <LabRequestForm />
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/50 md:flex-row lg:px-8">
          <p className={`${headingFont.className} text-white/70`}>StoryLabDigital THE LAB</p>
          <p>Cape Town, South Africa · thelab@storylabdigital.co.za</p>
          <p>© {new Date().getFullYear()} StoryLabDigital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <motion.div className="mx-auto max-w-4xl px-6 text-center lg:px-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
      {eyebrow ? <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-blue-300/80">{eyebrow}</p> : null}
      <h2 className={`${headingFont.className} text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl`}>{title}</h2>
      {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">{text}</p> : null}
    </motion.div>
  );
}

function LabRequestForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    projectType: "",
    usage: "",
    deadline: "",
    budget: "",
    idea: "",
    references: "",
    consent: false,
  });

  const update = (key: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = async () => {
    if (!form.name || !form.email || !form.projectType || !form.budget || !form.idea || !form.consent) {
      alert("Please complete all required fields and accept the quote-first production terms.");
      return;
    }

    try {
      setStatus("sending");

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formName: "StoryLabDigital THE LAB Request",
          sendTo: "thelab@storylabdigital.co.za",
          ...form,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({
          name: "",
          email: "",
          whatsapp: "",
          company: "",
          projectType: "",
          usage: "",
          deadline: "",
          budget: "",
          idea: "",
          references: "",
          consent: false,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field = "w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-blue-400/50";
  const label = "mb-2 block text-sm font-medium text-white/70";

  if (status === "sent") {
    return (
      <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/5 p-10 text-center">
        <h3 className={`${headingFont.className} text-2xl font-semibold text-white`}>
          Your idea has officially entered THE LAB.
        </h3>
        <p className="mt-3 text-white/65">
          We’ll review your request and send a creation estimate within 24 business hours. If approved, payment happens before production starts.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
  <button
    onClick={() => {
  setStatus("idle");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}}
    className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
  >
    Back To THE LAB
  </button>

  <a
    href="https://wa.me/27729857003"
    className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
  >
    WhatsApp THE LAB
  </a>
</div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/5 to-white/5 p-6 lg:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Your Name *</label>
          <input className={field} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Enter your name" />
        </div>

        <div>
          <label className={label}>Email Address *</label>
          <input className={field} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Enter your email" />
        </div>

        <div>
          <label className={label}>WhatsApp Number</label>
          <input className={field} value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="Optional, but useful" />
        </div>

        <div>
          <label className={label}>Company / Brand</label>
          <input className={field} value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Optional" />
        </div>

        <div>
          <label className={label}>What do you want created? *</label>
          <select className={field} value={form.projectType} onChange={(e) => update("projectType", e.target.value)}>
            <option className="bg-neutral-900" value="">Select request type</option>
            <option className="bg-neutral-900">AI Image</option>
            <option className="bg-neutral-900">Short AI Video</option>
            <option className="bg-neutral-900">Voice-over</option>
            <option className="bg-neutral-900">Avatar Video</option>
            <option className="bg-neutral-900">Social Media Reel</option>
            <option className="bg-neutral-900">Custom / Not Sure</option>
          </select>
        </div>

        <div>
          <label className={label}>Usage *</label>
          <select className={field} value={form.usage} onChange={(e) => update("usage", e.target.value)}>
            <option className="bg-neutral-900" value="">Select usage</option>
            <option className="bg-neutral-900">Personal</option>
            <option className="bg-neutral-900">Business</option>
            <option className="bg-neutral-900">Social Media</option>
            <option className="bg-neutral-900">Paid Ads</option>
            <option className="bg-neutral-900">Internal Communication</option>
            <option className="bg-neutral-900">Other</option>
          </select>
        </div>

        <div>
          <label className={label}>Deadline</label>
          <input className={field} value={form.deadline} onChange={(e) => update("deadline", e.target.value)} placeholder="When do you need it?" />
        </div>

        <div>
          <label className={label}>Budget Range *</label>
          <select className={field} value={form.budget} onChange={(e) => update("budget", e.target.value)}>
            <option className="bg-neutral-900" value="">Select budget range</option>
            <option className="bg-neutral-900">Under R250</option>
            <option className="bg-neutral-900">R250 – R500</option>
            <option className="bg-neutral-900">R500 – R1,000</option>
            <option className="bg-neutral-900">R1,000 – R2,500</option>
            <option className="bg-neutral-900">R2,500+</option>
            <option className="bg-neutral-900">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className={label}>Describe Your Idea *</label>
        <textarea className={`${field} min-h-[150px] resize-y`} value={form.idea} onChange={(e) => update("idea", e.target.value)} placeholder="Tell us what you want created. Be messy if you need to. THE LAB can handle chaos." />
      </div>

      <div className="mt-4">
        <label className={label}>Reference Links / Notes</label>
        <textarea className={`${field} min-h-[90px] resize-y`} value={form.references} onChange={(e) => update("references", e.target.value)} placeholder="Paste links to examples, brand references, files, inspiration, or anything useful." />
      </div>

      <label className="mt-5 flex gap-3 text-sm leading-6 text-white/65">
        <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 h-4 w-4 rounded border-white/20 bg-black/30" />
        <span>I understand this is a quote-first service. No work starts until the creation estimate is approved and payment has been received.</span>
      </label>

      {status === "error" ? <p className="mt-3 text-sm text-red-300">Something went wrong. Please email thelab@storylabdigital.co.za directly.</p> : null}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <button onClick={submit} disabled={status === "sending"} className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Submit To THE LAB"}
        </button>

        <a href="https://wa.me/27729857003" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
          WhatsApp
        </a>
      </div>

      <p className="mt-4 text-center text-sm text-white/55">Typical estimate turnaround: within 24 business hours.</p>
      <p className="mt-2 text-center text-sm text-white/45">thelab@storylabdigital.co.za</p>
    </div>
  );
}