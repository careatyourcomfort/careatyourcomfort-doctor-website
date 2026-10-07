import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/booking/ContactForm";
import { BookButton } from "@/components/booking/BookButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsappChatUrl } from "@/sanity/lib/whatsapp-link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} for doctor home visits in ${site.location}.`,
};

const contactFaqs = [
  {
    question: "What's the fastest way to reach you?",
    answer:
      "WhatsApp is the fastest way to reach us. Most messages get a reply within minutes.",
  },
  {
    question: "Can I book a visit through this contact form?",
    answer:
      "This form is for general questions. To book a home visit, use the \"Book Home Visit\" button anywhere on the site, which opens a dedicated booking form.",
  },
  {
    question: "How quickly will I get a response?",
    answer:
      "We aim to respond to WhatsApp messages and calls as quickly as possible. For urgent matters, WhatsApp is the fastest option.",
  },
];

const trustPoints = [
  {
    icon: Clock,
    title: "Fast response",
    text: "Most messages get a reply within minutes during the day.",
  },
  {
    icon: ShieldCheck,
    title: "No spam, ever",
    text: "Your number is only used to confirm your query or visit.",
  },
  {
    icon: CheckCircle2,
    title: "Real conversation",
    text: "A member of our team personally replies to every message.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 size-[28rem] rounded-full bg-highlight/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              Contact us
            </span>
            <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
              We&apos;re here to help
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              Have a question, or ready to book? Reach out on WhatsApp, call
              us, or send a message below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact method cards */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <a
              href={whatsappChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <MessageCircle className="size-6" />
              </span>
              <h3 className="mt-5 font-bold">WhatsApp</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fastest way to reach us
              </p>
            </a>
          </Reveal>

          {site.phones.map((phone, index) => (
            <Reveal key={phone} delay={(index + 1) * 100}>
              <a
                href={`tel:+91${phone}`}
                className="group block h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="size-6" />
                </span>
                <h3 className="mt-5 font-bold">+91 {phone}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Call us directly
                </p>
              </a>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="h-full rounded-2xl border bg-card p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="size-6" />
              </span>
              <h3 className="mt-5 font-bold">{site.location}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Service area
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + trust sidebar */}
      <section className="border-y bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-3xl font-bold">Send us a message</h2>
            <p className="mt-3 text-muted-foreground">
              Fill in the form and we&apos;ll get back to you on WhatsApp.
            </p>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <Reveal delay={100} className="h-full">
                <div className="h-full rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-2">
              <Reveal delay={150} className="h-full">
                <div className="h-full overflow-hidden rounded-2xl bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white shadow-lg">
                  <div className="relative flex h-full flex-col p-6 sm:p-8">
                    <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
                    <h3 className="text-lg font-bold">Why reach out to us</h3>

                    <ul className="relative mt-5 space-y-5">
                      {trustPoints.map((point) => {
                        const Icon = point.icon;
                        return (
                          <li key={point.title} className="flex items-start gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                              <Icon className="size-4" />
                            </span>
                            <div>
                              <p className="font-semibold">{point.title}</p>
                              <p className="mt-0.5 text-sm text-white/80">
                                {point.text}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <a
                      href={whatsappChatUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-highlight px-4 py-3 text-sm font-semibold text-highlight-foreground transition-colors hover:bg-highlight/90 lg:mt-auto"
                    >
                      <MessageCircle className="size-4" />
                      Chat on WhatsApp instead
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold">Common questions</h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {contactFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t bg-secondary/40 px-4 py-16">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 px-6 py-14 text-center text-white sm:px-12">
            <div className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-highlight/30 blur-3xl" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
                Prefer to just book?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
                Skip the message and book your home visit directly.
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