import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { BookButton } from "@/components/booking/BookButton";
import { Button } from "@/components/ui/button";
import { whatsappChatUrl } from "@/sanity/lib/whatsapp-link";

type Props = {
  params: Promise<{ slug: string }>;
};

const steps = [
  {
    title: "Book your visit",
    text: "Fill in the booking form and send it on WhatsApp. It takes less than a minute.",
  },
  {
    title: "Doctor confirms",
    text: "The doctor confirms your appointment time on WhatsApp or by phone call.",
  },
  {
    title: "Home visit",
    text: "The doctor arrives at your chosen time and carries out the consultation.",
  },
];

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.name,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-teal-900/90 via-teal-800/70 to-teal-700/40" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <Sparkles className="size-4" />
              Home visit service
            </span>
            <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
              {service.name}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              {service.short}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <BookButton
                size="lg"
                className="bg-highlight text-highlight-foreground hover:bg-highlight/90"
              >
                Book {service.name}
              </BookButton>
              <Button asChild variant="outline" size="lg" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <a
                  href={whatsappChatUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Overview</h2>
            <p className="mt-4 text-muted-foreground">{service.description}</p>

            <div className="mt-8 rounded-2xl border bg-card p-6">
              <p className="font-heading font-bold">What&apos;s included</p>
              <ul className="mt-4 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={service.sideImage}
                alt={`${service.name} home visit`}
                width={700}
                height={800}
                className="h-[340px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Who this is for
            </h2>
            <p className="mt-3 text-muted-foreground">
              Book a {service.name.toLowerCase()} home visit if you&apos;re
              dealing with any of the following.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.forWhom.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-600 to-cyan-600 text-white">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps, from booking to your consultation.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 150} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Fee + Book CTA */}
      <section className="px-4 pb-16">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 px-6 py-14 text-center text-white sm:px-12">
            <div className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-highlight/30 blur-3xl" />

            <div className="relative">
              <p className="text-white/80">Consultation fee</p>
              <p className="mt-1 text-4xl font-bold">₹{site.fee}</p>
              <p className="mx-auto mt-4 max-w-md text-white/85">
                Book your {service.name.toLowerCase()} home visit in{" "}
                {site.location} today.
              </p>
              <div className="mt-6">
                <BookButton
                  size="lg"
                  className="bg-highlight text-highlight-foreground hover:-translate-y-0.5 hover:bg-highlight/90"
                >
                  Book {service.name}
                </BookButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Other services */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-bold">Other services</h2>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {otherServices.map((s, index) => (
            <Reveal key={s.slug} delay={index * 100}>
              <Link
                href={`/services/${s.slug}`}
                className="block rounded-xl border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <p className="font-bold">{s.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {s.short}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}