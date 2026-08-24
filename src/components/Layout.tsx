import { useState, type ReactNode } from 'react'
import { ArrowUpRight, Globe2, Landmark, Mail, MapPin, Menu, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navItems, ventures, type PageKey } from '@/data/site'
import { cn } from '@/lib/utils'

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#/" className="flex items-center gap-3" aria-label="IRVEN home">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold tracking-[0.18em] text-amber-300 shadow-lg shadow-slate-900/20">
        IR
      </div>
      <div>
        <p className={cn('font-serif text-xl font-semibold tracking-tight', dark ? 'text-white' : 'text-slate-950')}>IRVEN</p>
        <p className={cn('text-[11px] font-medium uppercase tracking-[0.18em]', dark ? 'text-slate-300' : 'text-slate-500')}>India Radiant Ventures</p>
      </div>
    </a>
  )
}

type LayoutProps = {
  activePage: PageKey
  children: ReactNode
}

export function Layout({ activePage, children }: LayoutProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-slate-950/10 backdrop-blur">
        <div className="border-b border-white/10 bg-amber-400 text-slate-950">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs font-semibold sm:px-6 lg:px-8">
            <p className="flex items-center gap-2">
              <ShieldCheck className="size-4" />
              Institutional portal for policy, enterprise, and venture partnerships
            </p>
            <a className="hidden items-center gap-2 hover:underline sm:flex" href="mailto:institutional@irven.in">
              <Mail className="size-4" />
              institutional@irven.in
            </a>
          </div>
        </div>

        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white',
                  activePage === item.key && 'bg-white text-slate-950 hover:bg-white hover:text-slate-950',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild className="rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300">
              <a href="#/contact">
                Start an Inquiry
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-white/10 bg-slate-950 text-white">
              <SheetHeader className="border-b border-white/10 p-6 text-left">
                <SheetTitle className="font-serif text-2xl text-white">IRVEN</SheetTitle>
                <SheetDescription className="text-slate-300">
                  India Radiant Ventures Pvt. Ltd. — ecosystem navigation
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2 p-6" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.key}>
                    <a
                      href={item.href}
                      className={cn(
                        'rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10',
                        activePage === item.key && 'bg-amber-400 text-slate-950 hover:bg-amber-400',
                      )}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              India Radiant Ventures Pvt. Ltd. operates at the intersection of early childhood development, intelligent automation, and next-generation technological infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-amber-300">
              <Globe2 className="size-4" />
              IRVEN.in
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a className="transition hover:text-amber-300" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Ventures</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {ventures.map((venture) => (
                <li key={venture.id}>
                  <a className="transition hover:text-amber-300" href={`#/ventures`}>
                    {venture.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Institutional Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 text-amber-300" />
                <span>institutional@irven.in<br />partnerships@irven.in</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 text-amber-300" />
                <span>Registered corporate address available for institutional verification.</span>
              </li>
              <li className="flex gap-3">
                <Landmark className="mt-0.5 size-4 text-amber-300" />
                <span>Government, investor, enterprise, vendor, and CSR inquiries routed through the portal.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 text-xs text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© {new Date().getFullYear()} India Radiant Ventures Pvt. Ltd. All rights reserved.</p>
            <p>Built for institutional engagement, public policy alignment, and ecosystem scale.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
