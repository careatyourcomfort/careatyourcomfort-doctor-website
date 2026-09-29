import { Clock, ShieldCheck, Stethoscope, Wallet } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  {
    icon: Stethoscope,
    title: "Experienced doctor",
    text: "Qualified and experienced in physician care, general surgery and general medicine.",
  },
  {
    icon: Clock,
    title: "On-time visits",
    text: "The doctor arrives at the time you choose, so you don't have to wait around.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and hygienic",
    text: "Proper hygiene practices are followed at every home visit.",
  },
  {
    icon: Wallet,
    title: "Transparent fee",
    text: "One flat consultation fee, told to you upfront, with no hidden charges.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Why choose us</h2>
        <p className="mt-3 text-muted-foreground">
          Care that comes to you, without compromising on quality.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <Reveal key={point.title} delay={index * 100} className="h-full">
              <div className="h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <span className="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-teal-600 to-cyan-600 text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-bold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {point.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}