import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-xl rounded-3xl border border-border/70 bg-card/80 p-10 text-center shadow-soft">
        <div className="font-serif text-3xl">Page not found</div>
        <p className="mt-3 text-sm text-charcoal/75">This page doesn’t exist. Let’s get you back to the florals.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/accessories">Accessories</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
