export type Product = {
  name: string
  category: string
  tag?: string
}

export const featuredCategories = [
  { title: "Nikkah Essentials", href: "/accessories#nikkah-essentials", desc: "Beautiful keepsakes for your Nikkah." },
  { title: "Wedding Props & Decor", href: "/accessories#wedding-props-decor", desc: "Cute props & premium décor pieces." },
  { title: "Favours & Gifts", href: "/accessories#favours-gifts", desc: "Sweet giveaways guests will love." },
  { title: "Bridal Accessories", href: "/accessories#bridal-accessories", desc: "Elegant bridal touches & details." },
] as const

export const popularProducts: Product[] = [
  { name: "Nikkah booklet with box", category: "Nikkah Essentials", tag: "Best Seller" },
  { name: "Nikkah certificate & pens", category: "Nikkah Essentials", tag: "New" },
  { name: "Resin ring & thumb plaque", category: "Ring & Ritual Items", tag: "Trending" },
  { name: "Customized wedding props", category: "Wedding Props & Decor", tag: "Custom" },
  { name: "Welcome entrance board", category: "Wedding Props & Decor", tag: "Popular" },
  { name: "Bridal artificial jewelry", category: "Bridal Accessories", tag: "Elegant" },
] as const

export const allProducts: Product[] = [
  { name: "Nikkah booklet with box", category: "Nikkah Essentials" },
  { name: "Nikkah certificate & pens", category: "Nikkah Essentials" },
  { name: "Nikkah duppatta & bridal veil", category: "Nikkah Essentials" },

  { name: "Customized wedding props", category: "Wedding Props & Decor" },
  { name: "Welcome entrance board", category: "Wedding Props & Decor" },
  { name: "Entry chadar", category: "Wedding Props & Decor" },

  { name: "Sweets toppers", category: "Wedding Props & Decor" },
  { name: "Bid boxes", category: "Wedding Props & Decor" },

  { name: "Engagement & Nikkah ring plate", category: "Ring & Ritual Items" },
  { name: "Resin ring & thumb plaque", category: "Ring & Ritual Items" },
  { name: "Rase surmadani plate", category: "Ring & Ritual Items" },
  { name: "Doodhpilai glass & wheel", category: "Ring & Ritual Items" },

  { name: "Favours (sonf cones)", category: "Favours & Gifts" },
  { name: "Favours (nimko cones)", category: "Favours & Gifts" },
  { name: "Favours (bangles)", category: "Favours & Gifts" },
  { name: "Favours (tasbeeh cards)", category: "Favours & Gifts" },
  { name: "Favours (Yaseen favours)", category: "Favours & Gifts" },
  { name: "Favours (chocolate cards)", category: "Favours & Gifts" },

  { name: "Bridal artificial jewelry", category: "Bridal Accessories" },
  { name: "Artificial garlands", category: "Bridal Accessories" },
] as const
