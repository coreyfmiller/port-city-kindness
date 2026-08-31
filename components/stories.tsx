import { Eyebrow } from '@/components/shared'

const STORIES = [
  {
    quote:
      'Having someone walk through the door without judging me changed everything.',
    attribution: 'Community Member',
  },
  {
    quote:
      'For the first time in months, my home felt like a place I wanted to be again.',
    attribution: 'Community Member',
  },
  {
    quote:
      'They didn\u2019t just clean. They gave me the push I needed to keep going.',
    attribution: 'Community Member',
  },
]

export function Stories() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Stories of Kindness</Eyebrow>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Kindness, in their words.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.quote}
              className="flex flex-col justify-between rounded-2xl border border-border/70 bg-offwhite p-7"
            >
              <blockquote className="font-serif text-xl leading-relaxed text-charcoal/85">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium uppercase tracking-wide text-rose">
                &mdash; {story.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
