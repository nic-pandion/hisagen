import Link from "next/link";
import Image from "next/image";
import StageBreadcrumb from "../../components/StageBreadcrumb";

const frameworks = [
  {
    title: "Sustainability Framework",
    description:
      "5-Layer assessment template covering biosphere, production, social, corporate governance, and enabling systems. Provides the analytical backbone for landscape-level sustainability evaluation.",
    href: "/strategy/sustainability-framework",
    icon: "/icons/icon-green-hands.png",
    status: "active" as const,
  },
  {
    title: "Base Proposal Template",
    description:
      "Reusable grant proposal starting point designed to be adapted per project and funder. Captures HISAGEN's core narrative, evidence base, and impact methodology.",
    href: "/frameworks/base-proposal",
    icon: "/icons/icon-certificate.png",
    status: "planned" as const,
  },
];

export default function FrameworksPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Frameworks" />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Reference
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Frameworks
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Blueprints, methodologies, and tools that underpin HISAGEN&apos;s
          approach to capital, sustainability, and grant management. These are
          project-agnostic &mdash; adapt as needed for each context.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">
              {frameworks.length}
            </span>
            <span className="ml-2 text-xs text-slate/60">Frameworks</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">
              {frameworks.filter((f) => f.status === "active").length}
            </span>
            <span className="ml-2 text-xs text-slate/60">Active</span>
          </div>
        </div>
      </section>

      {/* Framework Cards */}
      <section className="mt-8 grid gap-6">
        {frameworks.map((fw) => (
          <Link
            key={fw.href}
            href={fw.href}
            className={[
              "block p-6 rounded-2xl border transition-all group",
              fw.status === "planned"
                ? "bg-white/60 border-dashed border-mist hover:border-slate/30"
                : "bg-white border-mist hover:border-primary/30 hover:shadow-md",
            ].join(" ")}
          >
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-parchment group-hover:bg-primary/10 transition-colors">
                <Image
                  src={fw.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                    {fw.title}
                  </h2>
                  {fw.status === "active" ? (
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                      Active
                    </span>
                  ) : (
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                      Planned
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  {fw.description}
                </p>
              </div>
              <span className="text-slate/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-2 text-lg">
                &rarr;
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Funding frameworks note */}
      <section className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-sm text-slate">
          <strong className="text-secondary">Looking for funding frameworks?</strong>{" "}
          Capital Continuum, Grant Lifecycle, and Funder Landscape have moved
          to the{" "}
          <Link
            href="/funding-roadmap"
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-2"
          >
            Funding
          </Link>{" "}
          section.
        </p>
      </section>

      {/* Context Note */}
      <section className="mt-4 mb-16 p-6 rounded-xl bg-parchment/30 border border-mist border-dashed text-center">
        <p className="text-sm text-slate">
          Frameworks are informed by evidence captured in the{" "}
          <Link
            href="/knowledge-base"
            className="text-secondary hover:text-primary font-medium underline underline-offset-2"
          >
            Knowledge Base
          </Link>{" "}
          and applied through{" "}
          <Link
            href="/program"
            className="text-secondary hover:text-primary font-medium underline underline-offset-2"
          >
            Program
          </Link>{" "}
          delivery.
        </p>
      </section>
    </div>
  );
}
