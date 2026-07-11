"use client";

import { useState, type FormEvent } from "react";

import Dot from "@/app/components/Dot";

const FORMSPREE_ID = "xzdwlaby";

type FormStatus = "idle" | "sending" | "sent" | "error";

type LabFormData = {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  projectType: string;
  deadline: string;
  budget: string;
  references: string;
  idea: string;
  consent: boolean;
};

const initialForm: LabFormData = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
  projectType: "",
  deadline: "",
  budget: "",
  references: "",
  idea: "",
  consent: false,
};

const projectTypes = [
  "AI image creation",
  "Short AI video",
  "Voice-over",
  "Avatar video",
  "Social reel",
  "Custom Lab request",
];

const budgetRanges = [
  "Under R500",
  "R500 – R1,500",
  "R1,500 – R5,000",
  "R5,000+",
  "Not sure yet",
];

export default function LabRequestForm() {
  const [form, setForm] = useState<LabFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = <Key extends keyof LabFormData>(
    key: Key,
    value: LabFormData[Key],
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.projectType ||
      !form.budget ||
      !form.idea.trim() ||
      !form.consent
    ) {
      return;
    }

    try {
      setStatus("sending");

      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formName: "StoryLabDigital Lab Request",
            sendTo: "thelab@storylabdigital.co.za",
            name: form.name.trim(),
            email: form.email.trim(),
            whatsapp: form.whatsapp.trim(),
            company: form.company.trim(),
            projectType: form.projectType,
            deadline: form.deadline.trim(),
            budget: form.budget,
            references: form.references.trim(),
            idea: form.idea.trim(),
            consent: form.consent,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("The request could not be submitted.");
      }

      setForm(initialForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div
        className="flex min-h-[34rem] flex-col justify-between border border-white/15 bg-white/[0.035] p-7 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#316bff]">
            Request received
          </p>

          <h3 className="mt-8 max-w-xl text-4xl font-light leading-[1.04] tracking-[-0.045em] sm:text-5xl">
            Your idea is officially in The Lab
            <span className="text-[#316bff]">.</span>
          </h3>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
            We’ll review the request and send a clear creation estimate within
            24 business hours.
          </p>
        </div>

        <div className="mt-12 border-t border-white/15 pt-7">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex min-h-12 items-center gap-3 bg-[#316bff] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2459db] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#316bff]"
          >
            Send another idea
            <Dot className="h-2 w-2" />
          </button>
        </div>
      </div>
    );
  }

  const fieldClassName =
    "w-full border-b border-white/20 bg-transparent px-0 py-4 text-base text-white outline-none transition-colors placeholder:text-white/30 hover:border-white/35 focus:border-[#316bff]";

  const labelClassName =
    "block text-xs font-semibold uppercase tracking-[0.2em] text-white/45";

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/15 bg-white/[0.025] p-6 sm:p-8 lg:p-10"
      noValidate={false}
    >
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        <div>
          <label htmlFor="lab-name" className={labelClassName}>
            Name <span className="text-[#316bff]">*</span>
          </label>

          <input
            id="lab-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClassName}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="lab-email" className={labelClassName}>
            Email <span className="text-[#316bff]">*</span>
          </label>

          <input
            id="lab-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClassName}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="lab-whatsapp" className={labelClassName}>
            WhatsApp
          </label>

          <input
            id="lab-whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            className={fieldClassName}
            placeholder="+27"
          />
        </div>

        <div>
          <label htmlFor="lab-company" className={labelClassName}>
            Company
          </label>

          <input
            id="lab-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={fieldClassName}
            placeholder="Company or organisation"
          />
        </div>

        <div>
          <label htmlFor="lab-project-type" className={labelClassName}>
            What do you need? <span className="text-[#316bff]">*</span>
          </label>

          <select
            id="lab-project-type"
            name="projectType"
            required
            value={form.projectType}
            onChange={(event) =>
              updateField("projectType", event.target.value)
            }
            className={`${fieldClassName} cursor-pointer`}
          >
            <option value="" disabled className="text-black">
              Select a request type
            </option>

            {projectTypes.map((type) => (
              <option key={type} value={type} className="text-black">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="lab-deadline" className={labelClassName}>
            Deadline
          </label>

          <input
            id="lab-deadline"
            name="deadline"
            type="text"
            value={form.deadline}
            onChange={(event) => updateField("deadline", event.target.value)}
            className={fieldClassName}
            placeholder="When do you need it?"
          />
        </div>

        <div>
          <label htmlFor="lab-budget" className={labelClassName}>
            Budget range <span className="text-[#316bff]">*</span>
          </label>

          <select
            id="lab-budget"
            name="budget"
            required
            value={form.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            className={`${fieldClassName} cursor-pointer`}
          >
            <option value="" disabled className="text-black">
              Select a budget range
            </option>

            {budgetRanges.map((range) => (
              <option key={range} value={range} className="text-black">
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="lab-references" className={labelClassName}>
            Reference links
          </label>

          <input
            id="lab-references"
            name="references"
            type="text"
            value={form.references}
            onChange={(event) => updateField("references", event.target.value)}
            className={fieldClassName}
            placeholder="Links, examples or inspiration"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="lab-idea" className={labelClassName}>
            Describe the idea <span className="text-[#316bff]">*</span>
          </label>

          <textarea
            id="lab-idea"
            name="idea"
            required
            rows={7}
            value={form.idea}
            onChange={(event) => updateField("idea", event.target.value)}
            className={`${fieldClassName} min-h-48 resize-y leading-7`}
            placeholder="Tell us what you want created, where it needs to work and anything else that might help."
          />
        </div>
      </div>

      <label className="mt-8 grid cursor-pointer grid-cols-[auto_1fr] items-start gap-4 border-t border-white/15 pt-6">
        <input
          name="consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 cursor-pointer accent-[#316bff]"
        />

        <span className="text-sm leading-6 text-white/50">
          I understand that each request is reviewed and quoted before
          production begins. <span className="text-[#316bff]">*</span>
        </span>
      </label>

      <div className="mt-8 border-t border-white/15 pt-7">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center gap-3 bg-[#316bff] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2459db] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#316bff] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send the idea"}

          {status !== "sending" && <Dot className="h-2 w-2" />}
        </button>

        <p
          className={`mt-5 text-sm leading-6 ${
            status === "error" ? "text-red-300" : "text-white/35"
          }`}
          aria-live="polite"
        >
          {status === "error"
            ? "Something went wrong. Please try again or email hello@storylabdigital.co.za."
            : "Required fields are marked with a blue dot."}
        </p>
      </div>
    </form>
  );
}