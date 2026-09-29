import type { BookingInput } from "@/lib/validations";
import { site } from "@/data/site";

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatTime(value: string) {
  const [hour, minute] = value.split(":").map(Number);
  const displayHour = hour % 12 || 12;
  const period = hour >= 12 ? "PM" : "AM";
  return `${displayHour}:${String(minute).padStart(2, "0")} ${period}`;
}

export function buildWhatsAppUrl(data: BookingInput) {
  const lines = [
    "*Home Visit Booking*",
    "",
    `*Name:* ${data.name}`,
    `*Mobile:* +91 ${data.mobile}`,
    `*Address:* ${data.address}`,
    `*Service:* ${data.service}`,
    `*Reason:* ${data.reason}`,
    `*Date:* ${formatDate(data.date)}`,
    `*Time:* ${formatTime(data.time)}`,
    `*Consultation fee:* ₹${site.fee}`,
  ];

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${site.whatsapp}?text=${message}`;
}
