import type { Metadata } from "next";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionHeading from "../components/SectionHeading";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "StoryLabDigital Field Notes explores attention, curiosity, creativity and the ideas worth remembering.",
  alternates: {
    canonical: "/field-notes",
  },
  openGraph: {
    title: "Field Notes | StoryLabDigital",
    description:
      "Not a brochure. A point of view.",
    url: "/field-notes",
  },
};

const issueThemes = [
  {
    number: "01",
    title: "Attention",
    text: "Nobody owes your content a second look. Attention must be earned.",
  },
  {
    number: "02",
    title: "Curiosity",
    text: "The strongest work usually begins with a better question, not a faster answer.",
  },
  {
    number: "03",
    title: "Difference",
    text: "Different is not a visual trick. It is a decision made before the work begins.",
  },
] as const;

export default function FieldNotesPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#0b0f17]">
      <Header />

      <main id="main-content">
        <section className="border-b border-black/10">
          <div className="sld-container grid min-h-[62svh] items-end gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            <div>
              <p className="sld-label text-[#316bff]">
                Field Notes · Issue 001
              </p>

              <h1 className="sld-display mt-8 max-w-5xl">
                Not a brochure.
                <br />
                A point of view
                <span className="text-[#316bff]">.</span>
              </h1>
            </div>

            <div className="border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="sld-body-large max-w-xl text-black/58">
                Notes on attention, curiosity, creativity and why different is
                not a style. It is a decision.
              </p>
            </div>
          </div>
        </section>

        <section className="sld-section">
          <div className="sld-container">
            <SectionHeading
              number="001"
              label="Current issue"
              title={
                <>
                  Ideas Worth Remembering
                  <span className="text-[#316bff]">.</span>
                </>
              }
              text="Issue 001 sets out the thinking behind StoryLabDigital: work should earn attention, curiosity should come before execution, and creativity should never be reduced to a list of deliverables."
            />

            <div className="mt-16 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="mx-auto w-full max-w-md">
                <div className="sld-aspect-document bg-[#0b0f17] p-8 text-white shadow-2xl shadow-black/20 sm:p-10">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xl font-semibold tracking-[-0.045em]">
                        storylabdigital
                        <span className="text-[#316bff]">.</span>
                      </p>

                      <p className="sld-label mt-16 text-[#316bff]">
                        Field Notes · Issue 001
                      </p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-light leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                        Ideas Worth Remembering
                        <span className="text-[#316bff]">.</span>
                      </h2>

                      <p className="sld-label mt-8 text-white/50">
                        Different. On Purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="sld-label text-[#316bff]">
                  Read the issue
                </p>

                <h2 className="sld-heading-two mt-8 max-w-4xl">
                  Open it here.
                  <br />
                  Take it with you.
                </h2>

                <p className="sld-body-large mt-7 max-w-2xl text-black/58">
                  Read Issue 001 directly in the embedded viewer, open the full
                  PDF in a new tab or download a copy for later.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.assets.fieldNotesPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="sld-button sld-button-primary"
                  >
                    Open full PDF
                  </a>

                  <a
                    href={siteConfig.assets.fieldNotesPdf}
                    download
                    className="sld-button sld-button-secondary"
                  >
                    Download Issue 001
                  </a>
                </div>

                <div className="mt-12 overflow-hidden border border-black/10 bg-white">
                  <iframe
                    src={`${siteConfig.assets.fieldNotesPdf}#view=FitH`}
                    title="StoryLabDigital Field Notes Issue 001"
                    className="h-[70svh] min-h-[36rem] w-full"
                  />

                  <div className="border-t border-black/10 px-5 py-4 text-sm text-black/45">
                    If the PDF does not display in your browser, use “Open full
                    PDF” above.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sld-section border-y border-black/10 bg-white">
          <div className="sld-container">
            <SectionHeading
              number="002"
              label="Inside Issue 001"
              title={
                <>
                  Three ideas.
                  <br />
                  One standard.
                </>
              }
            />

            <div className="mt-16">
              {issueThemes.map((theme) => (
                <article
                  key={theme.number}
                  className="grid gap-5 border-t border-black/15 py-8 md:grid-cols-[5rem_0.7fr_1.3fr] md:items-baseline"
                >
                  <p className="sld-label text-[#316bff]">
                    {theme.number}
                  </p>

                  <h3 className="text-2xl font-light tracking-[-0.035em] sm:text-3xl">
                    {theme.title}
                  </h3>

                  <p className="max-w-2xl text-base leading-7 text-black/55">
                    {theme.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0f17] py-20 text-white sm:py-24">
          <div className="sld-container">
            <p className="sld-label text-[#316bff]">
              The next note
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="sld-heading-one max-w-5xl">
                Ideas should leave a mark.
                <br />
                Not just fill a feed.
              </h2>

              <a
                href="mailto:hello@storylabdigital.co.za?subject=Field%20Notes"
                className="sld-button sld-button-outline-light w-fit"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}