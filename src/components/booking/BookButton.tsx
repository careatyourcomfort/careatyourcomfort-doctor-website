"use client";

import type { ComponentProps, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { useBookingDialog } from "@/components/booking/BookingDialog";

type BookButtonProps = ComponentProps<typeof Button>;

export function BookButton({ children, onClick, ...props }: BookButtonProps) {
  const { open } = useBookingDialog();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    onClick?.(e);
    if (e.defaultPrevented) {
      setTimeout(open, 300);
    } else {
      open();
    }
  }

  return (
    <Button type="button" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}