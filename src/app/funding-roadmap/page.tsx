"use client";

import { useState } from "react";
import Link from "next/link";
import {
  tier1Funders,
  tier2Funders,
  applicationTimeline,
  landscapeStats,
} from "../../data/funding-landscape";
import type { CuratedFunder } from "../../data/funding-landscape";

// ─────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────

type PhaseStatus = "complete" | "active" | "in-progress" | "not-started" | "foundation-ready";

interface Phase {
  number: number;
  name: string;
  status: PhaseStatus;
  statusLabel: string;
  description: string;
}

const phases: Phase[] = [
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
    description: "Funder identification, scoring, tiering, and category mapping across 4 priority categories.",
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
    name: "Due Diligence",
    status: "not-started",
    statusLabel: "Not Started",
    description: "Eligibility checks, compliance verification, and go/no-go decisions per funder.",
  },
  {
    number: 6,
    name: "Proposal Development",
    status: "foundation-ready",
    statusLabel: "Foundation Ready",
    description: "Specific proposals tailored per funder, based on CfS and engagement outcomes.",
  },
];

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
  accelerator: "Accelerator",
};

const urgencyColor: Record<string, string> = {
  urgent: "bg-red-100 text-red-700 border-red-200",
  high: "bg-amber-100 text-amber-700 border-amber-200",
  medium: "bg-emerald-100 text-emerald-700 border-emerald-200",
  low: "bg-slate-100 text-slate-600 border-slate-200",
};

// ─────────────────────────────────────────────────────────────
// Accordion Section Components
// ─────────────────────────────────────────────────────────────

