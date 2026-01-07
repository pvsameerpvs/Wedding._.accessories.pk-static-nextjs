import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import { waLink } from "@/lib/whatsapp"

export default function HeroSection() {
  const waCta = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream/30">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Image 
          src="/aesthetic-bg.png" 
          alt="Elegant floral background" 
          fill 
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fadeUp">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/50 backdrop-blur-sm shadow-sm w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium tracking-wide uppercase text-charcoal/70">New Wedding Collection 2024</span>
               </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-charcoal">
                Make Your <br/>
                <span className="italic text-primary-foreground/90">Special Day</span> <br/>
                Unforgettable.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                 Exquisite handcrafted accessories for your Nikkah, Barat, and Walima. 
                 Designed to add that perfect touch of elegance to your celebration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-base shadow-elevated hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <a href={waCta} target="_blank" rel="noreferrer">
                   Shop on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-charcoal/20 hover:bg-white/50 backdrop-blur-sm">
                <Link href="/accessories">View Collection</Link>
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8 border-t border-charcoal/10">
               <div>
                  <p className="font-serif text-3xl text-charcoal">500+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Happy Brides</p>
               </div>
               <div className="w-px h-12 bg-charcoal/10" />
               <div>
                  <p className="font-serif text-3xl text-charcoal">100%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Handmade</p>
               </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
             {/* Main Image Container */}
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent z-10" />
                {/* Use logo as placeholder if no hero image yet, but styled as a product/mood shot */}
                 <div className="relative aspect-[3/4] bg-white flex items-center justify-center p-12">
                    <Image 
                      src="/logo.svg" 
                      width={600} 
                      height={600} 
                      alt="Wedding Accessories Showcase" 
                      className="w-full h-auto object-contain drop-shadow-md opacity-90"
                      priority
                    />
                 </div>
             </div>

             {/* Floating Elements (Glass Cards) */}
             <div className="absolute -bottom-8 -left-8 z-20 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-elevated animate-floaty border border-white/40">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">🌸</div>
                   <div>
                      <p className="font-serif text-lg leading-none">Floral Sets</p>
                      <p className="text-xs text-muted-foreground">Trending Now</p>
                   </div>
                </div>
             </div>

             <div className="absolute top-10 -right-8 z-20 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-elevated animate-floaty [animation-delay:2s] border border-white/40">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl">✨</div>
                   <div>
                      <p className="font-serif text-lg leading-none">Custom Made</p>
                      <p className="text-xs text-muted-foreground">Just for you</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
