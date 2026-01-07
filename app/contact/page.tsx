import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Music2, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { SITE } from "@/lib/site"
import { waLink } from "@/lib/whatsapp"

export default function ContactPage() {
  const waCta = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")
  return (
    <div className="container py-12 md:py-14">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s plan your wedding accessories"
        desc="Message us on WhatsApp for pictures, pricing, and customization. We reply quickly."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="bg-card/80">
          <CardContent className="p-8">
            <div className="font-serif text-2xl">Contact information</div>
            <Separator className="my-5" />
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">Phone / WhatsApp</div>
                  <div className="text-charcoal/75">{SITE.phoneWhatsApp}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <a className="text-charcoal/75 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">City</div>
                  <div className="text-charcoal/75">{SITE.city}</div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="accent">
                <a href={waCta} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Click-to-Chat
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${SITE.email}`} target="_blank" rel="noreferrer">Email Us</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80">
          <CardContent className="p-8">
            <div className="font-serif text-2xl">Social media</div>
            <p className="mt-2 text-sm text-charcoal/80">Follow for latest designs and updates.</p>
            <Separator className="my-5" />
            <div className="grid gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="rounded-2xl border border-border/70 bg-cream/60 p-5 hover:bg-muted transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-xs text-charcoal/70">wedding._.accessories.pk</div>
                  </div>
                </div>
                <span className="text-sm font-medium underline decoration-primary/70 underline-offset-4">Open</span>
              </a>

              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="rounded-2xl border border-border/70 bg-cream/60 p-5 hover:bg-muted transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Facebook className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Facebook</div>
                    <div className="text-xs text-charcoal/70">Wedding accessories</div>
                  </div>
                </div>
                <span className="text-sm font-medium underline decoration-secondary/80 underline-offset-4">Open</span>
              </a>

              <a href={SITE.tiktok} target="_blank" rel="noreferrer" className="rounded-2xl border border-border/70 bg-cream/60 p-5 hover:bg-muted transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Music2 className="h-5 w-5" />
                  <div>
                    <div className="font-medium">TikTok</div>
                    <div className="text-xs text-charcoal/70">@wedding._.accessories.pk</div>
                  </div>
                </div>
                <span className="text-sm font-medium underline decoration-accent/70 underline-offset-4">Open</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
