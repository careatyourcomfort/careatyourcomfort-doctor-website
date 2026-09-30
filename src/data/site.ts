export const site = {
  name: "Care at Your Comfort",
  doctorName: "Dr. Your Name",
  tagline: "Doctors at Your Doorstep in Delhi NCR",
    mission:
    "We started this service to make quality healthcare accessible without the stress of travelling while unwell. Every visit is built around comfort, punctuality and honest, unhurried care.",
      story: [
    "It started with a simple frustration: watching family members struggle to get to a clinic while running a fever, or sitting for hours in a waiting room after a long day. Getting basic medical care shouldn't require that much effort.",
    "So we built a home visit service that brings experienced doctors directly to your door, with no waiting rooms, no rushed five-minute consultations, and no travelling while unwell.",
    "What began as a small, focused practice has grown through word of mouth, largely because patients felt genuinely listened to. That's still the standard every visit is held to today.",
  ],
  location: "Delhi NCR",
  fee: 1300,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phones: ["7822900700", "9545494611"],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
