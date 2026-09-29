import Image from "next/image";
import { IndianRupee, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/booking/BookButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 size-[28rem] rounded-full bg-highlight/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 lg:grid-cols-2 lg:py-18">
        <div>
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <span className="size-2 rounded-full bg-highlight" />
            Home visits in {site.location}
          </span>

          <h1 className="animate-fade-up mt-5 text-4xl font-bold [animation-delay:100ms] sm:text-6xl">
            {site.tagline}
          </h1>

          <p className="animate-fade-up mt-5 max-w-xl text-lg text-white/85 [animation-delay:200ms]">
            Book a doctor&apos;s home visit in {site.location}. Fill in a short
            form and your booking goes straight to the doctor on WhatsApp.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap gap-3 [animation-delay:300ms]">
                        <BookButton
              size="lg"
              className="bg-highlight text-highlight-foreground hover:bg-highlight/90"
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

        <div className="animate-fade-up relative [animation-delay:400ms]">
          <div className="animate-float relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/hero-doctor.jpg"
              alt="Doctor visiting a patient at home"
              width={700}
              height={800}
              priority
              className="h-[340px] w-full object-cover sm:h-[400px]"
            />

            <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-3 sm:inset-x-6 sm:bottom-6">
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Service area</p>
                  <p className="text-sm font-bold text-card-foreground">
                    {site.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <span className="flex size-9 items-center justify-center rounded-full bg-highlight/30 text-highlight-foreground">
                  <IndianRupee className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Consultation fee</p>
                  <p className="text-sm font-bold text-card-foreground">
                    ₹{site.fee}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}