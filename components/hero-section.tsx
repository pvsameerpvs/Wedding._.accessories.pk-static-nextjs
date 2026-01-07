import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import { waLink } from "@/lib/whatsapp"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  const waCta = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")

  return (
    <section className="relative min-h-screen w-full bg-background flex items-center justify-center p-4 lg:p-8">
      {/* Global Background Texture - Google Style: Subtle, organic */}
      <div className="absolute inset-0 pointer-events-none">
          <Image 
            src="/aesthetic-bg.png" 
            alt="Background Texture" 
            fill 
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
      </div>

      {/* Main Material Container - Surface Container High */}
      <div className="relative w-full max-w-[1400px] bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-xl overflow-hidden grid lg:grid-cols-2 min-h-[85vh]">
        
        {/* Left: Content Surface */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-10 order-2 lg:order-1 relative z-10">
           {/* Badge - M3 Tertiary Container */}
           

           <div className="space-y-6 animate-fadeUp [animation-delay:100ms]">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal">
                Crafting <br />
                <span className="text-primary italic">Timeless</span> <br />
                Memories
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
                Premium handcrafted wedding accessories for your special day. Designed with love, delivered with care.
              </p>
           </div>

           
           
           {/* Stats / Trust Indicators */}
           <div className="pt-8 items-center gap-8 hidden md:flex animate-fadeUp [animation-delay:300ms]">
              <div className="flex -space-x-4">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" /> 
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-xs font-bold text-primary-foreground">+500</div>
              </div>
              <p className="text-sm font-medium text-charcoal/80">Happy Brides <br/> Across Pakistan</p>
           </div>
        </div>

        {/* Right: Visual Surface */}
        <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 m-4 lg:m-0 rounded-[2rem] lg:rounded-none lg:rounded-l-[2.5rem] overflow-hidden group">
           <Image 
              src="/logo.png"
              alt="Hero Showcase" 
              fill
              className="object-contain p-12 lg:p-20 transition-transform duration-700 group-hover:scale-105"
              priority
           />
           {/* Overlay Gradient */}
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 mix-blend-multiply" />
           
            {/* Floating Card - M3 Style */}
          
        </div>

      </div>
    </section>
  )
}
