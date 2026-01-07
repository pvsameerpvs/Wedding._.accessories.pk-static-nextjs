import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-14">
      <SectionHeading
        eyebrow="Privacy"
        title="Privacy policy"
        desc="We only use the information you share with us on WhatsApp or email to respond to your enquiry and process your order."
      />
      <div className="mt-10">
        <Card className="bg-card/80">
          <CardContent className="p-8 text-sm text-charcoal/80 space-y-3">
            <p>
              We do not collect accounts, passwords, or payment information on this website. Orders and enquiries are handled via WhatsApp and email.
            </p>
            <p>
              If you message us, your message may include personal details (name, event date, address). We use it only to discuss your order.
            </p>
            <p>
              If you want any conversation or details removed, message us and we’ll help.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
