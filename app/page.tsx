import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import FeaturedCategories from "@/components/featured-categories"
import PopularProducts from "@/components/popular-products"
import CtaSection from "@/components/cta-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <PopularProducts />
      <AboutSection />
      <CtaSection />
    </div>
  )
}
