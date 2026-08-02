import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "accent" | "link";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy";

const VARIANT: Record<Variant, string> = {
  solid: "rounded-full bg-navy text-white hover:bg-navy/90 hover:-translate-y-px",
  outline: "rounded-full border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-navy/[0.04]",
  accent: "rounded-full bg-amber text-navy hover:bg-amber-dark",
  link: "relative text-navy after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-200 hover:after:scale-x-100",
};

const SIZE: Record<Variant, Record<Size, string>> = {
  solid: { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-[15px]", lg: "px-8 py-4 text-base" },
  outline: { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-[15px]", lg: "px-8 py-4 text-base" },
  accent: { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-[15px]", lg: "px-8 py-4 text-base" },
  link: { sm: "text-sm", md: "text-[15px]", lg: "text-base" },
};

function classes(variant: Variant, size: Size, className: string) {
  return `${BASE} ${VARIANT[variant]} ${SIZE[variant][size]} ${className}`;
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

/** A real <button> — forms, type="submit". Pairs with EditorialLinkButton for navigation, so a link never renders as <a><button>. */
export function EditorialButton({
  variant = "solid",
  size = "md",
  children,
  className = "",
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={classes(variant, size, className)}>
      {children}
    </button>
  );
}

/** The navigation counterpart to EditorialButton — wraps next/link, renders a single correct <a>. */
export function EditorialLinkButton({
  href,
  variant = "solid",
  size = "md",
  children,
  className = "",
  ...props
}: CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  return (
    <Link href={href} {...props} className={classes(variant, size, className)}>
      {children}
    </Link>
  );
}
