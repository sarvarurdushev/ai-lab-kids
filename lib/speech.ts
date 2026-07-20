"use client";

// Read-aloud for pre-readers, via the browser's built-in SpeechSynthesis —
// nothing is sent to a server. See docs/AI_CURRICULUM.md "Safety" section
// for why this app has no server-side voice/AI integration at all.

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string, lang: "en-US" | "ko-KR" = "en-US"): void {
  if (!isSpeechSupported()) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    // Some browsers gate speech synthesis behind a permission prompt and
    // throw (or reject a promise-like event) if it's dismissed rather than
    // answered — read-aloud is a nice-to-have, so fail silently instead of
    // crashing the lesson the teacher is running.
    utterance.onerror = () => undefined;
    window.speechSynthesis.speak(utterance);
  } catch {
    // ignore — read-aloud just doesn't happen this time
  }
}
