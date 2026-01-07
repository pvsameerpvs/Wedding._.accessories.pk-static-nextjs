import { MessageCircle } from "lucide-react"
import { waLink } from "@/lib/whatsapp"

export default function WhatsAppFloat() {
  const href = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-soft hover:opacity-95 transition-opacity"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  )
}
