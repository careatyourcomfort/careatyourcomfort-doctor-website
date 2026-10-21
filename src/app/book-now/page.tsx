import type { Metadata } from "next";
import Image from "next/image";
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    ClipboardList,
    Clock,
    FileText,
    IndianRupee,
    MapPin,
    MessageCircle,
    Phone,
    Pill,
    ShieldCheck,
    Stethoscope,
} from "lucide-react";
import { site } from "@/data/site";
import { whatsappChatUrl } from "@/sanity/lib/whatsapp-link";
import { Reveal } from "@/components/Reveal";
import { LandingBookingForm } from "@/components/booking/LandingBookingForm";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BackToTop } from "@/components/layout/BackToTop";

export const metadata: Metadata = {
    title: `Book a Home Visit | ${site.name}`,
    description: `Doctor home visit in ${site.location}. Fee ₹${site.fee}. Book now.`,
    alternates: { canonical: site.url },
};

const callHref = `tel:+91${site.phones[0]}`;

const dotPattern = {
    backgroundImage:
        "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
    backgroundSize: "22px 22px",
};

const included = [
    { icon: Stethoscope, title: "Full consultation", text: "Complete doctor consultation at your home." },
    { icon: Activity, title: "Health check", text: "Physical examination and health check." },
    { icon: FileText, title: "Written prescription", text: "A proper prescription after the visit." },
    { icon: Pill, title: "Medicine guidance", text: "Guidance on medicines and follow-up care." },
];

const steps = [
    {
        icon: ClipboardList,
        title: "Fill the form",
        text: "Name, mobile, address, issue and preferred time.",
    },
    {
        icon: MessageCircle,
        title: "Send on WhatsApp",
        text: "WhatsApp opens with your details ready. Just press Send.",
    },
    {
        icon: Stethoscope,
        title: "Doctor arrives",
        text: "Examination, prescription and advice at your home.",
    },
];

const whyPoints = [
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
        icon: IndianRupee,
        title: "Transparent fee",
        text: "One flat consultation fee, told to you upfront, with no hidden charges.",
    },
];

const faqs = [
    {
        q: `Is ₹${site.fee} the complete fee?`,
        a: "Yes. It covers the full consultation, examination and prescription. Medicines, if purchased separately, are not included.",
    },
    {
        q: "How soon can the doctor come?",
        a: "In most cases within a few hours, depending on your location and when you reach out.",
    },
    {
        q: "Is my booking confirmed once I send the WhatsApp message?",
        a: "Your request reaches us instantly. We confirm the visit time with you on WhatsApp or by call.",
    },
    {
        q: "Which areas do you cover?",
        a: `We currently serve ${site.location}. If you're unsure your area is covered, call us to check before booking.`,
    },
    {
        q: "What if this is a medical emergency?",
        a: "This service is for planned home visits only. In a life-threatening emergency, call an ambulance or go to the nearest hospital immediately, rather than booking through this page.",
    },
];

function SectionHeading({
    eyebrow,
    title,
    text,
}: {
    eyebrow: string;
    title: string;
    text?: string;
}) {
    return (
        <Reveal className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
            {text && <p className="mt-3 text-muted-foreground">{text}</p>}
        </Reveal>
    );
}

