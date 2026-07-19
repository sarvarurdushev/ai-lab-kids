/** Sequencing connector word for a step at `index` out of `total` steps (first/next/then/last). Shared by the solo Sequence Builder and the classroom OrderingEngine. */
export function connectorFor(index: number, total: number): string {
  if (index === 0) return "First";
  if (index === total - 1) return "Last";
  if (index === total - 2) return "Then";
  return "Next";
}
