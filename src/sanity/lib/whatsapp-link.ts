import { site } from "@/data/site";

export function whatsappChatUrl(message?: string) {
    const defaultMessage = "Hi, I would like to know more about your home visit service ?"
    const text = encodeURIComponent(message ?? defaultMessage);
    return `https://wa.me/${site.whatsapp}?text=${text}`;
}