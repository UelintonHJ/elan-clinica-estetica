import { siteConfig } from "@/config/site";

export function createWhatsAppUrl(message: string) {
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;
}