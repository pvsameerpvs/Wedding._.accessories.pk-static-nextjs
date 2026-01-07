import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Star, Sparkles, Feather } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

const values = [
  { 
    icon: <Feather className="w-5 h-5" />,
    title: "Soft Aesthetics", 
    desc: "Inspired by gentle florals and timeless elegance." 
  },
  { 
    icon: <Sparkles className="w-5 h-5" />,
    title: "Handcrafted Detail", 
    desc: "Every pearl and ribbon is placed with intention." 
  },
  { 
    icon: <Star className="w-5 h-5" />,
    title: "Custom Design", 
    desc: "Tailored to match your unique wedding theme." 
  },
  { 
    icon: <Heart className="w-5 h-5" />,
    title: "Friendly Service", 
    desc: "We treat every bride like a dear friend." 
  },
] as const

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
       {/* Background Decoration */}
       <div className="fixed inset-0 z-0 pointer-events-none">
          <Image 
             src="/custom_studio_bg.png" 
             alt="Background Pattern" 
             fill 
             className="object-cover opacity-[0.05]" 
             priority
          />
       </div>

       <div className="container relative z-10 py-12 md:py-20 lg:py-24 space-y-24">
          {/* Header */}
          <div className="text-center space-y-6 animate-fadeUp">
            
             <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">The Story</span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-charcoal">
                   Art of <span className="italic text-primary">Celebration</span>
                </h1>
             </div>
          </div>

          {/* Main Story Split */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className="relative aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl shadow-primary/10 group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                <Image 
                   src="/about_story_image.png" 
                   alt="Hands crafting elegant wedding accessories"
                   fill 
                   className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
             </div>
             
             <div className="space-y-8 lg:pl-10">
                <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">
                   Crafting memories, <br/>
                   <span className="italic text-muted-foreground">one detail at a time.</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                   <p>
                      Welcome to <span className="font-medium text-primary">{SITE.name}</span>. We are a dedicated studio based in Sargodha, born from a love for soft, floral aesthetics and the magic of weddings.
                   </p>
                   <p>
                      Our mission is simple: to bring your dream Nikkah or wedding setup to life with cohesive, handcrafted accessories. From the welcome sign that greets your guests to the pen you sign your papers with, we ensure every element tells your story.
                   </p>
                </div>
                <div className="pt-4">
                   <div className="inline-block border-l-2 border-primary pl-6 py-2">
                      <p className="font-serif text-xl text-charcoal italic">&quot;It&apos;s not just about the items; it&apos;s about the feeling they create.&quot;</p>
                      <p className="text-sm text-muted-foreground mt-2">— Founder&apos;s Note</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-12">
             <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Why Brides Choose Us</h2>
                <Separator className="w-24 mx-auto bg-primary/30" />
             </div>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v, i) => (
                   <div key={i} className="group p-8 rounded-[2rem] bg-white/50 hover:bg-white border border-transparent hover:border-primary/10 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                         {v.icon}
                      </div>
                      <h3 className="font-serif text-xl text-charcoal mb-2">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                   </div>
                ))}
             </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-[3rem] bg-primary/5 p-12 lg:p-20 text-center space-y-8 relative overflow-hidden">
             <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Ready to create something beautiful?</h2>
                <p className="text-lg text-muted-foreground">Let&apos;s chat about your upcoming event and how we can add that perfect touch.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                   <Button asChild size="lg" className="rounded-full px-8 h-12 bg-primary text-white hover:bg-primary/90">
                      <Link href="/custom-orders">Start Custom Project</Link>
                   </Button>
                   <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 border-primary/20 hover:bg-primary/5 hover:text-primary">
                      <Link href="/accessories">Explore Collection</Link>
                   </Button>
                </div>
             </div>
             
             {/* Decorative Circles */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />
          </div>
       </div>
    </div>
  )
}
