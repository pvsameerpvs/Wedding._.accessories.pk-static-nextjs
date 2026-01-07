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
  { name: "Nikkah booklet with box", category: "Nikkah Essentials", tag: "Best Seller", image: "/products/nikkah-booklet.jpeg" },
  { name: "Nikkah certificate & pens", category: "Nikkah Essentials", tag: "New", image: "/products/nikkah-certificate.jpeg" },
  { name: "Resin ring & thumb plaque", category: "Ring & Ritual Items", tag: "Trending", image: "/products/ring-plaque.jpeg" },
  { name: "Customized wedding props", category: "Wedding Props & Decor", tag: "Custom", image: "/products/custom-props.jpeg" },
  { name: "Welcome entrance board", category: "Wedding Props & Decor", tag: "Popular", image: "/products/welcome-board.jpeg" },
  { name: "Bridal artificial jewelry", category: "Bridal Accessories", tag: "Elegant", image: "/products/bridal-jewelry.jpeg" },
] as const

export const allProducts: Product[] = [
  { name: "Nikkah booklet with box", category: "Nikkah Essentials", image: "/products/nikkah-booklet.jpeg" },
  { name: "Nikkah certificate & pens", category: "Nikkah Essentials", image: "/products/nikkah-certificate.jpeg" },
  { name: "Nikkah duppatta & bridal veil", category: "Nikkah Essentials", image: "/products/nikkah-duppatta.jpeg" },

  { name: "Customized wedding props", category: "Wedding Props & Decor", image: "/products/custom-props.jpeg" },
  { name: "Welcome entrance board", category: "Wedding Props & Decor", image: "/products/welcome-board.jpeg" },
  { name: "Entry chadar", category: "Wedding Props & Decor", image: "/products/entry-chadar.jpg" },

  { name: "Sweets toppers", category: "Wedding Props & Decor", image: "/products/sweets-toppers.jpeg" },
  { name: "Bid boxes", category: "Wedding Props & Decor", image: "/products/bid-boxes.jpeg" },

  { name: "Engagement & Nikkah ring plate", category: "Ring & Ritual Items", image: "/products/ring-plate.jpeg" },
  { name: "Customized ring plate", category: "Ring & Ritual Items", image: "/products/custom-ring-plate.jpeg" },
  { name: "Resin ring & thumb plaque", category: "Ring & Ritual Items", image: "/products/ring-plaque.jpeg" },
  { name: "Rase surmadani plate", category: "Ring & Ritual Items", image: "/products/surmadani.jpeg" },
  { name: "Doodhpilai glass & wheel", category: "Ring & Ritual Items", image: "/products/doodhpilai.jpeg" },
  { name: "Premium Nikkah box set", category: "Ring & Ritual Items", image: "/products/nikkah-box-set.jpeg" },
    { name: "Rukhsati dupatta", category: "Ring & Ritual Items", image: "/products/rukhsati.jpeg" },
    { name: "Bridal veil", category: "Ring & Ritual Items", image: "/products/bridal-veil.jpeg" },

  { name: "Favours (sonf cones)", category: "Favours & Gifts", image: "/products/sonf-cones.jpeg" },
  { name: "Favours (nimko cones)", category: "Favours & Gifts", image: "/products/nimko-cones.jpeg" },
  { name: "Favours (bangles)", category: "Favours & Gifts", image: "/products/bangles.jpeg" },
  { name: "Favours (tasbeeh cards)", category: "Favours & Gifts", image: "/products/tasbeeh.jpeg" },
  { name: "Favours (Yaseen favours)", category: "Favours & Gifts", image: "/products/yaseen.jpeg" },
  { name: "Favours (chocolate cards)", category: "Favours & Gifts", image: "/products/chocolate-cards.jpeg" },

  { name: "Bridal artificial jewelry", category: "Bridal Accessories", image: "/products/bridal-jewelry.jpeg" },
  { name: "Artificial garlands", category: "Bridal Accessories", image: "/products/garlands.jpeg" },
] as const
