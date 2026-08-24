import { ArrowRight, Landmark } from 'lucide-react'

import { Button } from '@/components/ui/button'

type CTASectionProps = {
  title?: string
  description?: string
}

export function CTASection({
  title = 'Engage with IRVEN',
  description = 'Open a structured conversation with the IRVEN corporate team for policy alignment, institutional partnerships, enterprise deployment, or ecosystem collaboration.',
}: CTASectionProps) {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_36%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                <Landmark className="size-4" />
                Institutional & Government Partnership Portal
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300">
              <a href="#/contact">
                Route an Inquiry
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
