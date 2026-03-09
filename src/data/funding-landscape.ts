// HISAGEN Funding Landscape Data
// Source of truth: content/funding/grant-landscape.md
// 12 curated funders (6 Tier 1, 6 Tier 2) from 40+ researched
// Last synced: 2026-03-09

export type FunderTier = "tier1" | "tier2";
export type FunderCategory =
  | "climate-adaptation"
  | "agricultural-food"
  | "us-foundation"
  | "uk-trust"
  | "accelerator";

export interface CuratedFunder {
  id: string;
  name: string;
  shortName: string;
  tier: FunderTier;
  category: FunderCategory;
  grantRange: string;
  grantMin?: number;
  grantMax?: number;
  currency: string;
  deadline?: string;
  deadlineNote?: string;
  applyVia: string;
  whyStrongFit: string;
  process?: string;
  consideration?: string;
  url?: string;
}

export interface TimelineEntry {
  when: string;
  what: string;
  funder: string;
  funderId: string;
  urgency: "urgent" | "high" | "medium" | "low";
}

// ─────────────────────────────────────────────────────────────
// TIER 1: Priority Pursue (scored 4.0+)
// ─────────────────────────────────────────────────────────────

export const tier1Funders: CuratedFunder[] = [
  {
    id: "cfh-foundation",
    name: "Conservation, Food & Health Foundation",
    shortName: "CFH Foundation",
    tier: "tier1",
    category: "us-foundation",
    grantRange: "$25,000 - $50,000",
    grantMin: 25000,
    grantMax: 50000,
    currency: "USD",
    deadline: "June 15, 2026",
    deadlineNote: "Concept note deadline",
    applyVia: "Either entity (non-US orgs accepted)",
    whyStrongFit:
      "Explicitly seeks seed money for organisations building track records in applied research and pilot projects in under-funded areas. HISAGEN's exact stage and profile.",
    process: "Short concept application via online portal. Invited proposals follow.",
  },
  {
    id: "afcia",
    name: "AFCIA (Adaptation Fund Climate Innovation Accelerator)",
    shortName: "AFCIA",
    tier: "tier1",
    category: "climate-adaptation",
    grantRange: "Up to $250,000",
    grantMax: 250000,
    currency: "USD",
    deadlineNote: "Confirm timing with UNDP Uganda",
    applyVia: "UNDP Uganda / UNEP CTCN",
    whyStrongFit:
      "Innovation in climate adaptation is the exact mandate. Designed to generate evidence for scaling. 44 grants in 33 countries. Open to entrepreneurs and young innovators.",
    process: "Through UNDP Uganda country office.",
  },
  {
    id: "cfc",
    name: "Common Fund for Commodities",
    shortName: "CFC",
    tier: "tier1",
    category: "agricultural-food",
    grantRange: "$300,000 - $2,000,000",
    grantMin: 300000,
    grantMax: 2000000,
    currency: "USD",
    deadline: "~April 30, 2026",
    deadlineNote: "Rolling quarterly batch",
    applyVia: "HISAGEN Africa Ltd",
    whyStrongFit:
      "CFC 2025 Annual Report lists bio-fertilizer pilots in Kenya/Uganda in their pipeline \u2014 direct signal of interest. LDCs prioritised. Mix of grants and soft loans.",
    process: "Pre-proposal via CFC online portal.",
  },
  {
    id: "aaap-gca",
    name: "AAAP (Africa Adaptation Acceleration Program)",
    shortName: "AAAP/GCA",
    tier: "tier1",
    category: "climate-adaptation",
    grantRange: "\u20AC500,000 - \u20AC5,000,000",
    grantMin: 500000,
    grantMax: 5000000,
    currency: "EUR",
    deadline: "May 15, 2026",
    deadlineNote: "Concept note deadline",
    applyVia: "HISAGEN Africa Ltd + consortium partner",
    whyStrongFit:
      "Africa-focused climate adaptation at scale. HISAGEN's adaptation narrative aligns directly. Dual-entity and Uganda focus are strengths.",
    consideration:
      "EUR 500K minimum likely requires consortium (e.g., NARO, Makerere University).",
    process: "Concept note (5-10 pages) + budget template via apply.gca.org.",
  },
  {
    id: "echoing-green",
    name: "Echoing Green Fellowship",
    shortName: "Echoing Green",
    tier: "tier1",
    category: "us-foundation",
    grantRange: "$100,000 (unrestricted) + 18 months support",
    grantMin: 100000,
    grantMax: 100000,
    currency: "USD",
    deadline: "September 2026",
    deadlineNote: "Opens September 2026",
    applyVia: "HISAGEN USA Inc.",
    whyStrongFit:
      "Designed for early-stage social entrepreneurs. Past fellows include Farmerline (ag-tech for smallholders in Africa). HISAGEN's stage, sector, and geography match the fellowship profile.",
    process: "Open application. Competitive.",
  },
  {
    id: "afdb-taat",
    name: "AfDB TAAT Phase II",
    shortName: "AfDB TAAT",
    tier: "tier1",
    category: "climate-adaptation",
    grantRange: "Variable (via Calls for Proposals)",
    currency: "USD",
    deadlineNote: "Monitor for CFP",
    applyVia: "HISAGEN Africa Ltd",
    whyStrongFit:
      "Technologies for African Agricultural Transformation \u2014 bio-fertilizer is exactly this. Perfect mandate alignment.",
    consideration: "No open application route currently. Need to monitor for Calls for Proposals.",
  },
];

// ─────────────────────────────────────────────────────────────
// TIER 2: Strong Fit (scored 3.0-3.9)
// ─────────────────────────────────────────────────────────────

