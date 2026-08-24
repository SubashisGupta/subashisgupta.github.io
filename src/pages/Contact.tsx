import { useState, type FormEvent } from 'react'
import { ArrowRight, Building2, CheckCircle2, FileText, Mail, MapPin, Send, ShieldCheck } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { partnershipTypes } from '@/data/site'

const routingSteps = [
  'Select the relevant partnership type',
  'Share organization and project context',
  'Your email client opens a pre-filled institutional inquiry',
]

export default function Contact() {
  const [partnershipType, setPartnershipType] = useState<string>(partnershipTypes[0])
  const [organization, setOrganization] = useState('')
  const [designation, setDesignation] = useState('')
  const [email, setEmail] = useState('')
  const [scope, setScope] = useState('')
  const [prepared, setPrepared] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`IRVEN Institutional Inquiry — ${partnershipType}`)
    const body = encodeURIComponent(
      [
        `Partnership Type: ${partnershipType}`,
        `Organization Name: ${organization}`,
        `Designation: ${designation}`,
        `Official Email ID: ${email}`,
        '',
        'Project Scope / Message:',
        scope,
      ].join('\n'),
    )

    window.location.href = `mailto:partnerships@irven.in?cc=institutional@irven.in&subject=${subject}&body=${body}`
    setPrepared(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact & Institutional Engagement"
        title="Route your inquiry to the right IRVEN partnership channel."
        description="Use the institutional portal for government bodies, investors, enterprise partners, vendors, supply-chain collaborators, media, and CSR inquiries."
      />

      <section className="bg-[#f8f3ea] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8">
          <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Inquiry Routing Form</p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-950">Institutional engagement request</h2>
                </div>
                <div className="hidden size-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 sm:flex">
                  <Send className="size-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="partnership-type">Partnership Type</Label>
                  <Select value={partnershipType} onValueChange={setPartnershipType}>
                    <SelectTrigger id="partnership-type" className="w-full bg-white">
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      {partnershipTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input
                      id="organization"
                      value={organization}
                      onChange={(event) => setOrganization(event.target.value)}
                      placeholder="Ministry, institution, or company"
                      required
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                      id="designation"
                      value={designation}
                      onChange={(event) => setDesignation(event.target.value)}
                      placeholder="Your role or office"
                      required
                      className="bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="official-email">Official Email ID</Label>
                  <Input
                    id="official-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@organization.gov.in / name@company.com"
                    required
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scope">Project Scope / Message</Label>
                  <Textarea
                    id="scope"
                    value={scope}
                    onChange={(event) => setScope(event.target.value)}
                    placeholder="Share the program, partnership objective, region, stakeholder group, and expected scope."
                    required
                    className="min-h-40 bg-white"
                  />
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  This static portal opens a pre-filled email to IRVEN. Inquiry details are not stored in the browser or transmitted to a server by this page.
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full bg-slate-950 text-white hover:bg-slate-800">
                  Prepare Institutional Email
                  <ArrowRight className="size-4" />
                </Button>

                {prepared ? (
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    Your email draft has been prepared. Please send it from your official email client to complete routing.
                  </div>
                ) : null}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-xl shadow-slate-200/70">
              <CardContent className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Registered Corporate Details</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold">India Radiant Ventures Pvt. Ltd.</h2>
                <div className="mt-7 space-y-5 text-sm leading-7 text-slate-300">
                  <div className="flex gap-3">
                    <Building2 className="mt-1 size-5 shrink-0 text-amber-300" />
                    <div>
                      <p className="font-semibold text-white">Corporate identity</p>
                      <p>IRVEN · IRVEN.in</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="mt-1 size-5 shrink-0 text-amber-300" />
                    <div>
                      <p className="font-semibold text-white">Corporate Office Address</p>
                      <p>To be updated. Registered address available for institutional verification.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="mt-1 size-5 shrink-0 text-amber-300" />
                    <div>
                      <p className="font-semibold text-white">CIN</p>
                      <p>To be updated. Corporate identification details available for due diligence.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-1 size-5 shrink-0 text-amber-300" />
                    <div>
                      <p className="font-semibold text-white">Official Email</p>
                      <p>
                        <a className="hover:text-amber-300" href="mailto:institutional@irven.in">institutional@irven.in</a>
                        <br />
                        <a className="hover:text-amber-300" href="mailto:partnerships@irven.in">partnerships@irven.in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-slate-200/70">
              <CardContent className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">How Routing Works</p>
                <div className="mt-6 space-y-4">
                  {routingSteps.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-amber-300">
                        {index + 1}
                      </div>
                      <p className="pt-1.5 text-sm leading-6 text-slate-600">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 size-6 text-amber-700" />
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-slate-950">Governance-ready engagement</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    For government, institutional, and enterprise inquiries, include the program owner, implementation geography, stakeholder group, and desired engagement model.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-full bg-white text-slate-700 hover:bg-white">Policy</Badge>
                    <Badge variant="secondary" className="rounded-full bg-white text-slate-700 hover:bg-white">R&D</Badge>
                    <Badge variant="secondary" className="rounded-full bg-white text-slate-700 hover:bg-white">Deployment</Badge>
                    <Badge variant="secondary" className="rounded-full bg-white text-slate-700 hover:bg-white">CSR</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Corporate Portal"
            title="One entry point for institutional, enterprise, and public-sector collaboration."
            description="IRVEN.in is structured as the governance and engagement layer for the full India Radiant Ventures ecosystem."
          />
        </div>
      </section>
    </>
  )
}
