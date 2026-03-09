"use client";

import { useState } from "react";
import Link from "next/link";
import StageBreadcrumb from "../../../../components/StageBreadcrumb";
import {
  tier1Funders,
  tier2Funders,
  allCuratedFunders,
  applicationTimeline,
  landscapeStats,
} from "../../../../data/funding-landscape";
import type { CuratedFunder, FunderCategory } from "../../../../data/funding-landscape";

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

const categoryLabel: Record<FunderCategory, string> = {
  "climate-adaptation": "Climate Adaptation",
  "agricultural-food": "Agricultural & Food Security",
  "us-foundation": "US Foundation",
  "uk-trust": "UK Trust",
  accelerator: "Accelerator",
};

const categoryColor: Record<FunderCategory, string> = {
  "climate-adaptation": "bg-blue-100 text-blue-700",
  "agricultural-food": "bg-teal-100 text-teal-700",
  "us-foundation": "bg-purple-100 text-purple-700",
  "uk-trust": "bg-violet-100 text-violet-700",
  accelerator: "bg-orange-100 text-orange-700",
};

const urgencyColor: Record<string, string> = {
  urgent: "bg-red-100 text-red-700 border-red-200",
  high: "bg-amber-100 text-amber-700 border-amber-200",
  medium: "bg-emerald-100 text-emerald-700 border-emerald-200",
  low: "bg-slate-100 text-slate-600 border-slate-200",
};

