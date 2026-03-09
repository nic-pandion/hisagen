"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";
import Image from "next/image";

// =============================================================================
// BREADCRUMB MAPPING - Route to Display Names
// =============================================================================

const routeLabels: Record<string, string> = {
  "organization": "Who We Are",
  "strategy": "Strategy & Governance",
  "sustainability-framework": "Sustainability Framework",
  "program": "Program",
  "project": "Projects",
  "hisagen-uganda": "Uganda Pilot",
  "rwanda": "Rwanda",
  "kenya": "Kenya",
  "stage-1": "Stage 1: Incubation",
  "stage-2": "Stage 2: Implementation",
  "stage-3": "Stage 3: Stabilization",
  "stage-4": "Stage 4: Maturity",
  "funding": "Funding",
  "funding-roadmap": "Funding Roadmap",
  "funder-landscape": "Funder Landscape",
  "opportunities": "Pipeline Tracker",
  "v0-grant-proposal": "Grant Proposal",
  "v0-concept-note": "Concept Note",
  "grant-progress": "Grant Progress",
  "projects": "Projects",
  "capital-continuum": "Capital Continuum",
  "grant-lifecycle": "Grant Lifecycle",
  "knowledge-base": "Knowledge Base",
  "evidence": "Evidence",
  "ecosystem": "Ecosystem",
  "locus-ag": "Locus AG",
  "comms": "Communications",
  "brand": "Brand Identity",
  "logo": "Logo Concepts",
  "assets": "Asset Library",
  "website": "Website & Digital",
  "content": "Content & Messaging",
  "social": "Social Media",
  "pr": "PR & Media",
  "collateral": "Marketing Collateral",
  "investor": "Investor Comms",
  "internal": "Internal Comms",
  "frameworks": "Frameworks",
  "base-proposal": "Base Proposal",
  "start-here": "Start Here",
  "communications": "Program Updates",
  "research": "Research",
  "milestones": "Milestones",
  "uganda-pilot": "Uganda Pilot",
  "rwanda-pilot": "Rwanda Pilot",
};

// =============================================================================
// NAVIGATION DATA — Workflow order: Strategy → Knowledge → Program → Comms → Frameworks
// =============================================================================

interface NavSubItem {
  name: string;
  href: string;
  icon: string;
  description?: string;
  status?: "active" | "planned";
  column?: string; // Used for grouped flyout layout
}

interface NavSection {
  label: string;
  href: string;
  items: NavSubItem[];
  flyoutColumns?: string[]; // Column headers for grouped flyout
}

const navSections: NavSection[] = [
  {
    label: "Strategy",
    href: "/strategy",
    items: [
      { name: "Team & Organization", href: "/organization", icon: "/icons/icon-handshake.png" },
    ],
  },
  {
    label: "Knowledge",
    href: "/knowledge-base",
    items: [
      { name: "Program Updates", href: "/knowledge-base/communications", icon: "/icons/icon-handshake.png" },
      { name: "Research", href: "/knowledge-base/research", icon: "/icons/icon-certificate.png" },
      { name: "Evidence", href: "/knowledge-base/evidence", icon: "/icons/icon-leaf-check.png" },
      { name: "Milestones", href: "/knowledge-base/milestones", icon: "/icons/icon-graph.png" },
      { name: "Ecosystem", href: "/ecosystem", icon: "/icons/icon-deedling-circular.png" },
    ],
  },
  {
    label: "Program",
    href: "/program",
    items: [
      { name: "Uganda Pilot", href: "/project/hisagen-uganda", icon: "/icons/icon-farmer.png", status: "active" },
      { name: "Rwanda", href: "/project/rwanda", icon: "/icons/icon-seedling.png", status: "planned" },
      { name: "Kenya", href: "/project/kenya", icon: "/icons/icon-leaf.png", status: "planned" },
    ],
  },
  {
    label: "Funding",
    href: "/funding-roadmap",
    flyoutColumns: ["Capital Strategy", "Grant Pipeline", "Proposals & Methodology"],
    items: [
      { name: "Funding Roadmap", href: "/funding-roadmap", icon: "/icons/icon-circular-arrows.png", description: "Full capital strategy", column: "Capital Strategy" },
      { name: "Capital Continuum", href: "/capital-continuum", icon: "/icons/icon-circular-arrows.png", description: "4-stage framework", column: "Capital Strategy" },
      { name: "Funder Landscape", href: "/stage-1/funding/funder-landscape", icon: "/icons/icon-green-hands.png", description: "12 curated funders", column: "Grant Pipeline" },
      { name: "Pipeline Tracker", href: "/stage-1/funding/opportunities", icon: "/icons/icon-graph.png", description: "Active opportunities", column: "Grant Pipeline" },
      { name: "Grant Lifecycle", href: "/grant-lifecycle", icon: "/icons/icon-graph.png", description: "11-phase methodology", column: "Grant Pipeline" },
      { name: "Concept Note", href: "/stage-1/funding/v0-concept-note", icon: "/icons/icon-certificate.png", description: "1-page elevator pitch", column: "Proposals & Methodology" },
      { name: "Grant Proposal (V1)", href: "/stage-1/funding/v0-grant-proposal", icon: "/icons/icon-certificate.png", description: "Full proposal + evidence", column: "Proposals & Methodology" },
    ],
  },
  {
    label: "Comms",
    href: "/comms",
    items: [
      { name: "Brand Identity", href: "/brand", icon: "/icons/icon-shield.png" },
      { name: "Website & Digital", href: "/comms/website", icon: "/icons/icon-globe-seedling.png" },
      { name: "Asset Library", href: "/assets", icon: "/icons/icon-leaf-check.png" },
      { name: "Logo Concepts", href: "/logo", icon: "/icons/icon-seedling.png" },
    ],
  },
  {
    label: "Frameworks",
    href: "/frameworks",
    items: [
      { name: "Sustainability Framework", href: "/strategy/sustainability-framework", icon: "/icons/icon-green-hands.png" },
      { name: "Base Proposal", href: "/frameworks/base-proposal", icon: "/icons/icon-certificate.png" },
    ],
  },
];

