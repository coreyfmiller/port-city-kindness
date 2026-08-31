import { Heart } from 'lucide-react'

const EXAMPLES = [
  'Families going through hardship',
  'Seniors who need extra help',
  'People facing major life changes',
  'Individuals overwhelmed by their living environment',
  'Community members who simply need someone to help them get started',
]

export function WhoWeHelp() {
  return (
    <section className="bg-cream px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-balance font-serif text-3xl leading-[1.15] text-charcoal sm:text-[2.75rem]">
          Everyone deserves to feel safe and comfortable in their own home.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/75">
          Port City Kindness may help people experiencing difficult
          circumstances who need a hand getting their home back under control.
          There is no situation too big or too small — and never any judgement.
        </p>
      </div>

      <ul className="mx-auto mt-12 grid max-w-3xl gap-x-8 gap-y-4 text-left sm:grid-cols-2">
        {EXAMPLES.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Heart
              className="mt-1 size-4 shrink-0 text-rose"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="text-base leading-relaxed text-charcoal/80">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
