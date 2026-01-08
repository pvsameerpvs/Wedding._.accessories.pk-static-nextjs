import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { waLink, waProductMessage } from "@/lib/whatsapp"

interface ProductGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    image?: string
    images?: string[]
  }
}

export function ProductGalleryModal({ isOpen, onClose, product }: ProductGalleryModalProps) {
  // Combine primary image and gallery images into a single list
  const allImages = [
    ...(product.image ? [product.image] : []),
    ...(product.images || [])
  ]
  const uniqueImages = Array.from(new Set(allImages)).slice(0, 4) // Remove duplicates and limit to max 4 images

  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset index when modal opens with a new product
  // (In a real app, useEffect with [product] dependency would be better, but local state resets on unmount usually)
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % uniqueImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + uniqueImages.length) % uniqueImages.length)
  }

  const showNavigation = uniqueImages.length > 1
  const currentImageSrc = uniqueImages[currentIndex] || "/placeholder.jpg" // Fallback

  const waHref = waLink(waProductMessage(product.name))

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none text-white">
        <div className="relative flex flex-col md:flex-row h-[80vh] md:h-[600px]">
          
          {/* Close Button Mobile (absolute) */}
          <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full md:hidden">
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Image Section */}
          <div className="relative flex-1 bg-black flex items-center justify-center">
             {showNavigation && (
                <>
                   <button onClick={prevImage} className="absolute left-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                      <ChevronLeft className="w-8 h-8 text-white" />
                   </button>
                   <button onClick={nextImage} className="absolute right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                      <ChevronRight className="w-8 h-8 text-white" />
                   </button>
                </>
             )}
             
             <div className="relative w-full h-full">
                {uniqueImages.length > 0 ? (
                   <Image 
                      src={currentImageSrc} 
                      alt={`${product.name} view ${currentIndex + 1}`} 
                      fill 
                      className="object-contain" 
                   />
                ) : (
                   <div className="flex items-center justify-center h-full text-white/50">No images available</div>
                )}
             </div>

             {/* Image Counter */}
             {showNavigation && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-xs font-medium">
                   {currentIndex + 1} / {uniqueImages.length}
                </div>
             )}
          </div>

          {/* Details Sidebar */}
          <div className="w-full md:w-80 bg-white text-charcoal p-6 md:p-8 flex flex-col h-full overflow-y-auto">
             <div className="flex justify-between items-start">
                <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-2">{product.name}</h2>
                <button onClick={onClose} className="hidden md:block p-1 hover:bg-gray-100 rounded-full transition-colors">
                   <X className="w-6 h-6 text-charcoal/50" />
                </button>
             </div>
             
             <div className="flex-1 py-6 space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                   Handcrafted with attention to detail. Perfect for adding a touch of elegance to your special day.
                </p>
                
                {/* Thumbnails */}
                {showNavigation && (
                   <div className="grid grid-cols-4 gap-2">
                      {uniqueImages.map((img, idx) => (
                         <button 
                            key={idx} 
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${currentIndex === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                         >
                            <Image src={img} alt="" fill className="object-cover" />
                         </button>
                      ))}
                   </div>
                )}
             </div>

             <div className="mt-auto pt-6 border-t border-gray-100">
                <Button asChild className="w-full rounded-full h-12 text-base shadow-lg hover:shadow-xl transition-all">
                   <a href={waHref} target="_blank" rel="noreferrer">
                      Order / Customize Now
                   </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                   Secure order via WhatsApp
                </p>
             </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}
