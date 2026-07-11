import type { Metadata } from "next";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with StoryLabDigital about film, animation, AI-assisted production, learning or digital storytelling.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | StoryLabDigital",
    description:
      "Bring the problem, the half-formed thought or the idea worth building.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#0b0f17]">
      <Header />

      <main id="main-content">
        <section className="border-b border-black/10">
          <div className="sld-container grid min-h-[62svh] items-end gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            <div>
              <p className="sld-label text-[#316bff]">Contact</p>

              <h1 className="sld-display mt-8 max-w-5xl">
                Start with the idea
                <span className="text-[#316bff]">.</span>
              </h1>
            </div>

            <div className="border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="sld-body-large max-w-xl text-black/58">
                Bring the problem, the half-formed thought or the thing that
                has been sitting in your head longer than it should.
              </p>
            </div>
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="flex items-center gap-4 text-black/45">
                <span className="sld-label text-[#316bff]">001</span>
                <span className="sld-label">Start here</span>
              </div>

              <h2 className="sld-heading-two mt-9 max-w-4xl">
                Let&apos;s build something worth remembering
                <span className="text-[#316bff]">.</span>
              </h2>

              <p className="sld-body-large mt-7 max-w-xl text-black/58">
                Tell us what you are trying to solve, what deserves to exist
                and where the opportunity might be.
              </p>

              <div className="mt-12 grid gap-8 border-t border-black/10 pt-8">
                <div>
                  <p className="sld-label text-black/40">Email</p>
                  <a
                    href="mailto:hello@storylabdigital.co.za"
                    className="mt-3 inline-block text-lg font-light transition-colors hover:text-[#316bff]"
                  >
                    hello@storylabdigital.co.za
                  </a>
                </div>

                <div>
                  <p className="sld-label text-black/40">Based in</p>
                  <p className="mt-3 text-lg font-light">
                    Cape Town
                    <br />
                    Working worldwide
                  </p>
                </div>

                <div>
                  <p className="sld-label text-black/40">Smaller request?</p>
                  <a
                    href="/the-lab"
                    className="mt-3 inline-block text-lg font-light transition-colors hover:text-[#316bff]"
                  >
                    Send it to The Lab →
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="border-y border-black/10 bg-white py-20 sm:py-24">
          <div className="sld-container">
            <p className="sld-label text-[#316bff]">Good to know</p>

            <h2 className="sld-heading-two mt-8 max-w-5xl">
              Clear thinking first.
              <br />
              Production second.
            </h2>

            <p className="sld-body-large mt-7 max-w-2xl text-black/58">
              We do not force every request into a service package. The right
              format comes after the right question.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}