import Link from 'next/link'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-xs font-semibold uppercase tracking-[0.2em] text-rose',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function HeartRule({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-3', className)}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-blush-pale sm:w-24" />
      <Heart className="size-4 text-rose" strokeWidth={1.5} />
      <span className="h-px w-16 bg-blush-pale sm:w-24" />
    </div>
  )
}

type CTAProps = {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

export function CTAButton({
  href,
  children,
  variant = 'solid',
  className,
}: CTAProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variant === 'solid'
          ? 'bg-rose text-primary-foreground shadow-sm hover:bg-rose/90 hover:shadow-md'
          : 'border border-rose/40 text-rose hover:border-rose hover:bg-rose/5',
        className,
      )}
    >
      {children}
    </Link>
  )
}
