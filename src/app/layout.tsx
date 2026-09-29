import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingDialogProvider } from "@/components/booking/BookingDialog";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Home Visit Doctor in ${site.location}`,
    template: `%s | ${site.name}`,
  },
  description: `Book a doctor home visit in ${site.location}. Physician, General Surgery and General Medicine. Consultation fee ₹${site.fee}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
                 <body className="min-h-full flex flex-col">
        <BookingDialogProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </BookingDialogProvider>
      </body>
    </html>
  );
}