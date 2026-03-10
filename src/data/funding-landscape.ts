// HISAGEN Funding Landscape Data
// Source of truth: HISAGEN-FUNDER-PIPELINE.md (delivery/grants-fundraising/02-landscape-scanning/)
// Phase E: for-profit eligibility filter — 8 of 11 traditional funders ineligible
// Phase F: for-profit-friendly scan — verified funders only (removed Village Capital, SBIR/STTR; reclassified START II, DIV)
// Sync chain: Pipeline tracker -> this file -> page renders
// Last synced: 2026-03-10 (post-verification)

export type FunderTier = "tier1" | "tier2";
export type FunderCategory =
  | "climate-adaptation"
  | "agricultural-food"
  | "us-foundation"
  | "uk-trust"
  | "accelerator"
  | "venture-philanthropy"
  | "dfi-private-sector"
  | "impact-fund";

export type EligibilityStatus =
  | "eligible"
  | "ineligible"
  | "conditional"
  | "reclassified"
  | "deprioritised";

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
  eligibility: EligibilityStatus;
  eligibilityNote: string;
  score: number;
}

export interface TimelineEntry {
  when: string;
  what: string;
  funder: string;
  funderId: string;
  urgency: "urgent" | "high" | "medium" | "low";
}

export type PhaseStatus = "complete" | "active" | "in-progress" | "not-started" | "foundation-ready";

export interface GrantPhase {
  number: number;
  name: string;
  status: PhaseStatus;
  statusLabel: string;
  description: string;
}

export interface StrategicRecommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
}

export interface KeirAction {
  id: string;
  action: string;
  funder?: string;
  byWhen: string;
  status: "not-started" | "in-progress" | "done";
}

// ─────────────────────────────────────────────────────────────
// ALL FUNDERS — with eligibility status from Phase E filter
// ─────────────────────────────────────────────────────────────