// Determine which section is active based on pathname (most-specific match wins)
function getActiveSection(pathname: string): string | null {
  // 1. Check all items across all sections, longest href first for specificity
  const allItems = navSections.flatMap((section) =>
    section.items.map((item) => ({ sectionLabel: section.label, href: item.href }))
  );
  allItems.sort((a, b) => b.href.length - a.href.length);

  for (const { sectionLabel, href } of allItems) {
    if (pathname === href || pathname.startsWith(href + "/")) {
      return sectionLabel;
    }
  }

  // 2. Special paths not covered by items
  if (pathname.startsWith("/stage-") && pathname.includes("/funding")) return "Funding";
  if (pathname.startsWith("/stage-")) return "Program";
  if (pathname === "/evidence") return "Knowledge";
  if (pathname.startsWith("/funding-roadmap")) return "Funding";

  // 3. Section href fallback
  for (const section of navSections) {
    if (pathname === section.href || pathname.startsWith(section.href + "/")) {
      return section.label;
    }
  }

  return null;
}

// =============================================================================
// NAV FLYOUT — Clickable label link + hover dropdown for sub-items
// =============================================================================

function NavFlyout({
  section,
  isActive,
  alignRight = false,
}: {
  section: NavSection;
  isActive: boolean;
  alignRight?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const open = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const close = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <div className="flex items-center">
        <Link
          href={section.href}
          className={[
            "text-sm font-semibold transition-colors rounded-md px-2 py-1",
            isActive ? "text-accent" : "text-white/90 hover:text-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
          ].join(" ")}
        >
          {section.label}
        </Link>
        <ChevronDownIcon
          aria-hidden="true"
          className={[
            "size-3.5 transition-transform duration-200 -ml-0.5",
            isActive ? "text-accent/60" : "text-white/40",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
        />
      </div>

      {isOpen && section.flyoutColumns ? (
        /* ── Wide grouped flyout (e.g., Funding) ── */
        <div
          className="fixed left-1/2 -translate-x-1/2 top-[52px] z-50 pt-2 w-full max-w-5xl px-4"
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <div className="rounded-xl border border-mist bg-white py-5 px-6 shadow-xl shadow-secondary/5">
            <div className="grid grid-cols-3 gap-6">
              {section.flyoutColumns.map((colName) => {
                const colItems = section.items.filter((i) => i.column === colName);
                return (
                  <div key={colName}>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-3 px-2">
                      {colName}
                    </p>
                    <div className="space-y-0.5">
                      {colItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 px-2 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-parchment/50 hover:text-primary transition-colors group"
                        >
                          <Image
                            src={item.icon}
                            alt=""
                            width={18}
                            height={18}
                            className="opacity-60 group-hover:opacity-100 transition-opacity mt-0.5"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="block">{item.name}</span>
                            {item.description && (
                              <span className="block text-[11px] text-slate/50 font-normal mt-0.5">
                                {item.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : isOpen && (
        /* ── Standard dropdown flyout ── */
        <div
          className={`absolute top-full z-50 pt-2 ${alignRight ? "right-0" : "left-0"}`}
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <div className="rounded-xl border border-mist bg-white py-3 px-2 shadow-xl shadow-secondary/5 min-w-[240px]">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-parchment/50 hover:text-primary transition-colors group"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <span>{item.name}</span>
                {item.status === "active" && (
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase tracking-wider ml-auto">
                    Active
                  </span>
                )}
                {item.status === "planned" && (
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-bold uppercase tracking-wider ml-auto">
                    Planned
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// BREADCRUMB COMPONENT
// =============================================================================

function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label =
      routeLabels[segment] ||
      segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    const isLast = index === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="flex items-center gap-1.5 py-2 text-[11px]">
        <Link
          href="/"
          className="text-slate/60 hover:text-primary transition-colors font-medium"
        >
          Home
        </Link>
        {items.map((item) => (
          <span key={item.href} className="flex items-center gap-1.5">
            <ChevronRightIcon className="h-3 w-3 text-slate/30" />
            {item.isLast ? (
              <span className="text-secondary font-semibold">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-slate/60 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// MAIN NAV COMPONENT
// =============================================================================

export default function NavEnhanced() {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);

  return (
    <header className="relative z-50 mx-auto mb-10 bg-secondary">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 py-3 px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-white hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-md"
          >
            <Image
              src="/logos/hisagen-logo-v1-light.png"
              alt="HISAGEN logo"
              width={32}
              height={32}
              className="object-contain"
            />
            HISAGEN
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="h-4 w-px bg-white/30"></span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-0.5 text-[10px] font-bold text-white/80">
              Program Hub
            </span>
          </div>
        </div>

        {/* Navigation sections */}
        <div className="hidden md:flex flex-wrap items-center gap-x-1">
          {navSections.map((section, idx) => (
            <NavFlyout
              key={section.label}
              section={section}
              isActive={activeSection === section.label}
              alignRight={idx >= navSections.length - 2}
            />
          ))}
        </div>
      </nav>

      {/* Breadcrumb Bar */}
      <div className="bg-parchment border-b border-mist">
        <Breadcrumb />
      </div>
    </header>
  );
}
