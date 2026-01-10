"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Instagram, Facebook, Music2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Brand from "@/components/brand"
import { cn } from "@/lib/utils"
// import { SITE } from "@/lib/site" // Importing SITE for social links

const nav = [
  { label: "Home", href: "/" },
  { label: "Accessories", href: "/accessories" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-[#FFFDF7]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="px-7">
           <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Brand />
           </Link>
        </div>
        
        <div className="flex flex-col gap-8 py-10 pl-7 pr-6 h-full">
           <nav className="flex flex-col gap-6">
              {nav.map((item, index) => (
                 <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                       "text-2xl font-serif tracking-wide transition-colors hover:text-primary",
                       pathname === item.href ? "text-primary font-medium" : "text-charcoal/80"
                    )}
                 >
                    {item.label}
                 </Link>
              ))}
           </nav>

           <div className="mt-auto pb-10 space-y-6">
              <div className="h-px bg-border/50 w-full" />
              <div className="flex gap-4">
                 <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Link href="#" aria-label="Instagram">
                       <Instagram className="h-5 w-5" />
                    </Link>
                 </Button>
                 <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Link href="#" aria-label="Facebook">
                       <Facebook className="h-5 w-5" />
                    </Link>
                 </Button>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                 Designed for your special day
              </p>
           </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
