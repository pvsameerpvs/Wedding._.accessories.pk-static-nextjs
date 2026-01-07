import Link from "next/link"
import { Button } from "@/components/ui/button"
import { waLink } from "@/lib/whatsapp"

export default function CtaSection() {
  const waCta = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")

  return (
    <section className="container pb-16">
      <div className="rounded-3xl border border-border/70 bg-card/80 p-8 md:p-10 shadow-soft relative overflow-hidden">
        <div className="absolute inset-0 flower-divider opacity-20" />
        <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <div className="font-serif text-3xl">Need something custom?</div>
            <p className="text-sm md:text-base text-charcoal/80">
              Send your theme, names, colors, and date — we’ll suggest matching items and create a beautiful set.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild size="lg" variant="accent">
              <a href={waCta} target="_blank" rel="noreferrer">Custom Order on WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/custom-orders">How it works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
