import { Users, Package, HandHeart } from 'lucide-react'
import { Eyebrow, CTAButton } from '@/components/shared'

const WAYS = [
  {
    icon: Users,
    title: 'Volunteer',
    body: 'Help with cleaning, organizing or community projects and give your time where it matters most.',
  },
  {
    icon: Package,
    title: 'Donate Supplies',
    body: 'Cleaning products and household supplies can directly support someone\u2019s fresh start.',
  },
  {
    icon: HandHeart,
    title: 'Support the Mission',
    body: 'Help Port City Kindness reach more individuals and families across our community.',
  },
]

export function GetInvolved() {
  return (
    <section id="get-involved" className="scroll-mt-28 px-4 py-16 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Get Involved</Eyebrow>
          <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.15] text-charcoal sm:text-5xl sm:leading-[1.1]">
            Kindness grows when people come together.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-3 sm:gap-8">
          {WAYS.map((way) => (
            <div
              key={way.title}
              className="rounded-2xl border border-border/70 bg-card p-7 transition-shadow duration-300 hover:shadow-[0_16px_40px_-28px_rgba(23,21,21,0.35)]"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-rose/25 bg-cream">
                <way.icon className="size-5 text-rose" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-xl text-charcoal">{way.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/75">
                {way.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="#contact">Get Involved</CTAButton>
        </div>
      </div>
    </section>
  )
}