const allFundersRaw: CuratedFunder[] = [
  // --- TIER 1 ---
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
    eligibility: "ineligible",
    eligibilityNote: "Nonprofit/NGO only. All IP must be public. Concept draft exists — usable if nonprofit entity established.",
    score: 4.35,
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
    eligibility: "ineligible",
    eligibilityNote: "CSO/NGO only (despite 'entrepreneur' marketing). All 44 grants awarded to nonprofit entities.",
    score: 4.35,
  },
  {
    id: "aaap-gca",
    name: "AAAP (Africa Adaptation Acceleration Program)",
    shortName: "AAAP/YouthADAPT",
    tier: "tier1",
    category: "climate-adaptation",
    grantRange: "Up to $30,000 (YouthADAPT)",
    grantMax: 30000,
    currency: "USD",
    deadline: "TBC",
    deadlineNote: "YouthADAPT — founder must be aged 18-35. Check with Keir.",
    applyVia: "Direct (YouthADAPT only)",
    whyStrongFit:
      "YouthADAPT In-Country Challenge: up to $30K + 12-month accelerator for youth-led MSMEs. For-profit eligible if founder aged 18-35.",
    consideration:
      "Main AAAP programme (EUR 500K-5M) routes through MDBs — not direct grants. YouthADAPT is the only for-profit entry point. Requires 2+ years revenue.",
    eligibility: "conditional",
    eligibilityNote: "YouthADAPT requires founder aged 18-35. Main AAAP programme routes through MDBs, not available directly. Keir must confirm age eligibility.",
    score: 4.10,
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
    deadlineNote: "Opens Sep 2026 (2026 cycle closed; next likely early 2027)",
    applyVia: "HISAGEN USA Inc.",
    whyStrongFit:
      "Explicitly accepts for-profit: 'Does my organization need to be structured as a nonprofit? No, all organization structures are eligible.' For-profit funding as recoverable grants. Past fellows include Farmerline (ag-tech for smallholders in Africa).",
    process: "Open application. Highly competitive (~4,000 applications, 15-20 fellows selected).",
    url: "https://www.echoinggreen.org/fellowship",
    eligibility: "eligible",
    eligibilityNote: "Explicitly accepts for-profit. Recoverable grant — repayment only if valued >$5M or >$2M revenue with net profit within 5 years.",
    score: 4.05,
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
    eligibility: "ineligible",
    eligibilityNote: "Private sector as partner/implementer only, not direct recipient. Partner route possible alongside public institution.",
    score: 4.00,
  },
  // --- TIER 1 (Phase F: for-profit-friendly scan) ---
  {
    id: "start-ii",
    name: "Uganda START II (Support to Agricultural Revitalization & Transformation)",
    shortName: "START II",
    tier: "tier2",
    category: "dfi-private-sector",
    grantRange: "UGX 20M-80M reimbursable grant (~$5K-$21K) + UGX 20M-40M TA grant (~$5K-$11K)",
    grantMin: 5000,
    grantMax: 21000,
    currency: "USD",
    deadline: "Rolling (open year-round)",
    deadlineNote: "EU-funded via UNCDF. Rolling applications at start.go.ug. Also offers concessional loans via UDB (12% p.a., separate track).",
    applyVia: "HISAGEN Africa Ltd (must be Uganda-registered, 2+ years operating, 2-100 employees)",
    whyStrongFit:
      "EU/UNCDF programme targeting agribusiness SMEs in Uganda. For-profit eligible. Offers reimbursable grants (zero-interest, repay principal in 6-18 months), TA grants for certifications, BDS support, and concessional loan linkage via UDB.",
    process: "Online application at start.go.ug. 4-stage selection: longlisting, shortlisting, due diligence, proposal development. 25% equity contribution required.",
    consideration: "Primary products are loans (12% via UDB) and reimbursable grants (zero-interest, repay principal). True grants only for TA (certifications, compliance). Not the large grant programme originally assessed.",
    url: "https://www.psfuganda.org/projects/start-ii-facility.html",
    eligibility: "eligible",
    eligibilityNote: "For-profit eligible. But primarily loans and reimbursable grants, not outright grants. TA grants ($5-11K) for certifications only. Requires 2+ years operating history.",
    score: 3.10,
  },
  {
    id: "acumen-araf",
    name: "Acumen Resilient Agriculture Fund (ARAF)",
    shortName: "Acumen/ARAF",
    tier: "tier1",
    category: "impact-fund",
    grantRange: "$300,000 - $3,000,000 (equity/quasi-equity)",
    grantMin: 300000,
    grantMax: 3000000,
    currency: "USD",
    deadlineNote: "Pipeline-driven. No open application. Fund is 84% disbursed — limited remaining capital but runs until 2030.",
    applyVia: "HISAGEN Africa Ltd (East Africa focus)",
    whyStrongFit:
      "GCF-backed $58M fund targeting for-profit early-stage agribusinesses building climate resilience in East Africa. Patient capital (5-10 year). 11 portfolio companies include Ugandan agribusinesses (Uzima Chicken). Uganda explicitly included, for-profit by design.",
    process: "Pipeline-driven \u2014 no open application. Contact investment team directly. GCF project page: greenclimate.fund/project/fp078.",
    consideration: "This is equity investment, not a grant. ARAF takes minority equity stake. Fund is 84% disbursed (GCF data) \u2014 most capital already deployed. Still worth exploring for remaining allocation or follow-on opportunities. No evidence of a second fund.",
    url: "https://arafund.com/",
    eligibility: "eligible",
    eligibilityNote: "Verified: for-profit agribusinesses in Uganda explicitly eligible. Equity investment (not grant). Fund 84% disbursed \u2014 limited remaining capital.",
    score: 4.35,
  },
  {
    id: "div-fund",
    name: "DIV Fund (formerly USAID Development Innovation Ventures)",
    shortName: "DIV Fund",
    tier: "tier2",
    category: "venture-philanthropy",
    grantRange: "$25,000 - $200,000 (Stage 1 Pilot)",
    grantMin: 25000,
    grantMax: 200000,
    currency: "USD",
    deadlineNote: "USAID DIV eliminated Jan 2025. Relaunched Feb 2026 as independent nonprofit (div.fund). Applications expected mid-2026.",
    applyVia: "HISAGEN USA Inc.",
    whyStrongFit:
      "Same team (Nobel laureate Michael Kremer as Scientific Director), same evidence-based model ($25K pilot, $200K test, $15M scale). $48M raised from private donors. For-profit eligible. HISAGEN's NARO trial data fits Stage 1.",
    process: "Applications expected to open mid-2026. Monitor div.fund for announcements.",
    consideration: "USAID version shut down Jan 2025 (Trump admin). New nonprofit version launched Feb 19, 2026 with private funding. Smaller budget ($48M total vs $40M+/year). Not yet accepting applications.",
    url: "https://www.div.fund/",
    eligibility: "conditional",
    eligibilityNote: "Likely accepts for-profit (same model). Not yet accepting applications \u2014 expected mid-2026. Monitor div.fund.",
    score: 3.60,
  },
  {
    id: "draper-richards-kaplan",
    name: "Draper Richards Kaplan Foundation",
    shortName: "DRK Foundation",
    tier: "tier1",
    category: "venture-philanthropy",
    grantRange: "Up to $300,000 over 3 years + $500K in-kind support",
    grantMin: 100000,
    grantMax: 300000,
    currency: "USD",
    deadline: "Rolling applications (year-round)",
    deadlineNote: "Rolling. ~2,500 applications/year, 10-12 selected. 8-10 week initial review, 3-6 months total process.",
    applyVia: "HISAGEN USA Inc.",
    whyStrongFit:
      "Verified: explicitly accepts for-profit. Quote: 'impact first, mission-driven for-profit entities, including C corporations, B corporations.' $188M assets, 280 organisations funded. Recent portfolio: Mati Carbon (2025, soil restoration for smallholders in Africa \u2014 nearly identical to HISAGEN). Africa + agriculture = priority sectors.",
    process: "Online application at drkfoundation.org/apply. Multi-stage: 20% advance to interviews, <10% to diligence, board decision. DRK takes board seat for 3 years.",
    consideration: "For for-profits: investment capital (not grant). Terms negotiated case-by-case. DRK takes board seat + expects weekly conversations. Total package ~$800K (cash + in-kind). Seed to Series A stage.",
    url: "https://www.drkfoundation.org/apply/",
    eligibility: "eligible",
    eligibilityNote: "Verified: for-profit explicitly accepted. Investment capital for for-profits (not grant). Board seat required. Mati Carbon (2025) = direct precedent for HISAGEN's model.",
    score: 4.10,
  },
  // --- TIER 2 ---
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
      "Explicitly funds for-profits: 'We back both for-profits and nonprofits: mostly grants, sometimes debt or equity.' Portfolio includes for-profit companies (e.g. Pula \u2014 crop insurance). ~60% of fellows convert to long-term portfolio.",
    url: "https://www.mulagofoundation.org/",
    eligibility: "eligible",
    eligibilityNote: "Explicitly funds for-profits. Referral-sourced only — Keir needs to build network connections before Aug-Oct sourcing window.",
    score: 3.85,
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
    eligibility: "ineligible",
    eligibilityNote: "Nonprofit/community organisations only. 'Food Initiative Lab' not clearly active as distinct programme.",
    score: 3.80,
  },
  {
    id: "ifad",
    name: "IFAD (International Fund for Agricultural Development)",
    shortName: "IFAD",
    tier: "tier2",
    category: "agricultural-food",
    grantRange: "Up to $1.5M",
    grantMax: 1500000,
    currency: "USD",
    deadlineNote: "Monitor for new calls (AgriConnect closed)",
    applyVia: "Direct application when calls open",
    whyStrongFit:
      "Accepts private sector: eligibility extends to 'private sector entities, alongside consulting organizations, alliances of partner service providers, specialized NGOs.' 25% co-financing required.",
    consideration: "AgriConnect specifically is CLOSED (Ernst & Young selected). IFAD regularly issues new calls across similar themes.",
    url: "https://www.ifad.org/en/call-for-proposals",
    eligibility: "eligible",
    eligibilityNote: "Accepts private sector with 25% co-financing. No current open call — monitor monthly.",
    score: 3.75,
  },
  // Village Capital removed: Uganda ineligible, training programme not investment
  // SBIR/STTR removed: programme expired Sep 2025, domestic R&D requirement blocks Uganda work
  {
    id: "eic-accelerator",
    name: "European Innovation Council (EIC) Accelerator",
    shortName: "EIC Accelerator",
    tier: "tier2",
    category: "accelerator",
    grantRange: "EUR 500,000 - 2,500,000 (grant) + equity",
    grantMin: 500000,
    grantMax: 2500000,
    currency: "EUR",
    deadlineNote: "Requires EU/EEA entity. HISAGEN would need UK/EU partner or subsidiary.",
    applyVia: "Would require EU-registered entity",
    whyStrongFit:
      "Largest non-dilutive grant for deep-tech innovation in climate/agriculture. Blended grant + equity. For-profit by design. However, requires EU/EEA entity.",
    process: "Three-stage: short application \u2192 full proposal \u2192 interview. Highly competitive.",
    url: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en",
    eligibility: "conditional",
    eligibilityNote: "For-profit by design but requires EU/EEA registered entity. HISAGEN currently has no EU entity. Would need UK or EU partner.",
    score: 3.25,
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
    eligibility: "ineligible",
    eligibilityNote: "CSO-focused. Funds civil society strengthening, not private sector.",
    score: 3.75,
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
    deadlineNote: "2026 cycle closed (Nov 2025 deadline)",
    applyVia: "Open application",
    whyStrongFit:
      "Accepts for-profit but funds financial instruments, not projects/operations. Misaligned unless HISAGEN proposes a blended finance vehicle.",
    eligibility: "deprioritised",
    eligibilityNote: "Accepts for-profit but funds financial instruments only, not projects. 2026 cycle closed. Misaligned at Stage 1.",
    score: 3.25,
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
    eligibility: "ineligible",
    eligibilityNote: "Charity/NGO only. Max GBP 5K/year — not worth partner-route effort at this grant size.",
    score: 3.05,
  },
];

