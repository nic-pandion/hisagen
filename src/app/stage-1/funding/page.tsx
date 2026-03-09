import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Link from "next/link";

const stage1FundingTypes = [
  {
    type: "Grants & Philanthropy",
    description: "Non-repayable funding for de-risking early-stage project foundations",
    fit: "Primary capital source for Stage 1 (50% of funding mix)",
    characteristics: [
      "Non-repayable or highly concessional terms",
      "Focus on feasibility, FPIC, and baseline establishment",
      "Acceptable risk appetite for pre-revenue ventures",
      "Supports land rights clarification and MRV setup"
    ],
    color: "emerald"
  },
  {
    type: "Concessional Capital",
    description: "Below-market loans and development finance",
    fit: "Complementary funding (25% of Stage 1 mix)",
    characteristics: [
      "Below-market interest rates or patient capital",
      "Focus on capacity building and technical assistance",
      "Often provided by DFIs and climate funds",
      "May include grant-loan blends"
    ],
    color: "teal"
  },
  {
    type: "Developer Equity / Sweat Equity",
    description: "Founder and partner contribution in-kind",
    fit: "Foundation layer (~50% as sweat equity)",
    characteristics: [
      "Founder time and expertise",
      "Partner contributions (Locus AG product, Pandion frameworks)",
      "Network and relationship capital",
      "Intellectual property and methodologies"
    ],
    color: "slate"
  }
];

const activeApplications = [
  {
    title: "HISAGEN V0 Grant Proposal (Draft)",
    status: "Developed",
    date: "November 2025",
    fundingAsk: "TBD",
    description: "Comprehensive project proposal outlining HISAGEN's Uganda pilot, partnership architecture, and Stage 1 execution plan.",
    file: "/stage-1/funding/v0-grant-proposal",
    color: "primary",
    stage: "Draft shared with Deep Six for review"
  },
  {
    title: "HISAGEN V0 Concept Note",
    status: "Developed",
    date: "November 2025",
    fundingAsk: "TBD",
    description: "High-level concept note presenting the Agri-Carbon opportunity and HISAGEN's value proposition.",
    file: "/stage-1/funding/v0-concept-note",
    color: "secondary",
    stage: "Draft shared with Deep Six for review"
  }
];

// Funder landscape data moved to /stage-1/funding/funder-landscape page
// See that page for full 20+ funder database with tiering and type taxonomy

const stage1Milestones = [
  {
    milestone: "Land Rights & FPIC",
    capital: "Grant-funded community engagement",
    status: "In Progress",
    description: "Deep Six leading land tenure mapping and Free, Prior and Informed Consent (FPIC) process in Uganda."
  },
  {
    milestone: "Technical Baselines",
    capital: "Grant + Locus AG partnership",
    status: "In Progress",
    description: "Uganda maize trials complete; NARO 5-zone trials pending results. Baseline SOC data collection underway."
  },
  {
    milestone: "MRV Pathway Design",
    capital: "Grant + 3Degrees partnership",
    status: "Not Started",
    description: "Define methodology for soil carbon verification aligned with Verra/Gold Standard requirements."
  },
  {
    milestone: "Legal & Governance Structure",
    capital: "Grant-funded legal advisory",
    status: "Not Started",
    description: "Establish HISAGEN legal entity, carbon rights framework, and farmer agreement templates."
  },
  {
    milestone: "Stage 1 Funding Close",
    capital: "$200k-$500k target",
    status: "Active",
    description: "Secure concessional capital to complete incubation phase and prepare for Stage 2 carbon finance."
  }
];

