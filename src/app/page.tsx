import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Founders } from "@/components/sections/Founders";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Stats />
      <AboutDoctor />
      <Founders />
      <Services />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <BookingCTA />
    </main>
  );
}