// ─────────────────────────────────────────────────────────────
// FILTERED VIEWS
// ─────────────────────────────────────────────────────────────

export const allCuratedFunders: CuratedFunder[] = allFundersRaw;

export const eligibleFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "eligible"
);

export const conditionalFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "conditional"
);

export const ineligibleFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "ineligible"
);

export const deprioritisedFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "deprioritised"
);

// Backward-compatible tier views (include all funders regardless of eligibility)
export const tier1Funders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.tier === "tier1"
);

export const tier2Funders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.tier === "tier2"
);

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

export const getFunderById = (id: string): CuratedFunder | undefined =>
  allCuratedFunders.find((f) => f.id === id);

export const getFundersByCategory = (category: FunderCategory): CuratedFunder[] =>
  allCuratedFunders.filter((f) => f.category === category);

// ─────────────────────────────────────────────────────────────
// GRANT PHASES (6-phase pre-award methodology)
// ─────────────────────────────────────────────────────────────

export const grantPhases: GrantPhase[] = [
  {
    number: 1,
    name: "Vision &amp; Strategy",
    status: "complete",
    statusLabel: "Substantial",
    description: "Theory of Change, funding strategy, adaptation narrative, and programme goals.",
  },
  {
    number: 2,
    name: "Landscape Scanning",
    status: "complete",
    statusLabel: "Complete",
    description: "40 funders researched, 15 scored across 7 categories. Traditional grants, venture philanthropy, DFI windows, and impact funds. All leads verified against primary sources.",
  },
  {
    number: 3,
    name: "Case for Support",
    status: "active",
    statusLabel: "Active &mdash; Draft",
    description: "Master Case for Support and funder-adapted versions for grant applications.",
  },
  {
    number: 4,
    name: "Donor Engagement",
    status: "in-progress",
    statusLabel: "In Progress",
    description: "Outreach planning, relationship building, warm introductions, and Keir action items.",
  },
  {
    number: 5,
    name: "Due Diligence &amp; Eligibility",
    status: "complete",
    statusLabel: "Complete",
    description: "For-profit eligibility filter applied. Traditional grant funders largely ineligible. Pipeline rebuilt around verified for-profit-friendly capital: 3 Tier 1, 3 Tier 2 eligible + 3 conditional.",
  },
  {
    number: 6,
    name: "Proposal Development",
    status: "foundation-ready",
    statusLabel: "Foundation Ready",
    description: "Base Proposal created (10 reusable blocks). Funder-specific proposals to follow for eligible funders.",
  },
];

