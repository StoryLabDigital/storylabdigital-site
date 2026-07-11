type VideoFrameProps = {
  src: string;
  poster: string;
  title: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  priority?: boolean;
};

export default function VideoFrame({
  src,
  poster,
  title,
  className = "",
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  priority = false,
}: VideoFrameProps) {
  return (
    <figure
      className={[
        "sld-media-frame sld-aspect-video",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        aria-label={title}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload={priority ? "auto" : "metadata"}
      />

      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}