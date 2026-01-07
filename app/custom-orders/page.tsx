import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Palette, PenTool, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { waLink } from "@/lib/whatsapp"
import { CustomOrderModal } from "@/components/custom-order-modal"

const steps = [
  { 
     icon: <PenTool className="w-5 h-5" />,
     title: "Consultation", 
     desc: "Share your wedding theme, colors, and vision. We listen to every detail." 
  },
  { 
     icon: <Palette className="w-5 h-5" />,
     title: "Design & Sketch", 
     desc: "We propose concepts, materials, and layouts tailored exactly to your style." 
  },
  { 
     icon: <Sparkles className="w-5 h-5" />,
     title: "Craft & Create", 
     desc: "Once approved, our artisans handcraft your pieces with premium finishing." 
  },
] as const

const inspiration = [
   "Nikkah Certificates", "Welcome Signage", "Ring Platters", "Bridal entry props", "Favor packaging"
]

export default function CustomOrdersPage() {
  const href = waLink("Hello! I’d like to start a BESPOKE project. My event details are: (Date), (Theme). Please guide me.")

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <Image 
            src="/custom_studio_bg.png" 
            alt="Design Sketches" 
            fill 
            className="object-cover opacity-[0.08]" 
            priority
         />
      </div>

      <div className="container relative z-10 pt-28 md:pt-36 lg:pt-40 pb-12 md:pb-20 space-y-20">
         {/* Decoration */}
         <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse" />

         {/* Header */}
         <div className="text-center space-y-6 animate-fadeUp">
            
            <div className="space-y-4">
               <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">The Bespoke Studio</span>
               <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-charcoal">
                  Design Your <span className="italic text-primary">Dream</span>
               </h1>
               <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  From initial sketch to final masterpiece, we create exclusively for your unique love story.
               </p>
            </div>
         </div>

         {/* Main Content Split */}
         <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left: Interactive/Process */}
            <div className="lg:col-span-7 space-y-10">
               <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-8 animate-fadeUp" style={{ animationDelay: "100ms" }}>
                  <div className="space-y-2">
                     <h2 className="font-serif text-3xl text-charcoal">How it works</h2>
                     <p className="text-muted-foreground">A seamless three-step journey to perfection.</p>
                  </div>
                  
                  <div className="space-y-8 relative">
                     {/* Connector Line */}
                     <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />
                     
                     {steps.map((s, idx) => (
                        <div key={idx} className="relative flex gap-6 items-start group">
                           <div className="relative z-10 w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                              {s.icon}
                           </div>
                           <div className="space-y-1 pt-1">
                              <h3 className="font-serif text-xl text-charcoal group-hover:text-primary transition-colors">{s.title}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="pt-6">
                     <CustomOrderModal>
                        <Button size="lg" className="rounded-full h-14 px-8 text-base w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-2xl hover:translate-y-[-2px] transition-all bg-primary text-primary-foreground">
                           Start Your Custom Project
                        </Button>
                     </CustomOrderModal>
                  </div>
               </div>
            </div>

            {/* Right: Inspiration/Capabilities */}
            <div className="lg:col-span-5 space-y-6 animate-fadeUp" style={{ animationDelay: "200ms" }}>
               <Card className="bg-charcoal/5 border-none shadow-none rounded-[2rem] overflow-hidden">
                  <CardContent className="p-8 md:p-10 space-y-6">
                     <div className="space-y-2">
                        <h3 className="font-serif text-2xl text-charcoal">Possible Creations</h3>
                        <p className="text-sm text-muted-foreground">Anything is possible. Here are a few favorites:</p>
                     </div>
                     <div className="grid grid-cols-1 gap-3">
                        {inspiration.map((item, i) => (
                           <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-white transition-colors border border-transparent hover:border-primary/10">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                 <Check className="w-4 h-4" />
                              </div>
                              <span className="text-charcoal/80 font-medium">{item}</span>
                           </div>
                        ))}
                     </div>
                     <div className="pt-4 border-t border-charcoal/10">
                        <p className="text-xs text-charcoal/60 italic">
                           "If you can dream it, we can design it. Send us your Pinterest board!"
                        </p>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
    </div>
  )
}
