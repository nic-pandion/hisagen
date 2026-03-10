"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import StageBreadcrumb from "../../../../components/StageBreadcrumb";
import { getProjectBySlug } from "../../../../data/projects";
import {
  getProjectStatusConfig,
  getProjectPhaseLabel,
  getHealthConfig,
  getMilestoneStatusConfig,
  getReportStatusConfig,
  getIssuePriorityConfig,
  calculateBudgetUtilization,
  ReportingEvent,
  BudgetLine,
  TeamMember,
  Milestone,
  Risk,
  Issue,
} from "../../../../types/projects";

// Phase tab component
const PhaseTab = ({
  phase,
  label,
  isActive,
  isCurrent,
  onClick,
}: {
  phase: number;
  label: string;
  isActive: boolean;
  isCurrent: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
      isActive
        ? "border-primary text-primary bg-primary/5"
        : "border-transparent text-slate hover:text-secondary hover:bg-slate-50"
    } ${isCurrent ? "ring-2 ring-primary/20" : ""}`}
  >
    <span className="text-[10px] text-slate/60 mr-1">{String(phase).padStart(2, "0")}</span>
    {label}
  </button>
);

// Inline hint component
const Hint = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs italic text-slate/50 mt-1">{children}</p>
);

// Budget progress bar
const BudgetBar = ({ budgeted, spent, committed }: { budgeted: number; spent: number; committed: number }) => {
  const spentPercent = budgeted > 0 ? (spent / budgeted) * 100 : 0;
  const committedPercent = budgeted > 0 ? (committed / budgeted) * 100 : 0;

  return (
    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
      <div
        className="h-full bg-emerald-500"
        style={{ width: `${spentPercent}%` }}
        title={`Spent: ${spentPercent.toFixed(1)}%`}
      />
      <div
        className="h-full bg-amber-400"
        style={{ width: `${committedPercent}%` }}
        title={`Committed: ${committedPercent.toFixed(1)}%`}
      />
    </div>
  );
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  const [activePhase, setActivePhase] = useState<number>(project?.currentPhase || 7);

  if (!project) {
    notFound();
  }

  const statusConfig = getProjectStatusConfig(project.status);
  const healthConfig = getHealthConfig(project.healthIndicator);
  const utilization = calculateBudgetUtilization(project);

  // Progress indicator phases
  const phases = [7, 8, 9, 10, 11];
  const currentPhaseIndex = phases.indexOf(project.currentPhase);

  // Calculate days left until end
  const endDate = new Date(project.endDate);
  const today = new Date();
  const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage={project.funderName}
        trail={[
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
          { label: "Grant Projects", href: "/stage-1/projects" },
          { label: project.funderName },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${statusConfig.bg} ${statusConfig.text}`}>
                {statusConfig.label}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${healthConfig.bg} ${healthConfig.text}`}>
                {healthConfig.icon} {healthConfig.label}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-secondary">
              {project.funderName}
            </h1>
            <p className="mt-2 text-lg text-slate">{project.title}</p>
            <p className="mt-2 text-sm text-slate/60">
              {project.duration} | {project.startDate} - {project.endDate}
              {daysRemaining > 0 && ` (${daysRemaining} days remaining)`}
            </p>
          </div>

          <div className="flex flex-col gap-2 lg:text-right">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Grant Amount</p>
              <p className="text-2xl font-bold text-emerald-600">
                {project.currency} {project.grantAmount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Owner</p>
              <p className="text-sm font-bold text-primary">{project.owner}</p>
            </div>
            <Link
              href={`/funding-roadmap/sample-climate-foundation-won`}
              className="text-xs text-primary hover:underline"
            >
              View Source Opportunity →
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="mt-6 p-4 rounded-xl border border-mist bg-white">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Phase Progress</p>
        <div className="flex items-center justify-between">
          {phases.map((phase, idx) => {
            const isComplete = idx < currentPhaseIndex;
            const isCurrent = phase === project.currentPhase;

            return (
              <div key={phase} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      isComplete
                        ? "bg-emerald-500 text-white"
                        : isCurrent
                        ? "bg-primary text-white ring-4 ring-primary/20"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {isComplete ? "✓" : String(phase).padStart(2, "0")}
                  </div>
                  <p className={`mt-1 text-[10px] ${isCurrent ? "font-bold text-primary" : "text-slate/60"}`}>
                    {getProjectPhaseLabel(phase)}
                  </p>
                </div>
                {idx < phases.length - 1 && (
                  <div
                    className={`w-12 md:w-20 h-0.5 mx-2 ${
                      idx < currentPhaseIndex ? "bg-emerald-500" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Budget Summary */}
      <section className="mt-6 p-4 rounded-xl border border-mist bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-1">Budget Utilization</p>
            <div className="flex items-center gap-3">
              <div className="w-40">
                <BudgetBar
                  budgeted={project.totalBudget}
                  spent={project.totalSpent}
                  committed={project.totalCommitted}
                />
              </div>
              <span className="text-sm font-medium text-secondary">{utilization}%</span>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <div>
              <span className="text-slate/60">Budget:</span>{" "}
              <span className="font-medium">{project.currency} {project.totalBudget.toLocaleString()}</span>
            </div>
            <div>
              <span className="inline-block w-3 h-3 rounded bg-emerald-500 mr-1"></span>
              <span className="text-slate/60">Spent:</span>{" "}
              <span className="font-medium">{project.currency} {project.totalSpent.toLocaleString()}</span>
            </div>
            <div>
              <span className="inline-block w-3 h-3 rounded bg-amber-400 mr-1"></span>
              <span className="text-slate/60">Committed:</span>{" "}
              <span className="font-medium">{project.currency} {project.totalCommitted.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Next Action */}
      <section className="mt-6 p-4 rounded-xl border-2 border-primary/30 bg-primary/5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <span className="text-primary font-bold">!</span>
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">Next Action</p>
            <p className="text-sm font-medium text-secondary">{project.nextAction}</p>
            {project.nextActionDue && (
              <p className="text-xs text-slate mt-1">Due: {project.nextActionDue}</p>
            )}
          </div>
          <div className="text-xs text-primary font-medium">{project.owner}</div>
        </div>
      </section>

      {/* Phase Tabs */}
      <section className="mt-8">
        <div className="flex gap-1 border-b border-mist overflow-x-auto">
          {phases.map((phase) => (
            <PhaseTab
              key={phase}
              phase={phase}
              label={getProjectPhaseLabel(phase)}
              isActive={activePhase === phase}
              isCurrent={phase === project.currentPhase}
              onClick={() => setActivePhase(phase)}
            />
          ))}
        </div>

        {/* Phase Content */}
        <div className="mt-6 p-6 rounded-b-xl border border-t-0 border-mist bg-white">
          {/* Phase 07: Setup */}
          {activePhase === 7 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 07: Project Setup</h3>
                <p className="text-sm text-slate">Establish systems, teams, and processes for grant delivery.</p>
                <Hint>Complete setup within the first month to enable smooth project execution.</Hint>
              </div>

              {/* Setup Status */}
              <div className="p-4 rounded-lg border border-mist">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">Setup Status</p>
                    <p className={`text-lg font-bold ${project.setupComplete ? "text-emerald-600" : "text-amber-600"}`}>
                      {project.setupComplete ? "✓ Complete" : "In Progress"}
                    </p>
                    {project.setupCompletedDate && (
                      <p className="text-xs text-slate">Completed: {project.setupCompletedDate}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Team Assignments */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Team Assignments</p>
                <div className="space-y-3">
                  {project.teamAssignments.map((member) => (
                    <div key={member.id} className="p-3 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-secondary">{member.name}</p>
                          <p className="text-sm text-slate">{member.role} • {member.organization}</p>
                        </div>
                        <span className="text-sm font-medium text-primary">{member.allocation}</span>
                      </div>
                      {member.responsibilities.length > 0 && (
                        <p className="text-xs text-slate/60 mt-2">
                          {member.responsibilities.join(", ")}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <Hint>Ensure all team members have clear roles and allocations before project kick-off.</Hint>
              </div>

              {/* Reporting Calendar */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Reporting Calendar</p>
                <div className="space-y-2">
                  {project.reportingCalendar.map((report) => {
                    const reportStatus = getReportStatusConfig(report.status);
                    return (
                      <div key={report.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                        <div>
                          <p className="font-medium text-secondary">{report.title}</p>
                          <p className="text-xs text-slate">{report.period} • Due: {report.dueDate}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${reportStatus.bg} ${reportStatus.text}`}>
                          {reportStatus.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <Hint>Add all reporting deadlines to your calendar immediately. Late reports can jeopardize future funding.</Hint>
              </div>

              {/* Setup Notes */}
              {project.setupNotes && (
                <div className="p-4 rounded-lg bg-sky-50 border border-sky-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-sky-700 mb-2">Setup Notes</p>
                  <p className="text-sm text-sky-900">{project.setupNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Phase 08: Planning */}
          {activePhase === 8 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 08: Planning</h3>
                <p className="text-sm text-slate">Develop detailed workplan, milestones, and risk management.</p>
                <Hint>Good planning prevents poor performance. Invest time here to avoid issues later.</Hint>
              </div>

              {/* Planning Status */}
              <div className="p-4 rounded-lg border border-mist">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">Planning Status</p>
                    <p className={`text-lg font-bold ${project.planningComplete ? "text-emerald-600" : "text-amber-600"}`}>
                      {project.planningComplete ? "✓ Complete" : "In Progress"}
                    </p>
                  </div>
                  {project.workplanUrl && (
                    <a
                      href={project.workplanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Workplan →
                    </a>
                  )}
                </div>
              </div>

              {/* Milestones */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Milestones</p>
                <div className="space-y-3">
                  {project.milestones.map((milestone) => {
                    const msStatus = getMilestoneStatusConfig(milestone.status);
                    return (
                      <div key={milestone.id} className="p-3 rounded-lg bg-slate-50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate/60">Phase {milestone.phase}</span>
                            <span className={`text-xs px-2 py-0.5 rounded ${msStatus.bg} ${msStatus.text}`}>
                              {msStatus.label}
                            </span>
                          </div>
                          <span className="text-xs text-slate">Due: {milestone.dueDate}</span>
                        </div>
                        <p className="font-medium text-secondary">{milestone.title}</p>
                        <p className="text-sm text-slate mt-1">{milestone.description}</p>
                        {milestone.deliverables.length > 0 && (
                          <div className="mt-2">
                            <p className="text-xs text-slate/60">Deliverables:</p>
                            <ul className="text-xs text-slate ml-4 list-disc">
                              {milestone.deliverables.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Risk Register */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Risk Register</p>
                <div className="space-y-3">
                  {project.riskRegister.map((risk) => (
                    <div key={risk.id} className="p-3 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-secondary">{risk.title}</p>
                        <div className="flex gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            risk.probability === "high" ? "bg-red-100 text-red-700" :
                            risk.probability === "medium" ? "bg-amber-100 text-amber-700" :
                            "bg-slate-100 text-slate-700"
                          }`}>
                            P: {risk.probability}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            risk.impact === "high" ? "bg-red-100 text-red-700" :
                            risk.impact === "medium" ? "bg-amber-100 text-amber-700" :
                            "bg-slate-100 text-slate-700"
                          }`}>
                            I: {risk.impact}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-slate">{risk.description}</p>
                      <p className="text-xs text-slate/60 mt-2">
                        <strong>Mitigation:</strong> {risk.mitigation}
                      </p>
                      <p className="text-xs text-slate/60">
                        <strong>Owner:</strong> {risk.owner} | <strong>Status:</strong> {risk.status}
                      </p>
                    </div>
                  ))}
                </div>
                <Hint>Review risks monthly. Update status and add new risks as they emerge.</Hint>
              </div>

              {/* Planning Notes */}
              {project.planningNotes && (
                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-purple-700 mb-2">Planning Notes</p>
                  <p className="text-sm text-purple-900">{project.planningNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Phase 09: Delivery */}
          {activePhase === 9 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 09: Delivery</h3>
                <p className="text-sm text-slate">Execute activities, track progress, manage issues.</p>
                <Hint>Regular progress updates and proactive issue management are key to successful delivery.</Hint>
              </div>

              {/* Progress */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Overall Progress</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-4 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${project.progressPercentage}%` }}
                    />
                  </div>
                  <span className="text-lg font-bold text-primary">{project.progressPercentage}%</span>
                </div>
              </div>

              {/* Budget by Category */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Budget by Category</p>
                <div className="space-y-3">
                  {project.budgetAllocation.map((line) => (
                    <div key={line.id} className="p-3 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-secondary">{line.category}</p>
                        <p className="text-sm text-slate">
                          {project.currency} {line.spent.toLocaleString()} / {line.budgeted.toLocaleString()}
                        </p>
                      </div>
                      <BudgetBar
                        budgeted={line.budgeted}
                        spent={line.spent}
                        committed={line.committed}
                      />
                      {line.description && (
                        <p className="text-xs text-slate/60 mt-2">{line.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Issues */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">
                  Issues ({project.issues.filter((i) => i.status !== "resolved").length} open)
                </p>
                {project.issues.length === 0 ? (
                  <p className="text-sm text-slate/60 italic">No issues logged yet</p>
                ) : (
                  <div className="space-y-2">
                    {project.issues.map((issue) => {
                      const priorityConfig = getIssuePriorityConfig(issue.priority);
                      return (
                        <div key={issue.id} className="p-3 rounded-lg bg-slate-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-2 py-0.5 rounded ${priorityConfig.bg} ${priorityConfig.text}`}>
                                {priorityConfig.label}
                              </span>
                              <p className="font-medium text-secondary">{issue.title}</p>
                            </div>
                            <span className="text-xs text-slate">{issue.status}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <Hint>Log issues promptly. Early escalation prevents small problems from becoming big ones.</Hint>
              </div>

              {/* Delivery Notes */}
              {project.deliveryNotes && (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">Delivery Notes</p>
                  <p className="text-sm text-emerald-900">{project.deliveryNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Phase 10: Reporting */}
          {activePhase === 10 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 10: Reporting</h3>
                <p className="text-sm text-slate">Prepare and submit required reports to funder.</p>
                <Hint>Start reports early. Quality reporting builds funder confidence and supports renewal.</Hint>
              </div>

              {/* Reports List */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Report Schedule</p>
                <div className="space-y-3">
                  {[...project.reportingCalendar, ...project.reports].map((report) => {
                    const reportStatus = getReportStatusConfig(report.status);
                    return (
                      <div key={report.id} className="p-3 rounded-lg bg-slate-50">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-secondary">{report.title}</p>
                            <p className="text-xs text-slate">{report.period}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${reportStatus.bg} ${reportStatus.text}`}>
                            {reportStatus.label}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate">
                          <span>Due: {report.dueDate}</span>
                          {report.submittedDate && <span>Submitted: {report.submittedDate}</span>}
                        </div>
                        {report.funderFeedback && (
                          <p className="text-xs text-sky-700 mt-2 p-2 bg-sky-50 rounded">
                            <strong>Funder Feedback:</strong> {report.funderFeedback}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reporting Notes */}
              {project.reportingNotes && (
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-2">Reporting Notes</p>
                  <p className="text-sm text-amber-900">{project.reportingNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Phase 11: Closeout */}
          {activePhase === 11 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 11: Closeout</h3>
                <p className="text-sm text-slate">Complete final activities, reporting, and lessons learned.</p>
                <Hint>Good closeout practices strengthen relationships for future funding opportunities.</Hint>
              </div>

              {/* Closeout Status */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Closeout Status</p>
                <p className={`text-lg font-bold ${
                  project.closeoutStatus === "completed" ? "text-emerald-600" :
                  project.closeoutStatus === "in_progress" ? "text-amber-600" :
                  "text-slate-500"
                }`}>
                  {project.closeoutStatus === "completed" ? "✓ Complete" :
                   project.closeoutStatus === "in_progress" ? "In Progress" :
                   "Not Started"}
                </p>
              </div>

              {/* Final Report Status */}
              {project.finalReportStatus && (
                <div className="p-4 rounded-lg border border-mist">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Final Report</p>
                  <span className={`text-sm px-3 py-1 rounded ${getReportStatusConfig(project.finalReportStatus).bg} ${getReportStatusConfig(project.finalReportStatus).text}`}>
                    {getReportStatusConfig(project.finalReportStatus).label}
                  </span>
                </div>
              )}

              {/* Lessons Learned */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Lessons Learned</p>
                {project.lessonsLearned.length === 0 ? (
                  <p className="text-sm text-slate/60 italic">No lessons captured yet</p>
                ) : (
                  <ul className="space-y-2">
                    {project.lessonsLearned.map((lesson, idx) => (
                      <li key={idx} className="text-sm text-slate p-2 bg-slate-50 rounded">
                        {lesson}
                      </li>
                    ))}
                  </ul>
                )}
                <Hint>Capture lessons throughout the project, not just at the end. These inform future proposals.</Hint>
              </div>

              {/* Renewal Strategy */}
              {project.renewalStrategy && (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">Renewal Strategy</p>
                  <p className="text-sm text-emerald-900">{project.renewalStrategy}</p>
                </div>
              )}

              {/* Closeout Notes */}
              {project.closeoutNotes && (
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Closeout Notes</p>
                  <p className="text-sm text-slate">{project.closeoutNotes}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Notes & Documents */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Notes */}
        <div className="p-6 rounded-xl border border-mist bg-white">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-4">Notes</p>
          {project.notes.length > 0 ? (
            <div className="space-y-3">
              {project.notes.map((note) => (
                <div key={note.id} className="p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-primary">{note.author}</span>
                    <span className="text-xs text-slate/60">{note.date}</span>
                  </div>
                  <p className="text-sm text-secondary">{note.content}</p>
                  {note.phase && (
                    <span className="text-xs text-slate/60">Phase {note.phase}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate/60 italic">No notes yet</p>
          )}
        </div>

        {/* Documents */}
        <div className="p-6 rounded-xl border border-mist bg-white">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-4">Documents</p>
          {project.documents.length > 0 ? (
            <div className="space-y-2">
              {project.documents.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-primary/30 transition-colors"
                >
                  <span className="text-lg">📄</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-secondary">{doc.name}</p>
                    <p className="text-xs text-slate">{doc.type} • {doc.uploadedDate}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate/60 italic">No documents uploaded</p>
          )}
        </div>
      </section>

      {/* Data Persistence Notice */}
      <section className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
        <p className="text-xs text-amber-700">
          <strong>Note:</strong> This is a demonstration project record. In production, all data would persist to the backend.
        </p>
      </section>

      {/* Navigation */}
      <section className="mt-8 mb-20">
        <div className="flex gap-4">
          <Link
            href="/stage-1/projects"
            className="px-6 py-3 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-sm font-medium text-secondary"
          >
            ← All Projects
          </Link>
          <Link
            href="/funding-roadmap"
            className="px-6 py-3 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-sm font-medium text-secondary"
          >
            Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
