"use client";

import Link from "next/link";

export default function QuillServices() {
  return (
    <section className="border-y border-black/10 bg-[#f7f7f5] py-8 sm:py-10 lg:py-12">
      <div className="sld-container">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden rounded-[1.6rem]">
          <img
            src="/quill/quill-services-approved-768.jpg"
            alt="StoryLabDigital services with Quill seated in a director's chair holding coffee and a donut, surrounded by film, animated learning, awareness, AI-assisted production and learning experience services"
            className="block h-auto w-full"
          />
          <Link
            href="/contact"
            aria-label="Start a conversation"
            className="absolute bottom-[2.2%] right-[5.5%] h-[7.5%] w-[17%] rounded-full focus:outline-none focus:ring-2 focus:ring-[#316bff] focus:ring-offset-2"
          />
        </div>
      </div>
    </section>
  );
}