function FunderDetailCard({ funder }: { funder: CuratedFunder }) {
  return (
    <div className="p-6 rounded-2xl border-2 border-emerald-500/20 bg-emerald-50/50">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-80 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                categoryColor[funder.category]
              }`}
            >
              {categoryLabel[funder.category]}
            </span>
          </div>
          <h3 className="text-lg font-bold text-secondary">{funder.name}</h3>
          <p className="text-sm text-slate mt-2">{funder.whyStrongFit}</p>
        </div>

        <div className="flex-1 grid gap-4 md:grid-cols-3">
          <div className="p-3 rounded-lg bg-white/60 border border-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">
              Grant Range
            </p>
            <p className="text-xs font-bold text-secondary">{funder.grantRange}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/60 border border-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">
              Apply Via
            </p>
            <p className="text-xs text-slate">{funder.applyVia}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/60 border border-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">
              Deadline
            </p>
            <p className="text-xs font-bold text-emerald-700">
              {funder.deadline || funder.deadlineNote || "TBC"}
            </p>
          </div>
        </div>
      </div>
      {funder.consideration && (
        <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-100">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-1">
            Note
          </p>
          <p className="text-xs text-amber-800">{funder.consideration}</p>
        </div>
      )}
      {funder.process && (
        <p className="mt-3 text-xs text-slate/70 italic">{funder.process}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────

export default function FunderLandscapePage() {
  const [activeFilter, setActiveFilter] = useState<"all" | FunderCategory>("all");

  const filteredTier1 =
    activeFilter === "all"
      ? tier1Funders
      : tier1Funders.filter((f) => f.category === activeFilter);

  const filteredTier2 =
    activeFilter === "all"
      ? tier2Funders
      : tier2Funders.filter((f) => f.category === activeFilter);

  const categories = Object.keys(categoryLabel) as FunderCategory[];

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Funder Landscape"
        trail={[
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
          { label: "Funding Tracker", href: "/stage-1/funding" },
          { label: "Funder Landscape" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 1 Funding
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Funder Landscape &amp; Prospect Mapping
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          12 curated funders from 40+ researched, scored across strategic fit,
          geographic alignment, thematic match, grant size, accessibility, and
          relationship pathways.
        </p>
        <p className="mt-2 text-xs text-slate/60">Last updated: March 9, 2026</p>
      </section>

      {/* Funding Roadmap Banner */}
      <section className="mt-8">
        <Link
          href="/funding-roadmap"
          className="group flex items-center justify-between p-5 rounded-xl border-2 border-primary/30 bg-primary/5 hover:border-primary hover:shadow-md transition-all"
        >
          <div>
            <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">
              View Full Capital Strategy &amp; Roadmap
            </p>
            <p className="text-xs text-slate mt-1">
              Application timeline, two-track mapping, structural advantages,
              and funder pipeline overview
            </p>
          </div>
          <svg
            className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors shrink-0 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </section>

      {/* Quick Stats */}
      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        <div className="p-4 rounded-xl border border-mist bg-white">
          <p className="text-3xl font-bold text-secondary">
            {landscapeStats.totalResearched}+
          </p>
          <p className="text-xs uppercase tracking-widest text-slate/60 mt-1">
            Researched
          </p>
        </div>
        <div className="p-4 rounded-xl border border-mist bg-white">
          <p className="text-3xl font-bold text-secondary">
            {landscapeStats.totalShortlisted}
          </p>
          <p className="text-xs uppercase tracking-widest text-slate/60 mt-1">
            Shortlisted
          </p>
        </div>
        <div className="p-4 rounded-xl border-2 border-primary/30 bg-primary/5">
          <p className="text-3xl font-bold text-primary">
            {landscapeStats.tier1Count}
          </p>
          <p className="text-xs uppercase tracking-widest text-primary/70 mt-1">
            Tier 1 Priority
          </p>
        </div>
        <div className="p-4 rounded-xl border-2 border-accent/30 bg-accent/5">
          <p className="text-3xl font-bold text-accent">
            {landscapeStats.tier2Count}
          </p>
          <p className="text-xs uppercase tracking-widest text-accent/70 mt-1">
            Tier 2 Strong Fit
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mt-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${
              activeFilter === "all"
                ? "bg-secondary text-white"
                : "bg-white border border-mist text-slate hover:border-secondary/30"
            }`}
          >
            All ({allCuratedFunders.length})
          </button>
          {categories.map((cat) => {
            const count = allCuratedFunders.filter(
              (f) => f.category === cat
            ).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeFilter === cat
                    ? "bg-secondary text-white"
                    : "bg-white border border-mist text-slate hover:border-secondary/30"
                }`}
              >
                {categoryLabel[cat]} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Tier 1: Priority Pursue */}
      {filteredTier1.length > 0 && (
        <section className="mt-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest">
              Tier 1
            </span>
            <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">
              Priority Pursue
            </h2>
            <div className="h-px flex-1 bg-mist" />
            <span className="text-xs text-slate/60">
              {landscapeStats.tier1PipelineValue}
            </span>
          </div>
          <p className="text-sm text-slate mb-6">
            Scored 4.0+ across all criteria. Active pursuit recommended.
          </p>

          <div className="space-y-4">
            {filteredTier1.map((funder) => (
              <FunderDetailCard key={funder.id} funder={funder} />
            ))}
          </div>
        </section>
      )}

      {/* Tier 2: Strong Fit */}
      {filteredTier2.length > 0 && (
        <section className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest">
              Tier 2
            </span>
            <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">
              Strong Fit
            </h2>
            <div className="h-px flex-1 bg-mist" />
            <span className="text-xs text-slate/60">
              {landscapeStats.tier2PipelineValue}
            </span>
          </div>
          <p className="text-sm text-slate mb-6">
            Good alignment but barriers in accessibility, timing, or
            relationship. Monitor and prepare.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredTier2.map((funder) => (
              <div
                key={funder.id}
                className="p-5 rounded-xl border-2 border-accent/20 bg-accent/5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                      categoryColor[funder.category]
                    }`}
                  >
                    {categoryLabel[funder.category]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-secondary">
                  {funder.name}
                </h3>
                <p className="text-xs text-slate mt-2 leading-relaxed">
                  {funder.whyStrongFit}
                </p>
                <div className="mt-3 pt-3 border-t border-accent/20">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">
                    {funder.grantRange}
                  </p>
                  <p className="text-xs text-slate mt-1">
                    {funder.deadlineNote || funder.deadline || "TBC"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Application Timeline */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">
            Application Timeline
          </h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-xs text-slate/60">Mar&ndash;Sep 2026</span>
        </div>

        <div className="rounded-2xl border border-mist bg-white overflow-hidden">
          <div className="divide-y divide-mist">
            {applicationTimeline.map((entry, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 px-6 py-4 hover:bg-parchment/30 transition-colors"
              >
                <div className="w-24 flex-shrink-0">
                  <p className="text-sm font-bold text-secondary">
                    {entry.when}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate">
                    <strong className="text-secondary">{entry.what}</strong>
                    <span className="text-slate/60">
                      {" "}
                      &mdash; {entry.funder}
                    </span>
                  </p>
                </div>
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${
                    urgencyColor[entry.urgency]
                  }`}
                >
                  {entry.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Kind Partner Contributions (safe summary - no rates) */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">
            In-Kind Partner Contributions
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="p-6 rounded-2xl border border-mist bg-white">
          <p className="text-sm text-slate mb-6">
            Match funding from partner contributions strengthens grant
            applications and demonstrates commitment.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-xl bg-green-50 border border-green-200">
              <h3 className="text-sm font-bold text-green-800 mb-2">
                Locus AG
              </h3>
              <ul className="text-xs text-green-700 space-y-1">
                <li>&bull; Rhizolizer products for trials</li>
                <li>&bull; Manufacturing equipment access</li>
                <li>&bull; Technical expertise &amp; IP licensing</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
              <h3 className="text-sm font-bold text-orange-800 mb-2">NARO</h3>
              <ul className="text-xs text-orange-700 space-y-1">
                <li>&bull; Research infrastructure &amp; staff time</li>
                <li>&bull; Field trial sites (4 regions)</li>
                <li>&bull; Scientific validation &amp; credibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Represented */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">
            Categories Represented
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {landscapeStats.categories.map((cat) => (
            <div
              key={cat}
              className="p-4 rounded-lg border border-mist bg-white"
            >
              <p className="text-sm font-bold text-secondary">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">
            Related
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/funding-roadmap"
            className="group p-5 rounded-xl border-2 border-primary/20 bg-primary/5 hover:border-primary hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Strategy
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Funding Roadmap
            </h3>
            <p className="text-xs text-slate mt-2">
              Full capital strategy &amp; timeline
            </p>
          </Link>

          <Link
            href="/stage-1/funding/opportunities"
            className="group p-5 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">
              Pipeline
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Opportunity Tracker
            </h3>
            <p className="text-xs text-slate mt-2">
              Active opportunity records
            </p>
          </Link>

          <Link
            href="/grant-lifecycle"
            className="group p-5 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">
              Methodology
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Grant Lifecycle
            </h3>
            <p className="text-xs text-slate mt-2">
              11-phase delivery methodology
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
