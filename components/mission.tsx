import { Eyebrow, HeartRule } from '@/components/shared'

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-28 px-4 py-16 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow className="justify-center">Our Mission</Eyebrow>
        <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.15] text-charcoal sm:text-5xl sm:leading-[1.1]">
          More than cleaning.{' '}
          <span className="text-rose">A fresh start.</span>
        </h2>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-charcoal/75 sm:text-lg">
          <p>
            Life can become overwhelming. Illness, loss, financial hardship,
            family circumstances, or simply falling behind can turn a home into
            another source of stress.
          </p>
          <p>
            Port City Kindness exists to help people take that first step
            forward.
          </p>
          <p>
            We help individuals and families in need by creating cleaner, safer
            and more manageable spaces — always with kindness, dignity and
            respect.
          </p>
        </div>

        <HeartRule className="mt-12" />
      </div>
    </section>
  )
}
