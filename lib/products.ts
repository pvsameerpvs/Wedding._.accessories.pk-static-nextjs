export type Product = {
  name: string
  category: string
  tag?: string
  image?: string // Primary thumbnail
  images?: string[] // Gallery images
  description?: string
}

export const featuredCategories = [
  { title: "Nikkah Stationery", href: "/accessories#nikkah-stationery-documentation", desc: "Luxury Nikkah pens, booklets & certificates.", image: "/products/nikkah-pens4.jpeg" },
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
  { name: "Ring platter", category: "Ring & Platter Accessories", tag: "Trending", image: "/products/ring-plate.jpeg", images: ["/products/ring-plate.jpeg","/products/engagement-ring-plate2.jpeg","/products/engagement-ring-plate3.jpeg","/products/engagement-ring-plate4.jpeg","/products/engagement-ring-plate5.jpeg"] },
  { name: "Premium Nikkah box set", category: "Gift Boxes & Mehar Items", tag: "Premium", image: "/products/nikkah-box-set.jpeg", images: ["/products/nikkah-box-set.jpeg"] },
  { name: "Customized wedding props", category: "Props & Decorative Accessories", tag: "Custom", image: "/products/customized-printed-props1.jpeg", images: ["/products/customized-printed-props2.jpeg"] },
  { name: "Bridal veil", category: "Dupatta & Veil Collection", tag: "New", image: "/products/bridal-veil1.jpeg", images: ["/products/bridal-veil1.jpeg", "/products/bridal-veil2.jpeg"] },
  { name: "Artificial garlands", category: "Floral & Garlands", tag: "Elegant", image: "/products/Artificial-garlands1.jpeg", images: ["/products/Artificial-garlands2.jpeg", "/products/Artificial-garlands3.jpeg"] },
] as const

