import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Network,
  ShieldCheck,
  Truck,
} from 'lucide-react'

import { CTASection } from '@/components/CTASection'
import { EcosystemDiagram } from '@/components/EcosystemDiagram'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { heroStats, trustMetrics, ventures } from '@/data/site'

const pillarIcons = {
  hokopoko: BookOpenCheck,
  dash24: Truck,
  katzen: BrainCircuit,
}

const visualNodes = [
  {
    name: 'Hokopoko',
    label: 'Screen-free childhood audio',
    icon: BookOpenCheck,
    position: 'left-4 top-6 sm:left-8 sm:top-10',
    accent: 'bg-amber-400 text-slate-950',
  },
  {
    name: 'Dash24.in',
    label: 'Logistics backbone',
    icon: Truck,
    position: 'right-4 top-28 sm:right-10 sm:top-24',
    accent: 'bg-cyan-300 text-slate-950',
  },
  {
    name: 'Katzen.ai',
    label: 'AI & automation',
    icon: BrainCircuit,
    position: 'bottom-8 left-1/2 -translate-x-1/2',
    accent: 'bg-violet-300 text-slate-950',
  },
]

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/25 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.24),transparent_30%),radial-gradient(circle_at_75%_65%,rgba(59,130,246,0.22),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:38px_38px]" />

      <div className="relative min-h-[520px]">
        <div className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-amber-300/40 bg-white/10 p-5 text-center shadow-2xl backdrop-blur">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
            <Network className="size-7" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">IRVEN Platform</p>
          <p className="mt-2 font-serif text-2xl font-semibold">One Governance Core</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Hardware, AI, and logistics coordinated as one national-scale ecosystem.</p>
        </div>

        <div className="absolute left-[22%] top-[31%] hidden h-px w-32 rotate-[28deg] bg-gradient-to-r from-amber-300/70 to-transparent sm:block" />
        <div className="absolute right-[20%] top-[42%] hidden h-px w-32 -rotate-[18deg] bg-gradient-to-l from-cyan-300/70 to-transparent sm:block" />
        <div className="absolute bottom-[24%] left-1/2 hidden h-28 w-px bg-gradient-to-b from-violet-300/70 to-transparent sm:block" />

        {visualNodes.map((node) => {
          const Icon = node.icon
          return (
            <div
              key={node.name}
              className={`absolute ${node.position} w-44 rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/[0.12]`}
            >
              <div className={`flex size-10 items-center justify-center rounded-2xl ${node.accent}`}>
                <Icon className="size-5" />
              </div>
              <h3 className="mt-3 font-serif text-lg font-semibold">{node.name}</h3>
              <p className="mt-1 text-xs leading-5 text-slate-300">{node.label}</p>
            </div>
          )
        })}

        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 size-5 text-amber-300" />
            <div>
              <p className="text-sm font-semibold text-white">Institution-ready by design</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Structured for compliance, indigenous R&D, scalable deployment, and multi-domain governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f3ea]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.10),transparent_36%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <Badge className="rounded-full border border-amber-300 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm hover:bg-white">
              India Radiant Ventures Pvt. Ltd. · IRVEN.in
            </Badge>
            <h1 className="mt-7 font-serif text-5xl font-semibold tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl">
              Architecting the Ecosystem for Tomorrow’s Global Citizens.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              India Radiant Ventures Pvt. Ltd. operates at the intersection of early childhood development, intelligent automation, and next-generation technological infrastructure to empower India’s future generations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
                <a href="#/ventures">
                  Explore Our Ecosystem
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 bg-white/70 text-slate-950 hover:bg-white">
                <a href="#/partnerships">Institutional & Government Partnership Portal</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <p className="font-serif text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">The IRVEN Thesis</p>
            <Building2 className="mt-6 size-12 text-slate-950" />
          </div>
          <div>
            <blockquote className="font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-950 text-balance sm:text-4xl">
              “The trajectory of a nation is defined by the tools, intelligence, and infrastructure provided to its young citizens during their formative years.”
            </blockquote>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-600">
              India Radiant Ventures serves as a multi-product platform company engineered to build, scale, and deliver integrated solutions for early childhood growth, smart automation, and AI-driven systems. We build end-to-end ecosystems that support developmental, educational, and cognitive excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio Snapshot"
            title="Three venture pillars. One integrated operating platform."
            description="IRVEN combines childhood development hardware, national logistics execution, and enterprise AI capability under a single governance framework."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ventures.map((venture) => {
              const Icon = pillarIcons[venture.id as keyof typeof pillarIcons]
              return (
                <Card key={venture.id} className="group overflow-hidden rounded-[1.75rem] border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                      <Icon className="size-6" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">{venture.domain}</p>
                    <h3 className="mt-3 font-serif text-3xl font-semibold text-slate-950">{venture.name}</h3>
                    <p className="mt-4 min-h-28 text-sm leading-7 text-slate-600">{venture.summary}</p>
                    <a href="#/ventures" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition group-hover:gap-3">
                      View venture deep-dive
                      <ArrowRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            dark
            eyebrow="Institutional Trust"
            title="Nation-building metrics embedded into the operating model."
            description="IRVEN is designed to stand before investors, enterprise partners, and government bodies with a clear alignment to public policy, indigenous capability, and scalable execution."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {trustMetrics.map((metric) => (
              <div key={metric.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7">
                <CheckCircle2 className="size-6 text-amber-300" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">{metric.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f3ea] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Corporate Structure"
            title="A holding platform built for coordinated scale."
            description="A unified governance core allows each venture to operate with domain focus while sharing infrastructure, intelligence, and institutional standards."
          />
          <div className="mt-12">
            <EcosystemDiagram />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
