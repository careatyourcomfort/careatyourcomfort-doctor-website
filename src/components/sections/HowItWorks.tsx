import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Fill in the form",
    text: "Enter your name, mobile number, address, the service you need, and your preferred date and time.",
  },
  {
    title: "Send it on WhatsApp",
    text: "WhatsApp opens with your details already written. Just press Send.",
  },
  {
    title: "The doctor confirms",
    text: "The doctor will confirm your visit on WhatsApp or by phone call.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold">How booking works</h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps, and it takes less than a minute.
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
                  <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
