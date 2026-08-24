import { ArrowRight, CheckCircle2, FileCheck2, Handshake, Landmark, Microscope, ShieldCheck } from 'lucide-react'

import { CTASection } from '@/components/CTASection'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { engagementModels, institutionalBodies, policyRows } from '@/data/site'

const readinessFactors = [
  {
    icon: ShieldCheck,
    title: 'Compliance',
    description: 'Governance-led engagement designed for public procurement, institutional review, and auditable delivery.',
  },
  {
    icon: Landmark,
    title: 'Scalability',
    description: 'Venture architecture supports pilots that can expand from regional deployments to national programs.',
  },
  {
    icon: Microscope,
    title: 'Indigenous R&D',
    description: 'India-based engineering, manufacturing design, and AI research strengthen local technology capability.',
  },
  {
    icon: FileCheck2,
    title: 'Policy Alignment',
    description: 'Each venture is mapped to a clear public mission across education, electronics, AI, and logistics.',
  },
]

export default function Partnerships() {
  return (
    <>
      <PageHero
        eyebrow="Government & Institutional Partnerships"
        title="Nation-building programs require compliant, scalable, India-first technology platforms."
        description="IRVEN engages with government bodies, institutional investors, enterprise partners, and innovation missions through structured policy alignment and deployment-ready venture capabilities."
      >
        <div className="flex flex-wrap gap-3">
          {institutionalBodies.map((body) => (
            <Badge key={body} className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">
              {body}
            </Badge>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Institutional Readiness"
            title="What public-sector partners need to see."
            description="Government bodies look for compliance, scalability, indigenous R&D, and public policy alignment. IRVEN’s partnership portal is structured around those requirements."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {readinessFactors.map((factor) => {
              const Icon = factor.icon
              return (
                <Card key={factor.title} className="rounded-[1.75rem] border-slate-200 bg-slate-50 shadow-sm">
                  <CardContent className="p-6">
                    <Icon className="size-7 text-amber-700" />
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-slate-950">{factor.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{factor.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Policy Alignment Matrix"
            title="Direct mapping between national initiatives and IRVEN capabilities."
            description="The matrix below translates IRVEN’s portfolio into policy-relevant value propositions for early education, electronics manufacturing, AI deployment, and logistics resilience."
          />

          <Card className="mt-12 overflow-hidden rounded-[1.75rem] border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-950 hover:bg-slate-950">
                    <TableHead className="min-w-56 text-white">Government Initiative</TableHead>
                    <TableHead className="min-w-40 text-white">IRVEN Pillar</TableHead>
                    <TableHead className="min-w-[26rem] text-white">Strategic Value Proposition</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {policyRows.map((row) => (
                    <TableRow key={row.initiative} className="border-slate-200">
                      <TableCell className="font-semibold text-slate-950">{row.initiative}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="rounded-full bg-amber-100 text-amber-800 hover:bg-amber-100">
                          {row.pillar}
                        </Badge>
                      </TableCell>
                      <TableCell className="leading-7 text-slate-600">{row.proposition}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Public Sector Engagement Models"
              title="Structured routes from pilot to national scale."
              description="IRVEN supports partnership formats that match public-sector procurement, academic research, and enterprise CSR objectives."
            />
            <Button asChild className="mt-8 rounded-full bg-slate-950 text-white hover:bg-slate-800">
              <a href="#/contact">
                Open Partnership Channel
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-5">
            {engagementModels.map((model, index) => (
              <AccordionItem key={model.title} value={`item-${index}`} className="border-slate-200">
                <AccordionTrigger className="py-6 text-left font-serif text-xl font-semibold text-slate-950 hover:no-underline">
                  {model.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-7 text-slate-600">
                  {model.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Handshake className="size-10 text-amber-300" />
              <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Partnerships are evaluated for mission fit, deployment readiness, and measurable public value.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Early learning deployments for Anganwadis and preschools',
                'Joint research programs across AI and hardware',
                'Regional logistics and fulfillment infrastructure',
                'CSR-backed access to educational technology',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm leading-7 text-slate-300">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-amber-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start a government or institutional partnership conversation."
        description="Use the inquiry portal to route your organization, scope, and partnership type to the appropriate IRVEN team."
      />
    </>
  )
}
