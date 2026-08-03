"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Pins a section for the height of its outer wrapper while translating a
 * track horizontally in lockstep with scroll progress through that pinned
 * range — vertical scroll drives horizontal motion for a row too wide to lay
 * out normally. Attach `outerRef` to a tall (e.g. `h-[300svh]`) wrapper,
 * `trackRef` to the horizontally-laid-out child inside a `position: sticky`
 * inner div, and drive that child's `x` style from the returned `x`.
 *
 * Needs `overflow-y: visible` on every ancestor up to the scrolling
 * viewport — `overflow-x: hidden`/`auto`/`scroll` on an ancestor forces the
 * other axis to compute as `auto` too, which turns it into a scroll
 * container and silently breaks `position: sticky` for this whole subtree.
 * See EditorialShell's overflow-x-clip comment (that's this hook's one
 * sanctioned ancestor override).
 *
 * The scroll-to-viewport distance is measured once via ResizeObserver (the
 * track's rendered width vs. the window's), never inside the scroll
 * listener itself. Under prefers-reduced-motion no listener is attached and
 * `x` stays frozen at 0 — callers should also hide the pinned markup itself
 * via CSS (`motion-reduce:hidden`) rather than relying on this alone, since
 * the pinned wrapper's scroll-jacked height only makes sense when the track
 * actually moves.
 */
export function usePinnedTrack() {
  const reduce = useReducedMotion();
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxTranslate = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  const rawX = useTransform([scrollYProgress, maxTranslate], (latest) => {
    const [progress, max] = latest as [number, number];
    return -progress * max;
  });
  const x = useSpring(rawX, { stiffness: 300, damping: 45, mass: 0.5 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduce) return;

    function measure() {
      const trackWidth = track!.scrollWidth;
      maxTranslate.set(Math.max(0, trackWidth - window.innerWidth));
    }
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reduce, maxTranslate]);

  /**
   * Keyboard focus-sync: scrolls the page so a tabbed-to item (off-screen
   * because the track only "looks" scrolled via transform, not real
   * horizontal scroll) ends up centered in the pinned viewport. Diffs
   * getBoundingClientRect against the track rather than reading offsetLeft:
   * both rects shift by the same amount under the track's transform, so the
   * difference is transform-invariant without needing offsetParent to
   * resolve to the track itself (it won't, once an item wrapper needs its
   * own `relative` for stacking above the connector line). A one-off
   * measurement on a discrete focus event, not a per-frame read, so it
   * doesn't fall under the "never measure in a hot handler" rule above.
   *
   * The sticky wrapper's `overflow: hidden` makes it a valid target for the
   * browser's own "scroll the nearest scrollable ancestor to reveal a newly
   * focused element" default — which sets that ancestor's `scrollLeft`
   * independently of (and roughly matching) the shift our own `x` transform
   * is about to apply, doubling the total movement. We're already handling
   * "bring it into view" ourselves via the vertical scroll, so that native
   * scrollLeft is pure interference — reset to 0 before reading rects (in
   * case it landed first) and again after our own scroll settles (in case
   * the browser reasserts it once the item's transformed position changes).
   */
  function scrollToItem(itemEl: HTMLElement, behavior: ScrollBehavior = "smooth") {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;
    const stickyParent = track.parentElement;
    if (stickyParent) stickyParent.scrollLeft = 0;

    const max = maxTranslate.get();
    const trackRect = track.getBoundingClientRect();
    const itemRect = itemEl.getBoundingClientRect();
    const itemCenter = itemRect.left - trackRect.left + itemRect.width / 2;
    const desiredX = Math.min(max, Math.max(0, itemCenter - window.innerWidth / 2));
    const progress = max > 0 ? desiredX / max : 0;
    const outerTop = outer.getBoundingClientRect().top + window.scrollY;
    // -1: centering an item near either end of the track clamps progress to
    // exactly 0 or 1, which lands exactly on the boundary where `position:
    // sticky` releases — right at that pixel, whether the browser still
    // considers it "stuck" is inconsistent, so nudge just inside the pinned
    // range instead of landing exactly on the seam.
    const pinnedRange = outer.offsetHeight - window.innerHeight - 1;
    const targetScrollY = outerTop + progress * pinnedRange;
    window.scrollTo({ top: targetScrollY, behavior });

    if (stickyParent) {
      requestAnimationFrame(() => {
        stickyParent.scrollLeft = 0;
      });
    }
  }

  return { outerRef, trackRef, x, active: !reduce, scrollToItem };
}
