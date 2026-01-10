import Link from "next/link"
import Image from "next/image"
import { featuredCategories } from "@/lib/products"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

export default function FeaturedCategories() {
  return (
    <section className="container py-20 lg:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="text-center space-y-4 mb-16 animate-fadeUp">
         <span className="font-serif italic text-2xl text-primary/80">Curated Collections</span>
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
            The Gallery
         </h2>
         <div className="w-24 h-1 bg-charcoal/10 mx-auto rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 p-4">
        {featuredCategories.map((c, i) => {
           const isLarge = i === 0 || i === 3
           const isFull = i === 4
           
           let gridClass = "lg:col-span-4 lg:row-span-1 min-h-[300px]"
           if (isLarge) gridClass = "lg:col-span-8 lg:row-span-2 min-h-[500px]"
           if (isFull) gridClass = "lg:col-span-12 lg:row-span-2 min-h-[400px]"
           
           const bgImages = [
              "/categories/nikkah.jpeg",
              "/categories/barat.jpeg",
              "/categories/walima.jpeg",
              "/categories/custom.jpeg",
              "/products/new-born-baby-frame.jpeg" // Default for 5th category "Others"
           ]

           return (
            <Link 
               key={c.href} 
               href={c.href} 
               className={cn(
                  "group relative overflow-hidden rounded-[2rem] transition-all duration-500 hover:shadow-soft border border-white/60 bg-cream/20",
                  gridClass
               )}
            >
               {/* Background Image */}
               <div className="absolute inset-0">
                  <Image 
                     src={bgImages[i]} 
                     alt={c.title} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-95"
                  />
                  {/* Soft Light Overlay instead of Dark */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/20 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />
               </div>
               
               {/* Content - Pastel & Elegant */}
               <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-20">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="inline-block px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm border border-white/40 text-xs font-medium tracking-widest uppercase text-charcoal/70 mb-3">
                        Collection 0{i + 1}
                     </span>
                     
                     <h3 className={cn(
                        "font-serif text-charcoal leading-none transition-all duration-300",
                        isLarge ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"
                     )}>
                        {c.title}
                     </h3>
                     
                     <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                        <p className="text-charcoal/80 font-medium italic font-serif text-lg">
                           View Gallery
                        </p>
                        <span className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-primary transform group-hover:rotate-45 transition-transform duration-500">
                           <ArrowUpRight className="w-5 h-5" />
                        </span>
                     </div>
                  </div>
               </div>
            </Link>
           )
        })}
      </div>
    </section>
  )
}