// ─────────────────────────────────────────────────────────────
// APPLICATION TIMELINE (eligible funders only)
// ─────────────────────────────────────────────────────────────

export const applicationTimeline: TimelineEntry[] = [
  // IMMEDIATE (Mar 2026)
  {
    when: "Mar 2026",
    what: "Contact Acumen East Africa investment team (explore remaining ARAF allocation)",
    funder: "Acumen/ARAF",
    funderId: "acumen-araf",
    urgency: "urgent",
  },
  {
    when: "Mar 2026",
    what: "Confirm founder age (18-35 eligibility)",
    funder: "AAAP/YouthADAPT",
    funderId: "aaap-gca",
    urgency: "high",
  },
  {
    when: "Mar 2026",
    what: "Research Mulago network connections",
    funder: "Mulago Foundation",
    funderId: "mulago",
    urgency: "high",
  },
  // SHORT TERM (Apr-Jun 2026)
  {
    when: "Apr 2026",
    what: "Apply to DRK Foundation (rolling, review Mati Carbon precedent)",
    funder: "DRK Foundation",
    funderId: "draper-richards-kaplan",
    urgency: "high",
  },
  {
    when: "Q2 2026",
    what: "Monitor div.fund for application opening",
    funder: "DIV Fund (new nonprofit)",
    funderId: "div-fund",
    urgency: "medium",
  },
  // SUMMER 2026
  {
    when: "Jul\u2013Aug 2026",
    what: "Prepare fellowship application (recoverable grant for for-profits)",
    funder: "Echoing Green (Sep cycle or early 2027)",
    funderId: "echoing-green",
    urgency: "high",
  },
  {
    when: "Aug\u2013Oct 2026",
    what: "Build referral pathway",
    funder: "Mulago Foundation (sourcing window)",
    funderId: "mulago",
    urgency: "medium",
  },
  // ONGOING
  {
    when: "Monthly",
    what: "Monitor for new calls",
    funder: "IFAD",
    funderId: "ifad",
    urgency: "medium",
  },
];

