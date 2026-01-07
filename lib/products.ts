export type Product = {
  name: string
  category: string
  tag?: string
  image?: string
}

export const featuredCategories = [
  { title: "Nikkah Essentials", href: "/accessories#nikkah-essentials", desc: "Beautiful keepsakes for your Nikkah.", image: "/products/nikkah-essentials.jpg" },
  { title: "Wedding Props & Decor", href: "/accessories#wedding-props-decor", desc: "Cute props & premium décor pieces.", image: "/products/wedding-props.jpg" },
  { title: "Favours & Gifts", href: "/accessories#favours-gifts", desc: "Sweet giveaways guests will love.", image: "/products/favours.jpg" },
  { title: "Bridal Accessories", href: "/accessories#bridal-accessories", desc: "Elegant bridal touches & details.", image: "/products/bridal.jpg" },
] as const

export const popularProducts: Product[] = [
  { name: "Nikkah booklet with box", category: "Nikkah Essentials", tag: "Best Seller", image: "/products/nikkah-booklet.jpg" },
  { name: "Nikkah certificate & pens", category: "Nikkah Essentials", tag: "New", image: "/products/nikkah-certificate.jpg" },
  { name: "Resin ring & thumb plaque", category: "Ring & Ritual Items", tag: "Trending", image: "/products/ring-plaque.jpg" },
  { name: "Customized wedding props", category: "Wedding Props & Decor", tag: "Custom", image: "/products/custom-props.jpg" },
  { name: "Welcome entrance board", category: "Wedding Props & Decor", tag: "Popular", image: "/products/welcome-board.jpg" },
  { name: "Bridal artificial jewelry", category: "Bridal Accessories", tag: "Elegant", image: "/products/bridal-jewelry.jpg" },
] as const

export const allProducts: Product[] = [
  { name: "Nikkah booklet with box", category: "Nikkah Essentials", image: "/products/nikkah-essentials.jpg" },
  { name: "Nikkah certificate & pens", category: "Nikkah Essentials", image: "/products/nikkah-essentials.jpg" },
  { name: "Nikkah duppatta & bridal veil", category: "Nikkah Essentials", image: "/products/nikkah-essentials.jpg" },

  { name: "Customized wedding props", category: "Wedding Props & Decor", image: "/products/custom-props.jpg" },
  { name: "Welcome entrance board", category: "Wedding Props & Decor", image: "/products/welcome-board.jpg" },
  { name: "Entry chadar", category: "Wedding Props & Decor", image: "/products/entry-chadar.jpg" },

  { name: "Sweets toppers", category: "Wedding Props & Decor", image: "/products/sweets-toppers.jpg" },
  { name: "Bid boxes", category: "Wedding Props & Decor", image: "/products/bid-boxes.jpg" },

  { name: "Engagement & Nikkah ring plate", category: "Ring & Ritual Items", image: "/products/ring-plate.jpg" },
  { name: "Resin ring & thumb plaque", category: "Ring & Ritual Items", image: "/products/ring-plaque.jpg" },
  { name: "Rase surmadani plate", category: "Ring & Ritual Items", image: "/products/surmadani.jpg" },
  { name: "Doodhpilai glass & wheel", category: "Ring & Ritual Items", image: "/products/doodhpilai.jpg" },

  { name: "Favours (sonf cones)", category: "Favours & Gifts", image: "/products/sonf-cones.jpg" },
  { name: "Favours (nimko cones)", category: "Favours & Gifts", image: "/products/nimko-cones.jpg" },
  { name: "Favours (bangles)", category: "Favours & Gifts", image: "/products/bangles.jpg" },
  { name: "Favours (tasbeeh cards)", category: "Favours & Gifts", image: "/products/tasbeeh.jpg" },
  { name: "Favours (Yaseen favours)", category: "Favours & Gifts", image: "/products/yaseen.jpg" },
  { name: "Favours (chocolate cards)", category: "Favours & Gifts", image: "/products/chocolate-cards.jpg" },

  { name: "Bridal artificial jewelry", category: "Bridal Accessories", image: "/products/bridal-jewelry.jpg" },
  { name: "Artificial garlands", category: "Bridal Accessories", image: "/products/garlands.jpg" },
] as const
