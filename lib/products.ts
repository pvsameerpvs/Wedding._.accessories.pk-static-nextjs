export type Product = {
  name: string
  category: string
  tag?: string
  image?: string // Primary thumbnail
  images?: string[] // Gallery images
  description?: string
}

export const featuredCategories = [
  { title: "Nikkah Stationery", href: "/accessories?category=nikkah-stationery", desc: "Luxury Nikkah pens, booklets & certificates.", image: "/products/nikkah-pens4.jpeg" },
  { title: "Rings & Platters", href: "/accessories?category=rings-platters", desc: "Customized ring plates & resin works.", image: "/products/ring-plaque.jpeg" },
  { title: "Wedding Rituals", href: "/accessories?category=wedding-rituals", desc: "Doodh pilai glasses & tradition essentials.", image: "/products/doodhpilai.jpeg" },
  { title: "Dupatta & Veils", href: "/accessories?category=dupatta-veils", desc: "Embroidered nikkah dupattas & bridal veils.", image: "/products/bridal-veil.jpeg" },
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
  { name: "Ring platter", category: "Ring & Platter Accessories", tag: "Trending", image: "/products/custom-plate.jpeg", images: ["/products/ring-plate.jpeg","/products/engagement-ring-plate2.jpeg","/products/engagement-ring-plate3.jpeg","/products/engagement-ring-plate4.jpeg","/products/engagement-ring-plate5.jpeg"] },
  { name: "Premium Nikkah box set", category: "Gift Boxes & Mehar Items", tag: "Premium", image: "/products/nikkah-box-set.jpeg", images: ["/products/nikkah-box-set.jpeg"] },
  { name: "Customized wedding props", category: "Props & Decorative Accessories", tag: "Custom", image: "/products/customized-printed-props1.jpeg", images: ["/products/customized-printed-props2.jpeg"] },
  { name: "Bridal veil", category: "Dupatta & Veil Collection", tag: "New", image: "/products/bridal-veil1.jpeg", images: ["/products/bridal-veil1.jpeg", "/products/bridal-veil2.jpeg"] },
  { name: "Bridal gajry", category: "Dupatta & gajry Collection", tag: "New", image: "/products/bridal-gajry1.jpeg", images: ["/products/bridal-gajry2.jpeg", "/products/bridal-gajry3.jpeg", "/products/bridal-gajry4.jpeg", "/products/bridal-gajry5.jpeg"] },
  { name: "Artificial garlands", category: "Floral & Garlands", tag: "Elegant", image: "/products/Artificial-garlands1.jpeg", images: ["/products/Artificial-garlands2.jpeg", "/products/Artificial-garlands3.jpeg"] },
] as const

