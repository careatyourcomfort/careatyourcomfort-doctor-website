import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, Pill, Syringe, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: `Doctor home visit services in ${site.location}: Physician, General Surgery and General Medicine.`,
};

const icons: Record<string, LucideIcon> = {
  physician: HeartPulse,
  "general-surgery": Syringe,
  "general-medicine": Pill,
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <Reveal className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">Our services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Home visits for common health needs, delivered with care in{" "}
          {site.location}.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s, index) => {
          const Icon = icons[s.slug] ?? HeartPulse;
          return (
            <Reveal key={s.slug} delay={index * 120} className="h-full">
              <Link
                href={`/services/${s.slug}`}
                className="group block h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h2 className="mt-5 text-xl font-bold">{s.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </main>
  );
}