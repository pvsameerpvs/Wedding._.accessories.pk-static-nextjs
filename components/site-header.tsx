import Link from "next/link"
import Brand from "@/components/brand"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "Home", href: "/" },
  { label: "Accessories", href: "/accessories" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/70 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Brand />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-charcoal/90 hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/accessories">Shop</Link>
          </Button>
        </div>
      </div>

      <div className="md:hidden border-t border-border/50">
        <div className="container flex gap-2 overflow-x-auto py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-charcoal/90 hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
