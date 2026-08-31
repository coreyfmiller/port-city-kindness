import Link from 'next/link'

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-rose px-6 py-16 text-center sm:px-12 sm:py-20">
        <p className="font-script text-3xl text-primary-foreground/90 sm:text-4xl">
          Small acts. Big impact.
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-3xl leading-[1.15] text-primary-foreground sm:text-5xl sm:leading-[1.1]">
          Together, we can change lives.
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="#request-help"
            className="inline-flex w-full items-center justify-center rounded-md bg-offwhite px-7 py-3 text-sm font-medium text-rose shadow-sm transition-all duration-300 hover:bg-cream sm:w-auto"
          >
            Request Help
          </Link>
          <Link
            href="#get-involved"
            className="inline-flex w-full items-center justify-center rounded-md border border-primary-foreground/50 px-7 py-3 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground/10 sm:w-auto"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  )
}
