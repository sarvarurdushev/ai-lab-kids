/**
 * Hand-coded line-art icon set, replacing raw emoji for recurring UI chrome
 * (big ideas, segment types, track badges, buttons). Deliberately not an
 * emoji: renders identically across every OS/browser instead of varying by
 * platform font, and recolors via `currentColor` to match the Big Idea
 * color system (lib/curriculum/bigIdeaPresentation.ts). Vocabulary-word
 * flashcards still use emoji — 200+ words across the curriculum, not
 * something hand-illustrating icon-by-icon can cover.
 */

interface IconProps {
  size?: number;
  className?: string;
}

function Base({ size = 20, className = "", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M2 12c2.5-5 7-8 10-8s7.5 3 10 8c-2.5 5-7 8-10 8s-7.5-3-10-8Z" />
      <circle cx="12" cy="12" r="3" />
    </Base>
  );
}

export function PatternGridIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </Base>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21V10" />
      <path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7Z" />
      <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" />
    </Base>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <circle cx="8" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3.5 3 14.5 0 18" />
      <path d="M12 3c-3 3.5-3 14.5 0 18" />
    </Base>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </Base>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </Base>
  );
}

export function GamepadIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="7" width="20" height="11" rx="5" />
      <path d="M7 10.5v4M5 12.5h4" />
      <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </Base>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="9" width="18" height="11" rx="1.2" />
      <path d="M3 13h18" />
      <path d="M12 9v11" />
      <path d="M12 9c-1.5-4-6-4-6-1 0 1.5 2 1.7 6 1Z" />
      <path d="M12 9c1.5-4 6-4 6-1 0 1.5-2 1.7-6 1Z" />
    </Base>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2c3 2 4.5 5.5 4.5 9 0 2-1 4-1 4h-7s-1-2-1-4c0-3.5 1.5-7 4.5-9Z" />
      <circle cx="12" cy="9" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8.5 14l-3 3 1 3 3-3" />
      <path d="M15.5 14l3 3-1 3-3-3" />
      <path d="M10 19l2 3 2-3" />
    </Base>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8Z" />
    </Base>
  );
}

export function SpeakerIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 9.5h3.2L12 5.5v13L7.2 14.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
      <path d="M16 9a4.5 4.5 0 0 1 0 6" />
      <path d="M18.3 6.8a8 8 0 0 1 0 10.4" />
    </Base>
  );
}

export function XCircleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </Base>
  );
}

export function UndoIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 8L3.5 11.5 7 15" />
      <path d="M3.5 11.5H14a5.5 5.5 0 0 1 0 11h-3" />
    </Base>
  );
}

export function RobotHeadIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <circle cx="9.5" cy="12.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.5" r="1.3" fill="currentColor" stroke="none" />
      <path d="M9 15.5h6" />
      <path d="M12 7V4" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function RunIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="14.5" cy="4.5" r="1.7" fill="currentColor" stroke="none" />
      <path d="M11 8l2.5 2 .5 4 3 3" />
      <path d="M13.5 10l-4 1.5-2.5 4" />
      <path d="M14 12l3.5-1 2.5 1.5" />
      <path d="M13.5 14l-1.5 4-3 1.5" />
    </Base>
  );
}

export function MusicNoteIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 17V5.5L19 4v11.5" />
      <circle cx="6.5" cy="17" r="2.5" />
      <circle cx="16.5" cy="15.5" r="2.5" />
    </Base>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="8" cy="7" r="3" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M2.5 20v-1c0-3 2.5-5 5.5-5s5.5 2 5.5 5v1" />
      <path d="M14.5 20v-.8c0-2-1.2-3.6-3-4.5" />
    </Base>
  );
}

export function HandRaiseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 21h6a2 2 0 0 0 2-2v-5.5l2-3a1.4 1.4 0 0 0-2.4-1.4L15 11V4a1.4 1.4 0 0 0-2.8 0v6" />
      <path d="M12.2 10V3.4a1.4 1.4 0 0 0-2.8 0V10" />
      <path d="M9.4 10.2V5.4a1.4 1.4 0 0 0-2.8 0V15l-1.6-1.8a1.4 1.4 0 0 0-2.1 1.8L6 19c1 1.3 1.8 2 3 2" />
    </Base>
  );
}

export function OpenBookIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 6.5c-1.3-1.4-3.4-2-6.5-2C4.7 4.5 4 5.2 4 6v11.5c0 .8.7 1.2 1.5 1.1 2.7-.4 4.6.2 6.5 1.9" />
      <path d="M12 6.5c1.3-1.4 3.4-2 6.5-2 .8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.2-1.5 1.1-2.7-.4-4.6.2-6.5 1.9" />
      <path d="M12 6.5v13" />
    </Base>
  );
}
