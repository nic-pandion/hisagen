"use client";

import { useState } from "react";
import Link from "next/link";
import StageBreadcrumb from "../../components/StageBreadcrumb";
import { partners, Partner } from "./partner-data";

const getCategoryConfig = (category: Partner["category"]) => {
  switch (category) {
    case "Strategy":
      return { bg: "bg-indigo-50", border: "border-indigo-200", hover: "hover:border-indigo-400", badge: "bg-indigo-600", text: "text-indigo-700", chevron: "text-indigo-600" };
    case "Technology":
      return { bg: "bg-green-50", border: "border-green-200", hover: "hover:border-green-400", badge: "bg-green-600", text: "text-green-700", chevron: "text-green-600" };
    case "Operations":
      return { bg: "bg-primary/10", border: "border-primary/30", hover: "hover:border-primary", badge: "bg-primary", text: "text-primary", chevron: "text-primary" };
    case "Accreditation":
      return { bg: "bg-violet-50", border: "border-violet-200", hover: "hover:border-violet-400", badge: "bg-violet-600", text: "text-violet-700", chevron: "text-violet-600" };
    case "Marketplace":
      return { bg: "bg-cyan-50", border: "border-cyan-200", hover: "hover:border-cyan-400", badge: "bg-cyan-600", text: "text-cyan-700", chevron: "text-cyan-600" };
  }
};

