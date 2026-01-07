import { cn } from "@/lib/utils"

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  className,
}: {
  eyebrow?: string
  title: string
  desc?: string
  className?: string
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow ? (
        <div className="inline-flex items-center rounded-full bg-secondary/60 px-4 py-1 text-xs font-medium text-charcoal/90">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-serif text-3xl md:text-4xl leading-tight">{title}</h2>
      {desc ? <p className="text-sm md:text-base text-charcoal/80 max-w-2xl">{desc}</p> : null}
    </div>
  )
}
