import type { ReactNode } from "react";
import { COL_SPAN, COL_START } from "./tokens";

export function Grid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 ${className}`}>{children}</div>;
}

export function GridItem({
  span,
  start,
  children,
  className = "",
}: {
  span?: number;
  start?: number;
  children: ReactNode;
  className?: string;
}) {
  const spanClass = span ? COL_SPAN[span] : "";
  const startClass = start ? COL_START[start] : "";
  return <div className={`${spanClass} ${startClass} ${className}`}>{children}</div>;
}