export default function EcosystemPage() {
  const [openPartners, setOpenPartners] = useState<Record<string, boolean>>({});

  const togglePartner = (id: string) => {
    setOpenPartners((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Group partners by category for display
  const categories = ["Strategy", "Technology", "Accreditation", "Marketplace"] as const;

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Ecosystem"
        trail={[
          { label: "About" },
          { label: "Core Ecosystem" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          About HISAGEN
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Core Ecosystem Partners
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          The organizations and individuals driving the HISAGEN initiative - from technology and strategy to verification and market access.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-5">
        {categories.map((cat) => {
          const config = getCategoryConfig(cat);
          const count = partners.filter((p) => p.category === cat).length;
          return (
            <div key={cat} className={`p-4 rounded-xl border-2 ${config.border} ${config.bg}`}>
              <p className={`text-2xl font-bold ${config.text}`}>{count}</p>
              <p className={`text-[10px] uppercase tracking-widest ${config.text} mt-1`}>{cat}</p>
            </div>
          );
        })}
      </section>

      {/* Value Chain Overview */}
      <section className="mt-8 p-6 rounded-2xl border border-mist bg-white">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/60 mb-4">Value Chain Position</h2>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 font-medium">Locus AG (Technology)</span>
          <span className="text-slate/40">→</span>
          <span className="px-3 py-1.5 rounded-lg bg-violet-100 text-violet-700 font-medium">3Degrees (Verification)</span>
          <span className="text-slate/40">→</span>
          <span className="px-3 py-1.5 rounded-lg bg-cyan-100 text-cyan-700 font-medium">CZMP (Marketplace)</span>
        </div>
      </section>

      {/* Core Partners */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Core Partners</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">Technology and marketplace partners delivering the core HISAGEN offering.</p>

        <div className="space-y-3">
          {partners.filter(p => p.partnerType === "core").map((partner) => {
            const config = getCategoryConfig(partner.category);
            const isOpen = openPartners[partner.id];

            return (
              <div key={partner.id} className="mb-3">
                <button
                  onClick={() => togglePartner(partner.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg ${config.bg} border-2 ${config.border} ${config.hover} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 ${config.badge} text-white text-[9px] font-bold uppercase tracking-widest rounded`}>
                      {partner.category}
                    </span>
                    <div className="text-left">
                      <span className={`text-sm font-bold ${config.text}`}>{partner.name}</span>
                      <span className={`text-xs ${config.text}/70 ml-2`}>{partner.role}</span>
                    </div>
                  </div>
                  <span className={`${config.chevron} transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className={`mt-2 p-5 rounded-xl border-2 ${config.border} bg-white`}>
                    {/* Organization Summary */}
                    <div className="mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Organization Summary</p>
                      <p className="text-sm text-slate leading-relaxed">{partner.organizationSummary}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Strategic Context */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-3">Strategic Context</p>
                        <ul className="space-y-2">
                          {partner.strategicContext.map((item, idx) => (
                            <li key={idx} className="flex gap-2 text-xs text-slate">
                              <span className="text-secondary/30 font-bold shrink-0">{idx + 1}.</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Personnel */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-3">Key Personnel</p>
                        <div className="space-y-3">
                          {partner.personnel.map((person) => (
                            <div key={person.name} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                              <p className="text-xs font-bold text-secondary">{person.name}</p>
                              <p className="text-[10px] uppercase tracking-widest text-secondary/50 mb-1">{person.role}</p>
                              <p className="text-[11px] text-slate leading-relaxed">{person.bio}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Website Review */}
                    <div className="mt-6 p-4 rounded-lg bg-parchment/30 border border-mist border-dashed">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Website Analysis</p>
                      <p className="text-xs italic text-slate leading-relaxed">{partner.websiteReview}</p>
                    </div>

                    {/* Key Resources & Links */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {partner.detailPage && (
                        <Link
                          href={partner.detailPage}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 transition-colors text-xs font-bold text-white uppercase tracking-wider"
                        >
                          View Full Profile
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </Link>
                      )}
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-xs font-medium text-secondary"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Visit Website
                      </a>
                      {partner.keyResources.map((resource) => (
                        <Link
                          key={resource.title}
                          href={resource.file}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-xs font-medium text-secondary"
                        >
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${resource.format === "PDF" ? "bg-red-100 text-red-600" : "bg-secondary/10 text-secondary"}`}>
                            {resource.format}
                          </span>
                          {resource.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Consulting & Advisory Services */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Consulting & Advisory</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">Strategic and technical service providers supporting HISAGEN&apos;s development and accreditation.</p>

        <div className="space-y-3">
          {partners.filter(p => p.partnerType === "services").map((partner) => {
            const config = getCategoryConfig(partner.category);
            const isOpen = openPartners[partner.id];

            return (
              <div key={partner.id} className="mb-3">
                <button
                  onClick={() => togglePartner(partner.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg ${config.bg} border-2 ${config.border} ${config.hover} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 ${config.badge} text-white text-[9px] font-bold uppercase tracking-widest rounded`}>
                      {partner.category}
                    </span>
                    <div className="text-left">
                      <span className={`text-sm font-bold ${config.text}`}>{partner.name}</span>
                      <span className={`text-xs ${config.text}/70 ml-2`}>{partner.role}</span>
                    </div>
                  </div>
                  <span className={`${config.chevron} transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className={`mt-2 p-5 rounded-xl border-2 ${config.border} bg-white`}>
                    {/* Organization Summary */}
                    <div className="mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Organization Summary</p>
                      <p className="text-sm text-slate leading-relaxed">{partner.organizationSummary}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Strategic Context */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-3">Strategic Context</p>
                        <ul className="space-y-2">
                          {partner.strategicContext.map((item, idx) => (
                            <li key={idx} className="flex gap-2 text-xs text-slate">
                              <span className="text-secondary/30 font-bold shrink-0">{idx + 1}.</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Personnel */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-3">Key Personnel</p>
                        <div className="space-y-3">
                          {partner.personnel.map((person) => (
                            <div key={person.name} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                              <p className="text-xs font-bold text-secondary">{person.name}</p>
                              <p className="text-[10px] uppercase tracking-widest text-secondary/50 mb-1">{person.role}</p>
                              <p className="text-[11px] text-slate leading-relaxed">{person.bio}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Website Review */}
                    <div className="mt-6 p-4 rounded-lg bg-parchment/30 border border-mist border-dashed">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Website Analysis</p>
                      <p className="text-xs italic text-slate leading-relaxed">{partner.websiteReview}</p>
                    </div>

                    {/* Key Resources & Links */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-xs font-medium text-secondary"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Visit Website
                      </a>
                      {partner.keyResources.map((resource) => (
                        <Link
                          key={resource.title}
                          href={resource.file}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-xs font-medium text-secondary"
                        >
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${resource.format === "PDF" ? "bg-red-100 text-red-600" : "bg-secondary/10 text-secondary"}`}>
                            {resource.format}
                          </span>
                          {resource.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Cross-Reference Note */}
      <section className="mt-12 mb-20">
        <div className="p-6 rounded-xl border-2 border-amber-200 bg-amber-50">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">
              See Also
            </span>
          </div>
          <p className="text-sm text-amber-900">
            For <strong>contribution scenarios, value capture, and commercial relationships</strong> between partners,
            see the <Link href="/funding-roadmap" className="underline hover:text-amber-700">Capital Strategy</Link> page
            for funding landscape and partner positioning.
          </p>
        </div>
      </section>
    </div>
  );
}
