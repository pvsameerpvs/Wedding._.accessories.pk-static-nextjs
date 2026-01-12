"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product-card"
import { allProducts } from "@/lib/products"

const categories = [
  { id: "all", label: "All Collection" },
  { id: "nikkah-stationery", label: "Nikkah Stationery" },
  { id: "rings-platters", label: "Rings & Platters" },
  { id: "resin-acrylic", label: "Resin & Acrylic" },
  { id: "wedding-rituals", label: "Wedding Rituals" },
  { id: "gift-boxes", label: "Gift Boxes & Mehar" },
  { id: "dupatta-veils", label: "Dupatta & Veils" },
  { id: "props-decor", label: "Props & Decor" },
  { id: "sweets-favours", label: "Sweets & Favours" },
  { id: "floral-garlands", label: "Floral & Garlands" },
  { id: "bid-boxes-design", label: "Bid Boxes Design" },
] as const

function AccessoriesContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const [activeTab, setActiveTab] = useState(categoryParam && categories.some(c => c.id === categoryParam) ? categoryParam : "all")

  // Filter logic
  const filteredProducts = activeTab === "all" 
    ? allProducts 
    : allProducts.filter(p => {
        // Match existing category logic
        const catMap: Record<string, string> = {
            "nikkah-stationery": "Nikkah Stationery & Documentation",
            "rings-platters": "Rings & Platter Accessories",
            "resin-acrylic": "Resin & Acrylic Products",
            "wedding-rituals": "Wedding Ritual Items",
            "gift-boxes": "Gift Boxes & Mehar Items",
            "dupatta-veils": "Dupatta & Veil Collection",
            "props-decor": "Props & Decorative Accessories",
            "sweets-favours": "Sweets & Favours",
            "floral-garlands": "Floral & Garlands",
            "bid-boxes-design": "Bid Boxes Design",
        }
        return p.category === catMap[activeTab]
    })

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
       {/* Background Decoration */}
       <div className="fixed inset-0 z-0 pointer-events-none">
          <Image 
             src="/accessories_bg.png" 
             alt="Background Pattern" 
             fill 
             className="object-cover opacity-[0.08]" 
             priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/40 to-background/95" />
       </div>
       
       <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-0" />
       <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0" />

       <div className="container relative z-10 pt-28 md:pt-36 lg:pt-40 pb-12 md:pb-20 space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-fadeUp pt-4">
           
             
             <div className="space-y-4">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none text-charcoal">
                   The <span className="italic text-primary">Collection</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                   Explore our curated categories of handcrafted accessories, designed to add elegance to your special moments.
                </p>
             </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 animate-fadeUp" style={{ animationDelay: "100ms" }}>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={cn(
                        "px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 border",
                        activeTab === cat.id 
                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105" 
                            : "bg-white/50 text-muted-foreground border-transparent hover:bg-white hover:text-charcoal hover:shadow-sm hover:scale-105"
                    )}
                >
                    {cat.label}
                </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="min-h-[50vh]">
             {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10 animate-fadeUp" key={activeTab}>
                    {filteredProducts.map((p) => (
                        <ProductCard key={p.name} name={p.name} category={p.category} image={p.image} images={p.images} pdfLink={p.pdfLink} />
                    ))}
                </div>
             ) : (
                 <div className="py-20 text-center text-muted-foreground">
                    <p>No products found in this category.</p>
                 </div>
             )}
          </div>
       </div>
    </div>
  )
}

export default function AccessoriesPage() {
   return (
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
         <AccessoriesContent />
      </Suspense>
   )
}
