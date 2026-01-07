import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone, Mail, MapPin, Music2 } from "lucide-react"
import { SITE } from "@/lib/site"
import { Separator } from "@/components/ui/separator"

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/90 backdrop-blur-md relative z-50">
      <div className="container py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/favicon.svg" width={44} height={44} alt="" className="rounded-2xl" />
              <div>
                <div className="font-serif text-xl">{SITE.name}</div>
                <div className="text-sm text-muted-foreground">Online Wedding Accessories Store – {SITE.city}</div>
              </div>
            </div>
            <p className="text-sm text-charcoal/80 max-w-sm">
              Elegant, floral & soft wedding accessories — crafted with love, personalized with care, delivered online.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-serif text-lg">Contact</div>
            <div className="text-sm text-charcoal/85 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{SITE.phoneWhatsApp}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{SITE.city}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-serif text-lg">Social</div>
            <div className="flex flex-wrap gap-2">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm hover:bg-muted transition-colors">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm hover:bg-muted transition-colors">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href={SITE.tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm hover:bg-muted transition-colors">
                <Music2 className="h-4 w-4" /> TikTok
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