export default function Stage1FundingPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 1 Funding"
        trail={[
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
          { label: "Funding Tracker" }
        ]}
      />

      {/* Header Section */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">
            Stage 1: Incubation
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">Years 1-3</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight">
          Stage 1 Funding Applications & Capital Strategy
        </h1>
        <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
          This section showcases HISAGEN's Stage 1 funding applications, funder landscape analysis,
          and capital deployment strategy for the incubation phase. Focus: <strong>Grants, Concessional Capital,
          and Sweat Equity</strong> to de-risk the Uganda pilot and establish project foundations.
        </p>

        <div className="mt-8 p-6 rounded-xl bg-white border border-mist">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">Capital Mix Target</p>
              <p className="text-2xl font-bold text-emerald-700">50% Grants</p>
              <p className="text-xs text-slate mt-1">Primary funding source</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">Funding Ask</p>
              <p className="text-2xl font-bold text-secondary">$200k-$500k</p>
              <p className="text-xs text-slate mt-1">Stage 1 target range</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">Timeline</p>
              <p className="text-2xl font-bold text-secondary">12-24 months</p>
              <p className="text-xs text-slate mt-1">To Stage 2 readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 1 Funding Types */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Stage 1 Funding Types</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-6">
          {stage1FundingTypes.map((funding) => (
            <div
              key={funding.type}
              className={`rounded-2xl border ${
                funding.color === 'emerald' ? 'border-emerald-500/20 bg-emerald-50/30' :
                funding.color === 'teal' ? 'border-teal-500/20 bg-teal-50/30' :
                'border-mist bg-slate-50/30'
              } p-8`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${
                      funding.color === 'emerald' ? 'bg-emerald-600' :
                      funding.color === 'teal' ? 'bg-teal-600' :
                      'bg-slate-500'
                    }`} />
                    <h3 className="text-xl font-bold text-secondary">{funding.type}</h3>
                  </div>
                  <p className="text-base text-slate leading-relaxed mb-4">{funding.description}</p>
                  <div className="p-4 rounded-xl bg-white/80 border border-mist">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Capital Continuum Fit</p>
                    <p className="text-sm font-bold text-secondary">{funding.fit}</p>
                  </div>
                </div>
                <div className="md:w-80">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Key Characteristics</p>
                  <ul className="space-y-2">
                    {funding.characteristics.map((char, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate">
                        <span className="text-secondary/30 font-bold shrink-0">•</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Applications */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Active Grant Applications</h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            {activeApplications.length} Proposals
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {activeApplications.map((app) => (
            <Link
              key={app.title}
              href={app.file}
              className="group rounded-2xl border-2 border-mist bg-white hover:border-primary/30 hover:shadow-xl transition-all p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                  app.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                }`}>
                  {app.status}
                </span>
                <svg className="w-6 h-6 text-slate/20 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {app.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-4">{app.description}</p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-mist">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-1">Date</p>
                  <p className="text-xs font-bold text-secondary">{app.date}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-1">Ask</p>
                  <p className="text-xs font-bold text-secondary">{app.fundingAsk}</p>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-parchment/40 border border-mist/50">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-1">Stage</p>
                <p className="text-xs text-slate">{app.stage}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 p-6 rounded-xl bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
              <span className="text-amber-800 font-bold text-lg">!</span>
            </div>
            <div>
              <p className="text-sm font-bold text-amber-900 mb-2">Proposals Under Development</p>
              <p className="text-xs text-amber-800 leading-relaxed">
                Both proposals were drafted in November 2025 and shared with Deep Six Consulting for review.
                Funding amounts, specific funder targets, and application timelines to be finalized based on
                funder landscape analysis and Stage 1 budget requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Strategy - Link to Funding Roadmap */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Capital Strategy</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <Link
          href="/funding-roadmap"
          className="group block rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 hover:border-primary hover:shadow-xl transition-all mb-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                  12 Curated Funders
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  Updated Mar 2026
                </span>
              </div>
              <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                HISAGEN Funding Roadmap
              </h3>
              <p className="mt-3 text-base text-slate leading-relaxed">
                Full capital strategy with 12 curated funders (from 40+ researched), application timeline,
                and dual-track mapping across the Capital Continuum.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-white/60 text-center">
                  <p className="text-2xl font-bold text-primary">6</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary/70">Tier 1 Priority</p>
                </div>
                <div className="p-3 rounded-lg bg-white/60 text-center">
                  <p className="text-2xl font-bold text-accent">6</p>
                  <p className="text-[10px] uppercase tracking-widest text-accent/70">Tier 2 Strong Fit</p>
                </div>
                <div className="p-3 rounded-lg bg-white/60 text-center">
                  <p className="text-2xl font-bold text-secondary">$670K&ndash;$9.7M</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate/60">Pipeline</p>
                </div>
              </div>
            </div>
            <svg className="w-8 h-8 text-primary/30 group-hover:text-primary transition-colors shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link
          href="/stage-1/funding/funder-landscape"
          className="group block rounded-2xl border border-mist bg-white p-6 hover:border-primary/30 hover:shadow-md transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                Funder Landscape Detail
              </h3>
              <p className="text-sm text-slate mt-1">
                Detailed funder profiles, pipeline stages, and alignment scoring
              </p>
            </div>
            <svg className="w-6 h-6 text-slate/20 group-hover:text-primary transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </section>

      {/* Stage 1 Milestones & Capital Deployment */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Stage 1 Milestones & Capital Deployment</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="space-y-4">
          {stage1Milestones.map((item, idx) => (
            <div key={item.milestone} className="rounded-xl border border-mist bg-white p-6 flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/5 flex items-center justify-center text-secondary font-bold">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-secondary">{item.milestone}</h3>
                    <p className="text-xs text-slate mt-1">{item.capital}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                    item.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                    item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-slate leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-16 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Related Resources</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/stage-1"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Back to</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 1 Incubation Brief
            </h3>
            <p className="text-xs text-slate mt-2">Full Stage 1 strategy and objectives</p>
          </Link>

          <Link
            href="/capital-continuum"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Framework</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Capital Continuum
            </h3>
            <p className="text-xs text-slate mt-2">4-stage funding framework</p>
          </Link>

          <Link
            href="/grant-lifecycle"
            className="group p-6 rounded-xl border-2 border-primary/20 bg-primary/5 hover:border-primary hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Methodology</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Grant Lifecycle
            </h3>
            <p className="text-xs text-slate mt-2">11-phase delivery methodology</p>
          </Link>

          <Link
            href="/knowledge-base"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Supporting</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Evidence Vault
            </h3>
            <p className="text-xs text-slate mt-2">40+ supporting documents</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
