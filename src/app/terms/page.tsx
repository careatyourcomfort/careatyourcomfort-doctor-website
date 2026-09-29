import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions for using ${site.name}'s website and home visit service.`,
};

const lastUpdated = "29 September 2026";

const sections = [
  {
    title: "About this website",
    paragraphs: [
      `This website is operated by ${site.name}, a doctor home visit service in ${site.location}. By using this website or booking a home visit through it, you agree to these terms.`,
    ],
  },
  {
    title: "Not a medical emergency service",
    paragraphs: [
      "This service is for planned home visits, not medical emergencies. If you or someone with you is having a medical emergency, call 112 or go to the nearest hospital immediately. Do not rely on this website or a WhatsApp message in an emergency.",
    ],
  },
  {
    title: "How a booking works",
    paragraphs: [
      "When you submit the booking form, WhatsApp opens with your details already filled in. Your booking request is sent to us only when you press Send.",
      "Sending the message does not confirm your visit. A booking is confirmed only when the doctor or our team replies on WhatsApp or by phone to confirm the time.",
    ],
  },
  {
    title: "Fee and payment",
    paragraphs: [
      `The consultation fee is ₹${site.fee} per visit, payable to the doctor at the time of the visit unless otherwise agreed. The fee may change over time, and the fee shown on the website at the time you book will apply.`,
    ],
  },
  {
    title: "Rescheduling and cancellation",
    paragraphs: [
      "If you need to change or cancel a visit, please message us on WhatsApp as early as possible so we can adjust the schedule.",
    ],
  },
  {
    title: "Service area",
    paragraphs: [
      `We currently offer home visits across ${site.location}. If your address is outside our usual service area, please check with us on WhatsApp before booking.`,
    ],
  },
  {
    title: "Website content is general information",
    paragraphs: [
      "The blog articles and other content on this website are for general awareness only. They are not medical advice and are not a substitute for an examination by a doctor. Always consult a doctor about your specific symptoms or condition.",
    ],
  },
  {
    title: "Your responsibilities",
    paragraphs: ["When booking a visit, please:"],
    bullets: [
      "Give accurate contact and address details",
      "Describe your symptoms or reason for the visit honestly",
      "Be present, or have someone present, at the address at the agreed time",
      "Tell us in advance if a family member, not you, will be examined",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "We take reasonable care to provide a safe and professional service. To the extent permitted by law, we are not responsible for delays or issues caused by incorrect information provided in the booking form, or by circumstances beyond our reasonable control.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The date at the top of the page shows when they were last changed. Continued use of the website after a change means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 size-[28rem] rounded-full bg-highlight/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
          <Reveal>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-white/85">Last updated: {lastUpdated}</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:py-16">
        <Reveal>
          <p className="border-l-4 border-primary pl-4 text-lg text-muted-foreground">
            Please read these terms carefully before booking a home visit or
            using this website.
          </p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.title}>
              <section>
                <h2 className="text-xl font-bold sm:text-2xl">
                  {index + 1}. {section.title}
                </h2>

                {section.paragraphs.map((text) => (
                  <p key={text} className="mt-3 text-muted-foreground">
                    {text}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-6 text-muted-foreground">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section className="rounded-2xl border bg-secondary/40 p-6">
              <h2 className="text-xl font-bold sm:text-2xl">Contact us</h2>
              <p className="mt-3 text-muted-foreground">
                If you have any questions about these terms, message us on
                WhatsApp or call us:
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {site.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:+91${phone}`}
                      className="font-medium hover:text-primary"
                    >
                      +91 {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                You can also read our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </Reveal>
        </div>
      </article>
    </main>
  );
}