function FunderCardCompact({ funder }: { funder: CuratedFunder }) {
  return (
    <div className="rounded-xl border border-mist bg-white p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <span
          className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary"
          dangerouslySetInnerHTML={{ __html: categoryLabel[funder.category] || funder.category }}
        />
        <span className="text-xs font-bold text-accent">{funder.grantRange}</span>
      </div>
      <h4 className="text-sm font-bold text-secondary mb-1">{funder.name}</h4>
      <p className="text-xs text-slate leading-relaxed mb-3">{funder.whyStrongFit}</p>
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
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg border border-mist bg-white text-center">
          <p className="text-2xl font-bold text-secondary">{landscapeStats.totalResearched}+</p>
          <p className="text-[10px] uppercase tracking-widest text-slate/60 mt-1">Researched</p>
        </div>
        <div className="p-3 rounded-lg border border-mist bg-white text-center">
          <p className="text-2xl font-bold text-secondary">{landscapeStats.totalShortlisted}</p>
          <p className="text-[10px] uppercase tracking-widest text-slate/60 mt-1">Shortlisted</p>
        </div>
        <div className="p-3 rounded-lg border-2 border-primary/30 bg-primary/5 text-center">
          <p className="text-2xl font-bold text-primary">{landscapeStats.tier1Count}</p>
          <p className="text-[10px] uppercase tracking-widest text-primary/70 mt-1">Tier 1 Priority</p>
        </div>
        <div className="p-3 rounded-lg border border-mist bg-white text-center">
          <p className="text-2xl font-bold text-secondary">{landscapeStats.totalPipelineValue}</p>
          <p className="text-[10px] uppercase tracking-widest text-slate/60 mt-1">Pipeline Value</p>
        </div>
      </div>

      {/* Tier 1 Funders */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h5 className="text-xs font-bold text-secondary uppercase tracking-widest">
            Tier 1: Priority Pursue
          </h5>
          <span className="text-xs text-slate/60">{landscapeStats.tier1PipelineValue}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tier1Funders.map((funder) => (
            <FunderCardCompact key={funder.id} funder={funder} />
          ))}
        </div>
      </div>

      {/* Tier 2 Funders */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <h5 className="text-xs font-bold text-secondary uppercase tracking-widest">
            Tier 2: Strong Fit
          </h5>
          <span className="text-xs text-slate/60">{landscapeStats.tier2PipelineValue}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {tier2Funders.map((funder) => (
            <div key={funder.id} className="rounded-lg border border-mist bg-white p-4">
              <h5 className="text-sm font-bold text-secondary mb-1">{funder.shortName}</h5>
              <p className="text-xs text-slate mb-2">{funder.grantRange}</p>
              <p className="text-[11px] text-slate/70 leading-relaxed">{funder.whyStrongFit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Phase3Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        Master Case for Support drafted (8 sections, ~23,000 words) plus Foundation Summary
        for quick-read format. Ready for Keir review and funder adaptation.
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
          starting with CFH Foundation concept note and AAAP consortium approach.
        </p>
      </div>
    </div>
  );
}

function Phase4Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        Approach strategy defined for all 5 Tier 1 funders. 3 are open-application
        (no warm path needed). Warm paths identified for consortium opportunities.
      </p>
      <div className="space-y-2">
        {[
          { funder: "CFH Foundation", approach: "Open application", note: "Online portal. Most accessible. Jun 15 concept note.", urgency: "medium" as const },
          { funder: "AFCIA", approach: "Via UNDP Uganda", note: "Contact UNDP country office. Keir/Daniel to lead.", urgency: "high" as const },
          { funder: "AAAP (GCA)", approach: "Consortium (NARO)", note: "EUR 500K min requires consortium. NARO is existing relationship.", urgency: "high" as const },
          { funder: "Echoing Green", approach: "Open application", note: "Fellowship. Opens Sep 2026. Via HISAGEN USA.", urgency: "low" as const },
          { funder: "AfDB TAAT", approach: "Monitor for CFP", note: "No open route currently. Perfect mandate alignment.", urgency: "low" as const },
        ].map((item) => (
          <div key={item.funder} className="flex items-center gap-4 p-3 rounded-lg border border-mist bg-white">
            <div className="flex-1">
              <p className="text-sm font-bold text-secondary">{item.funder}</p>
              <p className="text-xs text-slate" dangerouslySetInnerHTML={{ __html: item.note }} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shrink-0 bg-slate-100 text-slate-600">
              {item.approach}
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border shrink-0 ${urgencyColor[item.urgency]}`}>
              {item.urgency}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
        <h5 className="text-xs font-bold text-amber-800 mb-2">Keir Action Items</h5>
        <ul className="space-y-1 text-xs text-amber-700">
          <li>&bull; Contact UNDP Uganda re: AFCIA timing and process</li>
          <li>&bull; Confirm NARO willingness for AAAP consortium</li>
          <li>&bull; Review CfS funding tier amounts</li>
          <li>&bull; Provide Uganda team contacts for in-country coordination</li>
          <li>&bull; Confirm Locus AG letter of support availability</li>
        </ul>
      </div>
    </div>
  );
}

function Phase5Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        Eligibility checks will be run against each Tier 1 funder before proposal work begins.
        This phase produces a go/no-go decision for each opportunity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { check: "Entity Eligibility", desc: "Which HISAGEN entity (USA or Africa) is eligible to apply?" },
          { check: "Compliance Requirements", desc: "Registration, audit history, governance standards met?" },
          { check: "Capacity Assessment", desc: "Can HISAGEN deliver the proposed scope with current team?" },
        ].map((item) => (
          <div key={item.check} className="p-4 rounded-lg border border-dashed border-slate-200 bg-slate-50/50">
            <h5 className="text-xs font-bold text-slate-500 mb-1">{item.check}</h5>
            <p className="text-[11px] text-slate/70">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate/60 italic">
        Planned for Q2 2026, prioritising CFH Foundation and AAAP first.
      </p>
    </div>
  );
}

function Phase6Content() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate leading-relaxed">
        V0 Grant Proposal exists as a comprehensive base document. Funder-specific proposals
        will be developed from the CfS and adapted using the audience guide methodology.
      </p>

      {/* Application Timeline */}
      <div>
        <h5 className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
          Application Timeline
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

      <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
        <p className="text-xs text-amber-800">
          <strong>Most Urgent:</strong> AFCIA &mdash; contact UNDP Uganda to confirm timing and process.
          AAAP concept note due May 15, 2026. CFH Foundation concept note due June 15, 2026.
        </p>
      </div>
    </div>
  );
}

const phaseContentMap: Record<number, () => React.ReactNode> = {
  1: Phase1Content,
  2: Phase2Content,
  3: Phase3Content,
  4: Phase4Content,
  5: Phase5Content,
  6: Phase6Content,
};

// ─────────────────────────────────────────────────────────────
// Accordion Component
// ─────────────────────────────────────────────────────────────

function PhaseAccordion({ phase, isOpen, onToggle }: { phase: Phase; isOpen: boolean; onToggle: () => void }) {
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

  const expandAll = () => setOpenPhases(new Set([1, 2, 3, 4, 5, 6]));
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
                  <span>&rarr; {landscapeStats.totalPipelineValue} pipeline value</span>
                  <span>&rarr; 5 Tier 1 funders identified</span>
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
                  <span>&rarr; Mulago Foundation ($100K fellowship + $340K portfolio)</span>
                  <span>&rarr; Rockefeller FILab ($100K first round, follow-on to $2.5M)</span>
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

        {/* Programme Revenue Model + Evidence Flow */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </section>

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
                {phases.map((phase) => (
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
              {phases.map((phase) => (
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
              {/* Current state */}
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

              {/* Typical VC process */}
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

            {/* How grant evidence feeds VC */}
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

            {/* Placeholder for Keir input */}
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
              {/* Relevant funders from pipeline */}
              <div className="rounded-xl border border-mist bg-white p-5">
                <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
                  Pipeline Opportunities (Tier 2)
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-secondary">Mulago Foundation</p>
                    <p className="text-xs text-primary font-medium mb-1">$100K fellowship + potential $340K portfolio</p>
                    <p className="text-[11px] text-slate leading-relaxed">
                      Referral-sourced only (no direct applications). Aug&ndash;Oct cycle.
                      ~60% of fellows convert to long-term portfolio. Excellent fit for HISAGEN&rsquo;s
                      profile but requires network building.
                    </p>
                  </div>
                  <div className="border-t border-mist pt-4">
                    <p className="text-sm font-bold text-secondary">Rockefeller Foundation Innovation Lab</p>
                    <p className="text-xs text-primary font-medium mb-1">$100K first round, follow-on to $2.5M</p>
                    <p className="text-[11px] text-slate leading-relaxed">
                      Food security innovation focus. Q3 2026 expected opening. Strong growth
                      ladder if initial funding secured.
                    </p>
                  </div>
                </div>
              </div>

              {/* Typical impact investing process */}
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
                  Pipeline Opportunity (Tier 2)
                </h4>
                <p className="text-sm font-bold text-secondary">Climate Finance Lab</p>
                <p className="text-xs text-primary font-medium mb-1">$150,000 &ndash; $250,000 (milestone-based)</p>
                <p className="text-[11px] text-slate leading-relaxed mb-3">
                  Viable if bio-fertilizer distribution is structured as an investable financial
                  instrument with carbon credit upside. Requires blended finance mechanism framing,
                  not a standard project grant application.
                </p>
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                  <p className="text-[10px] text-amber-800">
                    <strong>Key barrier:</strong> Requires financial instrument framing &mdash;
                    this is a stretch at Stage 1 but becomes natural at Stage 2 when commercial
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