// ─────────────────────────────────────────────────────────────
// LANDSCAPE SUMMARY STATS
// ─────────────────────────────────────────────────────────────

export const landscapeStats = {
  totalResearched: 40,
  totalScored: 15, // 11 original + 4 verified for-profit-friendly (Village Capital + SBIR removed)
  // Post-verification pipeline
  eligibleTier1Count: 3, // Echoing Green, ARAF, DRK
  eligibleTier2Count: 3, // Mulago, IFAD, START II
  conditionalCount: 3, // AAAP/YouthADAPT, EIC Accelerator, DIV Fund
  ineligibleCount: 5, // CFH, AFCIA, AfDB TAAT, Rockefeller FILab, TrustAfrica, Noel Buxton
  deprioritisedCount: 1, // Climate Finance Lab
  eligiblePipelineValue: "$400K - $3.6M",
  categories: [
    "Climate Adaptation Funds",
    "Agricultural & Food Security Foundations",
    "US Private Foundations",
    "UK Trusts & Foundations",
    "Venture Philanthropy",
    "DFI Private Sector Windows",
    "Impact Funds",
  ],
};

// ─────────────────────────────────────────────────────────────
// STRATEGIC RECOMMENDATIONS (for-profit constraint)
// ─────────────────────────────────────────────────────────────

export const strategicRecommendations: StrategicRecommendation[] = [
  {
    id: "for-profit-capital",
    title: "Pursue Verified For-Profit-Friendly Capital (Active)",
    description:
      "Venture philanthropy (DRK Foundation, Echoing Green), impact funds (Acumen/ARAF), and the new DIV Fund form the core pipeline. All verified against primary sources. DRK is the strongest immediate opportunity (rolling applications, direct precedent). ARAF worth exploring but 84% disbursed.",
    impact: "Verified pipeline: 3 Tier 1 + 3 Tier 2 eligible, 3 conditional. $400K-$3.6M potential. DRK actionable now.",
  },
  {
    id: "partner-led",
    title: "Partner-Led Applications (Secondary)",
    description:
      "NARO or university as lead applicant, HISAGEN as implementing partner. Opens some doors (AfDB TAAT, CFH Foundation) but dependent on relationship and slower.",
    impact: "Partial access to 2-3 traditional funders via partner route.",
  },
  {
    id: "nonprofit-entity",
    title: "Establish a Nonprofit Entity (Deferred)",
    description:
      "Create HISAGEN Foundation or Uganda-registered NGO for grant-eligible research work. Would reopen traditional grant funders. But takes months and may not be a priority.",
    impact: "Deferred pending Keir's view on entity structure.",
  },
];

// ─────────────────────────────────────────────────────────────
// KEIR ACTION ITEMS
// ─────────────────────────────────────────────────────────────

export const keirActionItems: KeirAction[] = [
  {
    id: "acumen-outreach",
    action: "Contact Acumen East Africa investment team \u2014 explore remaining ARAF allocation ($58M fund, 84% disbursed, runs to 2030). Pipeline-driven, no open application. Direct outreach required.",
    funder: "Acumen/ARAF",
    byWhen: "This month",
    status: "not-started",
  },
  {
    id: "drk-application",
    action: "Review DRK Foundation application at drkfoundation.org/apply. Rolling applications. Review Mati Carbon portfolio company (2025, soil restoration for smallholders in Africa \u2014 near-identical model). Note: DRK takes board seat for 3 years.",
    funder: "DRK Foundation",
    byWhen: "End of March",
    status: "not-started",
  },
  {
    id: "confirm-age",
    action: "Confirm founder age \u2014 is any co-founder aged 18-35?",
    funder: "AAAP/YouthADAPT",
    byWhen: "Next call",
    status: "not-started",
  },
  {
    id: "mulago-network",
    action: "Research Mulago network connections \u2014 any contacts through Locus AG, NARO, or ag-tech circles?",
    funder: "Mulago Foundation",
    byWhen: "End of March",
    status: "not-started",
  },
];
