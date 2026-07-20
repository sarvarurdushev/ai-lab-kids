"use client";

import { useEffect } from "react";

/**
 * Browsers print collapsed <details> collapsed — but this page's whole
 * point is to work as a printable syllabus, so every <details
 * data-print-expand> on the page force-opens for the print dialog and
 * restores its prior state afterward. No new dependency: just the
 * beforeprint/afterprint window events.
 */
export function PrintExpandDetails() {
  useEffect(() => {
    function expandAll() {
      document.querySelectorAll<HTMLDetailsElement>("details[data-print-expand]").forEach((d) => {
        d.dataset.wasOpen = d.open ? "1" : "0";
        d.open = true;
      });
    }
    function restore() {
      document.querySelectorAll<HTMLDetailsElement>("details[data-print-expand]").forEach((d) => {
        d.open = d.dataset.wasOpen === "1";
      });
    }
    window.addEventListener("beforeprint", expandAll);
    window.addEventListener("afterprint", restore);
    return () => {
      window.removeEventListener("beforeprint", expandAll);
      window.removeEventListener("afterprint", restore);
    };
  }, []);
  return null;
}
