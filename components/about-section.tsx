import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1 animate-fadeUp">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-muted">
             {/* Placeholder for About Image - could be a collage or a single high quality shot */}
            <div className="absolute inset-0 bg-secondary/20" />
            <Image
              src="/placeholder-about.jpg" 
              alt="About Wedding Accessories PK"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
             {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center space-y-6 lg:order-2 animate-fadeUp [animation-delay:200ms]">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground w-fit">
            <span>Since 2024</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            Crafting memories, <br/> 
            <span className="text-primary-foreground/80">one detail at a time.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At <strong>Wedding Accessories PK</strong>, we believe that the smallest touches make the biggest impact. 
            Started with a passion for floral elegance and traditional charm, we curate and create 
            accessories that perfectly complement your Nikkah, Mehndi, or Barat look.
          </p>
          <div className="flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
            <p className="text-base text-charcoal/80 italic">
              &quot;We don&apos;t just sell accessories; we help you tell your love story through colors, flowers, and timeless designs.&quot;
            </p>
          </div>
          <div className="pt-4">
             <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link href="/contact">Get in Touch</Link>
             </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