export const allProducts: Product[] = [
// Nikkah Stationery & Documentation
  { name: "Nikkah pens", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-pens1.jpeg", images: ["/products/nikkah-pens2.jpeg", "/products/nikkah-pens3.jpeg", "/products/nikkah-pens4.jpeg", "/products/nikkah-pens5.jpeg"] },
  { name: "Luxury Nikkah pens", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-pens4.jpeg", images: ["/products/luxury-nikkah-pens1.jpeg", "/products/luxury-nikkah-pens2.jpeg", "/products/luxury-nikkah-pens3.jpeg", "/products/luxury-nikkah-pens4.jpeg"] },
  { name: "Nikkah booklet", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-booklet2.jpeg", images: ["/products/nikkah-booklet1.jpeg", "/products/nikkah-booklet3.jpeg", "/products/nikkah-booklet4.jpeg", "/products/nikkah-booklet5.jpeg"] },
  { name: "Luxury Nikkah booklet with box", category: "Nikkah Stationery & Documentation", image: "/products/luxury-nikkah-booklet-with-box1.jpeg", images: ["/products/luxury-nikkah-booklet-with-box2.jpeg", "/products/luxury-nikkah-booklet-with-box3.jpeg", "/products/luxury-nikkah-booklet-with-box4.jpeg", "/products/luxury-nikkah-booklet-with-box5.jpeg"] },
  { name: "Nikkah certificate", category: "Nikkah Stationery & Documentation", image: "/products/Nikkah certificate1.jpeg", images: ["/products/Nikkah certificate2.jpeg", "/products/Nikkah certificate3.jpeg", "/products/Nikkah certificate4.jpeg", "/products/Nikkah certificate5.jpeg"] },
  { name: "Invitation card with box", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-invitation-card.jpeg", images: ["/products/nikkah-invitation-card.jpeg", "/products/nikkah-invitation-card.jpeg", "/products/nikkah-invitation-card.jpeg", "/products/nikkah-invitation-card.jpeg"] },
  { name: "Nikkah deal", category: "Nikkah Stationery & Documentation", image: "/products/Nikkah-deal1.jpeg", images: ["/products/Nikkah deal2.jpeg", "/products/Nikkah deal3.jpeg", "/products/Nikkah deal4.jpeg", "/products/Nikkah deal5.jpeg"] },

  // Rings & Platter Accessories
  { name: "Engagement ring plate", category: "Rings & Platter Accessories", image: "/products/engagement-ring-plate1.jpeg", images: ["/products/engagement-ring-plate2.jpeg", "/products/engagement-ring-plate3.jpeg", "/products/engagement-ring-plate4.jpeg", "/products/engagement-ring-plate5.jpeg"] },
  { name: "Ring platter", category: "Rings & Platter Accessories", image: "/products/ring-plate1.jpeg", images: ["/products/ring-plate2.jpeg", "/products/ring-plate3.jpeg", "/products/ring-plate4.jpeg", "/products/ring-plate5.jpeg"] },
  { name: "Customized ring plates", category: "Rings & Platter Accessories", image: "/products/custom-ring-plate1.jpeg", images: ["/products/custom-ring-plate2.jpeg", "/products/custom-ring-plate3.jpeg", "/products/custom-ring-plate4.jpeg", "/products/custom-ring-plate5.jpeg"] },
  { name: "Resin ring plate", category: "Rings & Platter Accessories", image: "/products/resin-ring-plate1.jpeg", images: ["/products/resin-ring-plate2.jpeg", "/products/resin-ring-plate3.jpeg", "/products/resin-ring-plate4.jpeg", "/products/resin-ring-plate5.jpeg"] },

  // Resin & Acrylic Products
  { name: "Resin thumb plaque", category: "Resin & Acrylic Products", image: "/products/Resin-thumb-plaque1.jpeg", images: ["/products/Resin-thumb-plaque2.jpeg", "/products/Resin-thumb-plaque3.jpeg", "/products/Resin-thumb-plaque4.jpeg", "/products/Resin-thumb-plaque5.jpeg"] },
  { name: "Resin signature plaque", category: "Resin & Acrylic Products", image: "/products/resin-signature-plaque1.jpeg", images: ["/products/resin-signature-plaque2.jpeg", "/products/resin-signature-plaque3.jpeg", "/products/resin-signature-plaque4.jpeg", "/products/resin-signature-plaque5.jpeg"] },
  { name: "Resin Quran Rehal", category: "Resin & Acrylic Products", image: "/products/resin-quran-rehal1.jpeg", images: ["/products/resin-quran-rehal2.jpeg", "/products/resin-quran-rehal3.jpeg", "/products/resin-quran-rehal4.jpeg", "/products/resin-quran-rehal5.jpeg"] },
  { name: "Acrylic welcome board", category: "Resin & Acrylic Products", image: "/products/acrylic-welcome-board1.jpeg", images: ["/products/acrylic-welcome-board2.jpeg", "/products/acrylic-welcome-board3.jpeg", "/products/acrylic-welcome-board4.jpeg", "/products/acrylic-welcome-board5.jpeg"] },
  { name: "Thumb board", category: "Resin & Acrylic Products", image: "/products/thumb-board1.jpeg", images: ["/products/thumb-board2.jpeg", "/products/thumb-board3.jpeg", "/products/thumb-board4.jpeg", "/products/thumb-board5.jpeg"] },

  // Wedding Ritual Items
  { name: "Doodh pilai glass", category: "Wedding Ritual Items", image: "/products/doodhpilai1.jpeg", images: ["/products/doodhpilai2.jpeg", "/products/doodhpilai3.jpeg", "/products/doodhpilai4.jpeg", "/products/doodhpilai5.jpeg"] },
  { name: "Luxury wedding glass", category: "Wedding Ritual Items", image: "/products/luxury-wedding-glass1.jpeg", images: ["/products/luxury-wedding-glass2.jpeg", "/products/luxury-wedding-glass3.jpeg", "/products/luxury-wedding-glass4.jpeg", "/products/luxury-wedding-glass5.jpeg"] },
  { name: "Wedding glass", category: "Wedding Ritual Items", image: "/products/wedding-glass1.jpeg", images: ["/products/wedding-glass2.jpeg", "/products/wedding-glass3.jpeg", "/products/wedding-glass4.jpeg", "/products/wedding-glass5.jpeg"] },
  { name: "Doodhpilai matki", category: "Wedding Ritual Items", image: "/products/doodhpilai-matki1.jpeg", images: ["/products/doodhpilai-matki2.jpeg", "/products/doodhpilai-matki3.jpeg", "/products/doodhpilai-matki4.jpeg", "/products/doodhpilai-matki5.jpeg"] },
  { name: "Pan patta / Mehndi rasam", category: "Wedding Ritual Items", image: "/products/pan-patta-mehndi-rasam1.jpeg", images: ["/products/pan-patta-mehndi-rasam2.jpeg", "/products/pan-patta-mehndi-rasam3.jpeg", "/products/pan-patta-mehndi-rasam4.jpeg", "/products/pan-patta-mehndi-rasam5.jpeg"] },
  { name: "Customized handmade Imam Zamin", category: "Wedding Ritual Items", image: "/products/imam-zamin1.jpeg", images: ["/products/imam-zamin2.jpeg", "/products/imam-zamin3.jpeg", "/products/imam-zamin4.jpeg", "/products/imam-zamin5.jpeg"] },

  // Gift Boxes & Mehar Items
  { name: "Premium Nikkah box set", category: "Gift Boxes & Mehar Items", image: "/products/premium-nikkah-box-set1.jpeg", images: ["/products/premium-nikkah-box-set2.jpeg", "/products/premium-nikkah-box-set3.jpeg", "/products/premium-nikkah-box-set4.jpeg", "/products/premium-nikkah-box-set5.jpeg"] },
  { name: "Nikkah box", category: "Gift Boxes & Mehar Items", image: "/products/nikkah-box1.jpeg", images: ["/products/nikkah-box2.jpeg", "/products/nikkah-box3.jpeg", "/products/nikkah-box4.jpeg", "/products/nikkah-box5.jpeg"] },
  { name: "Haq mehar envelope", category: "Gift Boxes & Mehar Items", image: "/products/haq-mehar-envelope1.jpeg", images: ["/products/haq-mehar-envelope2.jpeg", "/products/haq-mehar-envelope3.jpeg", "/products/haq-mehar-envelope4.jpeg", "/products/haq-mehar-envelope5.jpeg"] },
  { name: "Haq mehar box", category: "Gift Boxes & Mehar Items", image: "/products/haq-mehar-box1.jpeg", images: ["/products/haq-mehar-box2.jpeg", "/products/haq-mehar-box3.jpeg", "/products/haq-mehar-box4.jpeg", "/products/haq-mehar-box5.jpeg"] },
  { name: "Transparent Haq mehar box", category: "Gift Boxes & Mehar Items", image: "/products/transparent-haq-mehar-box1.jpeg", images: ["/products/transparent-haq-mehar-box2.jpeg", "/products/transparent-haq-mehar-box3.jpeg", "/products/transparent-haq-mehar-box4.jpeg", "/products/transparent-haq-mehar-box5.jpeg"] },

  // Dupatta & Veil Collection
  { name: "Rukhsati dupatta", category: "Dupatta & Veil Collection", image: "/products/rukhsati-dupatta1.jpeg", images: ["/products/rukhsati-dupatta2.jpeg", "/products/rukhsati-dupatta3.jpeg", "/products/rukhsati-dupatta4.jpeg", "/products/rukhsati-dupatta5.jpeg"] },
  { name: "Nikkah dupatta", category: "Dupatta & Veil Collection", image: "/products/nikkah-dupatta1.jpeg", images: ["/products/nikkah-dupatta2.jpeg", "/products/nikkah-dupatta3.jpeg", "/products/nikkah-dupatta4.jpeg", "/products/nikkah-dupatta5.jpeg"] },
  { name: "Customized Nikkah dupatta", category: "Dupatta & Veil Collection", image: "/products/customized-nikkah-dupatta1.jpeg", images: ["/products/customized-nikkah-dupatta2.jpeg", "/products/customized-nikkah-dupatta3.jpeg", "/products/customized-nikkah-dupatta4.jpeg", "/products/customized-nikkah-dupatta5.jpeg"] },
  { name: "Aytalkursi dupatta", category: "Dupatta & Veil Collection", image: "/products/altalkursi-dupatta1.jpeg", images: ["/products/altalkursi-dupatta2.jpeg", "/products/altalkursi-dupatta3.jpeg", "/products/altalkursi-dupatta4.jpeg", "/products/altalkursi-dupatta5.jpeg"] },
  { name: "Duao wala dupatta", category: "Dupatta & Veil Collection", image: "/products/duao-wala-dupatta1.jpeg", images: ["/products/duao-wala-dupatta2.jpeg", "/products/duao-wala-dupatta3.jpeg", "/products/duao-wala-dupatta4.jpeg", "/products/duao-wala-dupatta5.jpeg"] },
  { name: "Customized Nikkah veil", category: "Dupatta & Veil Collection", image: "/products/customized-nikkah-veil1.jpeg", images: ["/products/customized-nikkah-veil2.jpeg", "/products/customized-nikkah-veil3.jpeg", "/products/customized-nikkah-veil4.jpeg", "/products/customized-nikkah-veil5.jpeg"] },
  { name: "Bridal veil", category: "Dupatta & Veil Collection", image: "/products/bridal-veil1.jpeg", images: ["/products/bridal-veil2.jpeg", "/products/bridal-veil3.jpeg", "/products/bridal-veil4.jpeg", "/products/bridal-veil5.jpeg"] },

  // Props & Decorative Accessories
  { name: "Customized engagement props", category: "Props & Decorative Accessories", image: "/products/customized-engagement-props1.jpeg", images: ["/products/customized-engagement-props2.jpeg", "/products/customized-engagement-props3.jpeg", "/products/customized-engagement-props4.jpeg", "/products/customized-engagement-props5.jpeg"] },
  { name: "Customized printed props", category: "Props & Decorative Accessories", image: "/products/customized-printed-props1.jpeg", images: ["/products/customized-printed-props2.jpeg", "/products/customized-printed-props3.jpeg", "/products/customized-printed-props4.jpeg", "/products/customized-printed-props5.jpeg"] },
  { name: "Printed props", category: "Props & Decorative Accessories", image: "/products/printed-props1.jpeg", images: ["/products/printed-props2.jpeg", "/products/printed-props3.jpeg", "/products/printed-props4.jpeg", "/products/printed-props5.jpeg"] },
  { name: "Bride to be props", category: "Props & Decorative Accessories", image: "/products/bride-to-be-props1.jpeg", images: ["/products/bride-to-be-props2.jpeg", "/products/bride-to-be-props3.jpeg", "/products/bride-to-be-props4.jpeg", "/products/bride-to-be-props5.jpeg"] },
  { name: "Welcome board", category: "Props & Decorative Accessories", image: "/products/welcome-board1.jpeg", images: ["/products/welcome-board2.jpeg", "/products/welcome-board3.jpeg", "/products/welcome-board4.jpeg", "/products/welcome-board5.jpeg"] },

  // Sweets & Favours
  { name: "Chocolate favours card", category: "Sweets & Favours", image: "/products/chocolate-cards1.jpeg", images: ["/products/chocolate-cards2.jpeg", "/products/chocolate-cards3.jpeg", "/products/chocolate-cards4.jpeg", "/products/chocolate-cards5.jpeg"] },
  { name: "Customized sweets toppers", category: "Sweets & Favours", image: "/products/sweets-toppers1.jpeg", images: ["/products/sweets-toppers2.jpeg", "/products/sweets-toppers3.jpeg", "/products/sweets-toppers4.jpeg", "/products/sweets-toppers5.jpeg"] },

  // Floral & Garlands
  { name: "Artificial gajry", category: "Floral & Garlands", image: "/products/artificial-gajry1.jpeg", images: ["/products/artificial-gajry2.jpeg", "/products/artificial-gajry3.jpeg", "/products/artificial-gajry4.jpeg", "/products/artificial-gajry5.jpeg"] },
  { name: "Customized gajry", category: "Floral & Garlands", image: "/products/customized-gajry1.jpeg", images: ["/products/customized-gajry2.jpeg", "/products/customized-gajry3.jpeg", "/products/customized-gajry4.jpeg", "/products/customized-gajry5.jpeg"] },
  { name: "Artificial garlands", category: "Floral & Garlands", image: "/products/Artificial-garlands1.jpeg", images: ["/products/Artificial-garlands2.jpeg", "/products/Artificial-garlands3.jpeg", "/products/Artificial-garlands4.jpeg", "/products/Artificial-garlands5.jpeg"] },
  { name: "Artificial flowers bouquet", category: "Floral & Garlands", image: "/products/Artificial-flowers-bouquet1.jpeg", images: ["/products/Artificial-flowers-bouquet2.jpeg", "/products/Artificial-flowers-bouquet3.jpeg", "/products/Artificial-flowers-bouquet4.jpeg", "/products/Artificial-flowers-bouquet5.jpeg"] },
] as const
