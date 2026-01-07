import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { waLink, waProductMessage } from "@/lib/whatsapp"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function ProductCard({
  name,
  category,
  tag,
  image,
}: {
  name: string
  category: string
  tag?: string
  image?: string
}) {
  const href = waLink(waProductMessage(name))
  return (
    <div className="group relative bg-white rounded-[2rem] p-4 border border-border/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Image Placeholder / Visual Area */}
      <div className="relative aspect-[4/3] rounded-[1.5rem] bg-cream/30 overflow-hidden mb-4 grid place-items-center">
         {image ? (
            <Image 
               src={image} 
               alt={name} 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
         ) : (
            <>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent z-10" />
                {/* Decorative Element */}
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                    🌸
                </div>
            </>
         )}
         
         {tag && (
            <Badge variant="blush" className="absolute top-4 right-4 z-20 shadow-sm backdrop-blur-sm bg-white/80 hover:bg-white">
               {tag}
            </Badge>
         )}
      </div>

      <div className="px-2 pb-2">
         <div className="flex justify-between items-start gap-4">
            <div>
               <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">{category}</p>
               <h3 className="font-serif text-2xl text-charcoal group-hover:text-primary transition-colors">{name}</h3>
            </div>
            <Button asChild size="icon" className="rounded-full w-10 h-10 shrink-0 bg-secondary/10 text-secondary-foreground hover:bg-secondary hover:text-white transition-colors shadow-none">
               <a href={href} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="w-5 h-5" />
               </a>
            </Button>
         </div>
      </div>
    </div>
  )
}
