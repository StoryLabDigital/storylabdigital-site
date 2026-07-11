type DotProps = {
  className?: string;
  label?: string;
};

export default function Dot({
  className = "",
  label,
}: DotProps) {
  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={`sld-dot ${className}`.trim()}
    />
  );
}