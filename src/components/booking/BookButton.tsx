"use client";

import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { useBookingDialog } from "@/components/booking/BookingDialog";

type BookButtonProps = ComponentProps<typeof Button>;

export function BookButton({ children, ...props }: BookButtonProps) {
  const { open } = useBookingDialog();
  return (
    <Button type="button" onClick={open} {...props}>
      {children}
    </Button>
  );
}

