import {
  ArrowRight,
  HeartPulse,
  Pill,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { BookButton } from "@/components/booking/BookButton";

const icons: Record<string, LucideIcon> = {
  physician: HeartPulse,
  "general-surgery": Syringe,
  "general-medicine": Pill,
};

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-bold">Our services</h2>
        <p className="mt-3 text-muted-foreground">
          Choose the kind of care you need. The doctor will visit you at home.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s, index) => {
          const Icon = icons[s.slug] ?? HeartPulse;
          return (
            <Reveal key={s.slug} delay={index * 120} className="h-full">
              <div className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <BookButton
                variant="link"
                className="mt-5 h-auto justify-start gap-1 p-0 text-sm font-medium text-primary hover:no-underline"
              >
                Book this service
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </BookButton>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
