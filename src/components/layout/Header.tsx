"use client";

import Link from "next/link";
import { useState } from "react";
import { site, nav } from "@/data/site";
import { MobileNav } from "@/components/layout/MobileNav";
import { BookButton } from "@/components/booking/BookButton";
import Image from "next/image";
import { ChevronDown, HeartPulse, Pill, Syringe, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const icons: Record<string, LucideIcon> = {
  physician: HeartPulse,
  "general-surgery": Syringe,
  "general-medicine": Pill,
};

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 lg:px-6">
        <Link href="/" className="flex items-center gap-0">
          <Image
            src="/logo.png"
            alt={site.name}
            loading="eager"
            width={52}
            height={52}
            className="size-20 rounded-lg object-contain"
          />
          <span className="font-heading text-xl font-bold bg-linear-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <DropdownMenu
                key={item.href}
                open={servicesOpen}
                onOpenChange={setServicesOpen}
              >
                <DropdownMenuTrigger
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1 text-base font-semibold text-muted-foreground transition-colors outline-none hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => {
                    const Icon = icons[s.slug] ?? HeartPulse;
                    return (
                      <DropdownMenuItem key={s.slug} asChild>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2"
                        >
                          <Icon className="size-4 text-primary" />
                          {s.name}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <BookButton className="hidden sm:inline-flex">
            Book Home Visit
          </BookButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
