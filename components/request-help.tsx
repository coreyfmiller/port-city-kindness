'use client'

import { useState } from 'react'
import { Heart, Lock, Check } from 'lucide-react'
import { Eyebrow } from '@/components/shared'

const fieldClass =
  'w-full rounded-md border border-input bg-offwhite px-4 py-2.5 text-base text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose'

const labelClass = 'mb-1.5 block text-sm font-medium text-charcoal/80'

export function RequestHelp() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="request-help" className="scroll-mt-28 px-4 py-16 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:pt-4">
          <Eyebrow>Request Help</Eyebrow>
          <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.15] text-charcoal sm:text-5xl sm:leading-[1.1]">
            Need a little help?
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Asking for help isn&apos;t always easy. If your home has become
            overwhelming, you don&apos;t need to explain or apologize. Tell us a
            little about your situation and we&apos;ll see how Port City Kindness
            may be able to help.
          </p>
          <p className="mt-6 flex items-start gap-2.5 text-base text-charcoal/70">
            <Heart className="mt-1 size-4 shrink-0 text-rose" strokeWidth={1.5} aria-hidden="true" />
            All requests are treated with kindness, dignity and discretion.
          </p>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-[0_16px_50px_-30px_rgba(23,21,21,0.4)] sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-rose/10">
                <Check className="size-7 text-rose" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-2xl text-charcoal">
                Thank you for reaching out.
              </h3>
              <p className="max-w-sm text-charcoal/70">
                We&apos;ve received your request. Someone from Port City Kindness
                will be in touch gently and discreetly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input id="name" name="name" required className={fieldClass} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={fieldClass} autoComplete="email" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span className="text-charcoal/40">(optional)</span>
                  </label>
                  <input id="phone" name="phone" type="tel" className={fieldClass} autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="community" className={labelClass}>
                    Community
                  </label>
                  <input id="community" name="community" className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="situation" className={labelClass}>
                  Tell us a little about your situation
                </label>
                <textarea id="situation" name="situation" rows={4} className={fieldClass} />
              </div>

              <div>
                <label htmlFor="help" className={labelClass}>
                  What kind of help would make the biggest difference?
                </label>
                <textarea id="help" name="help" rows={3} className={fieldClass} />
              </div>

              <div>
                <label htmlFor="contact" className={labelClass}>
                  Preferred way to contact you
                </label>
                <select id="contact" name="contact" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option value="email">Email</option>
                  <option value="phone">Phone call</option>
                  <option value="text">Text message</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-rose px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-rose/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
              >
                Send My Request
              </button>

              <p className="flex items-start gap-2 text-xs leading-relaxed text-charcoal/60">
                <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                Your information is kept private and confidential. We will only
                use it to understand how we might help.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
