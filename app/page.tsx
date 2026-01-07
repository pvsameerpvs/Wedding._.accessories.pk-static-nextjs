import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import AboutSection from "@/components/about-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ProductCard from "@/components/product-card"
import { SITE } from "@/lib/site"
import { featuredCategories, popularProducts } from "@/lib/products"
import { waLink } from "@/lib/whatsapp"

export default function HomePage() {
  const waCta = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="container relative py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6 animate-fadeUp">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-charcoal/80">Online only • {SITE.city}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl leading-tight">
                All Wedding Accessories <span className="text-charcoal/80">Under One Roof</span>
              </h1>
              <p className="text-base md:text-lg text-charcoal/80 max-w-xl">
                Soft floral vibes, elegant details, and beautiful customization — everything you need for your big day.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <a href={waCta} target="_blank" rel="noreferrer">WhatsApp</a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/accessories">Browse Accessories</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-secondary" /> Custom orders</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> Fast replies on WhatsApp</span>
              </div>
            </div>

            <div className="relative animate-fadeUp [animation-delay:120ms]">
              <Card className="overflow-hidden bg-card/75">
                <CardContent className="p-6">
                  <div className="rounded-3xl border border-border/70 bg-cream/70 p-6">
                    <Image src="/logo.svg" width={760} height={220} alt={SITE.name} className="w-full h-auto" priority />
                    <Separator className="my-5" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-primary/40 p-4 text-center">
                        <div className="font-serif text-lg">Floral</div>
                        <div className="text-xs text-charcoal/70">Soft theme</div>
                      </div>
                      <div className="rounded-2xl bg-secondary/45 p-4 text-center">
                        <div className="font-serif text-lg">Elegant</div>
                        <div className="text-xs text-charcoal/70">Minimal</div>
                      </div>
                      <div className="rounded-2xl bg-accent/35 p-4 text-center">
                        <div className="font-serif text-lg">Custom</div>
                        <div className="text-xs text-charcoal/70">Made for you</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-primary/40 blur-2xl" />
              <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-secondary/45 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-14">
        <SectionHeading
          eyebrow="Shop by vibe"
          title="Featured categories"
          desc="Handpicked essentials for Nikkah, weddings, and everything in between — in a soft floral style."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCategories.map((c) => (
            <Link key={c.href} href={c.href} className="group">
              <div className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-soft transition-transform group-hover:-translate-y-1">
                <div className="h-10 w-10 rounded-2xl flower-divider opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="mt-4 font-serif text-xl">{c.title}</div>
                <div className="mt-2 text-sm text-charcoal/75">{c.desc}</div>
                <div className="mt-4 text-sm font-medium text-charcoal/90 underline decoration-primary/70 underline-offset-4">
                  Explore
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="container pb-14">
        <SectionHeading
          eyebrow="Trending"
          title="Popular products"
          desc="Tap WhatsApp and we’ll share designs, pricing & customization options."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((p) => (
            <ProductCard key={p.name} category={p.category} tag={p.tag} name={p.name} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Elegant CTA */}
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
    </div>
  )
}
