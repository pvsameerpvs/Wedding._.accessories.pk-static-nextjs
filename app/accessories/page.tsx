import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import ProductCard from "@/components/product-card"
import { allProducts } from "@/lib/products"

const sections = [
  { id: "nikkah-essentials", title: "Nikkah Essentials", desc: "Signature pieces for your Nikkah day — elegant, floral, and memorable." },
  { id: "wedding-props-decor", title: "Wedding Props & Decor", desc: "Cute props, boards, and decor for photos and moments." },
  { id: "ring-ritual-items", title: "Ring & Ritual Items", desc: "Plates, plaques, and ritual items with a premium finish." },
  { id: "favours-gifts", title: "Favours & Gifts", desc: "Thoughtful giveaways and gift-style favours." },
  { id: "bridal-accessories", title: "Bridal Accessories", desc: "Bridal accessories that complete the look." },
] as const

import Image from "next/image"

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
       {/* Background Decoration */}
       <div className="fixed inset-0 z-0">
          <Image 
             src="/accessories_bg.png" 
             alt="Background Pattern" 
             fill 
             className="object-cover opacity-30"
             priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
       </div>
       
       <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0" />
       <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 z-0" />

       <div className="container relative z-10 py-12 md:py-20 lg:py-24 space-y-16">
          {/* Header */}
          <div className="space-y-6 animate-fadeUp">
             <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-charcoal transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
             </Link>
             <div className="space-y-4">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">The Collection</span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
                   Wedding <span className="italic text-charcoal/80">Essentials</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                   Explore our curated categories of handcrafted accessories, designed to add elegance to your special moments.
                </p>
             </div>
          </div>

          {/* Catalog Sections */}
          <div className="space-y-24">
            {sections.map((s) => {
               // Fallback mapping for ids to categories (matching existing logic)
               const byId = (id: string) => {
                 if (id === "nikkah-essentials") return "Nikkah Essentials"
                 if (id === "wedding-props-decor") return "Wedding Props & Decor"
                 if (id === "ring-ritual-items") return "Ring & Ritual Items"
                 if (id === "favours-gifts") return "Favours & Gifts"
                 if (id === "bridal-accessories") return "Bridal Accessories"
                 return ""
               }
               
               const items = allProducts.filter((p) => p.category === byId(s.id))
               if (items.length === 0) return null

               return (
                 <section key={s.id} id={s.id} className="scroll-mt-32">
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                      <div className="space-y-2">
                         <h2 className="font-serif text-3xl md:text-4xl text-charcoal">{s.title}</h2>
                         <p className="text-muted-foreground">{s.desc}</p>
                      </div>
                      <Separator className="flex-1 md:w-auto md:max-w-xs bg-charcoal/10" />
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                     {items.map((p) => (
                       <ProductCard key={p.name} name={p.name} category={p.category} />
                     ))}
                   </div>
                 </section>
               )
            })}
          </div>
       </div>
    </div>
  )
}
