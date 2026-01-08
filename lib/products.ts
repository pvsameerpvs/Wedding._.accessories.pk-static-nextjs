export type Product = {
  name: string
  category: string
  tag?: string
  image?: string // Primary thumbnail
  images?: string[] // Gallery images
  description?: string
}

export const featuredCategories = [
  { title: "Nikkah Stationery", href: "/accessories#nikkah-stationery-documentation", desc: "Luxury Nikkah pens, booklets & certificates.", image: "/products/nikkah-essentials.jpg" },
  { title: "Rings & Platters", href: "/accessories#rings-platter-accessories", desc: "Customized ring plates & resin works.", image: "/products/ring-plaque.jpeg" },
  { title: "Wedding Rituals", href: "/accessories#wedding-ritual-items", desc: "Doodh pilai glasses & tradition essentials.", image: "/products/doodhpilai.jpeg" },
  { title: "Dupatta & Veils", href: "/accessories#dupatta-veil-collection", desc: "Embroidered nikkah dupattas & bridal veils.", image: "/products/bridal-veil.jpeg" },
] as const

export const popularProducts: Product[] = [
  { 
    name: "Luxury Nikkah booklet with box", 
    category: "Nikkah Stationery & Documentation", 
    tag: "Best Seller", 
    image: "/products/nikkah-booklet.jpeg", 
    images: [
      "/products/nikkah-booklet.jpeg", 
      "/products/nikkah-essentials.jpg", 
      "/products/nikkah-box-set.jpeg", 
      "/products/product.png"
    ] 
  },
  { name: "Resin ring & thumb plaque", category: "Resin & Acrylic Products", tag: "Trending", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg"] },
  { name: "Premium Nikkah box set", category: "Gift Boxes & Mehar Items", tag: "Premium", image: "/products/nikkah-box-set.jpeg", images: ["/products/nikkah-box-set.jpeg"] },
  { name: "Customized wedding props", category: "Props & Decorative Accessories", tag: "Custom", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg"] },
  { name: "Bridal veil", category: "Dupatta & Veil Collection", tag: "New", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg"] },
  { name: "Artificial garlands", category: "Floral & Garlands", tag: "Elegant", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg"] },
] as const

export const allProducts: Product[] = [
// Nikkah Stationery & Documentation
  { name: "Nikkah pens", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Luxury Nikkah pens", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Nikkah booklet", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Luxury Nikkah booklet with box", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Nikkah certificate", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Invitation card with box", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Nikkah deal", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },

  // Rings & Platter Accessories
  { name: "Engagement ring plate", category: "Rings & Platter Accessories", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg"] },
  { name: "Ring platter", category: "Rings & Platter Accessories", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg"] },
  { name: "Customized ring plates", category: "Rings & Platter Accessories", image: "/products/custom-ring-plate.jpeg", images: ["/products/custom-ring-plate.jpeg", "/products/custom-ring-plate.jpeg", "/products/custom-ring-plate.jpeg", "/products/custom-ring-plate.jpeg"] },
  { name: "Resin ring plate", category: "Rings & Platter Accessories", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg"] },

  // Resin & Acrylic Products
  { name: "Resin thumb plaque", category: "Resin & Acrylic Products", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg"] },
  { name: "Resin signature plaque", category: "Resin & Acrylic Products", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg"] },
  { name: "Resin Quran Rehal", category: "Resin & Acrylic Products", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Acrylic welcome board", category: "Resin & Acrylic Products", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Thumb board", category: "Resin & Acrylic Products", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg", "/products/ring-plate.jpeg"] },

  // Wedding Ritual Items
  { name: "Doodh pilai glass", category: "Wedding Ritual Items", image: "/products/doodhpilai.jpeg", images: ["/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg"] },
  { name: "Luxury wedding glass", category: "Wedding Ritual Items", image: "/products/doodhpilai.jpeg", images: ["/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg"] },
  { name: "Wedding glass", category: "Wedding Ritual Items", image: "/products/doodhpilai.jpeg", images: ["/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg"] },
  { name: "Doodhpilai matki", category: "Wedding Ritual Items", image: "/products/doodhpilai.jpeg", images: ["/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg", "/products/doodhpilai.jpeg"] },
  { name: "Pan patta / Mehndi rasam", category: "Wedding Ritual Items", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Customized handmade Imam Zamin", category: "Wedding Ritual Items", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },

  // Gift Boxes & Mehar Items
  { name: "Premium Nikkah box set", category: "Gift Boxes & Mehar Items", image: "/products/nikkah-box-set.jpeg", images: ["/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg"] },
  { name: "Nikkah box", category: "Gift Boxes & Mehar Items", image: "/products/nikkah-box-set.jpeg", images: ["/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg"] },
  { name: "Haq mehar envelope", category: "Gift Boxes & Mehar Items", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Haq mehar box", category: "Gift Boxes & Mehar Items", image: "/products/nikkah-box-set.jpeg", images: ["/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg"] },
  { name: "Transparent Haq mehar box", category: "Gift Boxes & Mehar Items", image: "/products/nikkah-box-set.jpeg", images: ["/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg", "/products/nikkah-box-set.jpeg"] },

  // Dupatta & Veil Collection
  { name: "Rukhsati dupatta", category: "Dupatta & Veil Collection", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg"] },
  { name: "Nikkah dupatta", category: "Dupatta & Veil Collection", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg"] },
  { name: "Customized Nikkah dupatta", category: "Dupatta & Veil Collection", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg"] },
  { name: "Aytalkursi dupatta", category: "Dupatta & Veil Collection", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg"] },
  { name: "Duao wala dupatta", category: "Dupatta & Veil Collection", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg"] },
  { name: "Customized Nikkah veil", category: "Dupatta & Veil Collection", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg"] },
  { name: "Bridal veil", category: "Dupatta & Veil Collection", image: "/products/bridal-veil.jpeg", images: ["/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg", "/products/bridal-veil.jpeg"] },

  // Props & Decorative Accessories
  { name: "Customized engagement props", category: "Props & Decorative Accessories", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Customized printed props", category: "Props & Decorative Accessories", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Printed props", category: "Props & Decorative Accessories", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Bride to be props", category: "Props & Decorative Accessories", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Welcome board", category: "Props & Decorative Accessories", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },

  // Sweets & Favours
  { name: "Chocolate favours card", category: "Sweets & Favours", image: "/products/chocolate-cards.jpeg", images: ["/products/chocolate-cards.jpeg", "/products/chocolate-cards.jpeg", "/products/chocolate-cards.jpeg", "/products/chocolate-cards.jpeg"] },
  { name: "Customized sweets toppers", category: "Sweets & Favours", image: "/products/sweets-toppers.jpeg", images: ["/products/sweets-toppers.jpeg", "/products/sweets-toppers.jpeg", "/products/sweets-toppers.jpeg", "/products/sweets-toppers.jpeg"] },

  // Floral & Garlands
  { name: "Artificial gajry", category: "Floral & Garlands", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Customized gajry", category: "Floral & Garlands", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Artificial garlands", category: "Floral & Garlands", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
  { name: "Artificial flowers bouquet", category: "Floral & Garlands", image: "/products/nikkah-essentials.jpg", images: ["/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg", "/products/nikkah-essentials.jpg"] },
] as const
