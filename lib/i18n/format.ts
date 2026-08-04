/** Replaces `{key}` tokens in a dictionary template string with values — keeps word-order-sensitive translations (Korean particles, reordered clauses) correct without functions in the dictionary (which wouldn't survive the server->client prop boundary). */
export function interpolate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}
