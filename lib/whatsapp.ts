import { SITE } from "@/lib/site"

export function waLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SITE.whatsappE164}?text=${text}`
}

export function waProductMessage(productName: string) {
  return `Hello, I’m interested in ${productName} from ${SITE.name}. Please share details.`
}
