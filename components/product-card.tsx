import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { waLink, waProductMessage } from "@/lib/whatsapp"

export default function ProductCard({
  name,
  category,
  tag,
}: {
  name: string
  category: string
  tag?: string
}) {
  const href = waLink(waProductMessage(name))
  return (
    <Card className="group overflow-hidden bg-card/80">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{name}</CardTitle>
          {tag ? <Badge variant="blush" className="shrink-0">{tag}</Badge> : null}
        </div>
        <div className="text-xs text-muted-foreground">{category}</div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="rounded-2xl border border-border/70 bg-cream/60 p-4 grid-dots">
          <div className="h-28 rounded-2xl flower-divider opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="mt-3 text-sm text-charcoal/80">
            Floral, elegant, and made to match your wedding theme.
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button asChild className="w-full">
          <a href={href} target="_blank" rel="noreferrer">
            Enquiry / Buy on WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
