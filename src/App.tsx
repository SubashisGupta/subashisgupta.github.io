import { useEffect, type ComponentType } from 'react'
import { useLocation } from 'react-router'

import { Layout } from '@/components/Layout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Partnerships from '@/pages/Partnerships'
import Ventures from '@/pages/Ventures'
import type { PageKey } from '@/data/site'

const pageComponents: Record<PageKey, ComponentType> = {
  home: Home,
  about: About,
  ventures: Ventures,
  partnerships: Partnerships,
  contact: Contact,
}

const pageTitles: Record<PageKey, string> = {
  home: 'IRVEN — India Radiant Ventures',
  about: 'About IRVEN — India Radiant Ventures',
  ventures: 'Ventures — IRVEN',
  partnerships: 'Government & Institutional Partnerships — IRVEN',
  contact: 'Contact — IRVEN',
}

function getPageKey(hash: string): PageKey {
  const route = hash.replace(/^#/, '') || '/'

  if (route === '/about') return 'about'
  if (route === '/ventures') return 'ventures'
  if (route === '/partnerships') return 'partnerships'
  if (route === '/contact') return 'contact'

  return 'home'
}

export default function App() {
  const location = useLocation()
  const activePage = getPageKey(location.hash)
  const Page = pageComponents[activePage]

  useEffect(() => {
    document.title = pageTitles[activePage]
    window.scrollTo(0, 0)
  }, [activePage])

  return (
    <Layout activePage={activePage}>
      <Page />
    </Layout>
  )
}
