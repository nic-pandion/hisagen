import Link from "next/link";
import StageBreadcrumb from "../../components/StageBreadcrumb";

// Key assumptions with evidence - aligned with strategy.md (Feb 2026 adaptation-first)
const assumptions = [
    { assumption: "Microbial technology performs in East African soils", evidence: "Uganda NARO trials complete — 17-48% yield improvement validated", risk: "Low" },
    { assumption: "Farmers adopt when economics proven", evidence: "Indigo precedent: 75% to farmer; NARO data shows clear yield benefit", risk: "Low" },
    { assumption: "Adaptation/grant capital available at Stage 1", evidence: "$55B/yr gap, AU $100B target, CAADP 2026-2035 alignment", risk: "Low" },
    { assumption: "Carbon prices remain viable ($15+/tonne) for Stage 3+", evidence: "Current $15-40, forward $25-30", risk: "Low" },
    { assumption: "Verra/Gold Standard methodologies credible", evidence: "AgriCarbon first Africa VM0042", risk: "Low" },
    { assumption: "Pan-Africa expansion pathway viable", evidence: "Locus CEO confirmed: Uganda → East Africa → South/West/North Africa", risk: "Low" }
];

// Gap indicator component — retained for sections with genuine gaps
function GapIndicator({ title, description, needed }: { title: string; description: string; needed: string[] }) {
    return (
        <div className="p-5 rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/50">
            <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">&#9675;</span>
                <div className="flex-1">
                    <p className="text-sm font-bold text-amber-800">{title}</p>
                    <p className="text-xs text-amber-700 mt-1">{description}</p>
                    <div className="mt-3">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 mb-2">Information needed:</p>
                        <ul className="space-y-1">
                            {needed.map((item, i) => (
                                <li key={i} className="text-xs text-amber-700 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Section header with "why it matters"
function SectionHeader({ title, why }: { title: string; why: string }) {
    return (
        <div className="mb-4">
            <h2 className="text-lg font-bold text-secondary">{title}</h2>
            <p className="text-xs text-slate/60 mt-1 italic">{why}</p>
        </div>
    );
}

export default function StrategyPage() {
    return (
        <div className="mx-auto max-w-4xl text-ink font-sans">
            <StageBreadcrumb stage="Strategy & Governance" />

            {/* Page Header */}
            <header className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Program Hub</p>
                <h1 className="text-3xl font-bold text-secondary">Strategy & Governance</h1>
                <p className="mt-2 text-sm text-slate">
                    Organizational foundation that sits above Program and Project levels.
                    Farmer livelihoods and adaptation lead. Carbon is a future commercial pathway, not the mission.
                </p>
            </header>

            {/* 1. MISSION & VISION */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="1. Mission & Vision"
                    why="Why HISAGEN exists and where it's heading."
                />
                <div className="space-y-4">
                    <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-primary">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-primary mb-1">Mission</p>
                        <p className="text-sm text-secondary font-medium">
                            HISAGEN restores soil health and farmer livelihoods through proven microbial science &mdash;
                            starting with smallholder farms in Uganda, designed for scale across East Africa.
                            Healthier soil means higher yields, stronger crop resilience, lower input costs,
                            and a foundation for future carbon market participation.
                        </p>
                    </div>
                    <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-primary/50">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-primary mb-1">Vision</p>
                        <p className="text-sm text-secondary font-medium">
                            Resilient farming communities where land stewards earn sustainable income from improved yields
                            and soil health &mdash; with verified carbon revenue as an additional income stream as markets mature.
                        </p>
                    </div>
                </div>
                <p className="text-[10px] text-slate/50 mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Complete &mdash; Updated Feb 2026 (adaptation-first narrative)
                </p>
            </section>

            {/* 2. THE OPPORTUNITY */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="2. The Opportunity"
                    why="Two capital pools at different stages. Adaptation finance is available now."
                />

                {/* Adaptation Finance — NOW */}
                <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
                        Adaptation Finance (Available Now &mdash; Stage 1)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                            <p className="text-xl font-bold text-secondary">~$55B/yr</p>
                            <p className="text-[10px] text-slate">Africa&apos;s adaptation finance gap (UNEP 2025)</p>
                        </div>
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                            <p className="text-xl font-bold text-secondary">$100B</p>
                            <p className="text-[10px] text-slate">AU Kampala Declaration target by 2035</p>
                        </div>
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                            <p className="text-xl font-bold text-secondary">33M</p>
                            <p className="text-[10px] text-slate">SSA smallholder farms excluded from finance</p>
                        </div>
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                            <p className="text-xl font-bold text-secondary">4M</p>
                            <p className="text-[10px] text-slate">Uganda smallholder households</p>
                        </div>
                    </div>
                </div>

                {/* Carbon Markets — FUTURE */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">
                        Carbon Markets (Future Upside &mdash; Stage 3+)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
                        <div className="p-3 bg-white rounded border border-mist">
                            <p className="text-lg font-bold text-slate/70">$36M&rarr;$648M</p>
                            <p className="text-[10px] text-slate">Ag Carbon Market (2024-34)</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-mist">
                            <p className="text-lg font-bold text-slate/70">$15-40/t</p>
                            <p className="text-[10px] text-slate">Soil carbon premium vs $4.80 avg</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-mist">
                            <p className="text-lg font-bold text-slate/70">$139M&rarr;$234M</p>
                            <p className="text-[10px] text-slate">Africa Bio-Stimulants (2025-31)</p>
                        </div>
                    </div>
                    <p className="text-[10px] text-slate/50 mt-2 italic">
                        Carbon revenue doesn&apos;t materialise until Stage 3 (Year 9+). The adaptation case unlocks capital today.
                    </p>
                </div>
            </section>

            {/* 3. THE PROBLEM WE SOLVE */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="3. The Problem We Solve"
                    why="Four interconnected problems — soil degradation is upstream of Africa's food, migration, and urbanisation crises."
                />

                <div className="space-y-4">
                    {/* Problem 1 */}
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist">
                        <p className="text-sm font-bold text-secondary mb-1">1. Soil Degradation Is Accelerating</p>
                        <p className="text-xs text-slate">
                            Uganda&apos;s fertiliser use is <strong>3.3 kg/ha</strong> &mdash; against a global average of 134.2 kg/ha.
                            The AU&apos;s 2006 Abuja Declaration target of 50 kg N/ha remains unmet 20 years later.
                            76% yield gap vs potential. 30-40% of agricultural inputs are counterfeit.
                        </p>
                        <p className="text-xs text-slate/70 mt-2 italic">
                            Result: Food insecurity deepening for 46M people growing by 1.5M/year. Once topsoil is exhausted, murram subsoil bakes to hardpan &mdash; irreversible.
                        </p>
                    </div>

                    {/* Problem 2 */}
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist">
                        <p className="text-sm font-bold text-secondary mb-1">2. Rural Failure Drives Systemic Crisis</p>
                        <p className="text-xs text-slate">
                            When farming fails, consequences cascade: degraded soil &rarr; failed harvests &rarr; no farm income &rarr;
                            youth migrate to cities &rarr; urban population surges &rarr; housing deficit (50M units today, 130M by 2030)
                            &rarr; informal settlements expand &rarr; urban climate vulnerability increases.
                        </p>
                        <p className="text-xs text-slate/70 mt-2 italic">
                            Result: Soil degradation is not just agricultural &mdash; it is an upstream driver of Africa&apos;s housing, urbanisation, and climate adaptation crises.
                        </p>
                    </div>

                    {/* Problem 3 */}
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist">
                        <p className="text-sm font-bold text-secondary mb-1">3. Smallholders Are Excluded from Finance</p>
                        <p className="text-xs text-slate">
                            Traditional MRV costs $30-50+ per hectare. Average smallholder farm is 1-3 hectares.
                            Most agricultural finance is designed for large-scale operations.
                        </p>
                        <p className="text-xs text-slate/70 mt-2 italic">
                            Result: 33 million SSA farms locked out of both adaptation finance and carbon revenue.
                        </p>
                    </div>

                    {/* Problem 4 */}
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist">
                        <p className="text-sm font-bold text-secondary mb-1">4. Carbon Demand Is Growing (Future Opportunity)</p>
                        <p className="text-xs text-slate">
                            Corporate net-zero commitments accelerating. High-quality removal credits in short supply.
                            Agricultural carbon, properly verified, commands a premium.
                        </p>
                        <p className="text-xs text-slate/70 mt-2 italic">
                            Result: A growing market for Stage 3+ &mdash; but this is future upside, not what drives Stage 1 decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. THE HISAGEN INTERVENTION */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="4. The HISAGEN Intervention"
                    why="Four integrated layers that together deliver the full-stack solution."
                />
                <div className="space-y-2">
                    {[
                        {
                            num: "1",
                            label: "Technology",
                            detail: "Locus AG Rhizolizer microbial bio-stimulant",
                            impact: "Proven 17-48% yield improvement (NARO independent trials). Restores soil biology, drought/pest resilience, reduced fertiliser dependency.",
                        },
                        {
                            num: "2",
                            label: "Verification",
                            detail: "3Degrees platform with satellite + AI monitoring",
                            impact: "Cost-effective digital MRV at smallholder scale. Verra VM0042 methodology. Enables future carbon credits AND measurable outcomes for adaptation funders.",
                        },
                        {
                            num: "3",
                            label: "Finance",
                            detail: "4-stage Capital Continuum framework",
                            impact: "Matches capital type to project maturity. Adaptation/grant capital at Stage 1 (now); carbon/commercial capital at Stage 3+ (future).",
                        },
                        {
                            num: "4",
                            label: "Operations",
                            detail: "Deep Six partnership for local implementation",
                            impact: "Farmer aggregation, training, extension services. Last-mile delivery capacity in Uganda.",
                        },
                    ].map((item) => (
                        <div key={item.num} className="p-4 rounded-lg bg-parchment/20 border border-mist">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold text-sm mt-0.5">{item.num}</span>
                                <div>
                                    <p className="text-sm font-bold text-secondary">{item.label}: <span className="font-normal text-slate">{item.detail}</span></p>
                                    <p className="text-xs text-slate/70 mt-1">{item.impact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-slate/50 mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Complete
                </p>
            </section>

            {/* 5. THEORY OF CHANGE */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="5. Theory of Change"
                    why="The causal chain from inputs to systemic impact. Shows HOW the work creates change."
                />

                {/* Causal Chain */}
                <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">Causal Chain</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-[10px] font-bold uppercase tracking-wide text-primary mb-2">Inputs &rarr; Activities &rarr; Outputs</p>
                            <ul className="space-y-1 text-xs text-slate">
                                <li>Locus AG technology &rarr; Field trials (NARO) &rarr; Validated yield data (+17-48%)</li>
                                <li>Grant/concessional capital &rarr; Farmer aggregation &amp; training &rarr; Extension services operating</li>
                                <li>Regulatory approvals &rarr; Bio-stimulant deployment &rarr; Reduced fertilizer dependency</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-[10px] font-bold uppercase tracking-wide text-primary mb-2">Outcomes (Short &amp; Medium-Term)</p>
                            <ul className="space-y-1 text-xs text-slate">
                                <li>Healthier, resilient crops</li>
                                <li>Reduced input costs</li>
                                <li>Soil health data established</li>
                                <li>Measurable income improvement</li>
                                <li>Model replicated regionally</li>
                                <li>50,000+ hectares under management</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-[10px] font-bold uppercase tracking-wide text-primary mb-2">Impact (Long-Term)</p>
                            <ul className="space-y-1 text-xs text-slate">
                                <li>Resilient farming communities</li>
                                <li>Restored soil health at scale</li>
                                <li>Food security for millions</li>
                                <li>Carbon revenue as additional income</li>
                                <li>Reduced rural-urban migration pressure</li>
                                <li>Downstream relief on urban housing deficit</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* The Adaptation Case */}
                <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-primary mb-2">The Adaptation Case</p>
                    <p className="text-xs text-slate leading-relaxed">
                        Every step from &ldquo;healthier soil&rdquo; to &ldquo;community resilience&rdquo; is an adaptation outcome.
                        Viable farming livelihoods keep families in agriculture, reducing migration pressure on cities
                        already facing a 50-million-unit housing deficit. This positions HISAGEN not just as an agricultural
                        program but as an <strong>upstream intervention in Africa&apos;s interconnected soil, food, migration,
                        and urbanisation crises</strong> &mdash; aligned with Africa&apos;s ~$55 billion/year adaptation finance gap.
                    </p>
                </div>
                <p className="text-[10px] text-slate/50 mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Complete &mdash; Full causal chain documented (Feb 2026)
                </p>
            </section>

            {/* 6. PROJECTED OUTCOMES */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="6. Projected Outcomes"
                    why="What success looks like at each stage."
                />
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-mist">
                        <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Short-Term (Year 1-2)</p>
                        <ul className="space-y-1.5 text-xs text-slate">
                            <li>17-48% yield improvement</li>
                            <li>Reduced input costs &amp; fertiliser dependency</li>
                            <li>Soil health metrics improve (SOC baseline)</li>
                            <li>5,000 hectares under management</li>
                            <li>Farmer income data collected</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-mist">
                        <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Medium-Term (Year 3-5)</p>
                        <ul className="space-y-1.5 text-xs text-slate">
                            <li>Measurable income improvement</li>
                            <li>Scale to 50,000+ hectares</li>
                            <li>Model replicated to second geography</li>
                            <li>First carbon credit registration (VM0042)</li>
                            <li>Commercial/blended capital entering</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-mist">
                        <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Long-Term (Year 5-10)</p>
                        <ul className="space-y-1.5 text-xs text-slate">
                            <li>Diversified income (yields + carbon)</li>
                            <li>Regional soil health improvement</li>
                            <li>1M+ tCO2e verified annually</li>
                            <li>Model proven for global replication</li>
                            <li>Reduced migration pressure measurable</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 7. CONCENTRIC IMPACT LAYERS */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="7. Concentric Impact Layers"
                    why="HISAGEN's impact story has layers. Lead with the core; bring in outer layers depending on the audience."
                />
                <div className="space-y-0">
                    {/* Visual concentric representation */}
                    <div className="relative">
                        <div className="p-4 rounded-lg border-2 border-slate/20 bg-slate/5">
                            <p className="text-[10px] font-bold uppercase tracking-wide text-slate/50 mb-1">Layer 4: Urban System</p>
                            <p className="text-xs text-slate/60">Upstream relief on Africa&apos;s housing/urbanization crisis</p>
                            <div className="mt-3 p-4 rounded-lg border-2 border-slate/25 bg-white/60">
                                <p className="text-[10px] font-bold uppercase tracking-wide text-slate/60 mb-1">Layer 3: Rural Economy</p>
                                <p className="text-xs text-slate/70">Rural economic viability &rarr; reduced migration</p>
                                <div className="mt-3 p-4 rounded-lg border-2 border-primary/30 bg-primary/5">
                                    <p className="text-[10px] font-bold uppercase tracking-wide text-primary/70 mb-1">Layer 2: Social</p>
                                    <p className="text-xs text-slate">Farmer livelihoods + community resilience + food security</p>
                                    <div className="mt-3 p-4 rounded-lg border-2 border-primary bg-primary/10">
                                        <p className="text-[10px] font-bold uppercase tracking-wide text-primary mb-1">Core: Agricultural</p>
                                        <p className="text-xs text-secondary font-medium">Soil health + yields + crop resilience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Audience mapping */}
                    <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-2">Audience-Layer Mapping</p>
                        <div className="overflow-hidden rounded-lg border border-mist">
                            <table className="w-full text-xs">
                                <thead className="bg-secondary/5">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">Audience</th>
                                        <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">Layers to Emphasise</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-mist bg-white">
                                    <tr><td className="px-3 py-2 text-slate font-medium">Adaptation funders</td><td className="px-3 py-2 text-slate/70">Core + Layer 2</td></tr>
                                    <tr><td className="px-3 py-2 text-slate font-medium">DFIs / development banks</td><td className="px-3 py-2 text-slate/70">Core + Layers 2-3</td></tr>
                                    <tr><td className="px-3 py-2 text-slate font-medium">Systemic / urbanization funders</td><td className="px-3 py-2 text-slate/70">All four layers</td></tr>
                                    <tr><td className="px-3 py-2 text-slate font-medium">Government / policy makers</td><td className="px-3 py-2 text-slate/70">Layers 3-4 (rural retention, urban pressure)</td></tr>
                                    <tr><td className="px-3 py-2 text-slate font-medium">Carbon funders</td><td className="px-3 py-2 text-slate/70">Core + carbon pathway framing</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CAPITAL & POLICY CONTINUUM */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="8. Capital & Policy Continuum"
                    why="Dual framework matching capital type and policy maturity to project stage."
                />

                {/* Capital Continuum */}
                <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">Capital Continuum</p>
                    <div className="overflow-hidden rounded-lg border border-mist">
                        <table className="w-full text-xs">
                            <thead className="bg-secondary/5">
                                <tr>
                                    <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">Stage</th>
                                    <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">Capital Fit</th>
                                    <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">HISAGEN Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-mist bg-white">
                                <tr className="bg-primary/5">
                                    <td className="px-3 py-2 text-slate font-bold">1. Incubation (Yr 1-3)</td>
                                    <td className="px-3 py-2 text-slate/70">Grants, philanthropy, concessional</td>
                                    <td className="px-3 py-2 text-primary font-medium">Current position</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 text-slate font-medium">2. Implementation (Yr 4-8)</td>
                                    <td className="px-3 py-2 text-slate/70">Blended finance, carbon prepayment</td>
                                    <td className="px-3 py-2 text-slate/50">Next</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 text-slate font-medium">3. Stabilization (Yr 9-15)</td>
                                    <td className="px-3 py-2 text-slate/70">Carbon-collateralized debt, impact equity</td>
                                    <td className="px-3 py-2 text-slate/50">Future</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 text-slate font-medium">4. Maturity (Yr 16+)</td>
                                    <td className="px-3 py-2 text-slate/70">Institutional debt, green bonds</td>
                                    <td className="px-3 py-2 text-slate/50">Vision</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Policy Continuum */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">Policy Continuum</p>
                    <div className="overflow-hidden rounded-lg border border-mist">
                        <table className="w-full text-xs">
                            <thead className="bg-secondary/5">
                                <tr>
                                    <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">Stage</th>
                                    <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">Policy Focus</th>
                                    <th className="px-3 py-2 text-left font-bold uppercase tracking-wide text-secondary">HISAGEN Progress</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-mist bg-white">
                                <tr className="bg-primary/5">
                                    <td className="px-3 py-2 text-slate font-bold">1. Incubation</td>
                                    <td className="px-3 py-2 text-slate/70">Land access, regulatory clarity</td>
                                    <td className="px-3 py-2 text-slate/70">NARO partnership, MAAIF submission Jan 2026, UNBS path active</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 text-slate font-medium">2. Implementation</td>
                                    <td className="px-3 py-2 text-slate/70">Fiscal incentives, DFI engagement</td>
                                    <td className="px-3 py-2 text-slate/50">Uganda as regulatory precedent for EAC</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 text-slate font-medium">3. Stabilization</td>
                                    <td className="px-3 py-2 text-slate/70">Robust regulatory framework</td>
                                    <td className="px-3 py-2 text-slate/50">VM0042/Verra methodology selected</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 text-slate font-medium">4. Maturity</td>
                                    <td className="px-3 py-2 text-slate/70">Predictable enforcement</td>
                                    <td className="px-3 py-2 text-slate/50">Pan-Africa rollout</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-[10px] text-slate/50 mt-2 italic">
                        HISAGEN is already executing a policy continuum strategy &mdash; the Uganda-as-precedent approach for East Africa IS a policy continuum play.
                    </p>
                </div>
            </section>

            {/* 9. UGANDA CONTEXT */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-parchment/20">
                <SectionHeader
                    title="9. Uganda Context"
                    why="Why Uganda is the right starting point."
                />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center mb-4">
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">4M</p>
                        <p className="text-[10px] text-slate">Smallholder households (1-3ha avg)</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">70%+</p>
                        <p className="text-[10px] text-slate">Agricultural employment</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">80%</p>
                        <p className="text-[10px] text-slate">Arable land (35% cultivated)</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">76%</p>
                        <p className="text-[10px] text-slate">Yield gap vs potential</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">3.3 kg/ha</p>
                        <p className="text-[10px] text-slate">Fertiliser use (40x below global avg)</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">46M</p>
                        <p className="text-[10px] text-slate">Population (+1.5M/year)</p>
                    </div>
                </div>

                {/* Policy alignment */}
                <div className="p-4 bg-white rounded-lg border border-mist">
                    <p className="text-xs font-bold text-secondary mb-2">Policy Alignment (2024-2035)</p>
                    <ul className="space-y-1.5 text-xs text-slate">
                        <li><strong>AFSH Summit (Nairobi, 2024):</strong> AU member states committed to targeted soil restoration</li>
                        <li><strong>Kampala Declaration (Jan 2025):</strong> 10-year CAADP Strategy &amp; Action Plan (2026-2035)</li>
                        <li><strong>Target:</strong> Triple intra-African agricultural trade; mobilise $100B public/private investment by 2035</li>
                    </ul>
                    <p className="text-[10px] text-slate/50 mt-2 italic">
                        The CAADP roadmap recognises that &ldquo;adding chemicals to dead, carbon-depleted soil is a futile endeavour&rdquo; &mdash; directly validating HISAGEN&apos;s biological soil restoration approach.
                    </p>
                </div>
            </section>

            {/* 10. KEY ASSUMPTIONS */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="10. Key Assumptions"
                    why="What must be true for the strategy to work. Shows rigorous thinking to funders/investors."
                />
                <div className="overflow-hidden rounded-lg border border-mist">
                    <table className="w-full text-sm">
                        <thead className="bg-secondary/5">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-secondary">Assumption</th>
                                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-secondary">Evidence</th>
                                <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-secondary">Risk</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-mist bg-white">
                            {assumptions.map((a, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-3 text-slate">{a.assumption}</td>
                                    <td className="px-4 py-3 text-slate/70 text-xs">{a.evidence}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${a.risk === 'Low' ? 'bg-primary/10 text-primary' : 'bg-accent/20 text-soil-brown'}`}>
                                            {a.risk}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-[10px] text-slate/50 mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Complete &mdash; Updated Feb 2026
                </p>
            </section>

            {/* 11. GOVERNANCE */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="11. Governance"
                    why="How decisions are made. Organizational structure and accountability."
                />

                <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">Corporate Structure</p>
                    <div className="grid gap-3 md:grid-cols-2">
                        <div className="p-4 rounded-lg border border-mist bg-parchment/20">
                            <p className="text-sm font-bold text-secondary">HISAGEN USA</p>
                            <p className="text-xs text-slate mt-1">Limited company. Funding, IP, global coordination.</p>
                        </div>
                        <div className="p-4 rounded-lg border border-mist bg-parchment/20">
                            <p className="text-sm font-bold text-secondary">HISAGEN Africa</p>
                            <p className="text-xs text-slate mt-1">Limited company. Operations, regulatory, farmer rollout.</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Link href="/organization" className="text-xs text-primary hover:underline">
                            &rarr; View full team and board details
                        </Link>
                    </div>
                </div>

                <GapIndicator
                    title="Governance Framework Required"
                    description="Formal governance documentation demonstrates institutional readiness to funders."
                    needed={[
                        "Board composition and roles",
                        "Decision-making authority matrix",
                        "Reporting lines between USA and Africa entities",
                        "Advisory board (if any)",
                        "Key policies (financial, conflict of interest)"
                    ]}
                />
            </section>

            {/* Related Resources */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <h2 className="text-lg font-bold text-secondary mb-4">Related Resources</h2>
                <div className="grid gap-3 md:grid-cols-2">
                    <Link href="/organization" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        &rarr; Team & Organization
                    </Link>
                    <Link href="/capital-continuum" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        &rarr; Capital Continuum Framework
                    </Link>
                    <Link href="/program" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        &rarr; Agri-Carbon Program
                    </Link>
                    <Link href="/project/hisagen-uganda" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        &rarr; Uganda Pilot Project
                    </Link>
                    <Link href="/strategy/sustainability-framework" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        &rarr; Sustainability Framework
                    </Link>
                    <Link href="/stage-1/funding" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        &rarr; Stage 1 Funding Landscape
                    </Link>
                </div>
            </section>

            {/* Gap Summary — only Governance remains */}
            <section className="mb-8 p-6 rounded-lg border-2 border-amber-200 bg-amber-50">
                <h2 className="text-lg font-bold text-amber-800 mb-2">Gap Summary</h2>
                <p className="text-sm text-amber-700 mb-4">
                    One area still needs development to complete the Strategy & Governance framework:
                </p>
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-amber-800">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <strong>Governance:</strong> Decision-making framework, board roles, and policies
                    </div>
                </div>
                <div className="mt-4 space-y-2">
                    <p className="text-xs text-emerald-700 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <strong>Strategy:</strong> Complete &mdash; adaptation-first narrative with 4-stage capital continuum
                    </p>
                    <p className="text-xs text-emerald-700 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <strong>Theory of Change:</strong> Complete &mdash; full causal chain from inputs to systemic impact
                    </p>
                </div>
                <p className="text-xs text-amber-600 mt-4 italic">
                    Completing governance strengthens funding applications and demonstrates institutional readiness.
                </p>
            </section>

            {/* Footer */}
            <footer className="text-xs text-slate/60 border-t border-mist pt-4">
                <p>
                    <strong>Narrative:</strong> Adaptation-first. Farmer livelihoods lead. Carbon = Stage 3+ upside.
                </p>
                <p className="mt-1">
                    <strong>Sources:</strong> UNEP Adaptation Gap Report 2025, AU CAADP Declaration (Jan 2025), CCA (2026), 256 Business News (Feb 2026), World Bank, NARO Uganda.
                </p>
                <p className="mt-1">
                    For public-facing content, see the <Link href="/" className="underline">HISAGEN Website</Link>.
                </p>
            </footer>
        </div>
    );
}
