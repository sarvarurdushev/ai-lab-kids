import Image from "next/image";
import type { StaticImageData } from "next/image";

type Shape = "blob" | "arch" | "torn" | "circle" | "rect";
type Treatment = "full-color" | "duotone" | "halftone";

const SHAPE_CLIP: Record<Shape, string> = {
  blob: "[clip-path:url(#al-blob-clip)]",
  arch: "[clip-path:url(#al-arch-clip)]",
  torn: "[clip-path:url(#al-torn-clip)]",
  circle: "rounded-full",
  rect: "",
};

const TREATMENT_FILTER: Record<Treatment, string> = {
  "full-color": "",
  duotone: "grayscale contrast-125",
  halftone: "grayscale contrast-150",
};

/**
 * How the product's existing photography becomes an "editorial photo
 * treatment" without any new photo library: an organic clip-path instead of
 * a rectangle does most of the work, plus a CSS filter and a halftone-dot
 * overlay. `alt` is required (not optional) so every use is a deliberate
 * choice between real alt text and `alt=""` for genuinely decorative images.
 */
export function HalftonePhoto({
  src,
  alt,
  shape = "blob",
  treatment = "duotone",
  sizes = "400px",
  priority = false,
  className = "",
}: {
  src: StaticImageData | string;
  alt: string;
  shape?: Shape;
  treatment?: Treatment;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${SHAPE_CLIP[shape]} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${TREATMENT_FILTER[treatment]}`} />
      {treatment !== "full-color" && (
        <div aria-hidden="true" className="al-halftone absolute inset-0 text-navy mix-blend-multiply opacity-25" />
      )}
      {treatment === "duotone" && <div aria-hidden="true" className="absolute inset-0 mix-blend-color bg-navy opacity-30" />}
    </div>
  );
}
