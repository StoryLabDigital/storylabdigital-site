"use client";

import { useState } from "react";

const formspreeId = "xzdwlaby";

type FormState = {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  project: "",
  message: "",
};

type ContactFormProps = {
  initialProject?: string;
};

export default function ContactForm({ initialProject = "" }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    project: initialProject,
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const updateField = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return;
    }

    try {
      setStatus("sending");

      const response = await fetch(
        `https://formspree.io/f/${formspreeId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            formName: "StoryLabDigital Website Enquiry",
            ...form,
          }),
        }
      );

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setForm(initialForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border-t border-black/15 py-12">
        <p className="sld-label text-[#316bff]">
          Message received
        </p>

        <h2 className="sld-heading-three mt-6">
          Your message is in.
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-black/55">
          We will be in touch shortly. Curiosity usually deserves a reply.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="sld-button sld-button-secondary mt-8"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-x-10 gap-y-8 md:grid-cols-2"
    >
      <div className="sld-field">
        <label htmlFor="contact-name">Name *</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="sld-input"
          value={form.name}
          onChange={(event) =>
            updateField("name", event.target.value)
          }
          required
        />
      </div>

      <div className="sld-field">
        <label htmlFor="contact-email">Email *</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="sld-input"
          value={form.email}
          onChange={(event) =>
            updateField("email", event.target.value)
          }
          required
        />
      </div>

      <div className="sld-field">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          className="sld-input"
          value={form.company}
          onChange={(event) =>
            updateField("company", event.target.value)
          }
        />
      </div>

      <div className="sld-field">
        <label htmlFor="contact-project">
          What are we exploring?
        </label>
        <input
          id="contact-project"
          name="project"
          type="text"
          className="sld-input"
          value={form.project}
          onChange={(event) =>
            updateField("project", event.target.value)
          }
        />
      </div>

      <div className="sld-field md:col-span-2">
        <label htmlFor="contact-message">
          Tell us what deserves to exist. *
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="sld-input"
          value={form.message}
          onChange={(event) =>
            updateField("message", event.target.value)
          }
          required
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="sld-button sld-button-primary"
        >
          {status === "sending"
            ? "Sending..."
            : "Start a conversation"}
        </button>

        {status === "error" ? (
          <p className="mt-4 text-sm text-red-700">
            Something went wrong. Email
            hello@storylabdigital.co.za instead.
          </p>
        ) : null}
      </div>
    </form>
  );
}
