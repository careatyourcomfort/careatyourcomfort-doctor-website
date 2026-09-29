import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

const lastUpdated = "29 September 2026";

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "When you book a home visit or send us a message through this website, we collect the details you enter in the form:",
    ],
    bullets: [
      "Your name and mobile number",
      "Your home address, so the doctor can reach you",
      "The service you need and the reason for the visit, which may include health information",
      "Your preferred date and time",
      "Any message you write in our contact form",
    ],
  },
  {
    title: "How we use your information",
    paragraphs: ["We use your information only to:"],
    bullets: [
      "Arrange, confirm and carry out your home visit",
      "Contact you by WhatsApp or phone about your booking or enquiry",
      "Keep a record of bookings so we can follow up on your care",
      "Improve how our service works",
    ],
  },
  {
    title: "How your details reach us",
    paragraphs: [
      "When you submit a form, WhatsApp opens with your details already written in a message. The details are shared with us only when you press Send in WhatsApp. WhatsApp is a service provided by Meta and has its own privacy policy.",
      "We may also save the booking details in a secure online spreadsheet, so that we do not lose a booking if a message is not sent.",
    ],
  },
  {
    title: "Who we share it with",
    paragraphs: [
      "We do not sell your personal information. We share it only with the doctors and staff who need it to provide your care, and with service providers that help us run the website and bookings (for example, website hosting and messaging). We may also share information when the law requires us to.",
    ],
  },
  {
    title: "Health information",
    paragraphs: [
      "The reason you give for a visit may describe your health. We treat it as sensitive, use it only to prepare for your consultation, and do not use it for advertising.",
    ],
  },
  {
    title: "How long we keep it",
    paragraphs: [
      "We keep booking details only as long as needed to provide your care, keep proper records and meet legal obligations. After that, we delete them or make them anonymous.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "This website does not currently use advertising or tracking cookies. If that changes, we will update this policy and tell you.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: ["You can ask us to:"],
    bullets: [
      "Tell you what personal information we hold about you",
      "Correct information that is wrong or incomplete",
      "Delete your information, where we are allowed to",
      "Stop contacting you",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "If a visit is for a child, please have a parent or guardian fill in the form and share the details.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. The date at the top of the page shows when it was last changed.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 size-[28rem] rounded-full bg-highlight/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
          <Reveal>
            <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-white/85">Last updated: {lastUpdated}</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:py-16">
        <Reveal>
          <p className="border-l-4 border-primary pl-4 text-lg text-muted-foreground">
            {site.name} respects your privacy. This policy explains what
            personal information we collect through this website, how we use
            it, and the choices you have.
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
                For any privacy question or request, message us on WhatsApp or
                call us:
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
                  href="/terms"
                  className="font-medium text-primary hover:underline"
                >
                  Terms &amp; Conditions
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