import type { Metadata } from "next";
import { MapPin, IndianRupee } from "lucide-react";
import { site } from "@/data/site";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book Home Visit",
  description: `Book a doctor home visit in ${site.location}. Fee ₹${site.fee}.`,
};

export default function BookPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14">
      <div className="text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Book a home visit</h1>
        <p className="mt-3 text-muted-foreground">
          Fill in the form below. It only takes a minute, and your details go
          straight to the doctor on WhatsApp.
        </p>

        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-4 rounded-full border bg-secondary/40 px-5 py-2 text-sm">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4 text-primary" />
            {site.location}
          </span>
          <span className="flex items-center gap-1.5">
            <IndianRupee className="size-4 text-primary" />₹{site.fee} per visit
          </span>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
        <BookingForm />
      </div>
    </main>
  );
}