import type { Metadata } from "next";
import Link from "next/link";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionHeading from "../components/SectionHeading";
import WorkGallery from "../components/WorkGallery";

import { workItems } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected StoryLabDigital work across film, animation, AI-assisted production, learning and digital storytelling.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | StoryLabDigital",
    description: "Work built around ideas worth remembering.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#0b0f17]">
      <Header />

      <main id="main-content">
        <section className="border-b border-black/10">
          <div className="sld-container grid min-h-[62svh] items-end gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <p className="sld-label text-[#316bff]">Selected work</p>

              <h1 className="sld-display mt-8 max-w-5xl">
                Ideas made visible
                <span className="text-[#316bff]">.</span>
              </h1>
            </div>

            <div className="border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="sld-body-large max-w-xl text-black/58">
                Film, animation, AI-assisted production, learning and digital
                experiences. Different formats. One standard: the idea must
                deserve to exist.
              </p>
            </div>
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container">
            <SectionHeading
              number="001"
              label="The archive"
              title={
                <>
                  Work that earns attention
                  <br />
                  instead of asking for it.
                </>
              }
              text="A selection of campaigns, explainers, learning stories, corporate films and experimental work created for clients and for the studio itself."
            />

            <WorkGallery items={workItems} />
          </div>
        </section>

        <section className="border-y border-black/10 bg-white py-20 sm:py-24">
          <div className="sld-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="sld-label text-[#316bff]">
                Something worth building?
              </p>

              <h2 className="sld-heading-two mt-8 max-w-5xl">
                Bring the idea.
                <br />
                We will find the form.
              </h2>
            </div>

            <Link
              href="/contact"
              className="sld-button sld-button-primary w-fit"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}