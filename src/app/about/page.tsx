import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Clock,
  Users,
  Check,
  X,
} from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { BookButton } from "@/components/booking/BookButton";
import { TimelineLine } from "@/components/TimelineLine";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}, bringing doctor home visits to ${site.location}.`,
};

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-first care",
    text: "Every visit is unhurried and focused entirely on you and your family's comfort.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    text: "We respect your time. The doctor arrives within the window you choose.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and hygiene",
    text: "Proper hygiene practices are followed at every single home visit.",
  },
  {
    icon: Users,
    title: "Honest guidance",
    text: "Clear, straightforward advice, with no unnecessary tests or procedures.",
  },
];

const stats = [
  { value: "500+", label: "Home visits completed" },
  { value: "4.8★", label: "Average patient rating" },
  { value: "7 days", label: "Available every week" },
  { value: "< 1 hr", label: "Typical response time" },
];

const timeline = [
  {
    title: "The idea",
    text: "Started with a simple goal: make it easier for patients to see a doctor without leaving home.",
  },
  {
    title: "First home visits",
    text: `Began seeing patients across ${site.location}, one WhatsApp booking at a time.`,
  },
  {
    title: "Growing through trust",
    text: "Word of mouth from patients helped the practice grow, without ever compromising on care.",
  },
  {
    title: "Today",
    text: "A trusted home visit service covering Physician, General Surgery and General Medicine.",
  },
];

const comparison = [
  { point: "Wait at a crowded clinic", clinic: false, us: true },
  { point: "Travel while unwell", clinic: false, us: true },
  { point: "Rushed 5-minute consultation", clinic: false, us: true },
  { point: "Choose your own visit time", clinic: false, us: true },
  { point: "Doctor comes to your home", clinic: false, us: true },
  { point: "Transparent, upfront fee", clinic: true, us: true },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 size-[28rem] rounded-full bg-highlight/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              About us
            </span>
            <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
              Care that comes to you
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              {site.mission}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about-story.jpg"
                alt="Doctor providing home care"
                width={700}
                height={800}
                className="h-[340px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="text-3xl font-bold sm:text-4xl">Our story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {site.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <BookButton size="lg" className="mt-6">
              Book a home visit
            </BookButton>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Our journey</h2>
            <p className="mt-3 text-muted-foreground">
              How {site.name} came to be.
            </p>
          </Reveal>

        <div className="relative mt-12">
            <TimelineLine />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <Reveal key={item.title} delay={index * 120}>
                  <div
                    className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                      index % 2 === 1 ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="animate-pop-in absolute left-4 top-1 flex size-6 -translate-x-1/2 items-center justify-center sm:left-1/2">
                      <span className="absolute size-6 animate-ping rounded-full bg-primary/30" />
                      <span className="relative size-3 rounded-full bg-primary ring-4 ring-background" />
                    </div>

                    <div className="pl-10 sm:w-1/2 sm:px-10">
                      <div className="rounded-2xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                        <p className="font-heading font-bold">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">What we stand for</h2>
          <p className="mt-3 text-muted-foreground">
            The principles behind every home visit we make.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 100} className="h-full">
                <div className="h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-teal-600 to-cyan-600 text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              A typical clinic visit vs. us
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Here&apos;s what changes when the doctor comes to you instead.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 overflow-hidden rounded-2xl border bg-card">
              <div className="grid grid-cols-3 border-b bg-secondary/60 text-sm font-semibold">
                <div className="p-4">&nbsp;</div>
                <div className="p-4 text-center">Typical clinic</div>
                <div className="p-4 text-center text-primary">
                  {site.name}
                </div>
              </div>
              {comparison.map((row) => (
                <div
                  key={row.point}
                  className="grid grid-cols-3 items-center border-b text-sm last:border-b-0"
                >
                  <div className="p-4 text-muted-foreground">{row.point}</div>
                  <div className="flex justify-center p-4">
                    {row.clinic ? (
                      <Check className="size-5 text-primary" />
                    ) : (
                      <X className="size-5 text-muted-foreground/50" />
                    )}
                  </div>
                  <div className="flex justify-center p-4">
                    {row.us ? (
                      <Check className="size-5 text-primary" />
                    ) : (
                      <X className="size-5 text-muted-foreground/50" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Meet the people behind {site.name}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Our doctors and founders are dedicated to bringing you quality
            care at home.
          </p>
          <Link
            href="/#team"
            className="mt-6 inline-block font-medium text-primary hover:underline"
          >
            View our doctors →
          </Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 px-6 py-14 text-center text-white sm:px-12">
            <div className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-highlight/30 blur-3xl" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
                Ready to book a home visit?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
                Fee ₹{site.fee} per visit, across {site.location}.
              </p>
              <div className="mt-8">
                <BookButton
                  size="lg"
                  className="bg-highlight text-highlight-foreground hover:-translate-y-0.5 hover:bg-highlight/90"
                >
                  Book Home Visit
                </BookButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}