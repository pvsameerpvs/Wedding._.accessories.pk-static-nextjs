import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { waLink } from "@/lib/whatsapp"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CtaSection() {
  const waCta = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")

  return (
    <section className="container py-20 lg:py-32">
      <div className="relative rounded-[3rem] overflow-hidden bg-charcoal text-white text-center p-12 md:p-20 lg:p-24 shadow-2xl animate-fadeUp">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
           {/* Fallback to charcoal if image not loaded immediately, but Next/Image handles this */}
           <Image 
              src="/cta_luxury_bg.png" 
              alt="Luxury Background" 
              fill 
              className="object-cover opacity-60 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
        </div>

        {/* Background Gradients (Enhanced) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 z-0" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Accepting Orders
           </div>

           <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
              Let’s Create Your <br />
              <span className="italic text-primary">Dream Look</span>
           </h2>

           <p className="text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
              From Nikkah pens to complete bridal sets, tell us your vision and we’ll craft it to perfection.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Primary Action: White Base -> Primary Hover */}
              <Button asChild size="lg" className="group rounded-full h-16 px-10 text-lg bg-white text-primary hover:bg-primary hover:text-white font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                 <a href={waCta} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    Chat on WhatsApp
                 </a>
              </Button>
              {/* Secondary Action: Transparent with Border */}
                <Button asChild size="lg" className="group rounded-full h-16 px-10 text-lg bg-white text-primary hover:bg-primary hover:text-white font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                 <a href={waCta} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                 <Link href="/contact" className="flex items-center gap-2 text-primary group-hover:text-white transition-colors" >
                    Start Custom Order <ArrowRight className="w-6 h-6 text-primary group-hover:text-white transition-colors"  />
                 </Link>
                 </a>
              </Button>
           </div>
           
           <p className="text-sm text-white/40 mt-8">
              Typically replies within 1 hour • Worldwide Shipping Available
           </p>
        </div>
      </div>
    </section>
  )
}
