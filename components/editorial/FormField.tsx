import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

/** Forwards every native input prop unchanged — a styling wrapper, not a new form-logic layer. 16px font-size specifically prevents iOS Safari's focus-zoom. */
export function FormField({ label, error, id, className = "", ...props }: FormFieldProps) {
  const fieldId = id ?? props.name;
  const errorId = error ? `${fieldId}-error` : undefined;
  return (
    <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy" htmlFor={fieldId}>
      {label}
      <input
        id={fieldId}
        aria-invalid={!!error}
        aria-describedby={errorId}
        className={`rounded-xl border px-4 py-3.5 text-[16px] font-normal text-navy transition-colors focus:ring-2 focus:outline-none ${
          error ? "border-coral focus:border-coral focus:ring-coral/15" : "border-navy/15 focus:border-navy focus:ring-navy/10"
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs font-semibold text-coral-ink">
          {error}
        </p>
      )}
    </label>
  );
}
