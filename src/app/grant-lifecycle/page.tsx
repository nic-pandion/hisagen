import Link from "next/link";
import StageBreadcrumb from "../../components/StageBreadcrumb";

// Educational framework - what each phase IS and why it matters
const phases = [
  {
    number: "01",
    title: "Vision & Strategy",
    category: "pre-award",
    description: "Define theory of change, program goals, and multi-year targets before pursuing funding.",
    purpose: "Ensures grant pursuit aligns with organizational mission and has clear success criteria.",
    keyOutputs: ["Theory of Change", "Program Goals", "MEL Framework Outline"],
  },
  {
    number: "02",
    title: "Landscape Scanning",
    category: "pre-award",
    description: "Identify and score potential funders by fit, eligibility, size, and timeline.",
    purpose: "Builds a prioritized pipeline of funding opportunities matched to project needs.",
    keyOutputs: ["Funder Database", "Tiered Priority List", "Deadline Calendar"],
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
  },
  {
    number: "03",
    title: "Donor Engagement",
    category: "pre-award",
    description: "Build relationships with target funders through warm intros and structured outreach.",
    purpose: "Warms the relationship before formal application, increasing success probability.",
    keyOutputs: ["Contact Registry", "Engagement History", "Relationship Map"],
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
  },
  {
    number: "04",
    title: "Due Diligence",
    category: "pre-award",
    description: "Verify eligibility, build compliance matrices, and establish go/no-go criteria.",
    purpose: "Prevents wasted effort on ineligible or misaligned opportunities.",
    keyOutputs: ["Eligibility Checklist", "Compliance Matrix", "Go/No-Go Gate"],
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
  },
  {
    number: "05",
    title: "Proposal Development",
    category: "pre-award",
    description: "Develop and submit proposals following funder requirements and best practices.",
    purpose: "Converts opportunity into formal submission with compelling narrative and budget.",
    keyOutputs: ["Proposal Document", "Budget & Narrative", "Supporting Evidence"],
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
  },
  {
    number: "06",
    title: "Award & Handover",
    category: "transition",
    description: "Negotiate terms, sign agreements, and transition from pursuit to delivery.",
    purpose: "Bridges pre-award and post-award phases with clear handover.",
    keyOutputs: ["Signed Contract", "Handover Checklist", "Project Record Creation"],
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
  },
  {
    number: "07",
    title: "Project Setup",
    category: "post-award",
    description: "Set up reporting calendar, assign ownership, establish budget tracking.",
    purpose: "Creates operational foundation for successful grant delivery.",
    keyOutputs: ["Project Plan", "Budget Tracker", "Reporting Calendar"],
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
  {
    number: "08",
    title: "Delivery Planning",
    category: "post-award",
    description: "Develop detailed workplan, risk register, and team assignments.",
    purpose: "Translates grant objectives into actionable implementation plan.",
    keyOutputs: ["Work Breakdown Structure", "Risk Register", "RACI Matrix"],
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
  {
    number: "09",
    title: "Implementation",
    category: "post-award",
    description: "Execute grant-funded activities with regular monitoring and issue management.",
    purpose: "Delivers on grant commitments while maintaining funder relationship.",
    keyOutputs: ["Milestone Tracking", "Issue Log", "Change Requests"],
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
  {
    number: "10",
    title: "Reporting",
    category: "post-award",
    description: "Complete funder reports, document outcomes, and maintain compliance.",
    purpose: "Demonstrates accountability and positions for future funding.",
    keyOutputs: ["Progress Reports", "Financial Reports", "Outcomes Documentation"],
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
  {
    number: "11",
    title: "Closeout & Reflection",
    category: "post-award",
    description: "Complete closeout procedures, capture lessons learned, and refresh pipeline.",
    purpose: "Closes the loop and feeds insights back into future grant cycles.",
    keyOutputs: ["Closeout Checklist", "Lessons Learned", "Pipeline Refresh"],
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "pre-award":
      return { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800" };
    case "transition":
      return { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-800" };
    case "post-award":
      return { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" };
    default:
      return { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", badge: "bg-slate-100 text-slate-800" };
  }
};

export default function GrantLifecycleFrameworkPage() {
  const preAward = phases.filter(p => p.category === "pre-award");
  const transition = phases.filter(p => p.category === "transition");
  const postAward = phases.filter(p => p.category === "post-award");

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Grant Lifecycle"
        trail={[
          { label: "Capital Continuum", href: "/capital-continuum" },
          { label: "Methodology" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Framework
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Grant Lifecycle Methodology
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          An 11-phase framework for grant writing and delivery - from vision through closeout.
          Applies to grants, accelerators, venture capital, and strategic philanthropy.
        </p>
        <div className="mt-6 p-4 rounded-xl bg-white/60 border border-mist inline-block">
          <p className="text-xs text-slate">
            <span className="font-bold text-secondary">Relationship to Capital Continuum:</span>{" "}
            This methodology operates primarily within <span className="font-bold">Stage 1 (Incubation)</span> where
            grant and concessional capital are the primary funding sources.
          </p>
        </div>
      </section>

      {/* Visual Overview */}
      <section className="mt-12 rounded-2xl border border-mist bg-white p-8 overflow-hidden">
        <h2 className="text-lg font-bold text-secondary uppercase tracking-widest mb-6">Lifecycle Overview</h2>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Pre-Award */}
          <div className="flex-1 rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-3">Pre-Award (Phases 01-05)</p>
            <p className="text-xs text-emerald-800 mb-3">Identify, pursue, and win funding</p>
            <div className="flex flex-wrap gap-2">
              {["01", "02", "03", "04", "05"].map(n => (
                <div key={n} className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-xs font-bold text-emerald-800">
                  {n}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center w-8">
            <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Transition */}
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 lg:w-32">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-3">Transition</p>
            <p className="text-xs text-amber-800 mb-3">Handover</p>
            <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-xs font-bold text-amber-800">
              06
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center w-8">
            <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Post-Award */}
          <div className="flex-1 rounded-xl border-2 border-blue-200 bg-blue-50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700 mb-3">Post-Award (Phases 07-11)</p>
            <p className="text-xs text-blue-800 mb-3">Deliver, report, and close</p>
            <div className="flex flex-wrap gap-2">
              {["07", "08", "09", "10", "11"].map(n => (
                <div key={n} className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-800">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Award Phases */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <h2 className="text-lg font-bold text-secondary uppercase tracking-widest">Pre-Award Phases</h2>
          </div>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 px-2 py-1 rounded bg-emerald-50">01-05</span>
        </div>

        <div className="space-y-3">
          {preAward.map((phase) => {
            const colors = getCategoryColor(phase.category);
            return (
              <div
                key={phase.number}
                className={`rounded-xl border ${colors.border} ${colors.bg} p-5`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex items-center gap-3 lg:w-48 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                      {phase.number}
                    </div>
                    <h3 className="text-base font-bold text-secondary">{phase.title}</h3>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-slate mb-2">{phase.description}</p>
                    <p className="text-xs text-emerald-700 italic">{phase.purpose}</p>
                  </div>

                  <div className="lg:w-48 shrink-0">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate/60 mb-1">Key Outputs</p>
                    <div className="flex flex-wrap gap-1">
                      {phase.keyOutputs.map((output, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/80 text-slate">
                          {output}
                        </span>
                      ))}
                    </div>
                    {phase.operationalLink && (
                      <Link
                        href={phase.operationalLink.href}
                        className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 hover:underline"
                      >
                        {phase.operationalLink.label} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transition Phase */}
      <section className="mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <h2 className="text-lg font-bold text-secondary uppercase tracking-widest">Transition Phase</h2>
          </div>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 px-2 py-1 rounded bg-amber-50">06</span>
        </div>

        {transition.map((phase) => {
          const colors = getCategoryColor(phase.category);
          return (
            <div
              key={phase.number}
              className={`rounded-xl border ${colors.border} ${colors.bg} p-5`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex items-center gap-3 lg:w-48 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                    {phase.number}
                  </div>
                  <h3 className="text-base font-bold text-secondary">{phase.title}</h3>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-slate mb-2">{phase.description}</p>
                  <p className="text-xs text-amber-700 italic">{phase.purpose}</p>
                </div>

                <div className="lg:w-48 shrink-0">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate/60 mb-1">Key Outputs</p>
                  <div className="flex flex-wrap gap-1">
                    {phase.keyOutputs.map((output, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/80 text-slate">
                        {output}
                      </span>
                    ))}
                  </div>
                  {phase.operationalLink && (
                    <Link
                      href={phase.operationalLink.href}
                      className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 hover:underline"
                    >
                      {phase.operationalLink.label} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Post-Award Phases */}
      <section className="mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <h2 className="text-lg font-bold text-secondary uppercase tracking-widest">Post-Award Phases</h2>
          </div>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 px-2 py-1 rounded bg-blue-50">07-11</span>
        </div>

        <div className="space-y-3">
          {postAward.map((phase) => {
            const colors = getCategoryColor(phase.category);
            return (
              <div
                key={phase.number}
                className={`rounded-xl border ${colors.border} ${colors.bg} p-5`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex items-center gap-3 lg:w-48 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {phase.number}
                    </div>
                    <h3 className="text-base font-bold text-secondary">{phase.title}</h3>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-slate mb-2">{phase.description}</p>
                    <p className="text-xs text-blue-700 italic">{phase.purpose}</p>
                  </div>

                  <div className="lg:w-48 shrink-0">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate/60 mb-1">Key Outputs</p>
                    <div className="flex flex-wrap gap-1">
                      {phase.keyOutputs.map((output, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/80 text-slate">
                          {output}
                        </span>
                      ))}
                    </div>
                    {phase.operationalLink && (
                      <Link
                        href={phase.operationalLink.href}
                        className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-blue-700 hover:underline"
                      >
                        {phase.operationalLink.label} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Operational Tools */}
      <section className="mt-16 p-8 rounded-2xl bg-secondary text-parchment">
        <h2 className="text-xl font-bold mb-2">Operational Implementation</h2>
        <p className="text-sm opacity-80 mb-6">
          This framework is implemented through operational tools that track real opportunities and projects.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/funding-roadmap"
            className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors group"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 mb-2">Phases 02-06</p>
            <h3 className="text-lg font-bold group-hover:text-accent transition-colors">Opportunities Tracker</h3>
            <p className="text-sm opacity-80 mt-2">
              Track funding opportunities from identification through proposal submission and award.
            </p>
          </Link>
          <Link
            href="/stage-1/projects"
            className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors group"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-2">Phases 07-11</p>
            <h3 className="text-lg font-bold group-hover:text-accent transition-colors">Grant Projects</h3>
            <p className="text-sm opacity-80 mt-2">
              Manage funded grants through delivery, reporting, and closeout.
            </p>
          </Link>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-lg font-bold text-secondary uppercase tracking-widest">Related Resources</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/capital-continuum"
            className="group p-5 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Framework</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Capital Continuum
            </h3>
            <p className="text-xs text-slate mt-2">4-stage funding lifecycle for carbon projects</p>
          </Link>

          <Link
            href="/project/hisagen-uganda"
            className="group p-5 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Project</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Uganda Pilot
            </h3>
            <p className="text-xs text-slate mt-2">See this methodology in action</p>
          </Link>

          <Link
            href="/stage-1/funding"
            className="group p-5 rounded-xl border-2 border-primary/20 bg-primary/5 hover:border-primary hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Funding Hub</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 1 Funding
            </h3>
            <p className="text-xs text-slate mt-2">Active funding strategy and applications</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
