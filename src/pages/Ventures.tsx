import { ArrowRight, BookOpenCheck, BrainCircuit, CheckCircle2, Factory, Layers3, Truck } from 'lucide-react'

import { CTASection } from '@/components/CTASection'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ventures } from '@/data/site'

const ventureIcons = {
  hokopoko: BookOpenCheck,
  dash24: Truck,
  katzen: BrainCircuit,
}

const toneStyles = {
  amber: {
    icon: 'bg-amber-400 text-slate-950',
    eyebrow: 'text-amber-700',
    ring: 'hover:border-amber-300',
  },
  cyan: {
    icon: 'bg-cyan-300 text-slate-950',
    eyebrow: 'text-cyan-700',
    ring: 'hover:border-cyan-300',
  },
  violet: {
    icon: 'bg-violet-300 text-slate-950',
    eyebrow: 'text-violet-700',
    ring: 'hover:border-violet-300',
  },
}

const ecosystemFlow = [
  {
    icon: BookOpenCheck,
    title: 'Design for formative development',
    description: 'Hokopoko translates early childhood pedagogy into durable, tactile, screen-free learning experiences.',
  },
  {
    icon: Factory,
    title: 'Build and distribute locally',
    description: 'IRVEN hardware design and Dash24.in distribution connect indigenous production with last-mile access.',
  },
  {
    icon: BrainCircuit,
    title: 'Compound intelligence',
    description: 'Katzen.ai supplies the AI, analytics, and automation layer across consumer products and institutional deployments.',
  },
]

export default function Ventures() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem & Venture Portfolio"
        title="Hokopoko, Dash24.in, and Katzen.ai operate as one integrated ecosystem."
        description="Each venture addresses a distinct layer of national capability—developmental hardware, logistics infrastructure, and enterprise intelligence—while sharing IRVEN’s governance and platform architecture."
      >
        <div className="flex flex-wrap gap-3">
          {ventures.map((venture) => (
            <Badge key={venture.id} className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">
              {venture.name}
            </Badge>
          ))}
        </div>
      </PageHero>

      <section className="bg-[#f8f3ea] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title="Three pillars with reinforcing capabilities."
            description="IRVEN’s portfolio is structured so that product design, physical distribution, and intelligent software strengthen one another at every stage of deployment."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ventures.map((venture) => {
              const Icon = ventureIcons[venture.id as keyof typeof ventureIcons]
              const tone = toneStyles[venture.tone]
              return (
                <Card key={venture.id} className={`rounded-[1.75rem] border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 ${tone.ring}`}>
                  <CardContent className="p-7">
                    <div className={`flex size-14 items-center justify-center rounded-2xl ${tone.icon}`}>
                      <Icon className="size-6" />
                    </div>
                    <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.2em] ${tone.eyebrow}`}>{venture.domain}</p>
                    <h3 className="mt-3 font-serif text-3xl font-semibold text-slate-950">{venture.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{venture.summary}</p>
                    <a href={`#/ventures`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                      Explore below
                      <ArrowRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Venture Deep-Dive"
            title="Explore each operating company."
            description="Detailed venture profiles covering product scope, ecosystem impact, and institutional alignment."
          />

          <Tabs defaultValue="hokopoko" className="mt-12">
            <TabsList className="grid h-auto w-full grid-cols-1 gap-2 rounded-[1.5rem] bg-slate-100 p-2 sm:grid-cols-3">
              {ventures.map((venture) => (
                <TabsTrigger key={venture.id} value={venture.id} className="rounded-2xl px-4 py-3 data-[state=active]:bg-slate-950 data-[state=active]:text-white">
                  {venture.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {ventures.map((venture) => {
              const Icon = ventureIcons[venture.id as keyof typeof ventureIcons]
              return (
                <TabsContent key={venture.id} value={venture.id} className="mt-8">
                  <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-xl">
                      <CardContent className="p-8">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                          <Icon className="size-7" />
                        </div>
                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{venture.domain}</p>
                        <h3 className="mt-3 font-serif text-4xl font-semibold">{venture.name}</h3>
                        <p className="mt-5 text-base leading-8 text-slate-300">{venture.overview}</p>
                        <Button asChild className="mt-8 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300">
                          <a href="#/contact">
                            Discuss Deployment
                            <ArrowRight className="size-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>

                    <div className="grid gap-6">
                      <Card className="rounded-[1.75rem] border-slate-200 bg-[#f8f3ea]">
                        <CardContent className="p-7">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Impact</p>
                          <p className="mt-4 text-lg leading-8 text-slate-700">{venture.impact}</p>
                        </CardContent>
                      </Card>
                      <Card className="rounded-[1.75rem] border-slate-200 bg-white">
                        <CardContent className="p-7">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Government & Institutional Alignment</p>
                          <p className="mt-4 text-base leading-8 text-slate-700">{venture.alignment}</p>
                        </CardContent>
                      </Card>
                      <Card className="rounded-[1.75rem] border-slate-200 bg-white">
                        <CardContent className="p-7">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Operating Outcomes</p>
                          <ul className="mt-5 space-y-3">
                            {venture.outcomes.map((outcome) => (
                              <li key={outcome} className="flex gap-3 text-sm leading-7 text-slate-700">
                                <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-600" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ecosystem Flywheel"
            title="How the ventures compound."
            description="The portfolio is not a collection of isolated products. It is a coordinated system for building, distributing, and improving technology at scale."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ecosystemFlow.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="absolute right-6 top-6 font-serif text-5xl font-semibold text-slate-100">0{index + 1}</div>
                  <Icon className="relative size-7 text-amber-700" />
                  <h3 className="relative mt-5 font-serif text-2xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-7 text-white">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <Layers3 className="mt-1 size-6 text-amber-300" />
                <div>
                  <h3 className="font-serif text-2xl font-semibold">Shared platform infrastructure</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                    Governance, R&D, manufacturing design, AI architecture, logistics routing, and institutional engagement operate as shared capabilities across the IRVEN ecosystem.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href="#/partnerships">View Policy Alignment</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Deploy a venture, or build with the full ecosystem."
        description="IRVEN supports product pilots, institutional rollouts, enterprise AI programs, logistics partnerships, and joint R&D initiatives."
      />
    </>
  )
}
