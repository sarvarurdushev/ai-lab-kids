"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient "digital rain" behind the marketing page — the literal hacker-green
 * motif the homepage's SystemStatusCard already winks at, extended into a
 * full backdrop instead of one card. Deliberately restrained for a kids'
 * product: low opacity, slow fall speed, no flashing, and it never sits above
 * readable text (z-0, page content is z-10+). Skips entirely for
 * prefers-reduced-motion — this is 100% decorative, never load-bearing.
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CHARS = "01アイAI01アイ・.:+*—".split("");
    const FONT_SIZE = 16;
    let columns = 0;
    let drops: number[] = [];
    let dpr = 1;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(clientWidth / FONT_SIZE);
      drops = new Array(columns).fill(0).map(() => Math.random() * -12);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let raf = 0;
    let lastTick = 0;
    function tick(now: number) {
      raf = requestAnimationFrame(tick);
      if (now - lastTick < 65) return; // ~15fps — a calm drift, not a flicker
      lastTick = now;
      if (!ctx || !canvas) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.fillStyle = "rgba(7, 7, 13, 0.13)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${FONT_SIZE}px monospace`;
      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * FONT_SIZE;
        const fade = Math.max(0, 1 - drops[i] / 34);
        // A bright "leading" glyph at the head of each trail, same as the real
        // effect this is riffing on, is what actually reads as "code falling"
        // rather than just noise — the rest of the trail stays dim.
        const isLeader = Math.random() > 0.85;
        ctx.fillStyle = isLeader ? `rgba(180, 255, 160, ${0.65 * fade})` : `rgba(51, 255, 0, ${0.4 * fade})`;
        ctx.fillText(char, i * FONT_SIZE, y);
        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90 [mask-image:linear-gradient(to_bottom,black,black_70%,transparent_92%)]"
    />
  );
}
