import Image from 'next/image'
import { Eyebrow } from '@/components/shared'

const SERVICES = [
  {
    title: 'Home Cleaning',
    body: 'Helping restore homes that have become difficult to manage, so they feel calm and comfortable again.',
    image: '/images/home-cleaning.png',
    alt: 'A freshly cleaned, cozy living room with warm natural light.',
  },
  {
    title: 'Decluttering & Organization',
    body: 'Creating practical, manageable spaces without judgement — one shelf, one drawer, one room at a time.',
    image: '/images/organizing.png',
    alt: 'Neatly organized shelves with folded linens and a dusty rose basket.',
  },
  {
    title: 'Fresh Start Cleaning',
    body: 'Helping individuals and families facing major life transitions begin their next chapter with a little more ease.',
    image: '/images/home-cleaning.png',
    alt: 'A tidy, sunlit room offering a sense of a fresh beginning.',
  },
  {
    title: 'Community Support',
    body: 'Connecting kindness, volunteers and resources with the people in our community who need them most.',
    image: '/images/community.png',
    alt: 'Two pairs of hands gently passing a small potted plant and a folded towel.',
  },
]

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="scroll-mt-28 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">How We Help</Eyebrow>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            A little help can change everything.
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="grid items-center gap-8 sm:grid-cols-2 sm:gap-14"
            >
              <div
                className={
                  i % 2 === 1 ? 'sm:order-2' : undefined
                }
              >
                <div className="overflow-hidden rounded-2xl border border-border/70 shadow-[0_16px_40px_-28px_rgba(23,21,21,0.4)]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={720}
                    height={540}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'sm:order-1' : undefined}>
                <h3 className="font-serif text-2xl text-charcoal sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-charcoal/75">
                  {service.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
