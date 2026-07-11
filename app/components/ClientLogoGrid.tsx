import Image from "next/image";
import { clients } from "@/data/site";

type ClientLogoGridProps = {
  theme?: "light" | "dark";
  className?: string;
};

export default function ClientLogoGrid({
  theme = "light",
  className = "",
}: ClientLogoGridProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={[
        "grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 lg:grid-cols-4",
        isDark ? "bg-white/10" : "bg-black/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {clients.map((client) => (
        <div
          key={client.name}
          className={[
            "grid min-h-36 place-items-center p-6 sm:min-h-40",
            isDark ? "bg-[#0b0f17]" : "bg-white",
          ].join(" ")}
        >
          <div className="relative h-16 w-full max-w-[11rem]">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 18vw"
              className={[
                "object-contain transition duration-300",
                isDark
                  ? "brightness-0 invert opacity-75 hover:opacity-100"
                  : "grayscale opacity-75 hover:grayscale-0 hover:opacity-100",
              ].join(" ")}
            />
          </div>
        </div>
      ))}
    </div>
  );
}