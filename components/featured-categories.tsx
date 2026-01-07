import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import { featuredCategories } from "@/lib/products"

export default function FeaturedCategories() {
  return (
    <section className="container py-14">
      <SectionHeading
        eyebrow="Shop by vibe"
        title="Featured categories"
        desc="Handpicked essentials for Nikkah, weddings, and everything in between — in a soft floral style."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCategories.map((c) => (
          <Link key={c.href} href={c.href} className="group">
            <div className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-soft transition-transform group-hover:-translate-y-1">
              <div className="h-10 w-10 rounded-2xl flower-divider opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="mt-4 font-serif text-xl">{c.title}</div>
              <div className="mt-2 text-sm text-charcoal/75">{c.desc}</div>
              <div className="mt-4 text-sm font-medium text-charcoal/90 underline decoration-primary/70 underline-offset-4">
                Explore
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
