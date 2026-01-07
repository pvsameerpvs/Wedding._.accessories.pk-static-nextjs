import Link from "next/link"
import Brand from "@/components/brand"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { SITE } from "@/lib/site"

const nav = [
  { label: "Home", href: "/" },
  { label: "Accessories", href: "/accessories" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "About Us", href: "/about" },
] as const

export default function SiteHeader() {
  return (
    <header className="sticky top-4 z-40 w-full px-4 md:px-6">
       <div className="mx-auto max-w-7xl rounded-full border border-white/20 bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 supports-[backdrop-filter]:bg-white/60">
          <div className="container flex h-16 items-center justify-between px-6">
             <div className="flex items-center gap-4">
                <MobileNav />
                <Link href="/" className="flex items-center gap-2">
                   <Brand />
                </Link>
             </div>

             <nav className="hidden md:flex items-center gap-8">
                {nav.map((item) => (
                   <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium text-charcoal/80 transition-colors hover:text-primary"
                   >
                      {item.label}
                   </Link>
                ))}
            </nav>

             <div className="flex items-center gap-4">
                <Button asChild className="hidden sm:inline-flex rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20" size="sm">
                   <Link href="/contact">Book Consultation</Link>
                </Button>
             </div>
          </div>
       </div>
    </header>
  )
}
