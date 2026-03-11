// HISAGEN Funding Landscape Data
// Source of truth: HISAGEN-FUNDER-CRM.md (delivery/grants-fundraising/03-landscape-scanning/)
// Research record: HISAGEN-FUNDER-PIPELINE.md (methodology, scoring, phase history)
// Sync chain: CRM (internal) → this file (curated) → portal renders
// Last synced: 2026-03-11

export type FunderTier = "tier1" | "tier2";
// Legacy — kept for backward compat, replaced by orgType + thematicFocus
export type FunderCategory =
  | "climate-adaptation"
  | "agricultural-food"
  | "us-foundation"
  | "uk-trust"
  | "accelerator"
  | "venture-philanthropy"
  | "dfi-private-sector"
  | "impact-fund";

export type OrgType =
  | "foundation"
  | "trust"
  | "multilateral"
  | "government-programme"
  | "impact-fund"
  | "venture-philanthropy"
  | "accelerator"
  | "prize-programme";

export type ThematicFocus =
  | "climate-adaptation"
  | "agriculture-food-security"
  | "social-enterprise"
  | "innovation-technology"
  | "financial-inclusion"
  | "general-development";

export type EligibilityStatus =
  | "eligible"
  | "ineligible"
  | "conditional"
  | "reclassified"
  | "deprioritised";

export type CapitalSource = "grants" | "debt" | "equity" | "impact" | "blended";

export type FundingMechanism =
  | "grant"
  | "programme-grant"
  | "prize"
  | "fellowship"
  | "recoverable-grant"
  | "equity"
  | "concessional-loan"
  | "reimbursable-grant"
  | "design-grant"
  | "blended";

export type CostToCompany =
  | "non-dilutive"
  | "dilutive"
  | "repayable"
  | "conditionally-repayable"
  | "mixed";

export type PipelineStatus =
  | "prospect"
  | "qualification"
  | "relationship"
  | "application"
  | "due-diligence"
  | "closed-won"
  | "closed-lost";

export type ApplicationWindow = "rolling" | "open" | "closed" | "upcoming" | "monitor";
export type EstimatedEffort = "low" | "medium" | "high";

export interface CuratedFunder {
  id: string;
  name: string;
  shortName: string;
  tier: FunderTier;
  category: FunderCategory; // legacy — use orgType + thematicFocus
  orgType: OrgType;
  thematicFocus: ThematicFocus;
  capitalSource: CapitalSource;
  fundingMechanism: FundingMechanism;
  costToCompany: CostToCompany;
  pipelineStatus: PipelineStatus;
  applicationWindow: ApplicationWindow;
  estimatedEffort: EstimatedEffort;
  nextCycle?: string;
  geographicEligibility: string;
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
    orgType: "foundation",
    thematicFocus: "agriculture-food-security",
    capitalSource: "grants",
    fundingMechanism: "grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "high",
    nextCycle: "June 15, 2026",
    geographicEligibility: "Either entity (non-US orgs accepted)",
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
    orgType: "multilateral",
    thematicFocus: "climate-adaptation",
    capitalSource: "grants",
    fundingMechanism: "programme-grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "monitor",
    estimatedEffort: "high",
    geographicEligibility: "HISAGEN Africa Ltd (via UNDP Uganda)",
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
    orgType: "multilateral",
    thematicFocus: "climate-adaptation",
    capitalSource: "grants",
    fundingMechanism: "programme-grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "upcoming",
    estimatedEffort: "medium",
    geographicEligibility: "Direct (if founder aged 18-35)",
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
    orgType: "foundation",
    thematicFocus: "social-enterprise",
    capitalSource: "grants",
    fundingMechanism: "recoverable-grant",
    costToCompany: "conditionally-repayable",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "high",
    nextCycle: "September 2026",
    geographicEligibility: "HISAGEN USA Inc.",
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
    orgType: "multilateral",
    thematicFocus: "agriculture-food-security",
    capitalSource: "grants",
    fundingMechanism: "programme-grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "monitor",
    estimatedEffort: "high",
    geographicEligibility: "HISAGEN Africa Ltd (via institution)",
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
    orgType: "government-programme",
    thematicFocus: "agriculture-food-security",
    capitalSource: "debt",
    fundingMechanism: "reimbursable-grant",
    costToCompany: "repayable",
    pipelineStatus: "qualification",
    applicationWindow: "rolling",
    estimatedEffort: "medium",
    geographicEligibility: "HISAGEN Africa Ltd (Uganda-registered)",
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
    orgType: "impact-fund",
    thematicFocus: "climate-adaptation",
    capitalSource: "equity",
    fundingMechanism: "equity",
    costToCompany: "dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "rolling",
    estimatedEffort: "high",
    geographicEligibility: "HISAGEN Africa Ltd (East Africa)",
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
    orgType: "foundation",
    thematicFocus: "innovation-technology",
    capitalSource: "grants",
    fundingMechanism: "grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "upcoming",
    estimatedEffort: "medium",
    nextCycle: "Mid-2026",
    geographicEligibility: "HISAGEN USA Inc.",
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
    orgType: "venture-philanthropy",
    thematicFocus: "social-enterprise",
    capitalSource: "grants",
    fundingMechanism: "equity",
    costToCompany: "dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "rolling",
    estimatedEffort: "high",
    geographicEligibility: "HISAGEN USA Inc.",
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
  // --- TIER 1 (Cross-validated via ChatGPT + Gemini deep research, 2026-03-10) ---
  // (No new Tier 1 funders from cross-validation — DRK validated independently by both)

