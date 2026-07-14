import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pdfUrl =
  "/field-notes/notebook-002-how-to-turn-an-idea-into-something-real.pdf";

export const metadata: Metadata = {
  title:
    "How to Turn an Idea Into Something Real | Field Notes 002 | StoryLabDigital",
  description:
    "A field guide about the distance between thinking and making — and how to cross it.",
  openGraph: {
    title: "How to Turn an Idea Into Something Real",
    description:
      "Field Notes 002, collected by Quill at StoryLabDigital.",
    type: "article",
    images: [
      {
        url: "/field-notes/notebook-002-cover.jpg",
        width: 1200,
        height: 1600,
        alt: "How to Turn an Idea Into Something Real",
      },
    ],
  },
};

const stages = [
  "Spark",
  "Question",
  "Story",
  "Sketch",
  "Prototype",
  "Test",
  "Refine",
  "Launch",
];

export default function FieldNotes002Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0f12] text-white">
      {/* Blueprint grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 md:pt-36">
        <Link
          href="/field-notes"
          className="inline-flex items-center gap-3 text-sm text-white/45 transition hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Return to Field Notes
        </Link>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 border border-white/[0.08]" />

            <div className="relative overflow-hidden bg-black shadow-2xl shadow-black/50">
              <Image
                src="/field-notes/notebook-002-cover.jpg"
                alt="Field Notes 002 — How to Turn an Idea Into Something Real"
                width={1200}
                height={1600}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="absolute -bottom-5 -right-3 bg-blue-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em]">
              002
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-xs font-medium uppercase tracking-[0.38em] text-blue-400">
              Field Notes 002
            </p>

            <h1 className="mt-7 max-w-4xl text-4xl font-light leading-[1.03] tracking-tight md:text-6xl lg:text-7xl">
              How to Turn an Idea Into Something Real
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
              A short publication about the distance between thinking and
              making — and how to cross it.
            </p>

            <blockquote className="mt-9 max-w-xl border-l border-blue-500 pl-6 text-lg font-light italic leading-relaxed text-white/75">
              “Every business, product and movement you admire began as a
              sentence somebody almost didn&apos;t write down.”
            </blockquote>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Read the publication
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                href={pdfUrl}
                download
                className="inline-flex items-center justify-center border border-white/20 px-7 py-4 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-black"
              >
                Download PDF
              </a>
            </div>

            <div className="mt-11 grid grid-cols-2 gap-5 border-t border-white/10 pt-7 text-sm text-white/40 sm:grid-cols-4">
              <div>
                <p className="text-white/20">Pages</p>
                <p className="mt-1 text-white/65">17</p>
              </div>

              <div>
                <p className="text-white/20">Notebook</p>
                <p className="mt-1 text-white/65">002</p>
              </div>

              <div>
                <p className="text-white/20">Collected by</p>
                <p className="mt-1 text-white/65">Quill</p>
              </div>

              <div>
                <p className="text-white/20">Filed in</p>
                <p className="mt-1 text-white/65">Cape Town</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint stages */}
      <section className="relative border-y border-white/10 bg-black/30 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                The blueprint
              </p>

              <h2 className="mt-6 text-3xl font-light md:text-5xl">
                Eight stations.
                <br />
                One crossing.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
              {stages.map((stage, index) => (
                <div
                  key={stage}
                  className="group bg-[#101318] p-6 transition hover:bg-[#151a21]"
                >
                  <p className="text-xs text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-7 text-xl font-light">{stage}</p>

                  <div className="mt-8 h-px w-8 bg-white/20 transition-all group-hover:w-16 group-hover:bg-blue-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quill note */}
      <section className="relative px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.6fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/30">
              Field Note 13
            </p>

            <h2 className="mt-7 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
              Where ideas{" "}
              <span className="text-blue-500">actually</span> die.
            </h2>

            <div className="mt-10 space-y-5 text-lg text-white/55">
              <p>In notebooks that were never reopened.</p>
              <p>In meetings that ended with “let&apos;s think about it.”</p>
              <p>In the wait for permission nobody was going to give.</p>
              <p>In the gap between “almost ready” and “ready.”</p>
            </div>
          </div>

          <div className="border-l border-white/15 pl-8">
            <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
              From Quill&apos;s desk
            </p>

            <blockquote className="mt-6 text-2xl font-light leading-relaxed text-white/75">
              “Ideas don&apos;t disappear.
              <br />
              People stop carrying them.”
            </blockquote>

            <p className="mt-5 text-sm text-white/30">— Q.</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative border-t border-white/10 bg-black px-6 py-24 text-center md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/25">
            Filed by Quill // Notebook 002 // Cape Town
          </p>

          <h2 className="mt-9 text-4xl font-light leading-tight md:text-6xl">
            Ideas are free.
            <br />
            Execution is rare.
          </h2>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 border-b border-blue-500 pb-2 text-sm font-semibold"
          >
            Open Field Notes 002
            <span aria-hidden="true">↗</span>
          </a>

          <p className="mt-16 text-sm leading-relaxed text-white/25">
            Notebook closed.
            <br />
            Coffee cold.
            <br />
            Tomorrow we build again.
          </p>
        </div>
      </section>
      <section className="relative border-t border-white/10 bg-[#0d0f12] px-6 py-16 md:px-10 md:py-20">
  <div className="mx-auto max-w-7xl">
    <p className="text-xs uppercase tracking-[0.35em] text-white/30">
      Continue exploring
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <Link
        href="/field-notes"
        className="group border border-white/10 bg-white/[0.02] p-7 transition hover:border-blue-500/60 hover:bg-white/[0.04]"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
          Return to the archive
        </p>

        <h3 className="mt-5 text-2xl font-light text-white md:text-3xl">
          Browse all Field Notes
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
          Return to Quill&apos;s archive and explore the complete collection.
        </p>

        <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white">
          <span aria-hidden="true" className="transition group-hover:-translate-x-1">
            ←
          </span>
          <span>Return to Field Notes</span>
        </div>
      </Link>

      <div className="border border-white/10 bg-white/[0.015] p-7 opacity-70">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Next notebook
        </p>

        <h3 className="mt-5 text-2xl font-light text-white/75 md:text-3xl">
          Where Ideas Actually Die
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/35">
          Notebook 003 is currently being collected from Quill&apos;s desk.
        </p>

        <div className="mt-8 inline-flex border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/30">
          Coming soon
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}