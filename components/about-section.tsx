import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="container py-20 lg:py-32">
      <div className="relative bg-secondary/5 rounded-[3rem] p-8 md:p-12 lg:p-20 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10" />

         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1 animate-fadeUp">
               <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                  <Image
                     src="/about_brand_story.png"
                     alt="Our Atelier"
                     fill
                     className="object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 text-white z-10">
                     <p className="font-serif text-3xl italic">Est. 2024</p>
                     <p className="text-sm uppercase tracking-widest opacity-80">Online Boutique</p>
                  </div>
               </div>

               {/* Sticker/Badge Element */}
               <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center p-4 shadow-xl animate-spin-slow">
                   <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal rotate-[-20deg]">
                      <path id="curve" d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" fill="none" />
                      <text className="text-[11px] font-bold uppercase tracking-widest fill-current">
                         <textPath href="#curve">Handcrafted • with • Love •</textPath>
                      </text>
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl">pk</div>
               </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-8 animate-fadeUp [animation-delay:200ms]">
               <div className="space-y-4">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-charcoal">
                     More than just <br/>
                     <span className="text-primary italic">Accessories</span>.
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                     We are storytellers weaving emotions into every flower and pearl. Our mission is to make your Nikkah, Barat, and Walima feel as unique as your love story.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-6 py-6 border-y border-charcoal/10">
                  <div>
                     <h4 className="font-serif text-2xl text-charcoal mb-1">100%</h4>
                     <p className="text-sm text-muted-foreground">Handmade in Pakistan</p>
                  </div>
                  <div>
                     <h4 className="font-serif text-2xl text-charcoal mb-1">Custom</h4>
                     <p className="text-sm text-muted-foreground">Tailored to your dress</p>
                  </div>
               </div>

               <Button asChild size="lg" className="rounded-full h-14 pl-8 pr-6 text-base bg-charcoal text-white hover:bg-charcoal/90 shadow-lg group">
                  <Link href="/about" className="flex items-center gap-2">
                     Read Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </Button>
            </div>
         </div>
      </div>
    </section>
  )
}
