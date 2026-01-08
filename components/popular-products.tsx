import Link from "next/link"
import ProductCard from "@/components/product-card"
import { popularProducts } from "@/lib/products"
import { Button } from "@/components/ui/button"

export default function PopularProducts() {
  return (
    <section className="container py-20 lg:py-28">
      <div className="text-center space-y-4 mb-16 animate-fadeUp">
         <span className="font-serif italic text-2xl text-primary/80">Trending Now</span>
         <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
            Loved by Brides
         </h2>
         <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Handpicked favorites that are making weddings unforgettable this season.
         </p>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {popularProducts.map((p, i) => (
          <div key={p.name} className="animate-fadeUp" style={{ animationDelay: `${i * 100}ms` }}>
             <ProductCard category={p.category} tag={p.tag} name={p.name} image={p.image} images={p.images} />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center animate-fadeUp [animation-delay:400ms]">
         <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 border-charcoal/20 hover:bg-charcoal/5">
            <Link href="/accessories">View All Collection</Link>
         </Button>
      </div>
    </section>
  )
}
