import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { waLink } from "@/lib/whatsapp"

const customizable = [
  "Nikkah booklets, certificates & boxes",
  "Welcome boards & entrance setups",
  "Favours (cones, tasbeeh cards, Yaseen, chocolate cards)",
  "Ring plates, resin plaques & ritual items",
  "Bridal accessories & themed sets",
  "Props, toppers, labels & matching décor",
] as const

const steps = [
  { title: "Share your details", desc: "Send your wedding date, names, theme colors, and what you need." },
  { title: "Get design options", desc: "We’ll share pictures, ideas, sizes, and price ranges for your selection." },
  { title: "Confirm & customize", desc: "Pick the style and personalize names, colors, wording, and finishing." },
  { title: "Finalize your order", desc: "We confirm everything on WhatsApp and prepare your items beautifully." },
] as const

export default function CustomOrdersPage() {
  const href = waLink("Hello! I’d like to place a CUSTOM order from Wedding._.accessories.pk. My event details are: (date), (names), (theme colors). Please guide me.")
  return (
    <div className="container py-12 md:py-14">
      <SectionHeading
        eyebrow="Custom Orders"
        title="Made to match your wedding theme"
        desc="From Nikkah to mehndi to wedding day — tell us your vibe and we’ll customize the details in a soft floral style."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="bg-card/80">
          <CardContent className="p-8">
            <div className="font-serif text-2xl">Customizable items</div>
            <p className="mt-2 text-sm text-charcoal/80">Choose one item or build a full matching set.</p>
            <Separator className="my-5" />
            <ul className="space-y-3 text-sm">
              {customizable.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-charcoal/85">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="accent">
                <a href={href} target="_blank" rel="noreferrer">WhatsApp Custom Order</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/accessories">Browse ready items</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80">
          <CardContent className="p-8">
            <div className="font-serif text-2xl">How ordering works</div>
            <p className="mt-2 text-sm text-charcoal/80">Simple, friendly, and fast — all on WhatsApp.</p>
            <Separator className="my-5" />
            <ol className="space-y-4 text-sm">
              {steps.map((s, idx) => (
                <li key={s.title} className="flex gap-3">
                  <div className="h-9 w-9 rounded-2xl bg-secondary/55 flex items-center justify-center font-serif">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-medium">{s.title}</div>
                    <div className="text-charcoal/75">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl border border-border/70 bg-cream/60 p-5">
              <div className="font-medium">Tip</div>
              <div className="mt-1 text-sm text-charcoal/75">
                Send a reference picture or color palette — it helps us match your theme perfectly.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
