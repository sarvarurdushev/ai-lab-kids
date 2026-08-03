const ROTATION: Record<"up" | "down" | "left" | "right" | "up-right" | "down-right", string> = {
  right: "rotate-0",
  down: "rotate-90",
  left: "rotate-180",
  up: "-rotate-90",
  "up-right": "-rotate-45",
  "down-right": "rotate-45",
};

/** A hand-drawn-style curved arrow, pairing with Annotation captions. */
export function HandArrow({
  size = 44,
  direction = "right",
  flip = false,
  className = "",
}: {
  size?: number;
  direction?: keyof typeof ROTATION;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 26"
      fill="none"
      aria-hidden="true"
      className={`text-navy/70 ${ROTATION[direction]} ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path d="M2 20 C 14 23, 30 17, 40 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path d="M31 4 L41 6 L37 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
