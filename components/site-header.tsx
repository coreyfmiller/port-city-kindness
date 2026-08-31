'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'How We Help', href: '#how-we-help' },
  { label: 'Request Help', href: '#request-help' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
]

function Wordmark() {
  return (
    <Link href="#top" className="flex items-center gap-2.5" aria-label="Port City Kindness — home">
      <span className="flex size-9 items-center justify-center rounded-full border border-rose/30 bg-cream">
        <Heart className="size-4 text-rose" strokeWidth={1.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg text-charcoal">Port City</span>
        <span className="font-script text-lg text-rose leading-tight">Kindness</span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 w-[95%] max-w-6xl rounded-full border border-border/70 bg-offwhite/85 px-4 py-2.5 shadow-[0_1px_20px_-8px_rgba(23,21,21,0.15)] backdrop-blur-md sm:px-6">
        <div className="flex items-center justify-between">
          <Wordmark />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.slice(0, 5).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-charcoal/70 transition-colors hover:text-rose"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#request-help"
              className="hidden rounded-full bg-rose px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-rose/90 sm:inline-flex"
            >
              Request Help
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'grid overflow-hidden transition-all duration-300 lg:hidden',
            open ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <nav className="min-h-0" aria-label="Mobile">
            <ul className="flex flex-col gap-1 border-t border-border/70 pt-2">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-charcoal/80 transition-colors hover:bg-cream hover:text-rose"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
