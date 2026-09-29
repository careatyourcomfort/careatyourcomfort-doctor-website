import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the home visit booking work?",
    answer:
      "Fill in the booking form with your details, preferred service, and time. When you submit, WhatsApp opens with your details already filled in. Just press Send, and the doctor will confirm your visit.",
  },
  {
    question: "Which areas do you cover?",
    answer: `We currently cover ${site.location}. If you're unsure whether your area is covered, send a message on WhatsApp before booking and we'll confirm.`,
  },
  {
    question: "What is the consultation fee?",
    answer: `The consultation fee is ₹${site.fee} per home visit. This is discussed and confirmed before the visit, with no hidden charges.`,
  },
  {
    question: "How soon can the doctor visit?",
    answer:
      "This depends on the doctor's availability and your chosen time slot. Once you book, the doctor will confirm the exact visit time on WhatsApp or by phone call.",
  },
  {
    question: "Is my booking confirmed once I send the WhatsApp message?",
    answer:
      "Not automatically. Sending the message starts the booking process. The doctor will reply on WhatsApp or call you to confirm the final time and availability.",
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer:
      "Just message the doctor on WhatsApp with your booking details, and the visit can be rescheduled or cancelled based on availability.",
  },
];

export function FAQ() {
  return (
    <section className="border-y bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Message us on
            WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
      </div>
    </section>
  );
}