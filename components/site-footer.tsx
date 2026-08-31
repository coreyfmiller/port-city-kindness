import Link from 'next/link'
import { Heart, Share2, Mail, MapPin } from 'lucide-react'

const NAV = [
  { label: 'Our Mission', href: '#mission' },
  { label: 'How We Help', href: '#how-we-help' },
  { label: 'Request Help', href: '#request-help' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
]

const CONTACT = [
  { icon: Share2, label: 'Facebook', detail: 'facebook.com/portcitykindness' },
  { icon: Mail, label: 'Email', detail: 'hello@portcitykindness.org' },
  { icon: MapPin, label: 'Service Area', detail: 'Serving our local community' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-border/70 bg-cream px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full border border-rose/30 bg-offwhite">
                <Heart className="size-4 text-rose" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg text-charcoal">Port City</span>
                <span className="font-script text-lg leading-tight text-rose">Kindness</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs font-serif text-lg italic text-charcoal/70">
              Helping our community, one home at a time.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal/70 transition-colors hover:text-rose"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              {CONTACT.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <item.icon className="mt-0.5 size-4 shrink-0 text-rose" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm text-charcoal/70">
                    <span className="sr-only">{item.label}: </span>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-charcoal/50">
          <p>
            &copy; {new Date().getFullYear()} Port City Kindness. No judgement.
            Just help.
          </p>
        </div>
      </div>
    </footer>
  )
}
