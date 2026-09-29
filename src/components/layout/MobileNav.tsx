"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  HeartPulse,
  Menu,
  Pill,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { nav } from "@/data/site";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookButton } from "@/components/booking/BookButton";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  physician: HeartPulse,
  "general-surgery": Syringe,
  "general-medicine": Pill,
};

export function MobileNav() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-4">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="border-b">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-3 text-base font-medium"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div className="flex flex-col gap-1 pb-3 pl-4">
                    {services.map((s) => {
                      const Icon = icons[s.slug] ?? HeartPulse;
                      return (
                        <SheetClose asChild key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            <Icon className="size-4 text-primary" />
                            {s.name}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className="border-b py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              </SheetClose>
            )
          )}
        </nav>

        <div className="p-4">
          <SheetClose asChild>
            <BookButton className="w-full">Book Home Visit</BookButton>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}