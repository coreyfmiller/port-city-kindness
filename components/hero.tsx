import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="scroll-mt-28 px-4 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl animate-rise">
        <div className="overflow-hidden rounded-2xl border border-border/70 shadow-[0_20px_60px_-30px_rgba(23,21,21,0.35)]">
          {/* Desktop / tablet: full artwork */}
          <Image
            src="/images/hero.png"
            alt="Port City Kindness — A clean home. A fresh start. A warm living room with cleaning supplies in a dusty rose bucket, alongside the values We Clean, We Care, and We Empower."
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 640px) 100vw, 0px"
            className="hidden h-auto w-full sm:block"
          />
          {/* Mobile: crop to keep the logo and headline area readable */}
          <div className="relative aspect-[3/4] w-full sm:hidden">
            <Image
              src="/images/hero.png"
              alt="Port City Kindness — A clean home. A fresh start."
              fill
              priority
              sizes="100vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-center font-serif text-xl leading-relaxed text-charcoal/80 sm:text-2xl">
          Sometimes a clean space can be the first step toward feeling like
          yourself again.
        </p>
      </div>
    </section>
  )
}
