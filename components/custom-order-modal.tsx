"use client"

import { useState } from "react"
import { Calendar, Palette, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { waLink } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

const PRESET_COLORS = [
  { name: "Classic Red", value: "#D93025" },
  { name: "Royal Blue", value: "#1A4FBA" },
  { name: "Emerald Green", value: "#137333" },
  { name: "Gold", value: "#F9AB00" },
  { name: "Blush Pink", value: "#F4B5C4" },
  { name: "Lavender", value: "#C58AF9" },
]

export function CustomOrderModal({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState("")
  const [theme, setTheme] = useState("")
  const [color, setColor] = useState("#D93025") // Default to Red
  const [isOpen, setIsOpen] = useState(false)

  const handleSend = () => {
    const message = `Hello! I’d like to place a BESPOKE order.
    
Event Details:
📅 Date: ${date}
🎨 Theme/Style: ${theme}
🌈 Color Preference: ${color}

Please guide me through the design process.`

    window.open(waLink(message), "_blank")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-[425px] border-none shadow-2xl bg-white/95 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem]">
        <DialogHeader className="space-y-3 pb-4 border-b border-border/40">
           <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
              <Palette className="w-6 h-6" />
           </div>
          <DialogTitle className="text-center font-serif text-3xl">Start Your Project</DialogTitle>
          <DialogDescription className="text-center text-base">
            Tell us a few details to get the conversation started on WhatsApp.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          
          {/* Date Input */}
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2 text-charcoal/80">
               <Calendar className="w-4 h-4 text-primary" /> Event Date
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-xl border-border/60 bg-white/50 focus:bg-white transition-all h-12"
            />
          </div>

          {/* Theme Input */}
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-charcoal/80">Event Theme / Style</Label>
            <Input
              id="theme"
              placeholder="e.g. Traditional Red & Gold, Modern Pastel..."
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="rounded-xl border-border/60 bg-white/50 focus:bg-white transition-all h-12"
            />
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
             <Label className="text-charcoal/80">Color Palette</Label>
             <div className="grid grid-cols-4 gap-2">
                {/* Custom Color Input Wrapper */}
                <div className="col-span-1 aspect-square rounded-2xl overflow-hidden relative cursor-pointer group shadow-sm ring-2 ring-transparent hover:ring-primary/20 transition-all">
                   <input 
                      type="color" 
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="absolute inset-[-50%] w-[200%] h-[200%] cursor-pointer p-0 border-0"
                   />
                   <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                      <Palette className="w-6 h-6 text-white drop-shadow-md" />
                   </div>
                </div>

                {/* Presets */}
                {PRESET_COLORS.slice(0, 3).map((c) => (
                   <button
                      key={c.name}
                      onClick={() => setColor(c.value)}
                      className={cn(
                        "col-span-1 aspect-square rounded-2xl transition-all shadow-sm flex items-center justify-center ring-2 ring-offset-2",
                        color === c.value ? "ring-primary scale-95" : "ring-transparent hover:scale-105"
                      )}
                      style={{ backgroundColor: c.value }}
                      title={c.name}
                   />
                ))}
             </div>
             <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                <span>Selected: <span className="font-mono uppercase text-charcoal">{color}</span></span>
                <span>Click the gradient box for custom</span>
             </div>
          </div>
        </div>

        <Button onClick={handleSend} size="lg" className="w-full h-14 rounded-full text-lg shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all duration-300">
           Continue to WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </DialogContent>
    </Dialog>
  )
}