export default function BookNowPage() {
    return (
        <main className="bg-background pb-20 sm:pb-0">
            {/* Top bar: logo only, no link, no navigation */}
            <div className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:h-20 md:px-3 md:py-0 lg:px-6">
                    <div className="flex min-w-0 items-center gap-2.5 md:gap-0">
                        <Image
                            src="/logo.png"
                            alt={site.name}
                            loading="eager"
                            width={52}
                            height={52}
                            className="h-11 w-auto shrink-0 object-contain md:size-20 md:rounded-lg"
                        />
                        <span className="bg-linear-to-r from-teal-700 to-cyan-600 bg-clip-text font-heading text-lg font-bold leading-tight text-transparent md:text-xl">
                            {site.name}
                        </span>
                    </div>
                    <a
                        href={callHref}
                        className="flex shrink-0 items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-5 sm:py-2.5 sm:text-base"
                    >
                        <Phone className="size-4 sm:size-5" />
                        <span className="hidden sm:inline">+91 {site.phones[0]}</span>
                        <span className="sm:hidden">Call</span>
                    </a>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-br from-teal-800 via-teal-600 to-cyan-600 text-white">
                <div className="absolute inset-0" style={dotPattern} />
                <div className="pointer-events-none absolute -left-24 -top-24 size-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 -right-20 size-96 animate-pulse rounded-full bg-cyan-300/20 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-4 pb-28 pt-12 text-center sm:pb-32 sm:pt-16">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-300 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-green-400" />
                            </span>
                            Available 24x7 · MBBS, MD / MS qualified doctors
                        </span>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
                            Doctor Home Visit in{" "}
                            <span className="text-highlight">{site.location}</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85 sm:text-xl">
                            No travel, no waiting room. A qualified doctor comes to you.
                        </p>

                        <div className="mx-auto mt-7 flex max-w-lg flex-wrap justify-center gap-2">
                            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
                                <IndianRupee className="size-3.5" />₹{site.fee} flat fee
                            </span>
                            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
                                <Clock className="size-3.5" />
                                Available 24x7
                            </span>
                            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
                                <MapPin className="size-3.5" />
                                {site.location}
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="mt-9 flex flex-wrap justify-center gap-3">
                            <a
                                href="#book-form"
                                className="group flex items-center gap-2 rounded-xl bg-highlight px-8 py-3.5 text-base font-semibold text-highlight-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                Book Home Visit
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href={whatsappChatUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
                            >
                                <MessageCircle className="size-5" />
                                Talk to Us
                            </a>
                            <a
                                href={callHref}
                                className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
                            >
                                <Phone className="size-5" />
                                Call Now
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* What's included: card overlaps the hero */}
            <section className="relative z-10 -mt-14 px-4">
                <Reveal className="mx-auto max-w-5xl">
                    <div className="grid overflow-hidden rounded-3xl border bg-card shadow-2xl shadow-primary/10 lg:grid-cols-[2fr_3fr]">
                        <div className="relative overflow-hidden bg-linear-to-br from-teal-700 to-cyan-600 p-8 text-white">
                            <div className="absolute inset-0 opacity-60" style={dotPattern} />
                            <div className="relative">
                                <p className="text-sm font-medium text-white/80">
                                    Consultation fee
                                </p>
                                <p className="mt-1 font-heading text-5xl font-bold sm:text-6xl">
                                    ₹{site.fee}
                                </p>
                                <p className="mt-3 text-sm text-white/85">
                                    One flat fee, told upfront. No hidden charges.
                                </p>
                                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                                    <CheckCircle2 className="size-3.5" />
                                    Everything below is included
                                </span>
                            </div>
                        </div>

                        <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
                            {included.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="flex items-start gap-3">
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="size-5" />
                                        </span>
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="mt-0.5 text-sm text-muted-foreground">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Why choose us */}
            <section className="mx-auto max-w-6xl px-4 pt-16 sm:pt-20">
                <SectionHeading
                    eyebrow="Why choose us"
                    title="Care that comes to you"
                    text="Without compromising on quality."
                />

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {whyPoints.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <Reveal key={p.title} delay={i * 100} className="h-full">
                                <div className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                                    <span className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-teal-600 to-cyan-600 text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="size-6" />
                                    </span>
                                    <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                                    <p className="mt-1.5 text-sm text-muted-foreground">
                                        {p.text}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            <div className="mt-16">
                <Stats />
            </div>

            <div className="bg-secondary/40">
                <AboutDoctor />
            </div>

            <Testimonials />

            {/* How booking works */}
            <section className="border-y bg-secondary/40">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
                    <SectionHeading
                        eyebrow="How it works"
                        title="How booking works"
                        text="Three simple steps, and it takes less than a minute."
                    />

                    <div className="relative mt-12 grid gap-6 md:grid-cols-3">
                        <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-primary/25 md:block" />
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <Reveal key={step.title} delay={i * 120} className="h-full">
                                    <div className="group relative h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                                        <span className="absolute right-5 top-3 font-heading text-6xl font-bold text-primary/10">
                                            {i + 1}
                                        </span>
                                        <span className="relative flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-600 to-cyan-600 text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                                            <Icon className="size-7" />
                                        </span>
                                        <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                                        <p className="mt-1.5 text-sm text-muted-foreground">
                                            {step.text}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Booking form */}
            <section
                id="book-form"
                className="relative scroll-mt-16 overflow-hidden bg-linear-to-b from-background via-secondary/50 to-background"
            >
                <div className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -right-32 bottom-10 size-96 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative mx-auto grid max-w-6xl items-start gap-6 px-4 py-12 sm:py-20 lg:grid-cols-2 lg:gap-14">
                    {/* Left side */}
                    <div>
                        {/* Heading: desktop only */}
                        <div className="hidden lg:block">
                            <SectionHeading
                                eyebrow="Book now"
                                title="Book a doctor at your doorstep"
                                text="Fill the form and send it on WhatsApp. We'll confirm your visit right there."
                            />
                        </div>

                        {/* Keep ready checklist: all devices */}
                        <Reveal delay={100}>
                            <div className="rounded-2xl border bg-card/80 p-5 backdrop-blur sm:p-6 lg:mt-8">
                                <div className="flex items-center gap-2">
                                    <ClipboardList className="size-5 text-primary" />
                                    <p className="font-semibold">
                                        Keep these ready for a faster visit
                                    </p>
                                </div>
                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Full address with house number, area and a nearby landmark",
                                        "Main symptoms or problem you're facing",
                                        "Your preferred date and time for the visit",
                                        "Keep your phone reachable so we can confirm the visit",
                                        "Old prescriptions or reports, if you have any",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm">
                                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        {/* Talk directly: desktop only */}
                        <Reveal delay={200} className="hidden lg:block">
                            <div className="mt-5 overflow-hidden rounded-2xl bg-linear-to-br from-teal-700 to-cyan-600 p-6 text-white">
                                <p className="text-sm text-white/80">
                                    Don&apos;t want to fill a form?
                                </p>
                                <p className="mt-0.5 font-heading text-2xl font-bold">
                                    +91 {site.phones[0]}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <a
                                        href={callHref}
                                        className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                                    >
                                        <Phone className="size-4" />
                                        Call now
                                    </a>
                                    <a
                                        href={whatsappChatUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/20"
                                    >
                                        <MessageCircle className="size-4" />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form card */}
                    <Reveal delay={150}>
                        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl border bg-card shadow-2xl shadow-primary/10 ring-1 ring-primary/10">
                            <div className="h-1.5 bg-linear-to-r from-teal-600 via-cyan-500 to-teal-600" />
                            <div className="p-5 sm:p-7">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h2 className="font-heading text-xl font-bold">
                                            Book your home visit
                                        </h2>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Fill in the details and send on WhatsApp.
                                        </p>
                                    </div>
                                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                        ₹{site.fee}
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <LandingBookingForm />
                                </div>
                                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <AlertTriangle className="size-3.5 shrink-0 text-amber-600" />
                                    Not for emergencies — call an ambulance or visit the nearest
                                    hospital if this is urgent.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-t bg-secondary/40">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                    <SectionHeading
                        eyebrow="FAQ"
                        title="Questions people ask"
                        text="Can't find what you're looking for? Message us on WhatsApp."
                    />
                    <Reveal delay={100}>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((f, i) => (
                                <AccordionItem
                                    key={f.q}
                                    value={`item-${i}`}
                                    className="mb-3 rounded-xl border bg-card px-5 last:border-b"
                                >
                                    <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">
                                        {f.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-sm text-muted-foreground">
                                        {f.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Reveal>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-linear-to-br from-teal-800 via-teal-600 to-cyan-600 px-4 py-16 text-center text-white">
                <div className="absolute inset-0" style={dotPattern} />
                <div className="pointer-events-none absolute -left-20 -top-20 size-72 animate-pulse rounded-full bg-white/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -right-16 size-80 animate-pulse rounded-full bg-cyan-300/20 blur-3xl" />

                <Reveal className="relative mx-auto max-w-2xl">
                    <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        <Stethoscope className="size-8 text-highlight" />
                    </span>
                    <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                        Need a doctor at home?
                    </h2>
                    <p className="mt-2 text-white/85">
                        Flat ₹{site.fee} · {site.location} · Available 24x7. It takes under
                        a minute.
                    </p>
                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <a
                            href="#book-form"
                            className="group flex items-center gap-2 rounded-xl bg-highlight px-8 py-3.5 text-base font-semibold text-highlight-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            Book Home Visit
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href={whatsappChatUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
                        >
                            <MessageCircle className="size-5" />
                            Talk to Us
                        </a>
                    </div>
                </Reveal>
            </section>

            {/* Legal footer (ad platforms expect these links) */}
            <footer className="border-t bg-card px-4 py-5 text-center text-xs text-muted-foreground">
                <p>
                    <a href="/privacy-policy" className="hover:text-primary">
                        Privacy Policy
                    </a>{" "}
                    ·{" "}
                    <a href="/terms" className="hover:text-primary">
                        Terms &amp; Conditions
                    </a>
                </p>
                <p className="mt-1.5">
                    &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
                </p>
            </footer>

            {/* Sticky mobile bottom bar */}
            <BackToTop />
            <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
                <div
                    className="grid grid-cols-2"
                    style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
                >
                    <a
                        href={callHref}
                        className="flex items-center justify-center gap-1.5 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
                    >
                        <Phone className="size-4" />
                        Call
                    </a>
                    <a
                        href={whatsappChatUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-green-600 py-3.5 text-sm font-semibold text-white"
                    >
                        <MessageCircle className="size-4" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </main>
    );
}
