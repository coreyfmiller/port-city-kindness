const STATS = [
  { label: 'Homes Helped' },
  { label: 'Families Supported' },
  { label: 'Community Volunteers' },
  { label: 'Hours of Kindness' },
]

export function CommunityImpact() {
  return (
    <section className="bg-cream px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">
          Small acts. Big impact.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-charcoal/70">
          Every home we help is a story of hope. As our community grows, so does
          the difference we can make together.
        </p>

        <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dd className="font-serif text-4xl text-rose sm:text-5xl" aria-hidden="true">
                &mdash;
              </dd>
              <dt className="mt-2 text-sm font-medium uppercase tracking-wide text-charcoal/70">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
