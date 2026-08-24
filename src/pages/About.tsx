import { Compass, GraduationCap, Landmark, Leaf, Scale, ShieldCheck, Sparkles, Users } from 'lucide-react'

import { CTASection } from '@/components/CTASection'
import { EcosystemDiagram } from '@/components/EcosystemDiagram'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'
import { Card, CardContent } from '@/components/ui/card'

const governancePrinciples = [
  {
    icon: Scale,
    title: 'Structural Rigour',
    description:
      'Holding-group discipline across capital allocation, compliance, product quality, and institutional accountability.',
  },
  {
    icon: Sparkles,
    title: 'Innovation Agility',
    description:
      'Dedicated venture teams move quickly across hardware, AI, and logistics while sharing platform infrastructure.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-First Scale',
    description:
      'Public-sector readiness is embedded through policy alignment, transparent governance, and auditable execution.',
  },
  {
    icon: Users,
    title: 'Impact Accountability',
    description:
      'Every venture is measured against developmental, operational, and technological outcomes for the communities it serves.',
  },
]

const esgPriorities = [
  {
    icon: GraduationCap,
    title: 'Education Equity',
    description:
      'Screen-free learning tools, regional-language content, and distribution models designed for broad access across India’s early learning environments.',
  },
  {
    icon: Leaf,
    title: 'Responsible Growth',
    description:
      'Localized design and deployment reduce dependency on imported consumer electronics while strengthening India-based R&D and manufacturing capability.',
  },
  {
    icon: Landmark,
    title: 'Institutional Trust',
    description:
      'Governance, data responsibility, and public policy alignment form the foundation for engagement with government and enterprise stakeholders.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About IRVEN"
        title="A seasoned holding platform with the agility of an innovation hub."
        description="IRVEN builds interconnected ecosystems rather than siloed applications—combining developmental hardware, intelligent software, and operational infrastructure to address complex societal challenges."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Mission & Vision"
            title="Technology with a developmental mandate."
            description="The IRVEN platform is organized around the belief that cognitive growth, operational efficiency, and technological self-reliance must advance together."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[1.75rem] border-slate-200 bg-slate-950 text-white shadow-xl shadow-slate-200">
              <CardContent className="p-8">
                <Compass className="size-8 text-amber-300" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Vision</p>
                <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight">
                  To serve as the foundational platform underpinning the growth, development, and technological empowerment of the next generation of global citizens.
                </h3>
              </CardContent>
            </Card>
            <Card className="rounded-[1.75rem] border-slate-200 bg-[#f8f3ea] shadow-xl shadow-slate-200">
              <CardContent className="p-8">
                <Sparkles className="size-8 text-amber-700" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Mission</p>
                <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-950">
                  To design, build, and deploy integrated hardware, software, and logistical infrastructure that fosters cognitive growth, operational efficiency, and technological self-reliance across emerging markets.
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <SectionHeader
            eyebrow="Corporate Governance & Ethos"
            title="Built to solve interconnected challenges."
            description="IRVEN operates with the structural rigour of a seasoned holding group and the agility of an innovation hub. We believe that tackling screen fatigue in toddlers, logistics bottlenecks, and digital intelligence adoption requires an ecosystem approach."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {governancePrinciples.map((principle) => {
              const Icon = principle.icon
              return (
                <div key={principle.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="size-6 text-amber-700" />
                  <h3 className="mt-4 font-serif text-xl font-semibold text-slate-950">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Leadership Model"
            title="Unified governance with domain-level ownership."
            description="IRVEN’s leadership structure combines founder-led stewardship, dedicated venture operating leads, and institutional oversight across finance, compliance, technology, and public engagement."
          />
          <div className="mt-12">
            <EcosystemDiagram />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            dark
            eyebrow="ESG Alignment"
            title="Social impact is an operating requirement, not a reporting layer."
            description="The platform’s ventures are structured around inclusive education, responsible technology deployment, and local value creation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {esgPriorities.map((priority) => {
              const Icon = priority.icon
              return (
                <div key={priority.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7">
                  <Icon className="size-7 text-amber-300" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold">{priority.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{priority.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Build with a governance-ready platform."
        description="Connect with IRVEN to explore venture collaboration, institutional deployment, research partnerships, or public-sector alignment."
      />
    </>
  )
}
