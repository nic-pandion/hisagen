import Link from "next/link";
import StageBreadcrumb from "../../../../components/StageBreadcrumb";

type PhaseStatus = "active" | "partial" | "sparse" | "early" | "not-started" | "future";

interface KeyDoc {
  label: string;
  href: string;
  type: "internal" | "external" | "placeholder";
}

interface Phase {
  number: string;
  title: string;
  status: PhaseStatus;
  statusLabel: string;
  description: string;
  evidence: string[];
  gaps: string[];
  nextStep: string;
  operationalLink?: { label: string; href: string };
  keyDocs?: KeyDoc[];
}

// Uganda Pilot specific progress through the 11-phase grant lifecycle
const phases: Phase[] = [
  {
    number: "01",
    title: "Vision / Strategy / Program Design",
    status: "partial",
    statusLabel: "Light",
    description: "Define theory of change, program goals, MEL outline, and multi-year targets.",
    evidence: [
      "Early concept direction from Keir (emails, briefs)",
      "Partner context established (Locus AG, Uganda trials, NARO)",
    ],
    gaps: [
      "Clear theory of change document",
      "Program goals and MEL outline",
      "Multi-year targets",
    ],
    nextStep: "Dedicated strategy session to formalize program narrative and outcomes.",
  },
  {
    number: "02",
    title: "Landscape Scanning & Prospect Mapping",
    status: "active",
    statusLabel: "Active",
    description: "Identify and score potential funders by fit, eligibility, size, competitiveness, and timeline.",
    evidence: [
      "20+ funders identified across multilateral, bilateral, foundation, corporate",
      "3-tier prioritization: Apply Now, Cultivate, Monitor",
      "Match funding capture started",
      "Funder Landscape page live on portal",
    ],
    gaps: [
      "Deep research: 990 filings, grant history, connection mapping",
      "Keir network warm intro map",
    ],
    nextStep: "Continue funder research and warm intro identification.",
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
  },
  {
    number: "03",
    title: "Donor & Sponsor Engagement",
    status: "sparse",
    statusLabel: "Sparse",
    description: "Build relationships with target funders through warm intros and structured outreach.",
    evidence: [
      "Initial contact tracking in Opportunities system",
      "Engagement history capture enabled",
    ],
    gaps: [
      "Formal outreach plan",
      "Warm intro map",
      "Engagement cadence",
    ],
    nextStep: "Build relationship plan and decide who approaches which contacts.",
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
  },
  {
    number: "04",
    title: "Due Diligence & Eligibility",
    status: "active",
    statusLabel: "Active",
    description: "Verify eligibility, build compliance matrices, and establish go/no-go criteria per funder.",
    evidence: [
      "Eligibility checklists implemented in Opportunities tracker",
      "Compliance checklists per opportunity",
      "Go/No-Go gate with rationale capture",
    ],
    gaps: [
      "Complete eligibility checks for all active opportunities",
    ],
    nextStep: "Complete due diligence checklists for priority opportunities.",
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
    keyDocs: [
      { label: "Due Diligence Sign-offs", href: "#", type: "placeholder" },
    ],
  },
  {
    number: "05",
    title: "Proposal Development & Submission",
    status: "active",
    statusLabel: "Active",
    description: "Develop and submit proposals following structured playbook.",
    evidence: [
      "Concept Note (one-page summary) completed",
      "v0 Grant Proposal (10-section base narrative)",
      "Funder Alignment Matrix (tailoring guidance)",
      "Proposal section with requirements tracking in Opportunities",
    ],
    gaps: [
      "Logic model",
      "Budget narrative per funder",
      "Evidence inserts",
    ],
    nextStep: "Apply proposal framework rigorously for active submissions.",
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
    keyDocs: [
      { label: "Concept Note", href: "/stage-1/funding/v0-concept-note", type: "internal" },
      { label: "Base Proposal (v0)", href: "/stage-1/funding/v0-grant-proposal", type: "internal" },
    ],
  },
  {
    number: "06",
    title: "Contracting & Handover",
    status: "early",
    statusLabel: "Early",
    description: "Negotiate terms, sign agreements, and hand over to implementation team.",
    evidence: [
      "Outcome section with handover checklist implemented",
      "Project creation link from won opportunities",
    ],
    gaps: [
      "Award pack template",
      "Contract negotiation playbook",
    ],
    nextStep: "Prepare award pack template for first successful opportunity.",
    operationalLink: { label: "Capital Strategy", href: "/funding-roadmap" },
    keyDocs: [
      { label: "Grant Contracts", href: "#", type: "placeholder" },
      { label: "Award Pack", href: "#", type: "placeholder" },
    ],
  },
  {
    number: "07",
    title: "Project Initiation & Grant Setup",
    status: "early",
    statusLabel: "Early",
    description: "Set up reporting calendar, assign owner, establish budget tracking systems.",
    evidence: [
      "Grant Projects tracking system implemented",
      "Project setup phase with team, budget, and timeline capture",
    ],
    gaps: [
      "First real project to use the system",
    ],
    nextStep: "Use Grant Projects system when first award is received.",
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
  {
    number: "08",
    title: "Delivery Prep & Project Planning",
    status: "early",
    statusLabel: "Early",
    description: "Align with formal project management method, develop workplan and risk register.",
    evidence: [
      "Planning phase with milestones, risks, and issues tracking",
      "Budget breakdown by category",
    ],
    gaps: [
      "First real project to use the system",
    ],
    nextStep: "Use planning phase when first award is received.",
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
  {
    number: "09",
    title: "Implementation & Delivery",
    status: "future",
    statusLabel: "Future",
    description: "Execute grant-funded activities with standard delivery and monitoring cadence.",
    evidence: [
      "Active phase with milestone tracking implemented",
      "Issue and risk management system ready",
    ],
    gaps: [
      "First real project to enter delivery",
    ],
    nextStep: "Begin implementation when first grant is activated.",
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
  {
    number: "10",
    title: "Post-Project Follow-up & Reporting",
    status: "future",
    statusLabel: "Future",
    description: "Complete funder reports, document outcomes, and position for renewal.",
    evidence: [
      "Reporting phase with event tracking implemented",
      "Report status tracking (draft, submitted, accepted)",
    ],
    gaps: [
      "First real project to enter reporting",
    ],
    nextStep: "Complete first funder reports when due.",
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
    keyDocs: [
      { label: "Interim Donor Reports", href: "#", type: "placeholder" },
      { label: "Final Reports", href: "#", type: "placeholder" },
    ],
  },
  {
    number: "11",
    title: "Closeout & Reflection",
    status: "future",
    statusLabel: "Future",
    description: "Complete closeout, document lessons learned, and refresh pipeline for next cycle.",
    evidence: [
      "Closing phase structure implemented",
      "Lessons learned capture enabled",
    ],
    gaps: [
      "First real project to close out",
    ],
    nextStep: "Complete first project closeout when grant period ends.",
    operationalLink: { label: "Grant Projects", href: "/stage-1/projects" },
  },
];

const getStatusColor = (status: PhaseStatus) => {
  switch (status) {
    case "active":
      return { bg: "bg-emerald-50", border: "border-emerald-500/30", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800" };
    case "partial":
      return { bg: "bg-amber-50", border: "border-amber-500/30", text: "text-amber-700", badge: "bg-amber-100 text-amber-800" };
    case "sparse":
      return { bg: "bg-orange-50", border: "border-orange-500/30", text: "text-orange-700", badge: "bg-orange-100 text-orange-800" };
    case "early":
      return { bg: "bg-sky-50", border: "border-sky-500/30", text: "text-sky-700", badge: "bg-sky-100 text-sky-800" };
    case "not-started":
      return { bg: "bg-slate-50", border: "border-slate-300", text: "text-slate-600", badge: "bg-slate-200 text-slate-700" };
    case "future":
      return { bg: "bg-white", border: "border-mist", text: "text-slate-400", badge: "bg-slate-100 text-slate-500" };
  }
};

export default function UgandaPilotGrantProgressPage() {
  // Calculate summary stats
  const activePhases = phases.filter(p => p.status === "active").length;
  const partialPhases = phases.filter(p => p.status === "partial" || p.status === "sparse" || p.status === "early").length;
  const futurePhases = phases.filter(p => p.status === "future" || p.status === "not-started").length;

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Grant Progress"
        trail={[
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
          { label: "Lifecycle Progress" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Uganda Pilot
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Grant Lifecycle Progress
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Track Uganda Pilot's progress through the 11-phase grant lifecycle. Shows evidence gathered,
          gaps to address, and next steps for each phase.
        </p>
        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-bold text-emerald-700">{activePhases} Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-sm font-bold text-amber-700">{partialPhases} In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <span className="text-sm font-bold text-slate-500">{futurePhases} Future</span>
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section className="mt-8 p-6 rounded-xl border border-mist bg-white">
        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">Phase Status Legend</p>
        <div className="flex flex-wrap gap-4">
          {[
            { status: "active" as PhaseStatus, label: "Active", desc: "System implemented & in use" },
            { status: "partial" as PhaseStatus, label: "Partial", desc: "Some evidence, gaps remain" },
            { status: "sparse" as PhaseStatus, label: "Sparse", desc: "Minimal activity" },
            { status: "early" as PhaseStatus, label: "Early", desc: "System ready, awaiting first use" },
            { status: "future" as PhaseStatus, label: "Future", desc: "Post-award phases" },
          ].map((item) => {
            const colors = getStatusColor(item.status);
            return (
              <div key={item.status} className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${colors.badge}`}>
                  {item.label}
                </span>
                <span className="text-[10px] text-slate/60">{item.desc}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Current Position */}
      <section className="mt-8 p-6 rounded-xl border-2 border-emerald-500/30 bg-emerald-50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center shrink-0">
            <span className="text-emerald-800 font-bold text-lg">02-05</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-1">Current Focus</p>
            <h2 className="text-xl font-bold text-emerald-900">Pre-Award Phases: Scanning through Proposal</h2>
            <p className="mt-2 text-sm text-emerald-800">
              Uganda Pilot is actively pursuing funding through the Opportunities tracker.
              Funder landscape mapped, eligibility checklists in use, and proposals in development.
            </p>
          </div>
        </div>
      </section>

      {/* Phase Cards */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Progress by Phase</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="space-y-4">
          {phases.map((phase) => {
            const colors = getStatusColor(phase.status);
            return (
              <div
                key={phase.number}
                className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 transition-all hover:shadow-md`}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Phase Header */}
                  <div className="lg:w-72 shrink-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        phase.status === "active" ? "bg-emerald-600 text-white" :
                        phase.status === "partial" ? "bg-amber-500 text-white" :
                        phase.status === "sparse" ? "bg-orange-500 text-white" :
                        phase.status === "early" ? "bg-sky-500 text-white" :
                        "bg-slate-300 text-slate-600"
                      }`}>
                        {phase.number}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-secondary">{phase.title}</h3>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${colors.badge}`}>
                          {phase.statusLabel}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate leading-relaxed">{phase.description}</p>
                    {phase.operationalLink && (
                      <Link
                        href={phase.operationalLink.href}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        {phase.operationalLink.label} →
                      </Link>
                    )}
                    {/* Key Documents */}
                    {phase.keyDocs && phase.keyDocs.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/50">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-secondary/40 mb-2">Key Documents</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.keyDocs.map((doc, idx) => (
                            doc.type === "placeholder" ? (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] bg-slate-100 text-slate-400 border border-slate-200"
                                title="Document placeholder - to be added"
                              >
                                📄 {doc.label}
                              </span>
                            ) : (
                              <Link
                                key={idx}
                                href={doc.href}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] bg-white text-secondary border border-mist hover:border-primary hover:text-primary transition-colors"
                              >
                                📄 {doc.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Evidence & Gaps */}
                  <div className="flex-1 grid gap-4 md:grid-cols-2">
                    {/* Evidence */}
                    <div className="p-4 rounded-xl bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Evidence So Far</p>
                      {phase.evidence.length > 0 ? (
                        <ul className="space-y-1">
                          {phase.evidence.map((item, idx) => (
                            <li key={idx} className="flex gap-2 text-xs text-slate">
                              <span className="text-emerald-500 shrink-0">+</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-slate/50 italic">No evidence yet</p>
                      )}
                    </div>

                    {/* Gaps */}
                    <div className="p-4 rounded-xl bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Gaps</p>
                      <ul className="space-y-1">
                        {phase.gaps.map((gap, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-slate">
                            <span className="text-amber-500 shrink-0">-</span>
                            <span>{gap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Next Step */}
                  <div className="lg:w-56 shrink-0">
                    <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10 h-full">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">Next Step</p>
                      <p className="text-xs text-secondary leading-relaxed">{phase.nextStep}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Related Resources</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Link
            href="/project/hisagen-uganda"
            className="group p-6 rounded-xl border-2 border-primary/20 bg-primary/5 hover:border-primary hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Project</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Uganda Pilot Overview
            </h3>
          </Link>

          <Link
            href="/funding-roadmap"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Pre-Award</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Opportunities
            </h3>
          </Link>

          <Link
            href="/stage-1/projects"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Post-Award</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Grant Projects
            </h3>
          </Link>

          <Link
            href="/grant-lifecycle"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Framework</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Grant Lifecycle Methodology
            </h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
