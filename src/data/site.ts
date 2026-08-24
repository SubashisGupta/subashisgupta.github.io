export type PageKey = 'home' | 'about' | 'ventures' | 'partnerships' | 'contact'

export const navItems: Array<{ key: PageKey; label: string; href: string }> = [
  { key: 'home', label: 'Home', href: '#/' },
  { key: 'about', label: 'About IRVEN', href: '#/about' },
  { key: 'ventures', label: 'Ventures', href: '#/ventures' },
  { key: 'partnerships', label: 'Partnerships', href: '#/partnerships' },
  { key: 'contact', label: 'Contact', href: '#/contact' },
]

export const heroStats = [
  { value: '03', label: 'Integrated venture pillars' },
  { value: '01', label: 'Unified governance platform' },
  { value: 'IN', label: 'India-first R&D and deployment' },
]

export const trustMetrics = [
  {
    title: 'National Alignment',
    description:
      'Aligned with National Education Policy goals for screen-free, early childhood developmental learning.',
  },
  {
    title: 'Atmanirbhar Capability',
    description:
      'Localized engineering, manufacturing design, and software R&D based in India.',
  },
  {
    title: 'Multi-Domain Leadership',
    description:
      'Unified governance bridging hardware, software, artificial intelligence, and operational logistics.',
  },
]

export type Venture = {
  id: string
  name: string
  domain: string
  summary: string
  overview: string
  impact: string
  alignment: string
  outcomes: string[]
  tone: 'amber' | 'cyan' | 'violet'
}

export const ventures: Venture[] = [
  {
    id: 'hokopoko',
    name: 'Hokopoko',
    domain: 'Early Childhood & Experiential Audio Hardware',
    summary:
      'Screen-free, tactile audio ecosystems designed for holistic early childhood cognitive development and screen fatigue mitigation.',
    overview:
      'Hokopoko is IRVEN’s flagship early childhood development initiative. Designed for ages 1 to 7, it combines durable, screen-free tactile audio hardware with localized regional storytelling, folklore, and educational content.',
    impact:
      'Solves screen-time addiction, enhances auditory learning, and preserves cultural heritage through tactile interaction.',
    alignment:
      'Direct alignment with early childhood care and education frameworks defined under India’s National Education Policy (NEP 2020).',
    outcomes: [
      'Play-based auditory learning for foundational-stage learners',
      'Regional-language storytelling and cultural continuity',
      'Durable tactile hardware built for classrooms and homes',
    ],
    tone: 'amber',
  },
  {
    id: 'dash24',
    name: 'Dash24.in',
    domain: 'Logistics & Distribution Engine',
    summary:
      'High-efficiency supply chain, distribution, and quick-fulfillment platforms bridging regional demand with seamless physical availability.',
    overview:
      'Dash24.in is the distribution and fulfillment backbone of the IRVEN ecosystem, providing real-time inventory routing, regional hub operations, and hyper-efficient consumer delivery channels.',
    impact:
      'Ensures that hardware components, educational products, and consumer goods achieve last-mile accessibility across Tier-1, Tier-2, and Tier-3 markets seamlessly.',
    alignment:
      'Supports Atmanirbhar Bharat logistics priorities through robust distribution infrastructure across diverse regional geographies.',
    outcomes: [
      'Regional hub operations for faster physical availability',
      'Inventory routing across consumer and institutional channels',
      'Last-mile readiness for education and hardware deployments',
    ],
    tone: 'cyan',
  },
  {
    id: 'katzen',
    name: 'Katzen.ai',
    domain: 'Next-Gen AI & Enterprise Automation',
    summary:
      'Advanced artificial intelligence models, automation pipelines, and software frameworks powering digital transformation.',
    overview:
      'Katzen.ai is IRVEN’s deep-tech research and enterprise software arm, focusing on scalable artificial intelligence, machine learning models, and automation frameworks.',
    impact:
      'Powers the backend intelligence across IRVEN’s consumer products while deploying custom AI architecture for institutional and corporate partners.',
    alignment:
      'Advances Digital India and AI-for-all priorities through deployable automation frameworks for public-sector workflows and educational analytics.',
    outcomes: [
      'Machine-learning models for adaptive product intelligence',
      'Automation pipelines for enterprise and public-sector workflows',
      'Software frameworks that connect hardware, data, and operations',
    ],
    tone: 'violet',
  },
]

export const policyRows = [
  {
    initiative: 'NEP 2020 — Foundational Stage',
    pillar: 'Hokopoko',
    proposition:
      'Provides screen-free, play-based auditory learning tools in regional languages for Anganwadis and preschools.',
  },
  {
    initiative: 'Make in India & MeitY',
    pillar: 'IRVEN Hardware',
    proposition:
      'In-house industrial design, local SMT assembly, and indigenous IP creation reducing reliance on imported consumer electronics.',
  },
  {
    initiative: 'Digital India / AI for All',
    pillar: 'Katzen.ai',
    proposition:
      'AI and automation frameworks deployable for public-sector workflow optimizations and educational analytics.',
  },
  {
    initiative: 'Atmanirbhar Bharat Logistics',
    pillar: 'Dash24.in',
    proposition:
      'Robust distribution infrastructure facilitating seamless supply chain execution across diverse regional geographies.',
  },
]

export const engagementModels = [
  {
    title: 'Public-Private Partnerships',
    description:
      'Deploying specialized audio-learning kits across government-run early learning centers and Anganwadis.',
  },
  {
    title: 'R&D and Indigenous Tech Development',
    description:
      'Joint research initiatives with academic institutions and innovation grants for deep-tech hardware and AI development.',
  },
  {
    title: 'CSR & Social Impact Execution',
    description:
      'Partnering with enterprise CSR divisions to distribute early childhood educational technology to underprivileged communities.',
  },
]

export const partnershipTypes = [
  'Government Body / Public Sector',
  'Institutional Investor',
  'Enterprise Partner',
  'Vendor / Supply Chain',
  'Media / CSR Inquiry',
]

export const institutionalBodies = [
  'NITI Aayog',
  'Ministry of Education',
  'Ministry of Electronics and IT',
  'Startup India',
  'Atal Innovation Mission',
  'State Skill Development Missions',
]
