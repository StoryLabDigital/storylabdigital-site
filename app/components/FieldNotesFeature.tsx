import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export default function FieldNotesFeature() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div className="mx-auto w-full max-w-md">
        <div className="relative sld-aspect-document overflow-hidden bg-[#0b0f17] shadow-2xl shadow-black/20">
          <Image
            src="/field-notes/field-notes-issue-001-cover.jpg"
            alt="StoryLabDigital Field Notes Issue 001 cover"
            fill
            sizes="(max-width: 1024px) 100vw, 32rem"
            className="object-cover"
            priority={false}
          />
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
          <Link
            href="/field-notes"
            className="sld-button sld-button-primary"
          >
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