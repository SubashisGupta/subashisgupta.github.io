import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.28em]',
          dark ? 'text-amber-300' : 'text-amber-700',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl',
          dark ? 'text-white' : 'text-slate-950',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-base leading-8 sm:text-lg',
            dark ? 'text-slate-300' : 'text-slate-600',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
