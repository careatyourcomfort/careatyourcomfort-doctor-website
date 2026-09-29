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
};

const BookingDialogContext = createContext<BookingDialogValue | null>(null);

export function BookingDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingDialogContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Book a home visit</DialogTitle>
            <DialogDescription>
              Fill in your details below. WhatsApp will open with everything
              pre-filled.
            </DialogDescription>
          </DialogHeader>
          <BookingForm />
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