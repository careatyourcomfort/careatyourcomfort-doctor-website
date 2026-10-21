"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingDialogProvider } from "@/components/booking/BookingDialog";
import { FloatingContactButtons } from "./layout/FloatingContactButtons";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = ["/studio", "/book-now"].some((p) =>
  pathname?.startsWith(p)
);

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <BookingDialogProvider>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <FloatingContactButtons/>
    </BookingDialogProvider>
  );
}
