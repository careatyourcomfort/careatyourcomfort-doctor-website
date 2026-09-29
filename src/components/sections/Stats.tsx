import { Reveal } from "@/components/Reveal";
import { CountUp } from "../CountUp";

const stats = [
  { value: "500+", label: "Home visits completed" },
  { value: "4.8★", label: "Average patient rating" },
  { value: "7 days", label: "Available every week" },
  { value: "< 1 hr", label: "Typical response time" },
];

export function Stats() {
  return (
    <section className="border-y bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} className="text-center">
                            <p className="font-heading text-3xl font-bold sm:text-4xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 text-sm text-white/80">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}