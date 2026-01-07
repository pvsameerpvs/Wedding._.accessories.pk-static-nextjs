import Image from "next/image"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Brand({ className, size = 44 }: { className?: string; size?: number }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/wedding.png"
        width={160}
        height={45}
        alt={SITE.name}
        priority
        className="h-10 w-auto object-contain select-none"
      />
      <span className="sr-only">{SITE.name}</span>
    </div>
  )
}
