import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function FieldNotesFeature() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
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
              <h3 className="text-4xl font-light leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                Ideas Worth Remembering
                <span className="text-[#316bff]">.</span>
              </h3>

              <p className="sld-label mt-8 text-white/50">
                Different. On Purpose.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 text-black/45">
          <span className="sld-label text-[#316bff]">006</span>
          <span className="sld-label">Field Notes</span>
        </div>

        <h2 className="sld-heading-two mt-9 max-w-4xl">
          Not a brochure.
          <br />
          A point of view.
        </h2>

        <p className="sld-body-large mt-7 max-w-2xl text-black/58">
          Issue 001 explores attention, curiosity and why different is not a
          visual style. It is a decision.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/field-notes" className="sld-button sld-button-primary">
            Explore Field Notes
          </Link>

          <a
            href={siteConfig.assets.fieldNotesPdf}
            target="_blank"
            rel="noreferrer"
            className="sld-button sld-button-secondary"
          >
            Open Issue 001
          </a>

          <a
            href={siteConfig.assets.fieldNotesPdf}
            download
            className="sld-button sld-button-secondary"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}