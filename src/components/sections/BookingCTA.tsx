import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { BookButton } from "@/components/booking/BookButton";

export function BookingCTA() {
  return (
    <section className="px-4 py-16">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 px-6 py-14 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-highlight/30 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Need a doctor at home?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Book a home visit in {site.location} for ₹{site.fee}. It takes
              less than a minute.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <BookButton
                size="lg"
                className="bg-highlight text-highlight-foreground transition-transform hover:-translate-y-0.5 hover:bg-highlight/90"
              >
                Book Home Visit
              </BookButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}