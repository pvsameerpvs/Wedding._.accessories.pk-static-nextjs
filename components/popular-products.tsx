import SectionHeading from "@/components/section-heading"
import ProductCard from "@/components/product-card"
import { popularProducts } from "@/lib/products"

export default function PopularProducts() {
  return (
    <section className="container pb-14">
      <SectionHeading
        eyebrow="Trending"
        title="Popular products"
        desc="Tap WhatsApp and we’ll share designs, pricing & customization options."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {popularProducts.map((p) => (
          <ProductCard key={p.name} category={p.category} tag={p.tag} name={p.name} />
        ))}
      </div>
    </section>
  )
}
