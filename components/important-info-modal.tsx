"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Package, Globe, CreditCard } from "lucide-react"

export function ImportantInfoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Open slightly after mount to ensure smooth entrance
    const timer = setTimeout(() => setIsOpen(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-lg bg-white p-6 md:p-8 rounded-[2rem] border-none shadow-2xl max-h-[90vh] overflow-y-auto">
        <VisuallyHidden>
            <DialogTitle>Important Information</DialogTitle>
        </VisuallyHidden>
        
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#991B1B] uppercase tracking-wide">
            Important
          </h2>

          {/* Local Delivery */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-charcoal">
               <Package className="w-5 h-5 text-[#B45309]" /> Local Delivery
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Customization takes up to two weeks. Please place your order at least three weeks before your event to ensure timely delivery. For urgent orders, we offer a one-week delivery option at an additional cost of 1,000 PKR.
            </p>
          </div>

          {/* International Orders */}
          <div className="space-y-2">
             <div className="flex items-center justify-center gap-2 text-lg font-semibold text-charcoal">
               <Globe className="w-5 h-5 text-[#B45309]" /> International Orders
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              To ensure timely delivery, please place your order at least one month before your event. Shipping costs will be calculated based on the dimensions and weight of your parcel.
            </p>
          </div>

          {/* Payment Method */}
           <div className="space-y-2">
             <div className="flex items-center justify-center gap-2 text-lg font-semibold text-charcoal">
               <CreditCard className="w-5 h-5 text-[#166534]" /> Payment Method
            </div>
            <p className="text-sm md:text-base text-charcoal font-medium">
              BANK TRANSFER, WESTERN UNION, REMITLY & RIA
            </p>
          </div>

          <Button asChild size="lg" className="rounded-full px-10 h-12 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto" onClick={() => setIsOpen(false)}>
            <Link href="/accessories">SHOP NOW</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
