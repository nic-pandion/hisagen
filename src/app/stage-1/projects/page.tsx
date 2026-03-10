"use client";

import Link from "next/link";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { projects, getActiveProjects } from "../../../data/projects";
import {
  getProjectStatusConfig,
  getHealthConfig,
  calculateBudgetUtilization,
  getUpcomingReports,
} from "../../../types/projects";

// Summary card component
const SummaryCard = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => (
  <div className={`p-4 rounded-xl border ${color}`}>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-xs uppercase tracking-wider mt-1">{label}</p>
  </div>
);

// Format currency
const formatCurrency = (amount: number, currency: string): string => {
  return `${currency} ${amount.toLocaleString()}`;
};

// Calculate days until date
const getDaysUntil = (dateStr: string): number => {
  const date = new Date(dateStr);
  const today = new Date();
  return Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

export default function ProjectsPage() {
  const activeProjects = getActiveProjects();

  // Calculate summary counts
  const statusCounts = {
    setup: projects.filter((p) => p.status === "setup").length,
    planning: projects.filter((p) => p.status === "planning").length,
    active: projects.filter((p) => p.status === "active").length,
    reporting: projects.filter((p) => p.status === "reporting").length,
    closing: projects.filter((p) => p.status === "closing").length,
    closed: projects.filter((p) => p.status === "closed").length,
  };

  // Calculate total budget across all projects
  const totalBudget = projects.reduce((sum, p) => sum + p.totalBudget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.totalSpent, 0);

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Grant Projects"
        trail={[
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
          { label: "Funding Tracker", href: "/stage-1/funding" },
          { label: "Phases 07-11" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold leading-tight text-secondary">
              Grant Projects
            </h1>
            <p className="mt-2 text-lg text-slate">
              Track funded grants through delivery and closeout (Phases 07-11)
            </p>
          </div>
          <Link
            href="/funding-roadmap"
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-center"
          >
            View Opportunities →
          </Link>
        </div>
      </section>

      {/* Portfolio Summary */}
      <section className="mt-8 p-6 rounded-xl border border-mist bg-white">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate/60 mb-4">
          Portfolio Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <SummaryCard
            label="Setup"
            value={statusCounts.setup}
            color="border-sky-200 bg-sky-50 text-sky-700"
          />
          <SummaryCard
            label="Planning"
            value={statusCounts.planning}
            color="border-purple-200 bg-purple-50 text-purple-700"
          />
          <SummaryCard
            label="Active"
            value={statusCounts.active}
            color="border-emerald-200 bg-emerald-50 text-emerald-700"
          />
          <SummaryCard
            label="Reporting"
            value={statusCounts.reporting}
            color="border-amber-200 bg-amber-50 text-amber-700"
          />
          <SummaryCard
            label="Closing"
            value={statusCounts.closing}
            color="border-orange-200 bg-orange-50 text-orange-700"
          />
          <SummaryCard
            label="Closed"
            value={statusCounts.closed}
            color="border-slate-200 bg-slate-50 text-slate-700"
          />
        </div>

        {/* Budget Summary */}
        <div className="mt-6 pt-6 border-t border-mist">
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Total Portfolio</p>
              <p className="text-xl font-bold text-secondary">
                {projects.length} {projects.length === 1 ? "project" : "projects"}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Total Budget</p>
              <p className="text-xl font-bold text-emerald-600">
                ${totalBudget.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Total Spent</p>
              <p className="text-xl font-bold text-secondary">
                ${totalSpent.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Burn Rate</p>
              <p className="text-xl font-bold text-secondary">
                {totalBudget > 0 ? Math.round((totalSpent / totalBudget) * 100) : 0}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate/60 mb-4">
          All Projects ({projects.length})
        </h2>

        {projects.length === 0 ? (
          <div className="p-12 rounded-xl border border-dashed border-mist bg-slate-50 text-center">
            <p className="text-lg text-slate mb-2">No grant projects yet</p>
            <p className="text-sm text-slate/60 mb-4">
              Projects are created when opportunities are won and handed over.
            </p>
            <Link
              href="/funding-roadmap"
              className="text-primary hover:underline text-sm"
            >
              View active opportunities →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => {
              const statusConfig = getProjectStatusConfig(project.status);
              const healthConfig = getHealthConfig(project.healthIndicator);
              const utilization = calculateBudgetUtilization(project);
              const upcomingReports = getUpcomingReports(project, 90);
              const nextReport = upcomingReports[0];

              return (
                <Link
                  key={project.id}
                  href={`/stage-1/projects/${project.slug}`}
                  className="block p-6 rounded-xl border border-mist bg-white hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Main Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${statusConfig.bg} ${statusConfig.text}`}>
                          {statusConfig.label}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${healthConfig.bg} ${healthConfig.text}`}>
                          {healthConfig.icon} {healthConfig.label}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary">
                        {project.funderName}
                      </h3>
                      <p className="text-sm text-slate mt-1">{project.title}</p>
                      <p className="text-xs text-slate/60 mt-1">
                        {project.duration} | {project.startDate} - {project.endDate}
                      </p>
                    </div>

                    {/* Budget & Progress */}
                    <div className="flex flex-col lg:items-end gap-2">
                      <p className="text-lg font-bold text-emerald-600">
                        {formatCurrency(project.grantAmount, project.currency)}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${utilization}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate">{utilization}% utilized</span>
                      </div>
                      <p className="text-xs text-slate">
                        Progress: {project.progressPercentage}%
                      </p>
                    </div>
                  </div>

                  {/* Next Action & Upcoming Report */}
                  <div className="mt-4 pt-4 border-t border-mist flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-widest text-slate/60">Next Action</p>
                      <p className="text-sm text-secondary">{project.nextAction}</p>
                      {project.nextActionDue && (
                        <p className="text-xs text-slate mt-0.5">
                          Due: {project.nextActionDue} ({getDaysUntil(project.nextActionDue)} days)
                        </p>
                      )}
                    </div>
                    {nextReport && (
                      <div className="md:text-right">
                        <p className="text-[10px] uppercase tracking-widest text-slate/60">Next Report</p>
                        <p className="text-sm text-secondary">{nextReport.title}</p>
                        <p className="text-xs text-slate mt-0.5">
                          Due: {nextReport.dueDate} ({getDaysUntil(nextReport.dueDate)} days)
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Quick Links */}
      <section className="mt-8 mb-20">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/funding-roadmap"
            className="px-6 py-3 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-sm font-medium text-secondary"
          >
            ← Back to Opportunities
          </Link>
          <Link
            href="/funding-roadmap"
            className="px-6 py-3 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-sm font-medium text-secondary"
          >
            Funder Landscape
          </Link>
        </div>
      </section>
    </div>
  );
}
