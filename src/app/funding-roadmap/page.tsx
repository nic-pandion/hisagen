"use client";

import { useState } from "react";
import Link from "next/link";
import {
  tier1Funders,
  tier2Funders,
  eligibleFunders,
  conditionalFunders,
  ineligibleFunders,
  deprioritisedFunders,
  allCuratedFunders,
  applicationTimeline,
  landscapeStats,
  grantPhases,
  keirActionItems,
  categoryLabels,
  orgTypeLabels,
  thematicFocusLabels,
  capitalSourceLabels,
  fundingMechanismLabels,
  costToCompanyLabels,
  pipelineStatusLabels,
  applicationWindowLabels,
  estimatedEffortLabels,
} from "../../data/funding-landscape";
import type {
  CuratedFunder,
  GrantPhase,
  PhaseStatus,
  FunderCategory,
  OrgType,
  ThematicFocus,
  CapitalSource,
  FundingMechanism,
  CostToCompany,
  EligibilityStatus,
  PipelineStatus,
  ApplicationWindow,
  EstimatedEffort,
} from "../../data/funding-landscape";

// ─────────────────────────────────────────────────────────────
// Style Maps
// ─────────────────────────────────────────────────────────────

const statusStyle: Record<PhaseStatus, string> = {
  "complete": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "active": "bg-primary/10 text-primary border-primary/20",
  "in-progress": "bg-amber-100 text-amber-700 border-amber-200",
  "not-started": "bg-slate-100 text-slate-500 border-slate-200",
  "foundation-ready": "bg-blue-100 text-blue-700 border-blue-200",
};

const categoryLabel: Record<string, string> = {
  "climate-adaptation": "Climate Adaptation",
  "agricultural-food": "Agricultural &amp; Food Security",
  "us-foundation": "US Foundation",
  "uk-trust": "UK Trust",
  "accelerator": "Accelerator / Prize",
  "venture-philanthropy": "Venture Philanthropy",
  "dfi-private-sector": "DFI / Govt Programme",
  "impact-fund": "Impact Fund",
};

const urgencyColor: Record<string, string> = {
  urgent: "bg-red-100 text-red-700 border-red-200",
  high: "bg-amber-100 text-amber-700 border-amber-200",
  medium: "bg-emerald-100 text-emerald-700 border-emerald-200",
  low: "bg-slate-100 text-slate-600 border-slate-200",
};

