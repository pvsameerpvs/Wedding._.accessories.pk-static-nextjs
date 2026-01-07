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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-[300px]">
        {featuredCategories.map((c, i) => {
           // Asymmetrical Grid Logic
           const isLarge = i === 0 || i === 3
           const gridClass = isLarge 
              ? "lg:col-span-8 lg:row-span-2" 
              : "lg:col-span-4 lg:row-span-1"
           
           // Image Mapping
           const bgImages = [
              "/categories/nikkah.png",
              "/categories/barat.png",
              "/categories/walima.png",
              "/categories/custom.png"
           ]

           return (
            <Link 
               key={c.href} 
               href={c.href} 
               className={cn(
                  "group relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-sm hover:shadow-xl transition-all duration-500 bg-white",
                  gridClass
               )}
            >
               {/* Background Image - Art Gallery Style */}
               <div className="absolute inset-0">
                  <Image 
                     src={bgImages[i]} 
                     alt={c.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
               </div>
               
               {/* Content Overlay */}
               <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

               <div className="relative h-full flex flex-col justify-between p-8 z-20">
                  <div className="flex justify-between items-start">
                     <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-charcoal border border-white/40 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </span>
                     <span className="font-serif italic text-5xl md:text-7xl text-charcoal/5 pointer-events-none select-none">
                        0{i + 1}
                     </span>
                  </div>
                  
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                     <h3 className={cn(
                        "font-serif text-charcoal group-hover:text-primary transition-colors duration-300",
                         isLarge ? "text-4xl md:text-5xl" : "text-3xl"
                     )}>
                        {c.title}
                     </h3>
                     <p className="text-charcoal/80 mt-2 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        {c.desc}
                     </p>
                  </div>
               </div>
            </Link>
           )
        })}
      </div>
    </section>
  )
}
