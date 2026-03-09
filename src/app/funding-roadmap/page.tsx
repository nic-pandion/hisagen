import Link from "next/link";
import {
  tier1Funders,
  tier2Funders,
  applicationTimeline,
  landscapeStats,
} from "../../data/funding-landscape";
import type { CuratedFunder } from "../../data/funding-landscape";
import StageBreadcrumb from "../../components/StageBreadcrumb";

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

const categoryLabel: Record<string, string> = {
  "climate-adaptation": "Climate Adaptation",
  "agricultural-food": "Agricultural & Food Security",
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

function FunderCard({ funder }: { funder: CuratedFunder }) {
  return (
    <div className="rounded-xl border border-mist bg-white p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary">
          {categoryLabel[funder.category] || funder.category}
        </span>
        <span className="text-sm font-bold text-accent">{funder.grantRange}</span>
      </div>
      <h3 className="text-base font-bold text-secondary mb-2">{funder.name}</h3>
      <p className="text-sm text-slate leading-relaxed mb-4">{funder.whyStrongFit}</p>
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-mist">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate/50 mb-0.5">Apply via</p>
          <p className="text-xs text-secondary font-medium">{funder.applyVia}</p>
        </div>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate/50 mb-0.5">Deadline</p>
          <p className="text-xs text-secondary font-medium">{funder.deadline || funder.deadlineNote || "TBC"}</p>
        </div>
      </div>
      {funder.consideration && (
        <div className="mt-3 p-2 rounded-lg bg-amber-50 border border-amber-100">
          <p className="text-[10px] text-amber-800">{funder.consideration}</p>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────

export default function FundingRoadmapPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Funding Roadmap"
        trail={[{ label: "Capital Strategy" }]}
      />

      {/* ── SECTION 1: Hero ──────────────────────────────────── */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
            Late Stage 1: Incubation
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
            Capital Strategy &amp; Funder Landscape
          </span>
        </div>

        <h1 className="text-4xl font-bold text-secondary leading-tight">
          HISAGEN Capital Strategy
        </h1>
        <p className="mt-4 text-lg text-slate leading-relaxed max-w-3xl">
          From 40+ funders researched, 12 have been curated based on strategic fit,
          geographic alignment, thematic match, and accessibility. This roadmap
          maps grant capital (active) and commercial capital (future) across the
          Capital Continuum.
        </p>

        <div className="mt-8 p-6 rounded-xl bg-white border border-mist">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">
                Priority Funders
              </p>
              <p className="text-3xl font-bold text-primary">
                {landscapeStats.tier1Count}
              </p>
              <p className="text-xs text-slate mt-1">Tier 1 &mdash; Active Pursuit</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">
                Pipeline Value
              </p>
              <p className="text-3xl font-bold text-secondary">
                {landscapeStats.totalPipelineValue}
              </p>
              <p className="text-xs text-slate mt-1">Combined Tier 1 + Tier 2</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">
                Timeline
              </p>
              <p className="text-3xl font-bold text-secondary">Mar&ndash;Sep 2026</p>
              <p className="text-xs text-slate mt-1">Active application window</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Where HISAGEN Sits ────────────────────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Where HISAGEN Sits
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="rounded-2xl border border-mist bg-white p-8">
          {/* Capital Continuum visual */}
          <div className="flex items-center gap-0 mb-8 overflow-x-auto">
            {[
              { label: "Stage 1", sub: "Incubation", active: true },
              { label: "Stage 2", sub: "Implementation", active: false },
              { label: "Stage 3", sub: "Stabilisation", active: false },
              { label: "Stage 4", sub: "Maturity", active: false },
            ].map((stage, idx) => (
              <div key={stage.label} className="flex items-center">
                {idx > 0 && (
                  <div className="w-8 h-0.5 bg-mist" />
                )}
                <div
                  className={`flex-shrink-0 rounded-xl px-5 py-3 border-2 text-center ${
                    stage.active
                      ? "border-primary bg-primary/10"
                      : "border-mist bg-parchment/30"
                  }`}
                >
                  <p className={`text-xs font-bold uppercase tracking-widest ${
                    stage.active ? "text-primary" : "text-slate/40"
                  }`}>
                    {stage.label}
                  </p>
                  <p className={`text-[10px] ${
                    stage.active ? "text-primary/70" : "text-slate/30"
                  }`}>
                    {stage.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200">
              <h3 className="text-sm font-bold text-emerald-800 mb-3">
                What&rsquo;s Validated
              </h3>
              <ul className="space-y-2 text-sm text-emerald-700">
                <li className="flex gap-2">
                  <span className="text-emerald-500">&#10003;</span>
                  NARO 5-zone trial data (statistically significant)
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">&#10003;</span>
                  Independent third-party validation (peer-reviewable)
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">&#10003;</span>
                  Dual entity structure (USA + Africa)
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">&#10003;</span>
                  Locus AG technical partnership confirmed
                </li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
              <h3 className="text-sm font-bold text-amber-800 mb-3">
                What&rsquo;s Needed (Stage 1 &rarr; 2)
              </h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li className="flex gap-2">
                  <span className="text-amber-400">&#9675;</span>
                  Operational pilot at scale (farmer training + distribution)
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">&#9675;</span>
                  Farmer livelihood impact data (income, yield, resilience)
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">&#9675;</span>
                  MRV pathway design for future carbon verification
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">&#9675;</span>
                  First grant award and delivery track record
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Two Tracks, One Evidence Base ──────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Two Tracks, One Evidence Base
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <h3 className="text-lg font-bold text-secondary">Grant Track</h3>
              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                Active
              </span>
            </div>
            <p className="text-sm text-slate leading-relaxed mb-4">
              Non-repayable capital for building evidence, operational track
              record, and farmer impact data. This is the standard pathway for
              nature-based programmes at HISAGEN&rsquo;s maturity level.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <span>&#8594;</span> 12 curated funders ($670K&ndash;$9.7M pipeline)
              </div>
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <span>&#8594;</span> Active applications Mar&ndash;Sep 2026
              </div>
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <span>&#8594;</span> Farmer livelihoods lead, adaptation narrative
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-mist bg-white p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <h3 className="text-lg font-bold text-secondary">Commercial Track</h3>
              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                Mapped
              </span>
            </div>
            <p className="text-sm text-slate leading-relaxed mb-4">
              Revenue mechanisms (product sales, carbon credits) are future, not
              current. Mapped for Stage 2+ readiness but not actively pursued
              until grant-funded evidence is in place.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate font-medium">
                <span>&#8594;</span> Bio-fertilizer product sales (Stage 2)
              </div>
              <div className="flex items-center gap-2 text-xs text-slate font-medium">
                <span>&#8594;</span> Carbon credit revenue (Stage 3+)
              </div>
              <div className="flex items-center gap-2 text-xs text-slate font-medium">
                <span>&#8594;</span> Impact investment (Stage 2-3)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-5 rounded-xl bg-parchment border border-mist text-center">
          <p className="text-sm text-slate">
            <strong className="text-secondary">Evidence flow:</strong> Every grant dollar generates data that
            de-risks future investment. Grant-funded trials &rarr; published results &rarr;
            commercial capital unlocked.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: Priority Funder Landscape ─────────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Priority Funder Landscape
          </h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            {landscapeStats.totalShortlisted} Curated
          </span>
        </div>

        {/* Tier 1 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">
              Tier 1: Priority Pursue
            </h3>
            <span className="text-xs text-slate/60">
              {landscapeStats.tier1PipelineValue}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tier1Funders.map((funder) => (
              <FunderCard key={funder.id} funder={funder} />
            ))}
          </div>
        </div>

        {/* Tier 2 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">
              Tier 2: Strong Fit
            </h3>
            <span className="text-xs text-slate/60">
              {landscapeStats.tier2PipelineValue}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {tier2Funders.map((funder) => (
              <div
                key={funder.id}
                className="rounded-lg border border-mist bg-white p-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-bold text-secondary">{funder.shortName}</h4>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-accent/10 text-accent">
                    {categoryLabel[funder.category] || funder.category}
                  </span>
                </div>
                <p className="text-xs text-slate mb-2">{funder.grantRange}</p>
                <p className="text-[11px] text-slate/70 leading-relaxed">
                  {funder.whyStrongFit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Application Timeline ──────────────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Application Timeline
          </h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-xs text-slate/60">Mar&ndash;Sep 2026</span>
        </div>

        <div className="rounded-2xl border border-mist bg-white overflow-hidden">
          <div className="divide-y divide-mist">
            {applicationTimeline.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-6 px-6 py-4 hover:bg-parchment/30 transition-colors">
                <div className="w-24 flex-shrink-0">
                  <p className="text-sm font-bold text-secondary">{entry.when}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate">
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
      </section>

      {/* ── SECTION 6: Structural Advantages ─────────────── */}
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
              icon: "&#127758;",
            },
            {
              title: "Independent Validation",
              desc: "NARO trial data is third-party, peer-reviewable, and statistically significant. Not self-reported claims.",
              icon: "&#128300;",
            },
            {
              title: "Adaptation Narrative",
              desc: "HISAGEN's causal chain IS climate adaptation at the farm level. Aligns with the $55B/year adaptation finance gap.",
              icon: "&#127793;",
            },
            {
              title: "Policy Alignment",
              desc: "AU Kampala Declaration (2025), CAADP 2026-2035, AFSH Summit commitments all prioritise exactly this work.",
              icon: "&#128220;",
            },
          ].map((advantage) => (
            <div
              key={advantage.title}
              className="rounded-xl border border-mist bg-white p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" dangerouslySetInnerHTML={{ __html: advantage.icon }} />
                <h3 className="text-base font-bold text-secondary">
                  {advantage.title}
                </h3>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                {advantage.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: Commercial Capital (Future) ───────── */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Commercial Capital (Future)
          </h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
            Stage 2+
          </span>
        </div>

        <div className="rounded-2xl border border-dashed border-mist bg-parchment/30 p-8">
          <p className="text-sm text-slate leading-relaxed mb-6">
            Commercial capital pathways are mapped but not actively pursued until
            grant-funded evidence de-risks the model. The transition triggers below
            indicate when HISAGEN will be ready for each capital type.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                type: "Product Sales",
                stage: "Stage 2",
                trigger: "Operational distribution network + farmer demand data",
              },
              {
                type: "Carbon Credits",
                stage: "Stage 3+",
                trigger: "MRV system operational + verified baseline SOC data",
              },
              {
                type: "Impact Investment",
                stage: "Stage 2-3",
                trigger: "Revenue traction + social impact metrics published",
              },
            ].map((track) => (
              <div
                key={track.type}
                className="p-4 rounded-lg bg-white border border-mist"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-sm font-bold text-secondary">{track.type}</h4>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                    {track.stage}
                  </span>
                </div>
                <p className="text-[11px] text-slate/70">{track.trigger}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-white border border-mist">
            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              Transition Triggers Checklist
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "First grant award received and project launched",
                "Farmer livelihood impact data published",
                "Bio-fertilizer distribution at pilot scale",
                "MRV pathway designed and baseline collected",
                "Independent impact assessment completed",
                "Revenue model validated with pilot cohort",
              ].map((trigger, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate">
                  <span className="w-4 h-4 rounded border border-mist flex items-center justify-center text-[10px] text-slate/30">
                    &#9633;
                  </span>
                  {trigger}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: Related Resources ─────────────────── */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
            Related Resources
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="text-xs text-slate mt-2">11-phase delivery methodology</p>
          </Link>

          <Link
            href="/stage-1/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">
              Proposals
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 1 Funding Hub
            </h3>
            <p className="text-xs text-slate mt-2">Applications &amp; proposals</p>
          </Link>

          <Link
            href="/stage-1/funding/opportunities"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">
              Pipeline
            </p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Pipeline Tracker
            </h3>
            <p className="text-xs text-slate mt-2">Active opportunity records</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
