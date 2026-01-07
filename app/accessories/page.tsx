import SectionHeading from "@/components/section-heading"
import { Separator } from "@/components/ui/separator"
import ProductCard from "@/components/product-card"
import { allProducts } from "@/lib/products"

const sections = [
  { id: "nikkah-essentials", title: "Nikkah Essentials", desc: "Signature pieces for your Nikkah day — elegant, floral, and memorable." },
  { id: "wedding-props-decor", title: "Wedding Props & Decor", desc: "Cute props, boards, and decor for photos and moments." },
  { id: "ring-ritual-items", title: "Ring & Ritual Items", desc: "Plates, plaques, and ritual items with a premium finish." },
  { id: "favours-gifts", title: "Favours & Gifts", desc: "Thoughtful giveaways and gift-style favours." },
  { id: "bridal-accessories", title: "Bridal Accessories", desc: "Bridal accessories that complete the look." },
] as const

export default function AccessoriesPage() {
  return (
    <div className="container py-12 md:py-14">
      <SectionHeading
        eyebrow="Accessories"
        title="Wedding essentials & florals"
        desc="Browse categories and tap WhatsApp for pictures, price and customization."
      />

      <div className="mt-10 space-y-12">
        {sections.map((s) => {
          const products = allProducts.filter((p) => p.category.toLowerCase().replaceAll(" & ", " ").replaceAll(" ", "-") === s.id)
          // Fallback mapping for ids to categories
          const byId = (id: string) => {
            if (id === "nikkah-essentials") return "Nikkah Essentials"
            if (id === "wedding-props-decor") return "Wedding Props & Decor"
            if (id === "ring-ritual-items") return "Ring & Ritual Items"
            if (id === "favours-gifts") return "Favours & Gifts"
            if (id === "bridal-accessories") return "Bridal Accessories"
            return ""
          }
          const items = allProducts.filter((p) => p.category === byId(s.id))

          return (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-3xl">{s.title}</h2>
                <p className="text-sm md:text-base text-charcoal/80 max-w-3xl">{s.desc}</p>
              </div>
              <Separator className="my-6" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.name} name={p.name} category={p.category} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