export const allProducts: Product[] = [
// Nikkah Stationery & Documentation
  { name: "Nikkah pens", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-pens1.jpeg", images: ["/products/nikkah-pens2.jpeg", "/products/nikkah-pens3.jpeg", "/products/nikkah-pens4.jpeg", "/products/nikkah-pens5.jpeg"] },
  { name: "Luxury Nikkah pens", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-pens4.jpeg", images: ["/products/luxury-nikkah-pens1.jpeg", "/products/luxury-nikkah-pens2.jpeg", "/products/luxury-nikkah-pens3.jpeg", "/products/luxury-nikkah-pens4.jpeg"] },
  { name: "Nikkah booklet", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-booklet2.jpeg", images: ["/products/nikkah-booklet1.jpeg", "/products/nikkah-booklet3.jpeg", "/products/nikkah-booklet4.jpeg"] },
  { name: "Luxury Nikkah booklet with box", category: "Nikkah Stationery & Documentation", image: "/products/luxury-nikkah-booklet-with-box1.jpeg", images: ["/products/luxury-nikkah-booklet-with-box2.jpeg", "/products/luxury-nikkah-booklet-with-box3.jpeg", "/products/luxury-nikkah-booklet-with-box4.jpeg", "/products/luxury-nikkah-booklet-with-box5.jpeg", "/products/luxury-nikkah-booklet-with-box6.jpeg", "/products/luxury-nikkah-booklet-with-box7.jpeg", "/products/luxury-nikkah-booklet-with-box8.jpeg", "/products/luxury-nikkah-booklet-with-box9.jpeg"] },
  { name: "Nikkah certificate", category: "Nikkah Stationery & Documentation", image: "/products/Nikkah certificate1.jpeg", images: ["/products/Nikkah certificate2.jpeg", "/products/Nikkah certificate3.jpeg", "/products/Nikkah certificate4.jpeg", "/products/Nikkah certificate5.jpeg"] },
  { name: "Invitation card with box", category: "Nikkah Stationery & Documentation", image: "/products/nikkah-invitation-card.jpeg", images: ["/products/nikkah-invitation-card.jpeg", "/products/nikkah-invitation-card.jpeg", "/products/nikkah-invitation-card.jpeg", "/products/nikkah-invitation-card.jpeg"] },
  { name: "Nikkah deal", category: "Nikkah Stationery & Documentation", image: "/products/Nikkah-deal1.jpeg" },

  // Rings & Platter Accessories
  { name: "Engagement ring plate", category: "Rings & Platter Accessories", image: "/products/engagement-ring-plate1.jpeg", images: ["/products/engagement-ring-plate2.jpeg", "/products/engagement-ring-plate3.jpeg", "/products/engagement-ring-plate4.jpeg", "/products/engagement-ring-plate5.jpeg"] },
  { name: "Ring platter", category: "Rings & Platter Accessories", image: "/products/ring-plate1.jpeg", images: ["/products/ring-plate2.jpeg", "/products/ring-plate3.jpeg", "/products/ring-plate4.jpeg", "/products/ring-plate5.jpeg"] },
  { name: "Customized ring plates", category: "Rings & Platter Accessories", image: "/products/custom-ring-plate1.jpeg", images: ["/products/custom-ring-plate2.jpeg", "/products/custom-ring-plate3.jpeg", "/products/custom-ring-plate4.jpeg", "/products/custom-ring-plate5.jpeg"] },
  { name: "Resin ring plate", category: "Rings & Platter Accessories", image: "/products/resin-ring-plate1.jpeg", images: ["/products/resin-ring-plate2.jpeg", "/products/resin-ring-plate3.jpeg", "/products/resin-ring-plate4.jpeg", "/products/resin-ring-plate5.jpeg"] },

  // Resin & Acrylic Products
  { name: "Resin thumb plaque", category: "Resin & Acrylic Products", image: "/products/Resin-thumb-plaque1.jpeg", images: ["/products/Resin-thumb-plaque2.jpeg", "/products/Resin-thumb-plaque3.jpeg", "/products/Resin-thumb-plaque4.jpeg"] },
  { name: "Resin signature plaque", category: "Resin & Acrylic Products", image: "/products/resin-signature-plaque1.jpeg", images: ["/products/resin-signature-plaque2.jpeg", "/products/resin-signature-plaque3.jpeg"] },
  { name: "Resin Quran Rehal", category: "Resin & Acrylic Products", image: "/products/resin-quran-rehal1.jpeg" },
  { name: "Acrylic welcome board", category: "Resin & Acrylic Products", image: "/products/acrylic-welcome-board1.jpeg", images: ["/products/acrylic-welcome-board2.jpeg", "/products/acrylic-welcome-board3.jpeg",] },
  { name: "Thumb board", category: "Resin & Acrylic Products", image: "/products/thumb-board1.jpeg" },

  // Wedding Ritual Items
  { name: "Doodh pilai glass", category: "Wedding Ritual Items", image: "/products/doodhpilai1.jpeg", images: ["/products/doodhpilai2.jpeg", "/products/doodhpilai3.jpeg", "/products/doodhpilai4.jpeg"] },
  { name: "Luxury wedding glass", category: "Wedding Ritual Items", image: "/products/luxury-wedding-glass1.jpeg", images: ["/products/luxury-wedding-glass1.jpeg"] },
  { name: "Wedding glass", category: "Wedding Ritual Items", image: "/products/wedding-glass1.jpeg", images: ["/products/wedding-glass2.jpeg"] },
  { name: "Doodhpilai matki", category: "Wedding Ritual Items", image: "/products/doodhpilai-matki1.jpeg", images: ["/products/doodhpilai-matki1.jpeg"] },
  { name: "Pan patta / Mehndi rasam", category: "Wedding Ritual Items", image: "/products/pan-patta-mehndi-rasam1.jpeg", images: ["/products/pan-patta-mehndi-rasam1.jpeg"] },
  { name: "Customized handmade Imam Zamin", category: "Wedding Ritual Items", image: "/products/imam-zamin1.jpeg", images: ["/products/imam-zamin2.jpeg", "/products/imam-zamin3.jpeg", "/products/imam-zamin4.jpeg", "/products/imam-zamin5.jpeg","/products/imam-zamin6.jpeg","/products/imam-zamin7.jpeg"] },
  { name: "Doodhpilai wheel", category: "Wedding Ritual Items", image: "/products/doodhpilai-wheel1.jpeg", images: ["/products/doodhpilai-wheel1.jpeg","/products/doodhpilai-wheel2.jpeg","/products/doodhpilai-wheel3.jpeg"] },



  // Gift Boxes & Mehar Items
  { name: "Premium Nikkah box set", category: "Gift Boxes & Mehar Items", image: "/products/premium-nikkah-box-set1.jpeg", images: ["/products/premium-nikkah-box-set2.jpeg", "/products/premium-nikkah-box-set3.jpeg", "/products/premium-nikkah-box-set4.jpeg", "/products/premium-nikkah-box-set5.jpeg"] },
  { name: "Nikkah box", category: "Gift Boxes & Mehar Items", image: "/products/nikkah-box1.jpeg"},
  { name: "Haq mehar envelope", category: "Gift Boxes & Mehar Items", image: "/products/haq-mehar-envelope1.jpeg"},
  { name: "Haq mehar box", category: "Gift Boxes & Mehar Items", image: "/products/haq-mehar-box1.jpeg", images: ["/products/haq-mehar-box2.jpeg"] },
  { name: "Transparent Haq mehar box", category: "Gift Boxes & Mehar Items", image: "/products/transparent-haq-mehar-box1.jpeg"},
  { name: "Date fix accessories", category: "Gift Boxes & Date fix accessories", image: "/products/date-fix-accessories1.jpeg", images: ["/products/date-fix-accessories2.jpeg", "/products/date-fix-accessories3.jpeg", "/products/date-fix-accessories4.jpeg", "/products/date-fix-accessories5.jpeg"] },

  // Dupatta & Veil Collection
  { name: "Rukhsati dupatta", category: "Dupatta & Veil Collection", image: "/products/rukhsati-dupatta1.jpeg", images: ["/products/rukhsati-dupatta2.jpeg"] },
  { name: "Nikkah dupatta", category: "Dupatta & Veil Collection", image: "/products/nikkah-dupatta1.jpeg", images: ["/products/nikkah-dupatta2.jpeg", "/products/nikkah-dupatta3.jpeg"] },
  { name: "Customized Nikkah dupatta", category: "Dupatta & Veil Collection", image: "/products/customized-nikkah-dupatta1.jpeg", images: ["/products/customized-nikkah-dupatta2.jpeg", "/products/customized-nikkah-dupatta3.jpeg", "/products/customized-nikkah-dupatta4.jpeg", "/products/customized-nikkah-dupatta5.jpeg"] },
  { name: "Aytalkursi dupatta", category: "Dupatta & Veil Collection", image: "/products/altalkursi-dupatta1.jpeg", images: ["/products/altalkursi-dupatta2.jpeg"] },
  { name: "Duao wala dupatta", category: "Dupatta & Veil Collection", image: "/products/duao-wala-dupatta1.jpeg", images: ["/products/duao-wala-dupatta2.jpeg", "/products/duao-wala-dupatta3.jpeg", "/products/duao-wala-dupatta4.jpeg", "/products/duao-wala-dupatta5.jpeg"] },
  { name: "Customized Nikkah veil", category: "Dupatta & Veil Collection", image: "/products/customized-nikkah-veil1.jpeg"},
  { name: "Bridal veil", category: "Dupatta & Veil Collection", image: "/products/bridal-veil1.jpeg", images: ["/products/bridal-veil2.jpeg"] },
  { name: "Aytalkursi Entry dupatta", category: "Dupatta & Veil Collection", image: "/products/altalkursi-entry-dupatta1.jpeg", images: ["/products/altalkursi-entry-dupatta1.jpeg"] },
  { name: "Rasta Rukai", category: "Dupatta & Veil Collection", image: "/products/rasta-rukai1.jpeg", images: ["/products/rasta-rukai1.jpeg"] },
  { name: "Entry Chadar", category: "Dupatta & Veil Collection", image: "/products/entry-chadar1.jpeg", images: ["/products/entry-chadar1.jpeg"] },
  { name: "Mehndi Wall hanging decorations", category: "Dupatta & Veil Collection", image: "/products/mehndi-wall-hanging-decoration1.jpeg", images: ["/products/mehndi-wall-hanging-decoration1.jpeg"] },



  // Props & Decorative Accessories
  { name: "Customized engagement props", category: "Props & Decorative Accessories", image: "/products/customized-engagement-props1.jpeg", images: ["/products/customized-engagement-props1.jpeg"]},
  { name: "Customized printed props", category: "Props & Decorative Accessories", image: "/products/customized-printed-props1.jpeg", images: ["/products/customized-printed-props2.jpeg"] },
  { name: "Printed props", category: "Props & Decorative Accessories", image: "/products/printed-props1.jpeg", images: ["/products/printed-props1.jpeg"] },
  { name: "Bride to be props", category: "Props & Decorative Accessories", image: "/products/bride-to-be-props1.jpeg", images: ["/products/bride-to-be-props1.jpeg"] },
  { name: "Welcome board", category: "Props & Decorative Accessories", image: "/products/welcome-board1.jpeg", images: ["/products/welcome-board2.jpeg", "/products/welcome-board3.jpeg", "/products/welcome-board4.jpeg", "/products/welcome-board5.jpeg"] },
  { name: "Velvet props", category: "Props & Decorative Accessories", image: "/products/velvet-props1.jpeg", images: ["/products/velvet-props2.jpeg","/products/velvet-props3.jpeg","/products/velvet-props4.jpeg"] },

  // Sweets & Favours
  { name: "Chocolate favours card", category: "Sweets & Favours", image: "/products/chocolate-cards1.jpeg", images: ["/products/chocolate-cards2.jpeg", "/products/chocolate-cards3.jpeg", "/products/chocolate-cards4.jpeg", "/products/chocolate-cards5.jpeg","/products/chocolate-cards5.jpeg"] },
  { name: "Customized sweets toppers", category: "Sweets & Favours", image: "/products/sweets-toppers1.jpeg", images: ["/products/sweets-toppers2.jpeg", "/products/sweets-toppers3.jpeg", "/products/sweets-toppers4.jpeg", "/products/sweets-toppers5.jpeg"] },
  { name: "Pan masala cones", category: "Sweets & Favours", image: "/products/pan-masala-cones1.jpeg", images: ["/products/pan-masala-cones3.jpeg", "/products/pan-masala-cones4.jpeg"] },
  { name: "Shahi mewa card", category: "Sweets & Favours", image: "/products/shahi-mewa-card.jpeg", images: ["/products/shahi-mewa-card.jpeg"] },

  // Wedding Favours
  { name: "Bangles favour", category: "Sweets & Favours", image: "/products/bangles-favour.jpeg", images: ["/products/bangles-favour.jpeg"] },
  { name: "Glasses", category: "Sweets & Favours", image: "/products/glasses1.jpeg", images: ["/products/glasses2.jpeg", "/products/glasses3.jpeg", "/products/glasses4.jpeg", "/products/glasses5.jpeg"] },
  { name: "Tasbeeh card", category: "Sweets & Favours", image: "/products/tasbeeh-card1.jpeg", images: ["/products/tasbeeh-card2.jpeg", "/products/tasbeeh-card3.jpeg"] },
  { name: "Surah Yaseen favours", category: "Sweets & Favours", image: "/products/surah-yaseen-favours1.jpeg", images: ["/products/surah-yaseen-favours2.jpeg"] },

  // Floral & Garlands
  { name: "Artificial gajry", category: "Floral & Garlands", image: "/products/artificial-gajry1.jpeg", images: ["/products/artificial-gajry2.jpeg", "/products/artificial-gajry3.jpeg", "/products/artificial-gajry4.jpeg", "/products/artificial-gajry5.jpeg"] },
  { name: "Customized gajry", category: "Floral & Garlands", image: "/products/customized-gajry1.jpeg", images: ["/products/customized-gajry2.jpeg"] },
  { name: "Artificial garlands", category: "Floral & Garlands", image: "/products/Artificial-garlands1.jpeg", images: ["/products/Artificial-garlands2.jpeg", "/products/Artificial-garlands3.jpeg", "/products/Artificial-garlands4.jpeg", "/products/Artificial-garlands5.jpeg"] },
  { name: "Artificial flowers bouquet", category: "Floral & Garlands", image: "/products/Artificial-flowers-bouquet1.jpeg", images: ["/products/Artificial-flowers-bouquet2.jpeg", "/products/Artificial-flowers-bouquet3.jpeg", "/products/Artificial-flowers-bouquet4.jpeg", "/products/Artificial-flowers-bouquet5.jpeg"] },
] as const
