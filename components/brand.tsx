import Image from "next/image"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Brand({ className, size = 44 }: { className?: string; size?: number }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        width={240}
        height={64}
        alt={SITE.name}
        priority
        className="h-16 w-auto object-contain select-none"
      />
      <span className="sr-only">{SITE.name}</span>
    </div>
  )
}
