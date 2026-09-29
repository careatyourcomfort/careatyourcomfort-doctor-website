"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Priya Malhotra",
    area: "Vasant Kunj, Delhi",
    text: "Doctor sahab were right on time and checked everything properly. Didn't have to step out of the house while running a fever, which was a huge relief.",
  },
  {
    name: "Rohit Sharma",
    area: "Sector 15, Noida",
    text: "Booked through WhatsApp in like 2 minutes. Doctor called to confirm and reached exactly on time. Very smooth process.",
  },
  {
    name: "Anjali Verma",
    area: "Indirapuram, Ghaziabad",
    text: "My mother is 70 and can't travel easily. Having the doctor come home for her checkup made things so much simpler for all of us.",
  },
  {
    name: "Karan Mehta",
    area: "Dwarka Sector 12, Delhi",
    text: "My son had high fever at night and we didn't want to rush to a hospital. Doctor visited within the hour and it really put us at ease.",
  },
  {
    name: "Neha Gupta",
    area: "Sector 50, Gurugram",
    text: "Explained everything clearly and answered all my questions patiently. Felt like a proper consultation, not rushed at all.",
  },
  {
    name: "Amit Kapoor",
    area: "Rajouri Garden, Delhi",
    text: "Was skeptical about a home visit doctor at first, but it went really well. Professional and on time. Would book again.",
  },
];

const AUTO_SLIDE_MS = 3500;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const dotCount = maxIndex + 1;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % dotCount);
    }, AUTO_SLIDE_MS);

    return () => clearInterval(id);
  }, [paused, dotCount]);

  useEffect(() => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (track && card) {
      track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  }, [index]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">What patients say</h2>
        <p className="mt-3 text-muted-foreground">
          Real feedback will appear here once patient reviews are collected.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div
          className="mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="no-scrollbar flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name + i}
                className="w-[85%] shrink-0 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="h-full rounded-2xl border bg-card p-6">
                  <div className="flex gap-0.5 text-highlight">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-5 border-t pt-4">
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50"
                )}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}