export const tier2Funders: CuratedFunder[] = [
  {
    id: "mulago",
    name: "Mulago Foundation",
    shortName: "Mulago",
    tier: "tier2",
    category: "us-foundation",
    grantRange: "$100K fellowship, potential $340K portfolio",
    grantMin: 100000,
    grantMax: 340000,
    currency: "USD",
    deadlineNote: "No direct applications \u2014 referral-sourced (Aug-Oct cycle)",
    applyVia: "Referral only",
    whyStrongFit:
      "Excellent fit for HISAGEN's profile but requires network building. No direct applications.",
  },
  {
    id: "rockefeller-filab",
    name: "Rockefeller Foundation Innovation Lab",
    shortName: "Rockefeller FILab",
    tier: "tier2",
    category: "us-foundation",
    grantRange: "$100K first round, follow-on to $2.5M",
    grantMin: 100000,
    grantMax: 2500000,
    currency: "USD",
    deadlineNote: "Q3 2026 expected opening",
    applyVia: "Open application (when announced)",
    whyStrongFit:
      "Food security innovation focus. Strong growth ladder if initial funding secured.",
  },
  {
    id: "ifad-agriconnect",
    name: "IFAD AgriConnect",
    shortName: "IFAD AgriConnect",
    tier: "tier2",
    category: "agricultural-food",
    grantRange: "Up to $1.5M",
    grantMax: 1500000,
    currency: "USD",
    deadlineNote: "Check call status at ifad.org",
    applyVia: "HISAGEN Africa Ltd",
    whyStrongFit:
      "Private-sector-smallholder partnerships. 20-25% co-financing required.",
    consideration: "Co-financing requirement may need matching.",
  },
  {
    id: "trustafrica",
    name: "TrustAfrica",
    shortName: "TrustAfrica",
    tier: "tier2",
    category: "agricultural-food",
    grantRange: "$20,000 - $30,000",
    grantMin: 20000,
    grantMax: 30000,
    currency: "USD",
    deadlineNote: "Register on Fluxx Grants platform now",
    applyVia: "Fluxx Grants platform",
    whyStrongFit:
      "Agroecology in Africa focus. Has funded Uganda projects previously.",
  },
  {
    id: "climate-finance-lab",
    name: "Climate Finance Lab",
    shortName: "Climate Finance Lab",
    tier: "tier2",
    category: "climate-adaptation",
    grantRange: "$150,000 - $250,000 (milestone-based)",
    grantMin: 150000,
    grantMax: 250000,
    currency: "USD",
    deadlineNote: "Requires financial instrument framing",
    applyVia: "Open application",
    whyStrongFit:
      "Viable if bio-fertilizer distribution structured as an investable product. Blended finance mechanism.",
  },
  {
    id: "noel-buxton",
    name: "Noel Buxton Trust",
    shortName: "Noel Buxton Trust",
    tier: "tier2",
    category: "uk-trust",
    grantRange: "GBP 5,000/year for up to 3 years",
    grantMin: 5000,
    grantMax: 15000,
    currency: "GBP",
    deadlineNote: "Rolling applications, decisions take up to 6 months",
    applyVia: "Direct application",
    whyStrongFit:
      "One of the most accessible UK trusts for Uganda-based work.",
  },
];

// ─────────────────────────────────────────────────────────────
// COMBINED + HELPERS
// ─────────────────────────────────────────────────────────────

export const allCuratedFunders: CuratedFunder[] = [...tier1Funders, ...tier2Funders];

export const getFunderById = (id: string): CuratedFunder | undefined =>
  allCuratedFunders.find((f) => f.id === id);

export const getFundersByCategory = (category: FunderCategory): CuratedFunder[] =>
  allCuratedFunders.filter((f) => f.category === category);

// ─────────────────────────────────────────────────────────────
// APPLICATION TIMELINE
// ─────────────────────────────────────────────────────────────

export const applicationTimeline: TimelineEntry[] = [
  {
    when: "Mar 2026",
    what: "Submit pre-proposal",
    funder: "Common Fund for Commodities",
    funderId: "cfc",
    urgency: "urgent",
  },
  {
    when: "Mar 2026",
    what: "Contact UNDP Uganda",
    funder: "AFCIA",
    funderId: "afcia",
    urgency: "high",
  },
  {
    when: "Apr 2026",
    what: "Review Call for Proposals",
    funder: "AAAP (GCA)",
    funderId: "aaap-gca",
    urgency: "high",
  },
  {
    when: "May 2026",
    what: "Submit concept note",
    funder: "AAAP (deadline May 15)",
    funderId: "aaap-gca",
    urgency: "high",
  },
  {
    when: "May\u2013Jun 2026",
    what: "Concept application",
    funder: "CFH Foundation (deadline Jun 15)",
    funderId: "cfh-foundation",
    urgency: "medium",
  },
  {
    when: "Jul\u2013Sep 2026",
    what: "Fellowship application",
    funder: "Echoing Green (opens Sep)",
    funderId: "echoing-green",
    urgency: "medium",
  },
  {
    when: "Q3 2026",
    what: "Monitor and apply",
    funder: "Rockefeller FILab",
    funderId: "rockefeller-filab",
    urgency: "low",
  },
];

// ─────────────────────────────────────────────────────────────
// LANDSCAPE SUMMARY STATS
// ─────────────────────────────────────────────────────────────

export const landscapeStats = {
  totalResearched: 40,
  totalShortlisted: 12,
  tier1Count: 6,
  tier2Count: 6,
  tier1PipelineValue: "$475K - $7.6M",
  tier2PipelineValue: "$195K - $2.1M",
  totalPipelineValue: "$670K - $9.7M",
  categories: [
    "Climate Adaptation Funds",
    "Agricultural & Food Security Foundations",
    "US Private Foundations",
    "UK Trusts & Foundations",
  ],
};
