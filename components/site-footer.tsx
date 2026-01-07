import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Brand from "@/components/brand"
import { SITE } from "@/lib/site"
import { Instagram, Facebook, Music2, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-charcoal text-cream overflow-hidden">
       {/* Background Art Layer */}
       <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
             src="/footer_bg.png" 
             alt="Pakistani Wedding Art Pattern" 
             fill 
             className="object-cover opacity-[0.07] mix-blend-plus-lighter" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/80" />
       </div>

       <div className="container relative z-10 pt-20 pb-8 px-6 md:px-12">
          {/* Top Section: Brand & Newsletter/Contact */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
             <div className="space-y-6">
                <div className="inline-block p-2 rounded-2xl">
                   <Image 
                      src="/logo.png" 
                      alt={SITE.name} 
                      width={200} 
                      height={80} 
                      className="h-20 w-auto object-contain" 
                   />
                </div>
                <p className="text-white/70 max-w-md leading-relaxed text-lg">
                   Elevating your special moments with handcrafted elegance. Based in the heart of Pakistan&apos;s craftsmanship.
                </p>
                <div className="flex gap-4 pt-2">
                   {/* Social Icons with Gold Hover */}
                   <SocialIcon href={SITE.instagram} icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                   <SocialIcon href={SITE.facebook} icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                   <SocialIcon href={SITE.tiktok} icon={<Music2 className="w-5 h-5" />} label="TikTok" />
                </div>
             </div>

             <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-6">
                   <h3 className="font-serif text-2xl text-primary">Collections</h3>
                   <ul className="space-y-4">
                      <li><FooterLink href="/accessories">Nikkah Essentials</FooterLink></li>
                      <li><FooterLink href="/accessories">Bridal entry</FooterLink></li>
                      <li><FooterLink href="/accessories">Wedding Props</FooterLink></li>
                      <li><FooterLink href="/custom-orders">Custom Orders</FooterLink></li>
                   </ul>
                </div>
                <div className="space-y-6">
                   <h3 className="font-serif text-2xl text-primary">Contact</h3>
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-white/70">
                         <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                         <span className="text-sm">{SITE.phoneWhatsApp}</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/70">
                         <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                         <span className="text-sm">{SITE.email}</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/70">
                         <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                         <span className="text-sm">{SITE.city}, Pakistan</span>
                      </li>
                   </ul>
                </div>
             </div>
          </div>

          
          
       </div>
    </footer>
  )
}

function SocialIcon({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
   return (
      <a 
         href={href} 
         target="_blank" 
         rel="noreferrer"
         aria-label={label}
         className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
      >
         {icon}
      </a>
   )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
   return (
      <Link href={href} className="flex items-center gap-2 text-white/60 hover:text-white hover:pl-2 transition-all duration-300 group">
         <span className="w-1.5 h-1.5 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
         {children}
      </Link>
   )
}
