import { Home, HeartHandshake, Sparkles } from 'lucide-react'

const VALUES = [
  {
    icon: Home,
    title: 'We Clean',
    body: 'Creating clean, safe and comfortable spaces.',
  },
  {
    icon: HeartHandshake,
    title: 'We Care',
    body: 'Every person and every home is treated with dignity, compassion and respect.',
  },
  {
    icon: Sparkles,
    title: 'We Empower',
    body: 'Helping people regain control of their space and take the next step forward.',
  },
]

export function CoreValues() {
  return (
    <section className="bg-cream px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-8">
        {VALUES.map((value) => (
          <div key={value.title} className="flex flex-col items-center text-center sm:px-4">
            <span className="flex size-14 items-center justify-center rounded-full border border-rose/25 bg-offwhite">
              <value.icon className="size-6 text-rose" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-rose">
              {value.title}
            </h3>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-charcoal/75">
              {value.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
