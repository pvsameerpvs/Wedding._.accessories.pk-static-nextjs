import Image from "next/image"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Brand({ className, size = 44 }: { className?: string; size?: number }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.svg"
        width={size * 3.4}
        height={size}
        alt={SITE.name}
        priority
        className="h-auto w-[190px] sm:w-[220px] select-none"
      />
      <span className="sr-only">{SITE.name}</span>
    </div>
  )
}
