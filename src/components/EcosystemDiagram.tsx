import { BookOpenCheck, BrainCircuit, Truck } from 'lucide-react'

const nodes = [
  {
    name: 'Hokopoko',
    label: 'Childhood',
    icon: BookOpenCheck,
    className: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    name: 'Dash24.in',
    label: 'Logistics',
    icon: Truck,
    className: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
  {
    name: 'Katzen.ai',
    label: 'AI & Technology',
    icon: BrainCircuit,
    className: 'border-violet-200 bg-violet-50 text-violet-700',
  },
]

export function EcosystemDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_34%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <div className="w-full max-w-sm rounded-3xl border border-slate-900 bg-slate-950 p-6 text-center text-white shadow-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Holding Platform</p>
          <h3 className="mt-3 font-serif text-2xl font-semibold">India Radiant Ventures</h3>
          <p className="mt-2 text-sm text-slate-300">Unified governance, shared intelligence, and nation-scale execution.</p>
        </div>

        <div className="h-10 w-px bg-gradient-to-b from-slate-400 to-transparent" />
        <div className="hidden h-px w-2/3 bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block" />

        <div className="grid w-full gap-4 md:grid-cols-3">
          {nodes.map((node) => {
            const Icon = node.icon
            return (
              <div key={node.name} className="relative">
                <div className="mx-auto hidden h-8 w-px bg-slate-300 md:block" />
                <div className={`rounded-3xl border p-5 text-center shadow-sm ${node.className}`}>
                  <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                    <Icon className="size-6" />
                  </div>
                  <h4 className="mt-4 font-serif text-xl font-semibold text-slate-950">{node.name}</h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em]">{node.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
