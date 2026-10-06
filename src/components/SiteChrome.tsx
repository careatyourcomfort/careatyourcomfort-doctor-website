"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingDialogProvider } from "@/components/booking/BookingDialog";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <BookingDialogProvider>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </BookingDialogProvider>
  );
}