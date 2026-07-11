import { testimonials } from "@/data/site";

type TestimonialsProps = {
  theme?: "light" | "dark";
  className?: string;
};

export default function Testimonials({
  theme = "light",
  className = "",
}: TestimonialsProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={[
        "grid gap-px overflow-hidden md:grid-cols-2",
        isDark ? "bg-white/10" : "bg-black/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {testimonials.map((testimonial) => (
        <figure
          key={`${testimonial.name}-${testimonial.company}`}
          className={[
            "flex min-h-full flex-col justify-between p-8 sm:p-10 lg:p-12",
            isDark ? "bg-[#0b0f17] text-white" : "bg-[#f7f7f5] text-[#0b0f17]",
          ].join(" ")}
        >
          <blockquote className="sld-heading-three max-w-2xl">
            “{testimonial.quote}”
          </blockquote>

          <figcaption
            className={[
              "mt-12 border-t pt-5 text-sm",
              isDark
                ? "border-white/15 text-white/50"
                : "border-black/15 text-black/50",
            ].join(" ")}
          >
            <span
              className={
                isDark
                  ? "font-semibold text-white"
                  : "font-semibold text-[#0b0f17]"
              }
            >
              {testimonial.name}
            </span>

            <span className="mx-2" aria-hidden="true">
              ·
            </span>

            <span>
              {testimonial.role}, {testimonial.company}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}