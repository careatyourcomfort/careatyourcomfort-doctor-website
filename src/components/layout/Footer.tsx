import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { site, nav } from "@/data/site";
import { services } from "@/data/services";
import { whatsappChatUrl } from "@/sanity/lib/whatsapp-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-teal-900 via-teal-800 to-cyan-900 text-white">
      <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 size-80 rounded-full bg-highlight/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-heading text-lg font-bold">{site.name}</p>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Doctor home visits in {site.location}. Quality care, at your
            doorstep, at a transparent fee of ₹{site.fee}.
          </p>
          <a
            href={whatsappChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-highlight px-4 py-2 text-sm font-semibold text-highlight-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <p className="font-heading font-semibold text-white">Quick links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="size-4 text-highlight" />
              </span>
              <span className="text-white/70">{site.location}</span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone className="size-4 text-highlight" />
                </span>
                <a
                  href={`tel:+91${phone}`}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  +91 {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-6 text-xs text-white/60">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}