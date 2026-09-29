"use client";

import { useEffect, useRef, useState } from "react";

export function TimelineLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function update() {
      const el = lineRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportMiddle = window.innerHeight * 0.75;

      const visible = viewportMiddle - rect.top;
      const percent = Math.min(100, Math.max(0, (visible / rect.height) * 100));

      setHeight(percent);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className="absolute left-4 top-0 h-full w-0.5 bg-border sm:left-1/2"
    >
      <div
        className="w-full bg-linear-to-b from-teal-600 to-cyan-600 transition-[height] duration-300 ease-out"
        style={{ height: `${height}%` }}
      />
    </div>
  );
}