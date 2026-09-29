import type { ContactInput } from "@/lib/contact-validation";
import { site } from "@/data/site";

export function buildContactWhatsAppUrl(data: ContactInput) {
  const lines = [
    "*Website Contact Message*",
    "",
    `*Name:* ${data.name}`,
    `*Mobile:* +91 ${data.mobile}`,
    `*Message:* ${data.message}`,
  ];

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${site.whatsapp}?text=${message}`;
}