  // --- TIER 2 ---
  {
    id: "world-food-prize",
    name: "World Food Prize \u2014 Innovate for Impact Challenge",
    shortName: "World Food Prize",
    tier: "tier2",
    category: "accelerator",
    orgType: "prize-programme",
    thematicFocus: "agriculture-food-security",
    capitalSource: "grants",
    fundingMechanism: "prize",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "open",
    estimatedEffort: "medium",
    geographicEligibility: "Either entity",
    grantRange: "$50,000 (1st place), $10,000 (2nd), $5,000 (3rd)",
    grantMin: 5000,
    grantMax: 50000,
    currency: "USD",
    deadline: "April 15, 2026",
    deadlineNote: "URGENT \u2014 5 weeks. Applications open now. Top 10 announced Jul 16. Finals at Borlaug Dialogue, Des Moines (Oct 20-22).",
    applyVia: "HISAGEN USA Inc. or HISAGEN Africa Ltd",
    whyStrongFit:
      "Open to early-stage, for-profit startups in AgTech. Worldwide eligibility. 'From validated concepts to pre-Series A.' Non-dilutive prize. Prior winner: APOLO Biotech (Argentina, 2025). No age restriction.",
    process: "Online application via programme page. Timeline: Top 10 (Jul 16) \u2192 pitch video + financials \u2192 Top 3 \u2192 live pitch at Borlaug Dialogue.",
    consideration: "Competitive prize \u2014 only top 3 receive funding. Need strong AgTech innovation narrative (not just input distribution). Travel to Des Moines required for finalists.",
    url: "https://www.worldfoodprize.org/en/nominations/innovate_for_impact_challenge/",
    eligibility: "eligible",
    eligibilityNote: "Verified: 'open to early-stage, for-profit startups in the AgTech space.' Worldwide. No age gate.",
    score: 3.90,
  },
  {
    id: "mulago",
    name: "Mulago Foundation",
    shortName: "Mulago",
    tier: "tier2",
    category: "us-foundation",
    orgType: "foundation",
    thematicFocus: "social-enterprise",
    capitalSource: "impact",
    fundingMechanism: "fellowship",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "rolling",
    estimatedEffort: "high",
    nextCycle: "Aug-Oct sourcing window",
    geographicEligibility: "Referral only",
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
    orgType: "foundation",
    thematicFocus: "innovation-technology",
    capitalSource: "impact",
    fundingMechanism: "design-grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "high",
    nextCycle: "Q3 2026",
    geographicEligibility: "N/A (nonprofit only)",
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
    orgType: "multilateral",
    thematicFocus: "agriculture-food-security",
    capitalSource: "grants",
    fundingMechanism: "programme-grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "monitor",
    estimatedEffort: "high",
    geographicEligibility: "Either entity (25% co-financing)",
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
  {
    id: "wfp-innovation",
    name: "WFP Innovation Challenge",
    shortName: "WFP Innovation",
    tier: "tier2",
    category: "agricultural-food",
    orgType: "multilateral",
    thematicFocus: "agriculture-food-security",
    capitalSource: "grants",
    fundingMechanism: "grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "rolling",
    estimatedEffort: "medium",
    geographicEligibility: "HISAGEN Africa Ltd (WFP country)",
    grantRange: "Up to $100,000 (equity-free)",
    grantMin: 10000,
    grantMax: 100000,
    currency: "USD",
    deadline: "Rolling",
    deadlineNote: "Rolling submissions reviewed multiple times per year. Apply when MVP story is strong.",
    applyVia: "HISAGEN Africa Ltd (must have or be willing to build presence in WFP country)",
    whyStrongFit:
      "Explicitly accepts for-profit: 'It can be for profit or not-for-profit.' Uganda is a WFP operating country. Up to $100K equity-free + innovation consultancy, WFP access, mentors, visibility.",
    process: "Apply via 'Start-Ups and Companies' application on programme page. 6-month sprint plan required.",
    consideration: "Requires MVP stage with 'proof-of-concept and initial traction preferred.' Must show financial sustainability beyond WFP funding. Frame bio-stimulant as food security + climate adaptation intervention.",
    url: "https://innovation.wfp.org/wfp-innovation-challenge",
    eligibility: "eligible",
    eligibilityNote: "Verified: 'It can be for profit or not-for-profit.' Uganda included. Rolling applications. Need MVP narrative.",
    score: 3.75,
  },
  {
    id: "hello-tomorrow",
    name: "Hello Tomorrow Global Challenge",
    shortName: "Hello Tomorrow",
    tier: "tier2",
    category: "accelerator",
    orgType: "accelerator",
    thematicFocus: "innovation-technology",
    capitalSource: "grants",
    fundingMechanism: "prize",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "medium",
    nextCycle: "September 2026 (for 2027 cycle)",
    geographicEligibility: "Either entity",
    grantRange: "\u20AC100,000 grand prize (equity-free)",
    grantMin: 0,
    grantMax: 100000,
    currency: "EUR",
    deadline: "September 2026",
    deadlineNote: "2026 cycle closed (deadline Jan 5, 2026). Next: applications open Sep 2026 for 2027 cycle.",
    applyVia: "HISAGEN USA Inc. or HISAGEN Africa Ltd",
    whyStrongFit:
      "International deep-tech startup competition. Food & Agriculture is one of 13 tracks \u2014 covers regenerative farming, smart inputs, precision agriculture. Worldwide eligibility. Pre-revenue allowed. African winners exist (RxAll, Nigeria). 800 Deep Tech Pioneers selected \u2192 Investor Day (350+ VCs).",
    process: "Online application Sep-Dec 2026. Multi-stage: 800 Pioneers \u2192 Investor Day \u2192 Grand Finals in Amsterdam.",
    consideration: "Next cycle 6+ months away. Start preparing in summer 2026. Past finalists collectively raised $4B+ in subsequent funding.",
    url: "https://hello-tomorrow.org/global-challenge/",
    eligibility: "eligible",
    eligibilityNote: "Verified: worldwide, for-profit accepted, pre-revenue allowed. 2026 cycle closed \u2014 target 2027.",
    score: 3.55,
  },
  // Village Capital removed: Uganda ineligible, training programme not investment
  // SBIR/STTR removed: programme expired Sep 2025, domestic R&D requirement blocks Uganda work
  {
    id: "katapult-africa",
    name: "Katapult Africa Accelerator",
    shortName: "Katapult Africa",
    tier: "tier2",
    category: "accelerator",
    orgType: "accelerator",
    thematicFocus: "social-enterprise",
    capitalSource: "equity",
    fundingMechanism: "equity",
    costToCompany: "dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "open",
    estimatedEffort: "medium",
    geographicEligibility: "HISAGEN Africa Ltd",
    grantRange: "\u20AC150,000 - \u20AC500,000",
    grantMin: 150000,
    grantMax: 500000,
    currency: "EUR",
    deadline: "April 25, 2026",
    deadlineNote: "URGENT \u2014 applications open now. Equity terms unclear (official site says equity, some listings say non-dilutive). Clarify before applying.",
    applyVia: "HISAGEN Africa Ltd",
    whyStrongFit:
      "Impact VC accelerator. 'Open to impactful startups across Africa.' For-profit by design. Sustainable agriculture is core vertical. Partners: Tony Blair Institute, Norrsken, Norad. Portfolio: Complete Farmer (Ghana), Crop2Cash (Nigeria).",
    process: "Apply via Typeform on katapult.vc/africa/accelerator/. 90-day digital accelerator + investor day.",
    consideration: "Equity terms unclear. If priced equity at pre-revenue stage, dilution risk is high. Clarify terms before investing time in application.",
    url: "https://katapult.vc/africa/accelerator/",
    eligibility: "conditional",
    eligibilityNote: "For-profit by design. But equity terms unclear \u2014 could be dilutive. Deadline April 25. Clarify before applying.",
    score: 4.00,
  },
  {
    id: "gogettaz-prize",
    name: "GoGettaz Agripreneur Prize",
    shortName: "GoGettaz",
    tier: "tier2",
    category: "accelerator",
    orgType: "prize-programme",
    thematicFocus: "agriculture-food-security",
    capitalSource: "grants",
    fundingMechanism: "prize",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "upcoming",
    estimatedEffort: "medium",
    nextCycle: "Q2 2026 (estimated)",
    geographicEligibility: "HISAGEN Africa Ltd",
    grantRange: "$50,000 grand prize + $60,000 impact awards",
    grantMin: 10000,
    grantMax: 50000,
    currency: "USD",
    deadlineNote: "2025 cycle closed (Apr-Jun 2025). 2026 cycle expected similar timing. Requires founder aged 18-35.",
    applyVia: "HISAGEN Africa Ltd",
    whyStrongFit:
      "Generation Africa prize backed by Mastercard Foundation, AGRA, SNV, Yara. Non-dilutive. For-profit eligible. Uganda eligible. Finalists attend Africa Food Systems Forum + Agribusiness Deal Room.",
    consideration: "Founder must be aged 18-35. Same blocker as YouthADAPT. If Keir confirms age eligibility, both GoGettaz AND YouthADAPT become live opportunities.",
    url: "https://gogettaz.africa/",
    eligibility: "conditional",
    eligibilityNote: "For-profit eligible. But founder must be aged 18-35. Same gate as YouthADAPT. Confirm with Keir.",
    score: 3.95,
  },
  {
    id: "finca-ventures",
    name: "FINCA Ventures",
    shortName: "FINCA Ventures",
    tier: "tier2",
    category: "impact-fund",
    orgType: "impact-fund",
    thematicFocus: "financial-inclusion",
    capitalSource: "equity",
    fundingMechanism: "equity",
    costToCompany: "dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "medium",
    nextCycle: "Revisit when revenue achieved",
    geographicEligibility: "HISAGEN Africa Ltd",
    grantRange: "$100,000 - $500,000 (patient equity or convertible notes)",
    grantMin: 100000,
    grantMax: 500000,
    currency: "USD",
    deadlineNote: "Targets post-revenue companies. Not viable for HISAGEN now. Revisit in 6-12 months when revenue traction exists.",
    applyVia: "HISAGEN Africa Ltd",
    whyStrongFit:
      "Impact investment arm of FINCA International. $7.8M deployed to 32 companies. Uganda in operational footprint. Portfolio: Good Nature Agro (Zambia), East Africa Fruits (Tanzania). 2X Global member \u2014 gender lens encouraged.",
    consideration: "Post-revenue required. Pre-revenue is likely a dealbreaker. Also runs annual FINCA Ventures Prize ($100K) but that also requires revenue. Strong thematic fit for Stage 2.",
    url: "https://fincaventures.com/",
    eligibility: "conditional",
    eligibilityNote: "For-profit by design. But targets post-revenue companies. Pre-revenue HISAGEN is likely ineligible now. Revisit when revenue achieved.",
    score: 3.30,
  },
  {
    id: "eic-accelerator",
    name: "European Innovation Council (EIC) Accelerator",
    shortName: "EIC Accelerator",
    tier: "tier2",
    category: "accelerator",
    orgType: "government-programme",
    thematicFocus: "innovation-technology",
    capitalSource: "blended",
    fundingMechanism: "blended",
    costToCompany: "mixed",
    pipelineStatus: "qualification",
    applicationWindow: "open",
    estimatedEffort: "high",
    geographicEligibility: "Requires EU/EEA entity",
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
    orgType: "foundation",
    thematicFocus: "agriculture-food-security",
    capitalSource: "grants",
    fundingMechanism: "grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "low",
    geographicEligibility: "N/A (CSO only)",
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
    orgType: "foundation",
    thematicFocus: "climate-adaptation",
    capitalSource: "blended",
    fundingMechanism: "design-grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "high",
    nextCycle: "November 2026 (estimated)",
    geographicEligibility: "Either entity",
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
    orgType: "trust",
    thematicFocus: "general-development",
    capitalSource: "grants",
    fundingMechanism: "grant",
    costToCompany: "non-dilutive",
    pipelineStatus: "qualification",
    applicationWindow: "closed",
    estimatedEffort: "low",
    geographicEligibility: "N/A (charity only)",
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
// DISPLAY LABEL MAPS
// ─────────────────────────────────────────────────────────────

export const categoryLabels: Record<FunderCategory, string> = {
  "climate-adaptation": "Climate Adaptation",
  "agricultural-food": "Agricultural & Food Security",
  "us-foundation": "US Foundation",
  "uk-trust": "UK Trust",
  "accelerator": "Accelerator / Prize",
  "venture-philanthropy": "Venture Philanthropy",
  "dfi-private-sector": "DFI / Govt Programme",
  "impact-fund": "Impact Fund",
};

export const capitalSourceLabels: Record<CapitalSource, string> = {
  grants: "Grants & Philanthropy",
  debt: "Green Bonds & Debt",
  equity: "Equity & VC",
  impact: "Impact Investing",
  blended: "Blended Finance",
};

export const orgTypeLabels: Record<OrgType, string> = {
  "foundation": "Foundation",
  "trust": "Trust",
  "multilateral": "Multilateral Agency",
  "government-programme": "Government Programme",
  "impact-fund": "Impact Fund",
  "venture-philanthropy": "Venture Philanthropy",
  "accelerator": "Accelerator",
  "prize-programme": "Prize Programme",
};

export const thematicFocusLabels: Record<ThematicFocus, string> = {
  "climate-adaptation": "Climate Adaptation",
  "agriculture-food-security": "Agriculture & Food Security",
  "social-enterprise": "Social Enterprise",
  "innovation-technology": "Innovation & Technology",
  "financial-inclusion": "Financial Inclusion",
  "general-development": "General Development",
};

export const fundingMechanismLabels: Record<FundingMechanism, string> = {
  "grant": "Grant",
  "programme-grant": "Programme Grant",
  "prize": "Prize / Award",
  "fellowship": "Fellowship",
  "recoverable-grant": "Recoverable Grant",
  "equity": "Equity Investment",
  "concessional-loan": "Concessional Loan",
  "reimbursable-grant": "Reimbursable Grant",
  "design-grant": "Design Grant",
  "blended": "Blended (Grant + Equity)",
};

export const costToCompanyLabels: Record<CostToCompany, string> = {
  "non-dilutive": "Non-Dilutive",
  "dilutive": "Dilutive (Equity Stake)",
  "repayable": "Repayable",
  "conditionally-repayable": "Conditionally Repayable",
  "mixed": "Mixed (Part Dilutive)",
};

export const pipelineStatusLabels: Record<PipelineStatus, string> = {
  "prospect": "1 — Prospect",
  "qualification": "2 — Qualification",
  "relationship": "3 — Relationship",
  "application": "4 — Application",
  "due-diligence": "5 — Due Diligence",
  "closed-won": "6 — Closed (Won)",
  "closed-lost": "6 — Closed (Lost)",
};

export const applicationWindowLabels: Record<ApplicationWindow, string> = {
  "rolling": "Rolling",
  "open": "Open",
  "closed": "Closed",
  "upcoming": "Upcoming",
  "monitor": "Monitor",
};

export const estimatedEffortLabels: Record<EstimatedEffort, string> = {
  "low": "Low",
  "medium": "Medium",
  "high": "High",
};

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
    name: "Case for Support",
    status: "active",
    statusLabel: "Active &mdash; Draft",
    description: "Master Case for Support and funder-adapted versions for grant applications.",
  },
  {
    number: 3,
    name: "Landscape Scanning",
    status: "complete",
    statusLabel: "Complete",
    description: "50+ funders researched, 21 scored across 8 categories. Traditional grants, venture philanthropy, DFI windows, impact funds, accelerators, and prizes. Cross-validated via ChatGPT + Gemini deep research. All leads verified against official programme pages.",
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
    description: "For-profit eligibility filter applied. Traditional grant funders largely ineligible. Pipeline rebuilt around verified for-profit-friendly capital, then expanded via cross-validation: 3 Tier 1, 6 Tier 2 eligible + 6 conditional.",
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
  // URGENT DEADLINES
  {
    when: "Apr 15, 2026",
    what: "Submit Innovate for Impact Challenge application \u2014 $50K non-dilutive AgTech prize",
    funder: "World Food Prize",
    funderId: "world-food-prize",
    urgency: "urgent",
  },
  {
    when: "Apr 25, 2026",
    what: "Katapult Africa deadline \u2014 clarify equity terms, then decide whether to apply",
    funder: "Katapult Africa",
    funderId: "katapult-africa",
    urgency: "urgent",
  },
  // IMMEDIATE (Mar 2026)
  {
    when: "Mar 2026",
    what: "Submit WFP Innovation application (rolling \u2014 $100K equity-free)",
    funder: "WFP Innovation Challenge",
    funderId: "wfp-innovation",
    urgency: "high",
  },
  {
    when: "Mar 2026",
    what: "Confirm founder age (18-35 \u2014 unlocks YouthADAPT + GoGettaz)",
    funder: "AAAP/YouthADAPT + GoGettaz",
    funderId: "aaap-gca",
    urgency: "high",
  },
  {
    when: "Mar 2026",
    what: "Review DRK application + Mati Carbon case (rolling, strongest long-term opportunity)",
    funder: "DRK Foundation",
    funderId: "draper-richards-kaplan",
    urgency: "high",
  },
  {
    when: "Mar 2026",
    what: "Contact Acumen East Africa investment team (explore remaining ARAF allocation)",
    funder: "Acumen/ARAF",
    funderId: "acumen-araf",
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
    when: "Q2 2026",
    what: "Submit DRK Foundation application",
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
  {
    when: "Sep 2026",
    what: "Apply to Hello Tomorrow Global Challenge (2027 cycle) \u2014 \u20AC100K deep-tech prize",
    funder: "Hello Tomorrow",
    funderId: "hello-tomorrow",
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
  {
    when: "Quarterly",
    what: "Check WFP Innovation rolling review status",
    funder: "WFP Innovation Challenge",
    funderId: "wfp-innovation",
    urgency: "low",
  },
];

// ─────────────────────────────────────────────────────────────
// LANDSCAPE SUMMARY STATS
// ─────────────────────────────────────────────────────────────

export const landscapeStats = {
  totalResearched: 50, // 40 original + cross-validation expansion
  totalScored: 21, // 11 original + 4 verified + 6 cross-validated (Village Capital + SBIR removed)
  // Post cross-validation pipeline (2026-03-10)
  eligibleTier1Count: 3, // Echoing Green, ARAF, DRK
  eligibleTier2Count: 6, // World Food Prize, Mulago, IFAD, WFP Innovation, Hello Tomorrow, START II
  conditionalCount: 6, // Katapult Africa, GoGettaz, AAAP/YouthADAPT, DIV Fund, FINCA Ventures, EIC Accelerator
  ineligibleCount: 5, // CFH, AFCIA, AfDB TAAT, Rockefeller FILab, TrustAfrica, Noel Buxton
  deprioritisedCount: 1, // Climate Finance Lab
  eligiblePipelineValue: "$400K - $5M+",
  urgentDeadlines: 2, // World Food Prize (Apr 15), Katapult Africa (Apr 25)
  categories: [
    "Climate Adaptation Funds",
    "Agricultural & Food Security Foundations",
    "US Private Foundations",
    "UK Trusts & Foundations",
    "Venture Philanthropy",
    "DFI Private Sector Windows",
    "Impact Funds",
    "Accelerators & Prizes",
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
      "Venture philanthropy (DRK Foundation, Echoing Green), impact funds (Acumen/ARAF), prizes (World Food Prize, GoGettaz, Hello Tomorrow), innovation challenges (WFP, Katapult), and the new DIV Fund. All verified against primary sources. World Food Prize is the most urgent (April 15 deadline). DRK is the strongest long-term opportunity.",
    impact: "Verified pipeline: 3 Tier 1 + 6 Tier 2 eligible, 6 conditional. $400K-$5M+ potential. Two urgent deadlines: April 15 + April 25.",
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
    id: "world-food-prize",
    action: "Submit World Food Prize Innovate for Impact application \u2014 $50K non-dilutive AgTech prize. Frame as productivity + resilience innovation. Pandion shapes narrative.",
    funder: "World Food Prize",
    byWhen: "April 15, 2026",
    status: "not-started",
  },
  {
    id: "confirm-age",
    action: "Confirm founder age \u2014 is any co-founder aged 18-35? Unlocks BOTH YouthADAPT ($30K) AND GoGettaz ($50K). Two prizes, one answer.",
    funder: "AAAP/YouthADAPT + GoGettaz",
    byWhen: "Next call",
    status: "not-started",
  },
  {
    id: "drk-application",
    action: "Review DRK Foundation application at drkfoundation.org/apply. Rolling applications. Review Mati Carbon portfolio company (2025, soil restoration for smallholders in Africa \u2014 near-identical model). DRK takes board seat for 3 years.",
    funder: "DRK Foundation",
    byWhen: "End of March",
    status: "not-started",
  },
  {
    id: "katapult-decision",
    action: "Clarify Katapult Africa equity terms (dilutive vs non-dilutive). If reasonable \u2192 apply. If heavy dilution at pre-revenue \u2192 skip.",
    funder: "Katapult Africa",
    byWhen: "April 25, 2026",
    status: "not-started",
  },
  {
    id: "acumen-outreach",
    action: "Contact Acumen East Africa investment team \u2014 explore remaining ARAF allocation ($58M fund, 84% disbursed, runs to 2030). Pipeline-driven, no open application.",
    funder: "Acumen/ARAF",
    byWhen: "This month",
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