const eligibilityBadge: Record<string, { label: string; className: string }> = {
  eligible: { label: "Eligible", className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  conditional: { label: "Conditional", className: "bg-amber-100 text-amber-700 border-amber-200" },
  ineligible: { label: "Ineligible", className: "bg-red-100 text-red-600 border-red-200" },
  deprioritised: { label: "Deprioritised", className: "bg-slate-100 text-slate-500 border-slate-200" },
  reclassified: { label: "Reclassified", className: "bg-slate-100 text-slate-500 border-slate-200" },
};

// ─────────────────────────────────────────────────────────────
// Funder Card Components
// ─────────────────────────────────────────────────────────────

function FunderCardCompact({ funder }: { funder: CuratedFunder }) {
  const badge = eligibilityBadge[funder.eligibility];
  const isInactive = funder.eligibility === "ineligible" || funder.eligibility === "deprioritised";

  return (
    <div className={`rounded-xl border p-5 transition-shadow ${
      isInactive
        ? "border-slate-200 bg-slate-50/50 opacity-70"
        : "border-mist bg-white hover:shadow-sm"
    }`}>
      <div className="flex items-start justify-between mb-2 gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary"
            dangerouslySetInnerHTML={{ __html: categoryLabel[funder.category] || funder.category }}
          />
          <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${badge.className}`}>
            {badge.label}
          </span>
        </div>
        <span className="text-xs font-bold text-accent shrink-0">{funder.grantRange}</span>
      </div>
      <h4 className={`text-sm font-bold mb-1 ${isInactive ? "text-slate-400" : "text-secondary"}`}>{funder.name}</h4>
      <p className="text-xs text-slate leading-relaxed mb-2">{funder.whyStrongFit}</p>
      {funder.eligibilityNote && (
        <div className={`p-2 rounded text-[10px] leading-relaxed mb-2 ${
          isInactive ? "bg-red-50 border border-red-100 text-red-700" : "bg-emerald-50 border border-emerald-100 text-emerald-700"
        }`}>
          {funder.eligibilityNote}
        </div>
      )}
      <div className="flex items-center justify-between pt-3 border-t border-mist text-xs">
        <span className="text-slate/70">{funder.applyVia}</span>
        <span className="font-medium text-secondary">{funder.deadline || funder.deadlineNote || "TBC"}</span>
      </div>
      {funder.consideration && (
        <div className="mt-2 p-2 rounded bg-amber-50 border border-amber-100">
          <p className="text-[10px] text-amber-800">{funder.consideration}</p>
        </div>
      )}
    </div>
  );
}

function FunderCardMini({ funder }: { funder: CuratedFunder }) {
  const badge = eligibilityBadge[funder.eligibility];
  const isInactive = funder.eligibility === "ineligible" || funder.eligibility === "deprioritised";

  return (
    <div className={`rounded-lg border p-4 ${
      isInactive ? "border-slate-200 bg-slate-50/50 opacity-60" : "border-mist bg-white"
    }`}>
      <div className="flex items-center gap-2 mb-1">
        <h5 className={`text-sm font-bold ${isInactive ? "text-slate-400" : "text-secondary"}`}>{funder.shortName}</h5>
        <span className={`text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${badge.className}`}>
          {badge.label}
        </span>
      </div>
      <p className="text-xs text-slate mb-1">{funder.grantRange}</p>
      <p className="text-[11px] text-slate/70 leading-relaxed">{funder.eligibilityNote}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Phase Content Components
// ─────────────────────────────────────────────────────────────

function Phase1Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        HISAGEN&rsquo;s strategic foundation is substantially established across existing content
        and programme documentation. Key elements in place:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { title: "Adaptation Narrative", desc: "Farmer livelihoods lead, food security framing. Carbon is Stage 3+ upside, not the headline." },
          { title: "Dual-Entity Advantage", desc: "HISAGEN USA Inc. (Brooklyn) unlocks US foundations. HISAGEN Africa Ltd (Kampala) accesses African climate funds." },
          { title: "Evidence Base", desc: "NARO 5-zone independent trials with statistically significant yield improvements (+17&ndash;48%)." },
          { title: "Capital Stage Position", desc: "Late Stage 1 (Incubation). Pre-revenue, validated science, seeking first grant funding." },
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
            <h5 className="text-xs font-bold text-secondary mb-1">{item.title}</h5>
            <p className="text-xs text-slate leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Phase2Content() {
  return (
    <div className="space-y-6">
      {/* Stats — show both pre- and post-filter */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="p-3 rounded-lg border border-mist bg-white text-center">
          <p className="text-2xl font-bold text-secondary">{landscapeStats.totalResearched}+</p>
          <p className="text-[10px] uppercase tracking-widest text-slate/60 mt-1">Researched</p>
        </div>
        <div className="p-3 rounded-lg border border-mist bg-white text-center">
          <p className="text-2xl font-bold text-secondary">{landscapeStats.totalScored}</p>
          <p className="text-[10px] uppercase tracking-widest text-slate/60 mt-1">Scored</p>
        </div>
        <div className="p-3 rounded-lg border-2 border-emerald-200 bg-emerald-50 text-center">
          <p className="text-2xl font-bold text-emerald-700">{landscapeStats.eligibleTier1Count}</p>
          <p className="text-[10px] uppercase tracking-widest text-emerald-600 mt-1">Tier 1 Eligible</p>
        </div>
        <div className="p-3 rounded-lg border-2 border-emerald-200 bg-emerald-50 text-center">
          <p className="text-2xl font-bold text-emerald-700">{landscapeStats.eligibleTier2Count}</p>
          <p className="text-[10px] uppercase tracking-widest text-emerald-600 mt-1">Tier 2 Eligible</p>
        </div>
        <div className="p-3 rounded-lg border-2 border-primary/30 bg-primary/5 text-center">
          <p className="text-lg font-bold text-primary">{landscapeStats.eligiblePipelineValue}</p>
          <p className="text-[10px] uppercase tracking-widest text-primary/70 mt-1">Eligible Value</p>
        </div>
      </div>

      {/* Eligible Funders — prominent */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <h5 className="text-xs font-bold text-secondary uppercase tracking-widest">
            Eligible Funders (For-Profit Accepted)
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {eligibleFunders.map((funder) => (
            <FunderCardCompact key={funder.id} funder={funder} />
          ))}
        </div>
      </div>

      {/* Conditional */}
      {conditionalFunders.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <h5 className="text-xs font-bold text-secondary uppercase tracking-widest">
              Conditional Eligibility
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {conditionalFunders.map((funder) => (
              <FunderCardCompact key={funder.id} funder={funder} />
            ))}
          </div>
        </div>
      )}

      {/* Ineligible — collapsed/greyed */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-300" />
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Ineligible (For-Profit Cannot Apply Directly)
          </h5>
          <span className="text-[10px] text-slate/50">{ineligibleFunders.length} funders</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ineligibleFunders.map((funder) => (
            <FunderCardMini key={funder.id} funder={funder} />
          ))}
        </div>
      </div>

      {/* Deprioritised */}
      {deprioritisedFunders.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-slate-300" />
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Deprioritised
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {deprioritisedFunders.map((funder) => (
              <FunderCardMini key={funder.id} funder={funder} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Phase3Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        Master Case for Support drafted (8 sections, ~23,000 words) plus Foundation Summary
        for quick-read format. Base Proposal created (10 reusable blocks). Ready for Keir review and funder adaptation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { tier: "Catalyst Grants", range: "$25,000 &ndash; $75,000", purpose: "Proof of concept, initial field operations" },
          { tier: "Partner Grants", range: "$100,000 &ndash; $250,000", purpose: "Full pilot with monitoring and data collection" },
          { tier: "Strategic Grants", range: "$500,000 &ndash; $1,000,000", purpose: "Multi-year programme with expansion pathway" },
        ].map((t) => (
          <div key={t.tier} className="p-4 rounded-lg border border-mist bg-white">
            <h5 className="text-xs font-bold text-secondary mb-1">{t.tier}</h5>
            <p className="text-lg font-bold text-primary mb-1" dangerouslySetInnerHTML={{ __html: t.range }} />
            <p className="text-[11px] text-slate">{t.purpose}</p>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
        <p className="text-xs text-slate">
          <strong className="text-secondary">Next:</strong> Review funding tier amounts with Keir
          ($50&ndash;75K / $150&ndash;250K / $500K&ndash;1M) and begin funder-specific adaptations
          starting with Echoing Green fellowship narrative.
        </p>
      </div>
    </div>
  );
}

function Phase4Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        Approach strategy defined for eligible funders. Post-eligibility filter, only {eligibleFunders.length} funders
        are directly accessible, plus {conditionalFunders.length} conditional.
      </p>

      {/* Eligible funder approaches */}
      <div className="space-y-2">
        {[...eligibleFunders, ...conditionalFunders].map((funder) => {
          const badge = eligibilityBadge[funder.eligibility];
          return (
            <div key={funder.id} className="flex items-center gap-4 p-3 rounded-lg border border-mist bg-white">
              <div className="flex-1">
                <p className="text-sm font-bold text-secondary">{funder.shortName}</p>
                <p className="text-xs text-slate">{funder.process || funder.applyVia}</p>
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border shrink-0 ${badge.className}`}>
                {badge.label}
              </span>
              <span className="text-xs text-slate/60 shrink-0">{funder.deadline || funder.deadlineNote || "TBC"}</span>
            </div>
          );
        })}
      </div>

      {/* Keir action items — from data */}
      <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
        <h5 className="text-xs font-bold text-amber-800 mb-2">Keir Action Items</h5>
        <ul className="space-y-1 text-xs text-amber-700">
          {keirActionItems.map((item) => (
            <li key={item.id}>
              &bull; {item.action}
              {item.funder && <span className="text-amber-500"> ({item.funder})</span>}
              <span className="text-amber-400"> &mdash; {item.byWhen}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Phase5Content() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
        <p className="text-sm font-bold text-emerald-800 mb-1">For-Profit Eligibility Filter Applied</p>
        <p className="text-xs text-emerald-700 leading-relaxed">
          Both HISAGEN entities are for-profit limited companies. Applied eligibility filter across all
          11 scored funders on 2026-03-10. Result: <strong>8 of 11 ineligible</strong> for direct application.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg border-2 border-emerald-200 bg-emerald-50 text-center">
          <p className="text-2xl font-bold text-emerald-700">{eligibleFunders.length}</p>
          <p className="text-[10px] uppercase tracking-widest text-emerald-600 mt-1">Eligible</p>
        </div>
        <div className="p-3 rounded-lg border border-amber-200 bg-amber-50 text-center">
          <p className="text-2xl font-bold text-amber-700">{conditionalFunders.length}</p>
          <p className="text-[10px] uppercase tracking-widest text-amber-600 mt-1">Conditional</p>
        </div>
        <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-center">
          <p className="text-2xl font-bold text-red-600">{ineligibleFunders.length}</p>
          <p className="text-[10px] uppercase tracking-widest text-red-500 mt-1">Ineligible</p>
        </div>
        <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-center">
          <p className="text-2xl font-bold text-slate-500">{deprioritisedFunders.length}</p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Deprioritised</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { check: "Entity Eligibility", desc: "Both HISAGEN entities are for-profit. Most traditional grant funders require nonprofit/NGO/501(c)(3) status.", result: "8 of 11 ineligible" },
          { check: "Eligible Pipeline", desc: "Echoing Green (Tier 1), Mulago Foundation (Tier 2), IFAD (Tier 2). All explicitly accept for-profit applicants.", result: `${landscapeStats.eligiblePipelineValue}` },
          { check: "Conditional", desc: "AAAP/YouthADAPT requires founder aged 18-35. Keir must confirm age eligibility.", result: "Pending Keir" },
        ].map((item) => (
          <div key={item.check} className="p-4 rounded-lg border border-mist bg-white">
            <h5 className="text-xs font-bold text-secondary mb-1">{item.check}</h5>
            <p className="text-[11px] text-slate/70 mb-2">{item.desc}</p>
            <p className="text-xs font-bold text-primary">{item.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Phase6Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        Base Proposal created (10 reusable blocks). Funder-specific proposals
        will be developed for eligible funders only.
      </p>

      {/* Application Timeline — eligible funders only */}
      <div>
        <h5 className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
          Application Timeline (Eligible Funders)
        </h5>
        <div className="rounded-xl border border-mist bg-white overflow-hidden">
          <div className="divide-y divide-mist">
            {applicationTimeline.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-4 px-4 py-3 hover:bg-parchment/30 transition-colors">
                <div className="w-20 shrink-0">
                  <p className="text-xs font-bold text-secondary">{entry.when}</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate">
                    <strong className="text-secondary">{entry.what}</strong>
                    <span className="text-slate/60"> &mdash; {entry.funder}</span>
                  </p>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${urgencyColor[entry.urgency]}`}>
                  {entry.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
        <p className="text-xs text-slate">
          <strong className="text-secondary">Priority:</strong> Echoing Green is the only directly accessible,
          high-scoring, for-profit-eligible Tier 1 opportunity. Prepare fellowship application Jul&ndash;Aug 2026.
          Mulago requires referral pathway &mdash; start network building now.
        </p>
      </div>
    </div>
  );
}

const phaseContentMap: Record<number, () => React.ReactNode> = {
  1: Phase1Content,
  2: Phase3Content,
  3: Phase2Content,
  4: Phase4Content,
  5: Phase5Content,
  6: Phase6Content,
};

// ─────────────────────────────────────────────────────────────
// Accordion Component
// ─────────────────────────────────────────────────────────────

function PhaseAccordion({ phase, isOpen, onToggle }: { phase: GrantPhase; isOpen: boolean; onToggle: () => void }) {
  const PhaseContent = phaseContentMap[phase.number];

  return (
    <div className={`rounded-2xl border-2 transition-colors ${
      isOpen ? "border-primary/30 bg-white" : "border-mist bg-white hover:border-secondary/20"
    }`}>
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left"
      >
        {/* Phase number */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
          phase.status === "complete" ? "bg-emerald-100 text-emerald-700" :
          phase.status === "active" ? "bg-primary/10 text-primary" :
          phase.status === "in-progress" ? "bg-amber-100 text-amber-700" :
          "bg-slate-100 text-slate-400"
        }`}>
          {String(phase.number).padStart(2, "0")}
        </div>

        {/* Name & description */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-0.5">
            <h3
              className="text-base font-bold text-secondary"
              dangerouslySetInnerHTML={{ __html: phase.name }}
            />
            <span
              className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${statusStyle[phase.status]}`}
              dangerouslySetInnerHTML={{ __html: phase.statusLabel }}
            />
          </div>
          <p className="text-xs text-slate/70">{phase.description}</p>
        </div>

        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-slate/40 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content — expandable */}
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 border-t border-mist">
            <PhaseContent />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Pipeline Overview Table
// ─────────────────────────────────────────────────────────────

type SortKey = "shortName" | "score" | "tier" | "grantMax" | "deadline";
type SortDir = "asc" | "desc";

const eligibilityOrder: Record<EligibilityStatus, number> = {
  eligible: 0,
  conditional: 1,
  deprioritised: 2,
  reclassified: 3,
  ineligible: 4,
};

const pipelineStatusBadge: Record<PipelineStatus, { label: string; className: string }> = {
  "prospect": { label: "1 — Prospect", className: "bg-slate-100 text-slate-500" },
  "qualification": { label: "2 — Qualified", className: "bg-blue-100 text-blue-700" },
  "relationship": { label: "3 — Relationship", className: "bg-amber-100 text-amber-700" },
  "application": { label: "4 — Application", className: "bg-primary/10 text-primary" },
  "due-diligence": { label: "5 — Due Diligence", className: "bg-purple-100 text-purple-700" },
  "closed-won": { label: "6 — Won", className: "bg-emerald-200 text-emerald-800" },
  "closed-lost": { label: "6 — Lost", className: "bg-red-100 text-red-600" },
};

const applicationWindowBadge: Record<ApplicationWindow, { label: string; className: string }> = {
  "rolling": { label: "Rolling", className: "bg-emerald-100 text-emerald-700" },
  "open": { label: "Open", className: "bg-emerald-200 text-emerald-800" },
  "closed": { label: "Closed", className: "bg-slate-100 text-slate-500" },
  "upcoming": { label: "Upcoming", className: "bg-amber-100 text-amber-700" },
  "monitor": { label: "Monitor", className: "bg-blue-100 text-blue-700" },
};

const effortBadge: Record<EstimatedEffort, { label: string; className: string }> = {
  "low": { label: "Low", className: "bg-emerald-100 text-emerald-700" },
  "medium": { label: "Medium", className: "bg-amber-100 text-amber-700" },
  "high": { label: "High", className: "bg-red-100 text-red-600" },
};

const capitalSourceShort: Record<CapitalSource, string> = {
  grants: "Grants",
  debt: "Debt",
  equity: "Equity",
  impact: "Impact",
  blended: "Blended",
};

function PipelineOverview() {
  const [isOpen, setIsOpen] = useState(true);
  const [sortKey, setSortKey] = useState<SortKey>("score");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [filterEligibility, setFilterEligibility] = useState<string>("all");
  const [filterCapitalSource, setFilterCapitalSource] = useState<string>("all");
  const [filterOrgType, setFilterOrgType] = useState<string>("all");
  const [filterThematicFocus, setFilterThematicFocus] = useState<string>("all");
  const [filterTier, setFilterTier] = useState<string>("all");
  const [showIneligible, setShowIneligible] = useState(false);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir(key === "score" || key === "grantMax" ? "desc" : "asc");
    }
  };

  const SortIcon = ({ col }: { col: SortKey }) => (
    <span className="inline-block ml-0.5 text-[8px] opacity-50">
      {sortKey === col ? (sortDir === "asc" ? "\u25B2" : "\u25BC") : "\u25BC"}
    </span>
  );

  // Count ineligible for toggle label
  const ineligibleCount = allCuratedFunders.filter(
    (f) => f.eligibility === "ineligible" || f.eligibility === "deprioritised"
  ).length;

  // Filter
  let filtered = allCuratedFunders.filter((f) => {
    // Hide ineligible/deprioritised unless toggle is on
    if (!showIneligible && (f.eligibility === "ineligible" || f.eligibility === "deprioritised")) return false;
    if (filterEligibility !== "all" && f.eligibility !== filterEligibility) return false;
    if (filterCapitalSource !== "all" && f.capitalSource !== filterCapitalSource) return false;
    if (filterOrgType !== "all" && f.orgType !== filterOrgType) return false;
    if (filterThematicFocus !== "all" && f.thematicFocus !== filterThematicFocus) return false;
    if (filterTier !== "all" && f.tier !== filterTier) return false;
    return true;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    const dir = sortDir === "asc" ? 1 : -1;
    switch (sortKey) {
      case "score":
        return (a.score - b.score) * dir;
      case "grantMax":
        return ((a.grantMax || 0) - (b.grantMax || 0)) * dir;
      case "shortName":
        return a.shortName.localeCompare(b.shortName) * dir;
      case "tier":
        return a.tier.localeCompare(b.tier) * dir;
      case "deadline": {
        const aDate = a.deadline || "zzz";
        const bDate = b.deadline || "zzz";
        return aDate.localeCompare(bDate) * dir;
      }
      default:
        return 0;
    }
  });

  // Unique values for filter dropdowns
  const uniqueOrgTypes = [...new Set(allCuratedFunders.map((f) => f.orgType))];
  const uniqueThematicFocuses = [...new Set(allCuratedFunders.map((f) => f.thematicFocus))];
  const uniqueCapitalSources = [...new Set(allCuratedFunders.map((f) => f.capitalSource))];

  const activeFilters = [filterEligibility, filterCapitalSource, filterOrgType, filterThematicFocus, filterTier].filter((f) => f !== "all").length;

  return (
    <section className="mt-12">
      <div
        className={`rounded-2xl border-2 transition-colors ${
          isOpen ? "border-primary/30 bg-white" : "border-mist bg-white hover:border-secondary/20"
        }`}
      >
        {/* Accordion header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-4 px-6 py-5 text-left"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
            isOpen ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"
          }`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-0.5">
              <h3 className="text-base font-bold text-secondary">Pipeline Overview</h3>
              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border bg-primary/10 text-primary border-primary/20">
                {allCuratedFunders.length - ineligibleCount} Active{showIneligible ? ` + ${ineligibleCount} Ineligible` : ""}
              </span>
              {activeFilters > 0 && (
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-100 text-amber-700">
                  {activeFilters} filter{activeFilters > 1 ? "s" : ""} active
                </span>
              )}
            </div>
            <p className="text-xs text-slate/70">
              All capital sources in one view. Sort by column headers. Filter by eligibility, capital type, funder type, or tier.
              <span className="ml-2 text-slate/40">Last synced: 11 March 2026</span>
            </p>
          </div>
          <svg
            className={`w-5 h-5 text-slate/40 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expandable content */}
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-2 border-t border-mist">
              {/* Filters row */}
              <div className="flex flex-wrap gap-3 mb-4">
                <select
                  value={filterEligibility}
                  onChange={(e) => setFilterEligibility(e.target.value)}
                  className="text-xs border border-mist rounded-lg px-3 py-1.5 bg-white text-secondary focus:outline-none focus:border-primary"
                >
                  <option value="all">All Eligibility</option>
                  <option value="eligible">Eligible</option>
                  <option value="conditional">Conditional</option>
                  <option value="ineligible">Ineligible</option>
                  <option value="deprioritised">Deprioritised</option>
                </select>
                <select
                  value={filterCapitalSource}
                  onChange={(e) => setFilterCapitalSource(e.target.value)}
                  className="text-xs border border-mist rounded-lg px-3 py-1.5 bg-white text-secondary focus:outline-none focus:border-primary"
                >
                  <option value="all">All Capital Sources</option>
                  {uniqueCapitalSources.map((cs) => (
                    <option key={cs} value={cs}>{capitalSourceLabels[cs]}</option>
                  ))}
                </select>
                <select
                  value={filterOrgType}
                  onChange={(e) => setFilterOrgType(e.target.value)}
                  className="text-xs border border-mist rounded-lg px-3 py-1.5 bg-white text-secondary focus:outline-none focus:border-primary"
                >
                  <option value="all">All Org Types</option>
                  {uniqueOrgTypes.map((ot) => (
                    <option key={ot} value={ot}>{orgTypeLabels[ot]}</option>
                  ))}
                </select>
                <select
                  value={filterThematicFocus}
                  onChange={(e) => setFilterThematicFocus(e.target.value)}
                  className="text-xs border border-mist rounded-lg px-3 py-1.5 bg-white text-secondary focus:outline-none focus:border-primary"
                >
                  <option value="all">All Thematic Focus</option>
                  {uniqueThematicFocuses.map((tf) => (
                    <option key={tf} value={tf}>{thematicFocusLabels[tf]}</option>
                  ))}
                </select>
                <select
                  value={filterTier}
                  onChange={(e) => setFilterTier(e.target.value)}
                  className="text-xs border border-mist rounded-lg px-3 py-1.5 bg-white text-secondary focus:outline-none focus:border-primary"
                >
                  <option value="all">All Tiers</option>
                  <option value="tier1">Tier 1</option>
                  <option value="tier2">Tier 2</option>
                </select>
                {activeFilters > 0 && (
                  <button
                    onClick={() => {
                      setFilterEligibility("all");
                      setFilterCapitalSource("all");
                      setFilterOrgType("all");
                      setFilterThematicFocus("all");
                      setFilterTier("all");
                    }}
                    className="text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-700 px-2 py-1.5 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
                <label className="ml-auto flex items-center gap-2 cursor-pointer self-center">
                  <span className="text-[10px] text-slate/50">
                    Show {ineligibleCount} ineligible
                  </span>
                  <button
                    onClick={() => setShowIneligible(!showIneligible)}
                    className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${
                      showIneligible ? "bg-primary" : "bg-slate-200"
                    }`}
                    role="switch"
                    aria-checked={showIneligible}
                  >
                    <span
                      className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        showIneligible ? "translate-x-3.5" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </label>
                <span className="text-[10px] text-slate/50 self-center">
                  {filtered.length} shown
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-mist">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-parchment/60 border-b border-mist">
                      <th
                        className="text-left px-3 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                        onClick={() => handleSort("shortName")}
                      >
                        Funder <SortIcon col="shortName" />
                      </th>
                      <th
                        className="text-center px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                        onClick={() => handleSort("score")}
                      >
                        Score <SortIcon col="score" />
                      </th>
                      <th
                        className="text-center px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                        onClick={() => handleSort("tier")}
                      >
                        Tier <SortIcon col="tier" />
                      </th>
                      <th className="text-left px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Org Type
                      </th>
                      <th className="text-left px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Focus
                      </th>
                      <th className="text-left px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Capital Source
                      </th>
                      <th className="text-left px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Mechanism
                      </th>
                      <th className="text-center px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Cost to HISAGEN
                      </th>
                      <th className="text-center px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Eligibility
                      </th>
                      <th
                        className="text-right px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                        onClick={() => handleSort("grantMax")}
                      >
                        Capital Range <SortIcon col="grantMax" />
                      </th>
                      <th
                        className="text-left px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                        onClick={() => handleSort("deadline")}
                      >
                        Deadline <SortIcon col="deadline" />
                      </th>
                      <th className="text-center px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Window
                      </th>
                      <th className="text-center px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Effort
                      </th>
                      <th className="text-center px-2 py-2.5 font-bold text-secondary uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Pipeline Stage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    {filtered.map((funder) => {
                      const eBadge = eligibilityBadge[funder.eligibility];
                      const sBadge = pipelineStatusBadge[funder.pipelineStatus];
                      const isInactive = funder.eligibility === "ineligible" || funder.eligibility === "deprioritised";
                      const isUrgent = funder.deadline && !funder.deadline.includes("Rolling") && !funder.deadline.includes("September");

                      return (
                        <tr
                          key={funder.id}
                          className={`hover:bg-parchment/30 transition-colors ${isInactive ? "opacity-50" : ""}`}
                        >
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-1.5">
                              {funder.url ? (
                                <a
                                  href={funder.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`font-bold hover:text-primary transition-colors ${isInactive ? "text-slate-400" : "text-secondary"}`}
                                >
                                  {funder.shortName}
                                </a>
                              ) : (
                                <span className={`font-bold ${isInactive ? "text-slate-400" : "text-secondary"}`}>
                                  {funder.shortName}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="text-center px-2 py-2.5">
                            <span className={`font-bold ${funder.score >= 4.0 ? "text-emerald-700" : funder.score >= 3.5 ? "text-secondary" : "text-slate"}`}>
                              {funder.score.toFixed(2)}
                            </span>
                          </td>
                          <td className="text-center px-2 py-2.5">
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
                              funder.tier === "tier1" ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-600"
                            }`}>
                              {funder.tier === "tier1" ? "T1" : "T2"}
                            </span>
                          </td>
                          <td className="px-2 py-2.5 text-slate/70 whitespace-nowrap text-[10px]">
                            {orgTypeLabels[funder.orgType]}
                          </td>
                          <td className="px-2 py-2.5 text-slate/70 whitespace-nowrap text-[10px]">
                            {thematicFocusLabels[funder.thematicFocus]}
                          </td>
                          <td className="px-2 py-2.5 whitespace-nowrap">
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
                              funder.capitalSource === "grants" ? "bg-emerald-50 text-emerald-700" :
                              funder.capitalSource === "equity" ? "bg-blue-50 text-blue-700" :
                              funder.capitalSource === "debt" ? "bg-amber-50 text-amber-700" :
                              funder.capitalSource === "impact" ? "bg-purple-50 text-purple-700" :
                              "bg-slate-100 text-slate-600"
                            }`}>
                              {capitalSourceShort[funder.capitalSource]}
                            </span>
                          </td>
                          <td className="px-2 py-2.5 text-slate/70 whitespace-nowrap text-[10px]">
                            {fundingMechanismLabels[funder.fundingMechanism]}
                          </td>
                          <td className="text-center px-2 py-2.5">
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
                              funder.costToCompany === "non-dilutive" ? "bg-emerald-50 text-emerald-700" :
                              funder.costToCompany === "dilutive" ? "bg-red-50 text-red-700" :
                              funder.costToCompany === "repayable" ? "bg-amber-50 text-amber-700" :
                              funder.costToCompany === "conditionally-repayable" ? "bg-amber-50 text-amber-600" :
                              "bg-purple-50 text-purple-700"
                            }`}>
                              {costToCompanyLabels[funder.costToCompany]}
                            </span>
                          </td>
                          <td className="text-center px-2 py-2.5">
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${eBadge.className}`}>
                              {eBadge.label}
                            </span>
                          </td>
                          <td className="text-right px-2 py-2.5 text-slate whitespace-nowrap">
                            {funder.grantRange}
                          </td>
                          <td className="px-2 py-2.5 whitespace-nowrap">
                            {funder.deadline ? (
                              <span className={`font-medium ${isUrgent ? "text-red-600" : "text-slate"}`}>
                                {funder.deadline}
                              </span>
                            ) : (
                              <span className="text-slate/40">{funder.deadlineNote ? funder.deadlineNote.slice(0, 30) : "TBC"}</span>
                            )}
                          </td>
                          <td className="text-center px-2 py-2.5">
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${applicationWindowBadge[funder.applicationWindow].className}`}>
                              {applicationWindowBadge[funder.applicationWindow].label}
                            </span>
                          </td>
                          <td className="text-center px-2 py-2.5">
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${effortBadge[funder.estimatedEffort].className}`}>
                              {effortBadge[funder.estimatedEffort].label}
                            </span>
                          </td>
                          <td className="text-center px-2 py-2.5">
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${sBadge.className}`}>
                              {sBadge.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={12} className="text-center py-8 text-slate/50">
                          No funders match the selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Summary bar */}
              <div className="mt-3 flex flex-wrap gap-4 text-[10px] text-slate/60">
                <span>
                  <strong className="text-emerald-600">{filtered.filter((f) => f.eligibility === "eligible").length}</strong> eligible
                </span>
                <span>
                  <strong className="text-amber-600">{filtered.filter((f) => f.eligibility === "conditional").length}</strong> conditional
                </span>
                <span>
                  <strong className="text-red-500">{filtered.filter((f) => f.eligibility === "ineligible").length}</strong> ineligible
                </span>
                <span className="ml-auto">
                  Sort by clicking column headers &bull; Filter with dropdowns above
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Pipeline Glossary
// ─────────────────────────────────────────────────────────────

const glossarySections = [
  {
    title: "Organisation Types",
    description: "What kind of entity the funder is",
    terms: [
      { term: "Foundation", definition: "A private or public charitable organisation that provides grants, fellowships, or investments. Funded by endowments, donations, or corporate backing. Examples: Echoing Green, Mulago, CFH Foundation." },
      { term: "Trust", definition: "A UK legal structure similar to a foundation, typically established to distribute funds for charitable purposes. Usually smaller, with focused geographic or thematic mandates. Example: Noel Buxton Trust." },
      { term: "Multilateral Agency", definition: "An international organisation funded by multiple governments, operating through the UN system or multilateral development banks. Examples: IFAD (UN), WFP, AfDB, UNDP. Typically offers programme grants with significant reporting requirements." },
      { term: "Government Programme", definition: "A funding programme backed by government or intergovernmental budgets (EU, USAID, national development agencies). May offer grants, loans, or blended instruments. Examples: EIC Accelerator (EU), START II (EU/UNCDF)." },
      { term: "Impact Fund", definition: "An investment fund designed to generate measurable social or environmental impact alongside financial returns. Takes equity stakes in companies. Examples: Acumen/ARAF, FINCA Ventures." },
      { term: "Venture Philanthropy", definition: "Applies venture capital principles to philanthropy \u2014 long-term engagement, capacity building, and performance measurement. May provide grants or investment capital depending on the recipient\u2019s structure. Example: DRK Foundation." },
      { term: "Accelerator", definition: "A structured programme offering funding, mentorship, and network access over a fixed period (typically 3\u20136 months). May be non-dilutive or equity-based. Examples: Hello Tomorrow, Katapult Africa." },
      { term: "Prize Programme", definition: "A competitive challenge that awards funding to winners based on innovation, impact, or business potential. Always non-dilutive. Examples: World Food Prize, GoGettaz Agripreneur Prize." },
    ],
  },
  {
    title: "Thematic Focus",
    description: "What the funder primarily funds",
    terms: [
      { term: "Climate Adaptation", definition: "Funders focused on building resilience to climate change impacts \u2014 drought-resistant agriculture, water management, climate-smart technologies. Directly aligned with HISAGEN\u2019s bio-stimulant work." },
      { term: "Agriculture & Food Security", definition: "Funders targeting food production, smallholder farming, agricultural technology, and food system resilience. The broadest relevant category for HISAGEN." },
      { term: "Social Enterprise", definition: "Funders backing mission-driven businesses that prioritise social or environmental impact alongside financial sustainability. Not sector-specific \u2014 they fund the business model, not the theme." },
      { term: "Innovation & Technology", definition: "Funders focused on novel technologies, deep tech, and evidence-based innovation across sectors. HISAGEN\u2019s bio-stimulant R&D and NARO trial data are the relevant angle." },
      { term: "Financial Inclusion", definition: "Funders targeting access to financial services for underserved populations \u2014 microfinance, rural banking, agricultural credit. Relevant to HISAGEN\u2019s farmer economics model." },
      { term: "General Development", definition: "Broad development funders without a narrow thematic mandate. Typically support poverty reduction, capacity building, or community development across multiple sectors." },
    ],
  },
  {
    title: "Funding Mechanisms",
    description: "How the capital is deployed to HISAGEN",
    terms: [
      { term: "Grant", definition: "Non-repayable funding for a specific project or purpose. No ownership given up, no repayment required. The simplest and most favourable form of funding." },
      { term: "Programme Grant", definition: "Grant funding tied to a specific development programme run by a larger institution (e.g. UNDP, AfDB, EU). Comes with programme-level reporting, co-financing requirements, and thematic constraints." },
      { term: "Prize / Award", definition: "Competitive, non-dilutive lump sum awarded to winners of innovation challenges or competitions. Often comes with visibility, mentoring, and investor access. Only top finalists receive funding." },
      { term: "Fellowship", definition: "Structured support combining funding with mentorship, network access, and capacity building over a fixed period (typically 12\u201318 months). Usually competitive and cohort-based." },
      { term: "Recoverable Grant", definition: "Starts as a grant but becomes repayable if the company hits certain success thresholds (e.g. revenue or valuation targets). If the company stays below thresholds, the money is effectively free." },
      { term: "Reimbursable Grant", definition: "Zero-interest funding where the principal must be repaid within a fixed period (typically 6\u201318 months), but there is no interest charged. Closer to an interest-free loan than a true grant." },
      { term: "Equity Investment", definition: "The funder takes an ownership stake (shares) in the company in exchange for capital. Dilutive \u2014 the founder\u2019s percentage ownership decreases. Common in VC and impact investing." },
      { term: "Concessional Loan", definition: "A loan with below-market interest rates and/or longer repayment periods than commercial lending. Must be repaid but on favourable terms. Common from DFIs and government programmes." },
      { term: "Design Grant", definition: "Funding specifically to design or structure a financial instrument or mechanism, not to fund operations or projects directly. Useful for creating blended finance vehicles." },
      { term: "Blended (Grant + Equity)", definition: "A package combining non-repayable grant funding with an equity investment. Part of the money is free; part requires giving up ownership. The grant component reduces risk for the equity portion." },
    ],
  },
  {
    title: "Cost to HISAGEN",
    description: "What the company gives up in exchange for capital",
    terms: [
      { term: "Non-Dilutive", definition: "No ownership given up, no repayment required. The funder receives nothing financial in return \u2014 only impact outcomes and reporting. Grants, prizes, and fellowships are typically non-dilutive." },
      { term: "Dilutive (Equity Stake)", definition: "The funder receives ownership shares in the company. The founder\u2019s percentage ownership decreases. The funder may also require a board seat or governance rights. Important: at pre-revenue stage, equity valuations can be unfavourable." },
      { term: "Repayable", definition: "The capital must be repaid, either with interest (loan) or at zero interest (reimbursable grant). No ownership given up, but creates a financial obligation that must be serviced." },
      { term: "Conditionally Repayable", definition: "Repayment only triggers if specific success thresholds are met (e.g. company valued above $5M, or revenue exceeds $2M with net profit). If thresholds are not met, the funding is effectively a grant." },
      { term: "Mixed (Part Dilutive)", definition: "A blended package where one component is non-dilutive (grant) and another is dilutive (equity). The overall cost depends on the split between grant and equity portions." },
    ],
  },
  {
    title: "Capital Sources",
    description: "The pathway through which capital flows",
    terms: [
      { term: "Grants & Philanthropy", definition: "Funding from foundations, trusts, government programmes, and multilateral institutions. Typically non-dilutive. The primary capital source at Stage 1 (pre-revenue)." },
      { term: "Equity & VC", definition: "Venture capital and impact investment funds that take ownership stakes in exchange for growth capital. Typically enters at Stage 2\u20133 when the company has revenue traction." },
      { term: "Green Bonds & Debt", definition: "Loan-based instruments including concessional loans, green bonds, and sustainability-linked debt. Repayable but non-dilutive. Usually requires revenue to service repayments." },
      { term: "Impact Investing", definition: "Investments made with the intention of generating measurable social/environmental impact alongside financial returns. Can be grants, equity, or debt \u2014 the defining feature is the dual mandate." },
      { term: "Blended Finance", definition: "Structures that combine public/philanthropic capital with private investment. The concessional element (grant or guarantee) reduces risk to attract commercial capital that would not otherwise invest." },
    ],
  },
  {
    title: "Eligibility Statuses",
    description: "Whether HISAGEN can apply as a for-profit company",
    terms: [
      { term: "Eligible", definition: "Verified: HISAGEN can apply as a for-profit limited company. The funder explicitly accepts for-profit applicants, confirmed against official programme documentation." },
      { term: "Conditional", definition: "Potentially eligible but with specific conditions that must be met first \u2014 e.g. founder age requirement, need for an EU entity, or programme not yet accepting applications." },
      { term: "Ineligible", definition: "The funder only accepts nonprofit/NGO/CSO applicants. HISAGEN cannot apply as either entity (USA Inc. or Africa Ltd). Retained in the pipeline as research record." },
      { term: "Deprioritised", definition: "Technically eligible but strategically misaligned at HISAGEN\u2019s current stage. May become relevant later as the company matures or pivots." },
    ],
  },
  {
    title: "Pipeline Stages",
    description: "Where each funder sits in our engagement journey",
    terms: [
      { term: "1 \u2014 Prospect", definition: "Initial fit identified through landscape research. The funder has been found but not yet assessed against HISAGEN\u2019s specific eligibility criteria." },
      { term: "2 \u2014 Qualification", definition: "Eligibility verified against official programme documentation. We know whether HISAGEN can apply, what the requirements are, and what the timeline looks like." },
      { term: "3 \u2014 Relationship", definition: "Contact established with the funder or intermediary. Introductory conversations, referral pathways activated, or programme officer engaged." },
      { term: "4 \u2014 Application", definition: "Proposal or application submitted. Includes concept notes, full proposals, fellowship applications, or accelerator programme entries." },
      { term: "5 \u2014 Due Diligence", definition: "Funder evaluation phase. The application is under review, additional information may be requested, site visits or interviews may occur." },
      { term: "6 \u2014 Closed (Won/Lost)", definition: "Final outcome. Funded (awarded, terms agreed) or rejected. Either way, the engagement is complete for this cycle." },
    ],
  },
  {
    title: "Application Window",
    description: "Whether applications are currently being accepted",
    terms: [
      { term: "Open", definition: "Applications are currently being accepted. There is a known deadline or submission route available now." },
      { term: "Rolling", definition: "Applications accepted on an ongoing basis with no fixed deadline. Reviewed periodically or as received." },
      { term: "Closed", definition: "The current application cycle has closed. Cannot apply until the next cycle opens." },
      { term: "Upcoming", definition: "A known application window is expected to open soon. Dates may be approximate based on historical patterns." },
      { term: "Monitor", definition: "No open application route currently. Requires monitoring for Calls for Proposals, programme announcements, or intermediary access." },
    ],
  },
  {
    title: "Estimated Effort",
    description: "How much work is involved in preparing and submitting an application",
    terms: [
      { term: "Low", definition: "Straightforward application \u2014 short form, limited documentation, minimal narrative required. Typically a few hours of work." },
      { term: "Medium", definition: "Standard application requiring a structured proposal, supporting documents (budget, theory of change, evidence), and funder-specific formatting. Typically 1\u20132 weeks." },
      { term: "High", definition: "Complex application involving multi-stage processes, detailed proposals, pitch decks, financial models, referral pathways, or institutional partnerships. Typically 2\u20134 weeks or ongoing relationship building." },
    ],
  },
];

function PipelineGlossary() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());

  const toggleSection = (idx: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="mt-4">
      <div
        className={`rounded-2xl border transition-colors ${
          isOpen ? "border-slate-200 bg-white" : "border-mist bg-white hover:border-secondary/20"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-3 px-5 py-3.5 text-left"
        >
          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
            isOpen ? "bg-secondary/10 text-secondary" : "bg-slate-100 text-slate-400"
          }`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-secondary">Glossary of Terms</h3>
            <p className="text-[10px] text-slate/60">Definitions for funding mechanisms, capital sources, costs, and eligibility statuses</p>
          </div>
          <svg
            className={`w-4 h-4 text-slate/40 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-1 border-t border-mist space-y-2">
              {glossarySections.map((section, idx) => (
                <div key={section.title} className="rounded-xl border border-mist overflow-hidden">
                  <button
                    onClick={() => toggleSection(idx)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left bg-parchment/40 hover:bg-parchment/60 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-secondary flex-1">{section.title}</h4>
                    <span className="text-[9px] text-slate/50">{section.description}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-slate/40 shrink-0 transition-transform duration-200 ${openSections.has(idx) ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`grid transition-all duration-200 ${openSections.has(idx) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="px-4 py-3 space-y-2.5">
                        {section.terms.map((t) => (
                          <div key={t.term} className="flex gap-3">
                            <span className="text-[10px] font-bold text-secondary whitespace-nowrap min-w-[140px] pt-0.5">{t.term}</span>
                            <p className="text-[10px] text-slate/80 leading-relaxed">{t.definition}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// For-Profit Constraint Banner
// ─────────────────────────────────────────────────────────────

function ForProfitConstraintBanner() {
  return (
    <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50/40 px-5 py-4">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
          <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Note:</strong> Both HISAGEN entities are for-profit limited companies. Traditional grant funders
            (nonprofit/NGO-only) are largely ineligible. The pipeline below focuses on funders that explicitly
            accept for-profit applicants &mdash; venture philanthropy, DFI windows, government innovation programmes,
            and impact-focused accelerators.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────

export default function CapitalStrategyPage() {
  const [openPhases, setOpenPhases] = useState<Set<number>>(new Set());
  const [activePathway, setActivePathway] = useState<string>("grants");

  const toggle = (phase: number) => {
    setOpenPhases((prev) => {
      const next = new Set(prev);
      if (next.has(phase)) next.delete(phase);
      else next.add(phase);
      return next;
    });
  };

  const expandAll = () => setOpenPhases(new Set(grantPhases.map((p) => p.number)));
  const collapseAll = () => setOpenPhases(new Set());

  return (
    <div className="mx-auto max-w-5xl text-ink">
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
            Late Stage 1: Incubation
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
            Capital Strategy &amp; Fundraising Journey
          </span>
        </div>

        <h1 className="text-4xl font-bold text-secondary leading-tight">
          HISAGEN Capital Strategy
        </h1>
        <p className="mt-4 text-lg text-slate leading-relaxed max-w-3xl">
          Five sources of capital mapped across the Capital Continuum, each with its own
          pathway. Grant fundraising is active at Stage 1, following a 6-phase pre-award
          methodology. Other capital pathways unlock as evidence matures.
        </p>

        {/* Capital Continuum bar */}
        <div className="mt-8 flex items-center gap-0 overflow-x-auto">
          {[
            { label: "Stage 1", sub: "Incubation", active: true },
            { label: "Stage 2", sub: "Implementation", active: false },
            { label: "Stage 3", sub: "Stabilisation", active: false },
            { label: "Stage 4", sub: "Maturity", active: false },
          ].map((stage, idx) => (
            <div key={stage.label} className="flex items-center">
              {idx > 0 && <div className="w-8 h-0.5 bg-mist" />}
              <div className={`flex-shrink-0 rounded-xl px-5 py-3 border-2 text-center ${
                stage.active
                  ? "border-primary bg-primary/10"
                  : "border-mist bg-parchment/30"
              }`}>
                <p className={`text-xs font-bold uppercase tracking-widest ${
                  stage.active ? "text-primary" : "text-slate/40"
                }`}>
                  {stage.label}
                </p>
                <p className={`text-[10px] ${stage.active ? "text-primary/70" : "text-slate/30"}`}>
                  {stage.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FIVE SOURCES OF CAPITAL ──────────────────────────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Sources of Capital
          </h2>
          <div className="h-px flex-1 bg-mist" />
          <Link
            href="/capital-continuum"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/70 transition-colors whitespace-nowrap"
          >
            Capital Continuum &rarr;
          </Link>
        </div>
        <p className="text-sm text-slate mb-8 max-w-3xl">
          Five categories of sustainable finance capital, mapped to HISAGEN&rsquo;s position on the
          Capital Continuum. Stage 1 capital is active; later stages unlock as evidence matures.
        </p>

        <div className="space-y-4">
          {/* 1. Grants & Philanthropy — ACTIVE */}
          <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary/50 w-5">01</span>
                  <h3 className="text-lg font-bold text-secondary">Grants &amp; Philanthropy</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                    Active
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary ml-auto hidden sm:block">
                    Stage 1
                  </span>
                </div>
                <p className="text-sm text-slate leading-relaxed mb-3">
                  Non-repayable funding for building evidence, operational track record, and farmer
                  impact data. The primary capital source for incubation-stage projects.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-primary font-medium">
                  <span>&rarr; {landscapeStats.eligiblePipelineValue} eligible pipeline</span>
                  <span>&rarr; {landscapeStats.eligibleTier1Count} Tier 1 + {landscapeStats.eligibleTier2Count} Tier 2 eligible</span>
                  <span>&rarr; 6-phase methodology below</span>
                </div>
              </div>
              <div className="md:w-48 shrink-0 p-3 rounded-xl bg-white/60 border border-primary/10">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-1.5">Includes</p>
                <ul className="text-xs text-slate space-y-1">
                  <li>Public &amp; government grants</li>
                  <li>Private foundations</li>
                  <li>Climate adaptation funds</li>
                  <li>Fellowship programmes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Green Bonds & Debt — MAPPED */}
          <div className="rounded-2xl border border-mist bg-white p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-slate/30 w-5">02</span>
                  <h3 className="text-lg font-bold text-secondary">Green Bonds &amp; Debt</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                    Mapped
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-50 text-slate-400 ml-auto hidden sm:block">
                    Stage 2
                  </span>
                </div>
                <p className="text-sm text-slate leading-relaxed mb-3">
                  Repayable capital at concessional or commercial rates. Requires operational track
                  record and audited financials &mdash; appropriate once HISAGEN has 2&ndash;3 years of delivery.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate/70 font-medium">
                  <span>&rarr; Common Fund for Commodities (concessional loans, up to $1.5M)</span>
                  <span>&rarr; Sustainability-linked lending</span>
                </div>
              </div>
              <div className="md:w-48 shrink-0 p-3 rounded-xl bg-parchment/40 border border-mist">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-1.5">Includes</p>
                <ul className="text-xs text-slate space-y-1">
                  <li>Concessional debt (DFIs)</li>
                  <li>Sustainability-linked loans</li>
                  <li>Green bonds</li>
                  <li>Transition bonds</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Equity & Venture Capital — MAPPED */}
          <div className="rounded-2xl border border-mist bg-white p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-slate/30 w-5">03</span>
                  <h3 className="text-lg font-bold text-secondary">Equity &amp; Venture Capital</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                    Mapped
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-50 text-slate-400 ml-auto hidden sm:block">
                    Stage 2&ndash;3
                  </span>
                </div>
                <p className="text-sm text-slate leading-relaxed mb-3">
                  Ownership stakes in the HISAGEN enterprise. Seed and venture capital becomes viable
                  when grant-funded evidence demonstrates the model works and revenue streams are proven.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate/70 font-medium">
                  <span>&rarr; Investor pitch materials in development</span>
                  <span>&rarr; Seed conversations active (Keir/Scott)</span>
                </div>
              </div>
              <div className="md:w-48 shrink-0 p-3 rounded-xl bg-parchment/40 border border-mist">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-1.5">Includes</p>
                <ul className="text-xs text-slate space-y-1">
                  <li>Green VC / PE</li>
                  <li>Angel investors</li>
                  <li>Patient capital</li>
                  <li>Community equity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Impact Investing — MAPPED */}
          <div className="rounded-2xl border border-mist bg-white p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-slate/30 w-5">04</span>
                  <h3 className="text-lg font-bold text-secondary">Impact Investing</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                    Mapped
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-50 text-slate-400 ml-auto hidden sm:block">
                    Stage 2&ndash;3
                  </span>
                </div>
                <p className="text-sm text-slate leading-relaxed mb-3">
                  Capital seeking measurable social and environmental impact alongside financial return.
                  HISAGEN&rsquo;s dual-entity structure and farmer livelihood mission align strongly with impact mandates.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate/70 font-medium">
                  <span>&rarr; Mulago Foundation ($100K fellowship + $340K portfolio) &mdash; for-profit eligible</span>
                  <span>&rarr; IFAD (up to $1.5M, 25% co-financing) &mdash; for-profit eligible</span>
                </div>
              </div>
              <div className="md:w-48 shrink-0 p-3 rounded-xl bg-parchment/40 border border-mist">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-1.5">Includes</p>
                <ul className="text-xs text-slate space-y-1">
                  <li>Impact funds</li>
                  <li>Social enterprises</li>
                  <li>Community development finance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Blended Finance — FUTURE */}
          <div className="rounded-2xl border border-dashed border-mist bg-parchment/30 p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-slate/30 w-5">05</span>
                  <h3 className="text-lg font-bold text-secondary">Blended Finance</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-50 text-slate-400">
                    Future
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-50 text-slate-400 ml-auto hidden sm:block">
                    Stage 2+
                  </span>
                </div>
                <p className="text-sm text-slate leading-relaxed mb-3">
                  Strategic use of concessional capital to mobilise private investment. Structured
                  deals combining grant, debt, and equity become possible once HISAGEN has a track record
                  that de-risks the commercial layer.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate/70 font-medium">
                  <span>&rarr; First-loss capital structures</span>
                  <span>&rarr; Results-based finance (e.g. outcomes funds)</span>
                </div>
              </div>
              <div className="md:w-48 shrink-0 p-3 rounded-xl bg-white/60 border border-mist">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-1.5">Includes</p>
                <ul className="text-xs text-slate space-y-1">
                  <li>First-loss capital</li>
                  <li>Guarantee instruments</li>
                  <li>Technical assistance</li>
                  <li>Results-based finance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Programme Revenue Model + Evidence Flow + Social & Environmental Benefits */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-parchment border border-mist">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-2">
              Programme Revenue Model
            </p>
            <p className="text-sm text-slate">
              Bio-fertilizer product sales (Stage 2), carbon credit revenue (Stage 3+),
              and service fees underpin long-term sustainability. These revenue streams are what
              make HISAGEN investable &mdash; they sit across all capital sources, not within any single one.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-parchment border border-mist">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-2">
              Evidence Flow
            </p>
            <p className="text-sm text-slate">
              Every grant dollar generates data that de-risks future capital. Grant-funded trials
              &rarr; published results &rarr; concessional debt accessible &rarr; impact investors
              engaged &rarr; commercial capital unlocked.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-600/70 mb-2">
              Social &amp; Environmental Benefits
            </p>
            <p className="text-sm text-slate">
              Crop yield improvements (+17&ndash;48%), soil biodiversity restoration,
              farmer income growth, and community food security. These outcomes demonstrate
              impact beyond commercial returns &mdash; central to grant eligibility and
              impact investor mandates.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOR-PROFIT CONSTRAINT (first thing Keir sees) ───── */}
      <div className="mt-8">
        <ForProfitConstraintBanner />
      </div>

      {/* ── PIPELINE OVERVIEW (all capital sources) ────────── */}
      <PipelineOverview />

      {/* ── GLOSSARY ──────────────────────────────────────────── */}
      <PipelineGlossary />

      {/* ── CAPITAL PATHWAYS ─────────────────────────────────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Capital Pathways
          </h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60">
            Process by Source
          </span>
        </div>

        {/* Tab bar */}
        <div className="flex overflow-x-auto border-b-2 border-mist mb-6 -mx-1">
          {[
            { id: "grants", label: "Grants & Philanthropy", status: "Active", statusClass: "bg-emerald-100 text-emerald-700" },
            { id: "debt", label: "Green Bonds & Debt", status: "Stage 2", statusClass: "bg-slate-100 text-slate-500" },
            { id: "equity", label: "Equity & VC", status: "Stage 2\u20133", statusClass: "bg-slate-100 text-slate-500" },
            { id: "impact", label: "Impact Investing", status: "Stage 2\u20133", statusClass: "bg-slate-100 text-slate-500" },
            { id: "blended", label: "Blended Finance", status: "Future", statusClass: "bg-slate-50 text-slate-400" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePathway(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 -mb-[2px] transition-colors ${
                activePathway === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-slate/60 hover:text-secondary hover:border-slate-200"
              }`}
            >
              {tab.label}
              <span className={`text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${tab.statusClass}`}>
                {tab.status}
              </span>
            </button>
          ))}
        </div>

        {/* ── Tab: Grants & Philanthropy ───────────────────── */}
        {activePathway === "grants" && (
          <div>
            <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-sm font-bold text-secondary mb-1">Grant Fundraising Process</h3>
              <p className="text-xs text-slate leading-relaxed">
                Pandion&rsquo;s 6-phase pre-award methodology for grant and philanthropic funding.
                This is HISAGEN&rsquo;s active capital pathway at Stage 1.
              </p>
            </div>

            <div className="flex items-center justify-between mb-4">
              {/* Phase progress bar */}
              <div className="flex items-center gap-1">
                {grantPhases.map((phase) => (
                  <div key={phase.number} className="flex items-center">
                    <div className={`w-6 h-1.5 rounded-full ${
                      phase.status === "complete" ? "bg-emerald-400" :
                      phase.status === "active" ? "bg-primary" :
                      phase.status === "in-progress" ? "bg-amber-400" :
                      phase.status === "foundation-ready" ? "bg-blue-400" :
                      "bg-slate-200"
                    }`} />
                    {phase.number < 6 && <div className="w-1" />}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="text-[10px] font-bold uppercase tracking-widest text-slate/50 hover:text-primary transition-colors"
                >
                  Expand all
                </button>
                <span className="text-slate/30">|</span>
                <button
                  onClick={collapseAll}
                  className="text-[10px] font-bold uppercase tracking-widest text-slate/50 hover:text-primary transition-colors"
                >
                  Collapse all
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {grantPhases.map((phase) => (
                <PhaseAccordion
                  key={phase.number}
                  phase={phase}
                  isOpen={openPhases.has(phase.number)}
                  onToggle={() => toggle(phase.number)}
                />
              ))}
            </div>

            {/* Post-award note */}
            <div className="mt-4 p-4 rounded-xl border border-dashed border-mist bg-parchment/30">
              <p className="text-xs text-slate/60 text-center">
                Phases 07&ndash;12 (Award &amp; Handover, Project Setup, Delivery Planning,
                Implementation, Reporting, Closeout) activate after first grant award.
              </p>
            </div>
          </div>
        )}

        {/* ── Tab: Green Bonds & Debt ─────────────────────── */}
        {activePathway === "debt" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-parchment/40 border border-mist">
              <h3 className="text-sm font-bold text-secondary mb-1">Concessional &amp; Commercial Debt</h3>
              <p className="text-xs text-slate leading-relaxed">
                Repayable capital at concessional or market rates. This pathway becomes viable when
                HISAGEN has 2&ndash;3 years of operational track record and audited financials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-mist bg-white p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-100 text-amber-700">
                    Stage 2 Opportunity
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-1">Common Fund for Commodities</h4>
                <p className="text-xs text-slate leading-relaxed mb-3">
                  Concessional loans up to $1.5M (regular) or $300K (fast-track). CFC&rsquo;s 2025
                  Annual Report lists bio-fertilizer pilots in Kenya/Uganda in their pipeline.
                </p>
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                  <p className="text-[10px] text-amber-800">
                    <strong>Why not now:</strong> CFC requires 3+ year track record and audited financials.
                    HISAGEN is ineligible at Stage 1. Originally assessed as a grant funder &mdash;
                    reclassified after verifying CFC&rsquo;s instrument type (loans, not grants).
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-5">
                <h4 className="text-xs font-bold text-slate-500 mb-2">Typical Debt Process</h4>
                <div className="space-y-3">
                  {[
                    { step: "01", label: "Credit Application", desc: "Submit financial history, business plan, projections" },
                    { step: "02", label: "Due Diligence", desc: "Lender reviews financials, operations, governance" },
                    { step: "03", label: "Term Negotiation", desc: "Interest rate, tenure, covenants, collateral" },
                    { step: "04", label: "Disbursement", desc: "Staged release against milestones" },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5">{s.step}</span>
                      <div>
                        <p className="text-xs font-bold text-secondary">{s.label}</p>
                        <p className="text-[11px] text-slate/70">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-mist bg-white">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-2">
                Readiness Triggers
              </p>
              <div className="flex flex-wrap gap-3">
                {["3+ years operational", "Audited financials", "Revenue track record", "Proven unit economics"].map((trigger) => (
                  <span key={trigger} className="text-xs px-3 py-1.5 rounded-full bg-parchment border border-mist text-slate">
                    {trigger}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Tab: Equity & VC ────────────────────────────── */}
        {activePathway === "equity" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-parchment/40 border border-mist">
              <h3 className="text-sm font-bold text-secondary mb-1">Equity &amp; Venture Capital</h3>
              <p className="text-xs text-slate leading-relaxed">
                Ownership-based capital for scaling the HISAGEN model. Keir and Scott are leading
                early seed conversations alongside the grant track.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border-2 border-secondary/20 bg-white p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary">
                    In Progress
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2">What&rsquo;s Happening</h4>
                <ul className="space-y-2 text-xs text-slate">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">&bull;</span>
                    <span>Initial investor pitch materials developed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">&bull;</span>
                    <span>Angel/seed conversations active (Keir &amp; Scott leading)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">&bull;</span>
                    <span>Commercial framing uses same evidence base as grant track</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-[10px] text-primary font-medium">
                    This is Keir &amp; Scott&rsquo;s domain. Grant evidence strengthens the investor
                    narrative &mdash; every grant milestone de-risks the commercial case.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-5">
                <h4 className="text-xs font-bold text-slate-500 mb-2">Typical Seed / VC Process</h4>
                <div className="space-y-3">
                  {[
                    { step: "01", label: "Pitch Deck &amp; Vision", desc: "Problem, solution, market size, team, ask" },
                    { step: "02", label: "Investor Outreach", desc: "Warm intros, pitch events, accelerators" },
                    { step: "03", label: "Due Diligence", desc: "Financials, legal, IP, team background" },
                    { step: "04", label: "Term Sheet", desc: "Valuation, equity %, board seats, rights" },
                    { step: "05", label: "Close &amp; Deploy", desc: "Legal completion, capital deployment" },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5">{s.step}</span>
                      <div>
                        <p className="text-xs font-bold text-secondary" dangerouslySetInnerHTML={{ __html: s.label }} />
                        <p className="text-[11px] text-slate/70">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-mist bg-white">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-2">
                How Grant Evidence Feeds the Investor Case
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                {[
                  { grant: "NARO yield data (+17\u201348%)", investor: "Market validation" },
                  { grant: "Farmer income improvement", investor: "Unit economics proof" },
                  { grant: "5,000 ha operational", investor: "Scalability evidence" },
                ].map((item) => (
                  <div key={item.grant} className="flex items-center gap-2 text-xs">
                    <span className="text-slate">{item.grant}</span>
                    <span className="text-primary font-bold">&rarr;</span>
                    <span className="font-medium text-secondary">{item.investor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 border-dashed border-amber-200 bg-amber-50/50">
              <h4 className="text-xs font-bold text-amber-800 mb-2">For Discussion: Keir&rsquo;s Seed Funding Approach</h4>
              <p className="text-xs text-amber-700 leading-relaxed mb-3">
                Keir and Scott are actively exploring seed funding. To align the grant and equity tracks,
                it would be helpful to capture:
              </p>
              <ul className="space-y-1 text-xs text-amber-700">
                <li>&bull; Target raise amount and timeline</li>
                <li>&bull; Investor profile (impact, ag-tech, climate, generalist?)</li>
                <li>&bull; Current conversations and warm connections</li>
                <li>&bull; How grant milestones map to investor triggers</li>
                <li>&bull; Entity structure for investment (USA Inc. or new vehicle?)</li>
              </ul>
            </div>
          </div>
        )}

        {/* ── Tab: Impact Investing ───────────────────────── */}
        {activePathway === "impact" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-parchment/40 border border-mist">
              <h3 className="text-sm font-bold text-secondary mb-1">Impact Investing</h3>
              <p className="text-xs text-slate leading-relaxed">
                Capital seeking measurable social and environmental impact alongside financial return.
                HISAGEN&rsquo;s dual mission (farmer livelihoods + climate adaptation) aligns strongly
                with impact mandates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-mist bg-white p-5">
                <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
                  Pipeline Opportunities
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-bold text-secondary">Mulago Foundation</p>
                      <span className="text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 border border-emerald-200">
                        For-profit eligible
                      </span>
                    </div>
                    <p className="text-xs text-primary font-medium mb-1">$100K fellowship + potential $340K portfolio</p>
                    <p className="text-[11px] text-slate leading-relaxed">
                      Explicitly funds for-profits. Referral-sourced only (no direct applications). Aug&ndash;Oct cycle.
                      ~60% of fellows convert to long-term portfolio.
                    </p>
                  </div>
                  <div className="border-t border-mist pt-4">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-bold text-slate-400 line-through">Rockefeller Foundation Innovation Lab</p>
                      <span className="text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-red-100 text-red-600 border border-red-200">
                        Ineligible
                      </span>
                    </div>
                    <p className="text-xs text-slate/50 font-medium mb-1">$100K first round, follow-on to $2.5M</p>
                    <p className="text-[11px] text-slate/50 leading-relaxed">
                      Nonprofit/community organisations only. Previously listed as Tier 2 opportunity &mdash;
                      ineligible for HISAGEN&rsquo;s for-profit entities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-5">
                <h4 className="text-xs font-bold text-slate-500 mb-2">Typical Impact Investment Process</h4>
                <div className="space-y-3">
                  {[
                    { step: "01", label: "Impact Thesis Alignment", desc: "Does the fund's theory of change match HISAGEN's?" },
                    { step: "02", label: "Expression of Interest", desc: "Impact framework, financial model, team" },
                    { step: "03", label: "Impact Due Diligence", desc: "Impact measurement plan, SDG alignment, additionality" },
                    { step: "04", label: "Financial Due Diligence", desc: "Revenue model, unit economics, projections" },
                    { step: "05", label: "Investment Committee", desc: "Both impact and financial case reviewed" },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5">{s.step}</span>
                      <div>
                        <p className="text-xs font-bold text-secondary">{s.label}</p>
                        <p className="text-[11px] text-slate/70">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-mist bg-white">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-2">
                HISAGEN&rsquo;s Impact Alignment
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["SDG 1: No Poverty", "SDG 2: Zero Hunger", "SDG 13: Climate Action", "SDG 15: Life on Land"].map((sdg) => (
                  <span key={sdg} className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
                    {sdg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Tab: Blended Finance ────────────────────────── */}
        {activePathway === "blended" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-parchment/40 border border-mist">
              <h3 className="text-sm font-bold text-secondary mb-1">Blended Finance</h3>
              <p className="text-xs text-slate leading-relaxed">
                Structures combining concessional and commercial capital to de-risk investment and
                mobilise private capital at scale. Becomes viable once HISAGEN has a track record
                that enables layered financing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-mist bg-white p-5">
                <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
                  Pipeline Opportunity
                </h4>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-slate-400">Climate Finance Lab</p>
                  <span className="text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                    Deprioritised
                  </span>
                </div>
                <p className="text-xs text-slate/60 font-medium mb-1">$150,000 &ndash; $250,000 (milestone-based)</p>
                <p className="text-[11px] text-slate leading-relaxed mb-3">
                  Accepts for-profit applicants but funds <strong>financial instruments</strong>, not
                  projects or operations. Misaligned unless HISAGEN proposes a blended finance vehicle.
                  2026 cycle closed (Nov 2025 deadline).
                </p>
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                  <p className="text-[10px] text-amber-800">
                    <strong>Key barrier:</strong> Requires financial instrument framing &mdash;
                    this is a stretch at Stage 1. Could become viable at Stage 2 when commercial
                    revenue streams are established.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-5">
                <h4 className="text-xs font-bold text-slate-500 mb-2">How Blended Finance Works</h4>
                <div className="space-y-4">
                  {[
                    { layer: "First-Loss Capital", source: "Grants / DFIs", role: "Absorbs initial risk, protecting other investors" },
                    { layer: "Concessional Debt", source: "Development banks", role: "Below-market rate, patient capital" },
                    { layer: "Commercial Capital", source: "Private investors", role: "Market-rate return, de-risked by layers above" },
                  ].map((l) => (
                    <div key={l.layer} className="p-3 rounded-lg bg-white border border-slate-100">
                      <p className="text-xs font-bold text-secondary">{l.layer}</p>
                      <p className="text-[10px] text-primary font-medium">{l.source}</p>
                      <p className="text-[11px] text-slate/70 mt-1">{l.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-mist bg-white">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-2">
                Readiness Triggers
              </p>
              <div className="flex flex-wrap gap-3">
                {["Proven revenue model", "Measurable impact data", "3+ year track record", "Multiple capital sources engaged"].map((trigger) => (
                  <span key={trigger} className="text-xs px-3 py-1.5 rounded-full bg-parchment border border-mist text-slate">
                    {trigger}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── STRUCTURAL ADVANTAGES ───────────────────────────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Structural Advantages
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Dual Entity Structure",
              desc: "HISAGEN USA Inc. unlocks US foundation access. HISAGEN Africa Ltd accesses African climate funds. Few organisations have both.",
            },
            {
              title: "Independent Validation",
              desc: "NARO trial data is third-party, peer-reviewable, and statistically significant. Not self-reported claims.",
            },
            {
              title: "Adaptation Narrative",
              desc: "HISAGEN&rsquo;s causal chain IS climate adaptation at the farm level. Aligns with the $55B/year adaptation finance gap.",
            },
            {
              title: "Policy Alignment",
              desc: "AU Kampala Declaration (2025), CAADP 2026&ndash;2035, AFSH Summit commitments all prioritise exactly this work.",
            },
          ].map((advantage) => (
            <div
              key={advantage.title}
              className="rounded-xl border border-mist bg-white p-6"
            >
              <h3 className="text-base font-bold text-secondary mb-2">
                {advantage.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed" dangerouslySetInnerHTML={{ __html: advantage.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── STRUCTURAL CONSIDERATIONS ───────────────────────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Structural Considerations
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-6 mb-6">
          <p className="text-sm font-bold text-amber-900 mb-2">The Nonprofit Gap</p>
          <p className="text-sm text-slate leading-relaxed">
            Both HISAGEN entities are for-profit limited companies. Of 22 funders researched,
            <strong> 8 are ineligible</strong> because they require nonprofit/NGO/501(c)(3) status.
            This is the single largest constraint on the current funding pipeline. The funders
            excluded are often the most accessible, lowest-barrier entry points for early-stage
            organisations.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/50 mb-4">
            Possible Mitigations &mdash; For Discussion with Keir
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-mist bg-white p-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <h3 className="text-base font-bold text-secondary mb-2">
                Establish a Charitable Entity
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-3">
                Set up a CIO (Charitable Incorporated Organisation) or CLG (Company Limited by
                Guarantee) to handle grant-eligible social impact work. This unlocks the 8
                currently ineligible funders.
              </p>
              <p className="text-xs text-slate/60 leading-relaxed">
                <strong>Consideration:</strong> Governance overhead, charity registration timeline
                (3&ndash;6 months), and need for independent trustees.
              </p>
            </div>
            <div className="rounded-xl border border-mist bg-white p-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <h3 className="text-base font-bold text-secondary mb-2">
                Partner with an Existing Nonprofit
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-3">
                Channel funds through an established nonprofit partner for social and environmental
                outcomes (farmer training, biodiversity monitoring, food security programmes).
                HISAGEN delivers the commercial layer; the partner holds the grant.
              </p>
              <p className="text-xs text-slate/60 leading-relaxed">
                <strong>Consideration:</strong> Requires finding the right partner with aligned
                mission, shared reporting, and trust. Indirect cost overhead.
              </p>
            </div>
            <div className="rounded-xl border border-mist bg-white p-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <h3 className="text-base font-bold text-secondary mb-2">
                Dual-Entity Strategy
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-3">
                Combine both approaches: for-profit entities handle commercial operations
                (bio-fertilizer sales, carbon credits), while a nonprofit entity or partner
                handles grant-eligible social impact work (farmer livelihoods, food security,
                biodiversity).
              </p>
              <p className="text-xs text-slate/60 leading-relaxed">
                <strong>Consideration:</strong> Most comprehensive but highest complexity.
                Common in AgTech &mdash; many successful organisations use this structure.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/30 p-6">
          <p className="text-sm font-bold text-emerald-800 mb-2">
            Why Social &amp; Environmental Benefits Matter Here
          </p>
          <p className="text-sm text-slate leading-relaxed">
            HISAGEN&rsquo;s crop yield improvements, soil biodiversity restoration, farmer income growth,
            and food security outcomes go beyond the commercial interests of HISAGEN Ltd. These are
            exactly the outcomes that grant funders want to see &mdash; and they justify a nonprofit
            partnership or charitable entity route. The stronger the evidence of social impact,
            the stronger the case for unlocking the 8 currently ineligible funders through a
            partner-led or dual-entity approach.
          </p>
        </div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────── */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Related
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/capital-continuum"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">
              Framework
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Capital Continuum
            </h3>
            <p className="text-xs text-slate mt-2">4-stage funding framework</p>
          </Link>

          <Link
            href="/grant-lifecycle"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">
              Methodology
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Grant Lifecycle
            </h3>
            <p className="text-xs text-slate mt-2">Full 12-phase delivery methodology</p>
          </Link>

          <Link
            href="/strategy"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">
              Foundation
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Mission &amp; Strategy
            </h3>
            <p className="text-xs text-slate mt-2">Vision, Theory of Change</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
