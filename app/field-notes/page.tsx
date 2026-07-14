import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Field Notes | StoryLabDigital",
  description:
    "Ideas, observations and creative experiments collected by Quill at StoryLabDigital.",
};

const notebooks = [
  {
    number: "002",
    title: "How to Turn an Idea Into Something Real",
    description:
      "A field guide about the distance between thinking and making — and how to cross it.",
    cover: "/field-notes/notebook-002-cover.jpg",
    href: "/field-notes/002",
    label: "Latest field notes",
  },
  {
  number: "001",
  title: "Ideas Worth Remembering",
  description:
    "The first entry from the StoryLabDigital archive — thoughts on ideas, difference and creating with purpose.",
    cover: "/field-notes/field-notes-issue-001-cover.jpg",
    pdf: "/field-notes/StoryLabDigital_FieldNotes_Issue001_Interactive.pdf",
    label: "From the archive",
  },
];

export default function FieldNotesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0f12] text-white">
      {/* Subtle blueprint background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40">
        <Link
  href="/"
  className="mb-10 inline-flex items-center gap-3 text-sm text-white/45 transition hover:text-white"
>
  <span aria-hidden="true">←</span>
  Return to StoryLabDigital
</Link>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-blue-400">
              StoryLabDigital Archive
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Field Notes
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              Observations collected while turning ideas into things people can
              see, use, question and remember.
            </p>
          </div>

          <div className="border-l border-white/15 pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Filed by
            </p>

            <p className="mt-3 text-2xl font-light">Quill</p>

            <p className="mt-2 text-sm leading-relaxed text-white/45">
              Employee #1
              <br />
              StoryLabDigital
              <br />
              Cape Town
            </p>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-4 md:mt-16">
          <div className="h-px flex-1 bg-white/15" />
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
            Active notebooks
          </p>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="mt-14">
          {notebooks.map((notebook, index) => {
            const card = (
              <article className="group grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
                  <div className="absolute -inset-4 border border-white/[0.07]" />

                  <div className="relative overflow-hidden bg-black shadow-2xl shadow-black/40">
                    <Image
                      src={notebook.cover}
                      alt={`${notebook.title} cover`}
                      width={1200}
                      height={1600}
                      className="h-auto w-full transition duration-700 group-hover:scale-[1.015]"
                      priority={index === 0}
                    />
                  </div>

                  <div className="absolute -bottom-5 -right-4 bg-blue-600 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em]">
                    Notebook {notebook.number}
                  </div>
                </div>

                <div className="self-center lg:pl-12">
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
                    {notebook.label}
                  </p>

                  <h2 className="mt-6 max-w-3xl text-3xl font-light leading-tight md:text-5xl">
                    {notebook.title}
                  </h2>

                  <p className="mt-7 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
                    {notebook.description}
                  </p>

                  <div className="mt-10 flex items-center gap-5">
                    <span className="text-sm font-medium">
                      {notebook.href
                        ? "Enter the notebook"
                        : "Open the publication"}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </div>

                  {index === 0 && (
                    <p className="mt-12 max-w-sm border-l border-blue-500/60 pl-5 text-sm italic leading-relaxed text-white/35">
                      “People wait for confidence. Confidence usually arrives
                      after starting.”
                      <span className="mt-2 block not-italic text-white/25">
                        — Q.
                      </span>
                    </p>
                  )}
                </div>
              </article>
            );

            if (notebook.href) {
  return (
    <Link
      key={notebook.number}
      href={notebook.href}
      className={`block ${
        index > 0
          ? "mt-24 border-t border-white/10 pt-24 md:mt-32 md:pt-32"
          : ""
      }`}
    >
      {card}
    </Link>
  );
}

return (
  <a
    key={notebook.number}
    href={notebook.pdf}
    target="_blank"
    rel="noopener noreferrer"
    className={`block ${
      index > 0
        ? "mt-24 border-t border-white/10 pt-24 md:mt-32 md:pt-32"
        : ""
    }`}
  >
    {card}
  </a>
);
          })}
        </div>
      </section>

      <section className="relative border-t border-white/10 px-6 py-24 md:px-10 md:py-28">
  <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
    <p className="text-xs uppercase tracking-[0.35em] text-white/50">
      From Quill&apos;s desk
    </p>

    <p className="mt-7 text-3xl font-light leading-tight text-white/90 md:text-5xl">
      Ideas are free.
      <br />
      Execution is rare.
    </p>

    <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/45">
      Notebook closed. Coffee cold. Tomorrow we build again.
    </p>
  </div>
</section>
    </main>
  );
}