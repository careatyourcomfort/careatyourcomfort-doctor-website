"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BookingForm } from "@/components/booking/BookingForm";

type BookingDialogValue = {
  open: () => void;
  close: () => void;
};

const BookingDialogContext = createContext<BookingDialogValue | null>(null);

export function BookingDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingDialogContext.Provider
      value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="flex max-h-[90vh] flex-col gap-0 p-0 sm:max-w-lg">
          <DialogHeader className="border-b px-5 py-4 sm:px-6 sm:py-5">
            <DialogTitle className="text-lg sm:text-xl">
              Book a home visit
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              Fill in your details below. WhatsApp will open with everything
              pre-filled.
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            <BookingForm />
          </div>
        </DialogContent>
      </Dialog>
    </BookingDialogContext.Provider>
  );
}

export function useBookingDialog() {
  const ctx = useContext(BookingDialogContext);
  if (!ctx) {
    throw new Error("useBookingDialog must be used inside BookingDialogProvider");
  }
  return ctx;
}