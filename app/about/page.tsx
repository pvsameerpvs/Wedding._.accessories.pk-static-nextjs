import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SITE } from "@/lib/site"

const values = [
  { title: "Elegant & floral", desc: "Soft feminine designs inspired by wedding vibes." },
  { title: "Custom-made details", desc: "Names, dates, colors — tailored for your theme." },
  { title: "Friendly support", desc: "Quick replies and guidance on WhatsApp." },
  { title: "Beautiful finishing", desc: "Delicate spacing, clean styling, premium feel." },
] as const

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-14">
      <SectionHeading
        eyebrow="About"
        title={`Welcome to ${SITE.name}`}
        desc="We’re an online wedding accessories store based in Sargodha — creating soft, elegant wedding essentials with a floral touch."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="bg-card/80">
          <CardContent className="p-8">
            <div className="font-serif text-2xl">Our mission</div>
            <p className="mt-2 text-sm md:text-base text-charcoal/80">
              To make your wedding moments feel extra special by offering beautifully designed accessories, props, and
              customized items — all in one place, online.
            </p>
            <Separator className="my-6" />
            <div className="font-serif text-2xl">Our values</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border/70 bg-cream/60 p-5">
                  <div className="font-medium">{v.title}</div>
                  <div className="mt-1 text-sm text-charcoal/75">{v.desc}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80">
          <CardContent className="p-8">
            <div className="font-serif text-2xl">What makes us special</div>
            <p className="mt-2 text-sm md:text-base text-charcoal/80">
              We focus on soft floral aesthetics, neat finishing, and customization — so your Nikkah and wedding setup
              looks cohesive and premium in photos and in real life.
            </p>
            <Separator className="my-6" />
            <div className="space-y-3 text-sm text-charcoal/80">
              <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5">
                <div className="font-medium">One roof, everything you need</div>
                <div className="mt-1 text-charcoal/75">
                  Nikkah essentials, ring rituals, props, décor, favours and bridal accessories.
                </div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-primary/25 p-5">
                <div className="font-medium">Custom sets & themes</div>
                <div className="mt-1 text-charcoal/75">
                  Matching colors and styling across multiple items for a polished look.
                </div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-accent/20 p-5">
                <div className="font-medium">Fast WhatsApp support</div>
                <div className="mt-1 text-charcoal/75">
                  Quick replies, clear guidance, and easy ordering.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
