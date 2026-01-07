import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, MapPin, MessageCircle, Phone, Instagram, Facebook, Music2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SITE } from "@/lib/site"
import { waLink } from "@/lib/whatsapp"

export default function ContactPage() {
  const waCta = waLink("Hello! I’d like to place an order from Wedding._.accessories.pk. Please share details.")

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
       {/* Background Decoration */}
       <div className="fixed inset-0 z-0 pointer-events-none">
          <Image 
             src="/custom_studio_bg.png" 
             alt="Background Pattern" 
             fill 
             className="object-cover opacity-[0.05]" 
             priority
          />
       </div>

       <div className="container relative z-10 py-12 md:py-20 lg:py-24 max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fadeUp">
             <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Return Home
             </Link>
             <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Get in Touch</span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-charcoal">
                   Let's start the <br/><span className="italic text-primary">Conversation</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                   Whether you have a custom idea or a quick question, we're here to help make your wedding planning effortless.
                </p>
             </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
             
             {/* Main Contact Card (Stationery Style) */}
             <div className="lg:col-span-3 animate-fadeUp" style={{ animationDelay: "100ms" }}>
                <Card className="bg-white/80 backdrop-blur-sm border-none shadow-2xl shadow-primary/5 rounded-[2.5rem] overflow-hidden relative">
                   {/* Decorative top border */}
                   <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                   
                   <CardContent className="p-8 md:p-12 space-y-10">
                      <div className="space-y-2 text-center">
                         <h2 className="font-serif text-3xl text-charcoal">Studio Details</h2>
                         <p className="text-muted-foreground text-sm">Wedding._.accessories.pk</p>
                      </div>

                      <div className="space-y-8">
                         <div className="flex items-start gap-5">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                               <Phone className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                               <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Phone / WhatsApp</p>
                               <p className="text-lg text-charcoal font-medium">{SITE.phoneWhatsApp}</p>
                               <p className="text-xs text-muted-foreground">Available Mon-Sat, 10am - 8pm</p>
                            </div>
                         </div>

                         <Separator className="bg-border/50" />

                         <div className="flex items-start gap-5">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                               <Mail className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                               <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                               <a href={`mailto:${SITE.email}`} className="text-lg text-charcoal font-medium hover:text-primary transition-colors">
                                  {SITE.email}
                               </a>
                            </div>
                         </div>

                         <Separator className="bg-border/50" />

                         <div className="flex items-start gap-5">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                               <MapPin className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                               <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Location</p>
                               <p className="text-lg text-charcoal font-medium hover:text-primary transition-colors">
                                  {SITE.city}, Pakistan
                               </p>
                               <p className="text-xs text-muted-foreground">Online Store (Shipping Worldwide)</p>
                            </div>
                         </div>
                      </div>

                      <div className="pt-4">
                         <Button asChild size="lg" className="w-full h-14 rounded-full text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:translate-y-[-2px] transition-all bg-primary text-primary-foreground">
                            <a href={waCta} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 justify-center">
                               <MessageCircle className="h-5 w-5" /> Open WhatsApp Chat
                            </a>
                         </Button>
                      </div>
                   </CardContent>
                </Card>
             </div>

             {/* Social Links Side */}
             <div className="lg:col-span-2 space-y-6 animate-fadeUp" style={{ animationDelay: "200ms" }}>
                <div className="bg-charcoal/5 rounded-[2.5rem] p-8 md:p-10 space-y-8">
                   <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-charcoal">Follow Along</h3>
                      <p className="text-sm text-muted-foreground">Daily inspiration on our socials.</p>
                   </div>
                   
                   <div className="space-y-3">
                      <a href={SITE.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/60 hover:bg-white rounded-2xl group transition-all duration-300 shadow-sm hover:shadow-md">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white flex items-center justify-center">
                               <Instagram className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-charcoal">Instagram</span>
                         </div>
                         <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>

                      <a href={SITE.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/60 hover:bg-white rounded-2xl group transition-all duration-300 shadow-sm hover:shadow-md">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                               <Facebook className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-charcoal">Facebook</span>
                         </div>
                         <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>

                      <a href={SITE.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/60 hover:bg-white rounded-2xl group transition-all duration-300 shadow-sm hover:shadow-md">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                               <Music2 className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-charcoal">TikTok</span>
                         </div>
                         <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                   </div>
                </div>
                
                {/* Email Chip */}
                <div className="text-center p-6 rounded-[2rem] border border-dashed border-charcoal/20">
                   <p className="text-sm text-charcoal/60">Prefer email?</p>
                   <a href={`mailto:${SITE.email}`} className="text-primary font-medium hover:underline decoration-primary/50 underline-offset-4">
                      {SITE.email}
                   </a>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
