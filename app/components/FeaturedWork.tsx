import Image from "next/image";
import Link from "next/link";
import { featuredWork } from "@/data/work";

export default function FeaturedWork() {
  return (
    <div className="mt-16 grid gap-px overflow-hidden bg-black/10 md:grid-cols-2">
      {featuredWork.map((item, index) => {
        const isLeadItem = index === 0;
        const supportingItemCount = featuredWork.length - 1;
        const isLastItem = index === featuredWork.length - 1;
        const hasOddSupportingCount = supportingItemCount % 2 !== 0;
        const shouldSpanFullWidth =
          isLeadItem || (isLastItem && hasOddSupportingCount);

        return (
          <article
            id={item.slug}
            key={item.slug}
            className={[
              "group relative overflow-hidden bg-[#0b0f17]",
              shouldSpanFullWidth ? "md:col-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Link
              href={`/work#${item.slug}`}
              aria-label={`View ${item.title}`}
              className="block"
            >
              <div
                className={[
                  "relative",
                  shouldSpanFullWidth
                    ? "aspect-video"
                    : "aspect-[4/3]",
                ].join(" ")}
              >
                <Image
                  src={item.poster}
                  alt={`${item.title} poster`}
                  fill
                  sizes={
                    shouldSpanFullWidth
                      ? "100vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-cover opacity-80 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/55">
                    <span>{item.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.category}</span>
                  </div>

                  <div className="mt-3 flex items-end justify-between gap-6">
                    <h3 className="text-2xl font-light tracking-[-0.035em] sm:text-3xl">
                      {item.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="translate-x-0 text-xl text-[#316bff] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}