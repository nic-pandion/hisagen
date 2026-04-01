export default function LogoPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm opacity-80 mb-2">
            <a href="/brand" className="hover:underline">Brand</a>
            <span>/</span>
            <span>Logo Development</span>
          </div>
          <h1 className="text-4xl font-serif font-bold">Logo Design Journey</h1>
          <p className="mt-4 text-lg opacity-90">
            From initial brief through exploration to final direction
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Phase 1: Brief</span>
            <span className="text-white/40">&rarr;</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Phase 2: Exploration</span>
            <span className="text-white/40">&rarr;</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Phase 3: Hisagen Update</span>
            <span className="text-white/40">&rarr;</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Phase 4: Refinement</span>
            <span className="text-white/40">&rarr;</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Phase 5: Production</span>
            <span className="text-white/40">&rarr;</span>
            <span className="px-3 py-1 bg-white/30 border border-white/40 rounded-full text-sm font-medium">Phase 6: Final Production</span>
            <span className="text-white/40">&rarr;</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/60">Phase 7: Parked</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-4">

        {/* ============================================ */}
        {/* PHASE 1: CLIENT BRIEF (January 2026)        */}
        {/* ============================================ */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-4 bg-white border border-mist rounded-lg p-5 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold text-ink">Hisagen Brief</h2>
                <p className="text-sm text-slate">January 2026 &mdash; What HISAGEN brought to us</p>
              </div>
              <div className="text-slate ml-4 shrink-0 transition-transform group-open:rotate-180">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-10 pl-5 border-l-2 border-primary/20 ml-10">

            {/* Keir's Original Draft */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Starting Point: Keir&apos;s Original Concept</h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white rounded-lg border-2 border-primary/20 overflow-hidden">
                  <div className="bg-parchment flex items-center justify-center p-8">
                    <img src="/logos/hisagen-keir-draft.png" alt="HISAGEN Draft Logo" className="max-w-[200px] max-h-[200px] object-contain" />
                  </div>
                  <div className="p-4 border-t border-mist">
                    <p className="font-medium text-ink">HISAGEN&apos;s Original Concept</p>
                    <div className="mt-3 pt-3 border-t border-mist">
                      <p className="text-xs text-slate mb-2">At social media icon sizes:</p>
                      <div className="flex items-center gap-4">
                        {[4, 8, 12].map((size, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <img src="/logos/hisagen-keir-draft.png" alt={`Logo at ${size * 4}px`} className={`w-${size} h-${size} object-contain`} style={{ width: size * 4, height: size * 4 }} />
                            <span className="text-[10px] text-slate">{size * 4}px</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-ink">What This Captures</h4>
                  <p className="text-sm text-slate">
                    This design brings together several important HISAGEN themes: the shield and spears suggest
                    strength and protection, the healthy crop represents agriculture at the core, the sunrise
                    conveys hope and new beginnings, and the green and gold palette balances nature with value.
                  </p>
                  <h4 className="text-sm font-semibold text-ink">The Challenge</h4>
                  <p className="text-sm text-slate">
                    When a logo tries to communicate multiple ideas simultaneously, it can lose impact.
                    The combination of shield, spears, crop, and sunrise, while meaningful, creates
                    visual complexity that may read as institutional or academic rather than modern and investable.
                  </p>
                  <h4 className="text-sm font-semibold text-ink">The Opportunity</h4>
                  <p className="text-sm text-slate">
                    What if we kept the <strong>essence</strong>: the gold (value), the growth (agriculture),
                    the strength (science-backed), but expressed it through a single, simplified symbol?
                    One idea, executed with precision, that works from pitch deck to favicon.
                  </p>
                </div>
              </div>
            </section>

            {/* Client Themes */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">What HISAGEN Wants to Capture</h3>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
                <p className="text-sm text-slate mb-4">Ideas and themes from Hisagen:</p>
                <div className="flex flex-wrap gap-2">
                  {['strength / protection', 'healthy crops', 'sunrise / hope', 'green + gold', 'African identity'].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white border border-accent/40 rounded-full text-sm text-ink">{item}</span>
                  ))}
                </div>
                <p className="text-xs text-slate mt-4 italic">
                  These are valuable themes. The challenge is: how many can one logo carry before it becomes cluttered?
                </p>
              </div>
            </section>

            {/* Vision & Brand */}
            <section className="bg-white border border-mist rounded-lg p-5">
              <h3 className="text-sm font-semibold text-ink mb-3">HISAGEN Vision & Brand</h3>
              <p className="text-xs text-slate mb-3 font-medium">
                <span className="text-primary">H</span>igh <span className="text-primary">I</span>mpact <span className="text-primary">S</span>oil/Seed <span className="text-primary">A</span>pplication for <span className="text-primary">G</span>reener <span className="text-primary">E</span>nvironme<span className="text-primary">n</span>ts
              </p>
              <div className="space-y-2 text-sm text-slate">
                <p><strong className="text-ink">Vision:</strong> A regenerative agricultural economy where land stewards benefit from improved yields and a share of verified carbon revenues.</p>
                <p><strong className="text-ink">Mission:</strong> Make agricultural carbon bankable through proven soil science, rigorous digital verification, and structured blended finance.</p>
                <p><strong className="text-ink">What we do:</strong> Science-backed soil regeneration that turns degraded land into productive, carbon-storing agriculture.</p>
              </div>
            </section>
          </div>
        </details>

        {/* ============================================ */}
        {/* PHASE 2: PANDION DESIGN RESPONSE (Jan 2026)  */}
        {/* ============================================ */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-4 bg-white border border-mist rounded-lg p-5 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold text-ink">Pandion Design Response</h2>
                <p className="text-sm text-slate">January 2026 &mdash; Our analysis, brief, and early explorations</p>
              </div>
              <div className="text-slate ml-4 shrink-0 transition-transform group-open:rotate-180">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-10 pl-5 border-l-2 border-primary/20 ml-10">

            {/* Design Principles */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">What a Good Logo Needs</h3>
              <div className="bg-white border border-mist rounded-lg p-5 mb-6">
                <p className="text-sm text-slate">
                  <strong className="text-ink">Why simple?</strong> The most iconic logos in the world are almost absurdly simple:
                  a single swoosh, a bitten apple, three stripes. This is deliberate strategy. Simple logos are
                  instantly recognizable, work at any size, and become more memorable through repetition. Complex logos
                  with multiple elements (shields, crops, sunrises) try to tell the whole story in one image, but a logo
                  isn&apos;t a story. It&apos;s a signature.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { title: 'Works Small', desc: 'Must be recognizable at 16px: social media icons, favicons, app badges.' },
                  { title: 'Simple & Clean', desc: 'One idea, not five. Complexity = amateur. Simplicity = professional.' },
                  { title: 'Investor-Ready', desc: 'Must feel credible in a pitch deck. Premium, not NGO/charity.' },
                  { title: 'Distinctive', desc: "Avoid generic green clichés. Own a visual space competitors don't." },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg border border-mist p-4">
                    <p className="font-semibold text-sm text-ink">{item.title}</p>
                    <p className="text-xs text-slate mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-terracotta-50 border border-terracotta-200 rounded-lg p-5">
                <p className="font-semibold text-sm text-terracotta-700 mb-2">Watch out for</p>
                <p className="text-xs text-terracotta-600">
                  Common clichés in the agricultural/climate space: leaf icons, seedlings, globes with leaves,
                  hands cupping plants, generic green gradients, sunrise/sunset motifs. These signal &quot;another green NGO&quot;
                  rather than &quot;serious science-backed enterprise&quot;.
                </p>
              </div>
            </section>

            {/* What the Logo Should Convey */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">What the Logo Should Convey</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                <p className="text-sm text-ink mb-4">
                  HISAGEN sits between four worlds: <strong>agricultural</strong>, <strong>environmental</strong>, <strong>scientific</strong>, and <strong>commercial</strong>. The logo needs to bridge all four without defaulting to any single one.
                </p>
                <p className="text-sm font-medium text-primary">
                  One sentence test: &quot;Science-backed soil regeneration that creates value.&quot;
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Value, not just virtue', desc: "This isn't charity. It creates wealth for farmers and investors. The gold matters as much as the green." },
                  { title: 'Science, not sentiment', desc: 'Evidence-based, rigorous, credible. Microbial technology, verified carbon. Precision, not passion.' },
                  { title: "What's underneath", desc: 'Soil is the foundation. Hint at depth, layers, roots, the unseen network that makes everything above possible.' },
                  { title: 'Environmental regeneration', desc: 'Carbon capture, biodiversity increase, water retention. Real ecological benefits, not greenwashing.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg border border-mist p-4">
                    <p className="font-semibold text-sm text-ink">{item.title}</p>
                    <p className="text-xs text-slate mt-1">{item.desc}</p>
                  </div>
                ))}
                <div className="bg-white rounded-lg border border-mist p-4 md:col-span-2">
                  <p className="font-semibold text-sm text-ink">Premium, not NGO</p>
                  <p className="text-xs text-slate mt-1">Must feel investable. Clean, confident, could sit in a pitch deck next to any tech company.</p>
                </div>
              </div>
              <div className="mt-6 bg-white border border-mist rounded-lg p-5">
                <p className="text-sm text-ink font-medium">
                  &quot;What&apos;s underground creates value above.&quot;
                </p>
                <p className="text-xs text-slate mt-2">
                  That works for soil (agricultural), carbon storage (environmental), microbial networks (scientific), and wealth creation (commercial).
                </p>
              </div>
            </section>

            {/* The Brief + Designer Brief */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">The Brief</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                <p className="text-lg text-ink mb-4">
                  Create a logo that captures HISAGEN&apos;s identity: works at small sizes,
                  feels professional, and stands out in the agricultural/climate space.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['soil', 'science', 'value', 'growth', 'precision', 'African-led'].map((keyword) => (
                    <span key={keyword} className="px-3 py-1 bg-white border border-primary/30 rounded-full text-sm text-ink">{keyword}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-mist rounded-lg p-6 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate mb-2">Designer Brief</p>
                <div className="text-sm text-slate space-y-3">
                  <p><strong className="text-ink">Core concept:</strong> The hidden network beneath the surface that creates value. Think: carbon atoms, microbial connections, root nodes, soil networks.</p>
                  <p><strong className="text-ink">Visual direction:</strong> Organic molecular. A central nucleus with connected nodes, suggesting both carbon structure and living soil networks.</p>
                  <p><strong className="text-ink">Colour:</strong> Design in monochrome black first. Must work in single colour before adding Deep Green (#1F4D3A) or Gold (#C6A04A).</p>
                </div>
                <div className="pt-4 border-t border-mist">
                  <p className="text-xs font-semibold text-ink mb-2">Constraints</p>
                  <ul className="text-xs text-slate space-y-1">
                    <li>&bull; Must be legible at 16px</li>
                    <li>&bull; No leaves, seedlings, globes, or hands</li>
                    <li>&bull; No text in the mark</li>
                    <li>&bull; Should feel like a premium tech company, not an NGO</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Brand Colors */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Brand Colors</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Primary</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: 'Deep Regenerative Green', hex: '#1F4D3A' },
                      { name: 'Deep Blue-Grey', hex: '#1F2E3A' },
                      { name: 'Harvest Gold', hex: '#C6A04A' },
                    ].map((c) => (
                      <div key={c.hex} className="rounded-lg overflow-hidden border border-mist">
                        <div className="h-10" style={{ backgroundColor: c.hex }}></div>
                        <div className="p-2 bg-white">
                          <p className="text-[10px] font-semibold text-ink">{c.name}</p>
                          <p className="text-[10px] text-slate">{c.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Secondary</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: 'Black Cotton Soil', hex: '#2D2A26' },
                      { name: 'Clay Neutral', hex: '#E6DED3' },
                      { name: 'Muted Slate', hex: '#6F7C82' },
                    ].map((c) => (
                      <div key={c.hex} className="rounded-lg overflow-hidden border border-mist">
                        <div className="h-10" style={{ backgroundColor: c.hex }}></div>
                        <div className="p-2 bg-white">
                          <p className="text-[10px] font-semibold text-ink">{c.name}</p>
                          <p className="text-[10px] text-slate">{c.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Keywords */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {['soil', 'seed', 'microbial', 'nodes', 'roots', 'carbon', 'network', 'agriculture', 'prosperity', 'science', 'gold', 'underground', 'layers', 'nucleus', 'emergence'].map((keyword) => (
                  <span key={keyword} className="px-3 py-1 bg-white border border-mist rounded-full text-sm text-ink">{keyword}</span>
                ))}
              </div>
            </section>

            {/* Early Concept Explorations — Nested Accordion */}
            <section>
              <details className="group/inner">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between bg-white border border-mist rounded-lg p-5 hover:border-primary/30 transition-colors">
                    <div>
                      <h3 className="text-base font-serif font-semibold text-ink">Early Concept Explorations</h3>
                      <p className="text-sm text-slate mt-1">
                        4 directions + working logo developed from Keir&apos;s original shield brief.
                        <span className="text-xs text-slate/60 ml-2">Superseded by Phase 3 direction.</span>
                      </p>
                    </div>
                    <div className="text-slate ml-4 shrink-0 transition-transform group-open/inner:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </summary>

                <div className="mt-4 space-y-6">
                  {/* Working Logo: Cellular Sequester */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">Working Concept: Cellular Sequester</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg border-2 border-primary/30 overflow-hidden">
                        <div className="aspect-square bg-parchment flex items-center justify-center p-8">
                          <img src="/logos/cellular-sequester-color.png" alt="HISAGEN Working Logo — Cellular Sequester" className="max-w-[200px] max-h-[200px] object-contain" />
                        </div>
                        <div className="p-4 border-t border-mist">
                          <p className="font-medium text-ink">Cellular Sequester</p>
                          <p className="text-xs text-slate mt-1">Green outer ring, gold inner nodes. Simple, distinctive, scalable.</p>
                          <div className="mt-3 pt-3 border-t border-mist">
                            <p className="text-xs text-slate mb-2">At small sizes:</p>
                            <div className="flex items-center gap-4">
                              {[4, 8, 12].map((size, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <img src="/logos/cellular-sequester-color.png" alt={`Logo at ${size * 4}px`} style={{ width: size * 4, height: size * 4 }} className="object-contain" />
                                  <span className="text-[10px] text-slate">{size * 4}px</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg border border-mist p-4">
                          <p className="text-sm font-medium text-ink mb-2">What it captures</p>
                          <ul className="text-xs text-slate space-y-1">
                            <li>&bull; Cellular/molecular: scientific credibility</li>
                            <li>&bull; Green ring: environmental, regeneration</li>
                            <li>&bull; Gold nodes: value, prosperity</li>
                            <li>&bull; Enclosed form: containment, sequestration</li>
                          </ul>
                        </div>
                        <div className="bg-amber-50 rounded-lg border border-amber-200 p-4">
                          <p className="text-sm font-medium text-amber-800 mb-2">Status: Early Exploration</p>
                          <p className="text-xs text-amber-700">
                            This concept was developed from the original shield brief before Keir shared his
                            Feb 12 direction. The design process has since evolved &mdash; see Phase 3.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4 Concept Directions */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">4 Concept Directions Explored</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { src: '/logos/germination-core.jpeg', alt: 'Germination Core', title: '1. Seed / Growth', desc: 'Emergence, potential, regeneration.', tag: 'Agricultural.' },
                        { src: '/logos/bio-node-network.jpeg', alt: 'Bio-Node Network', title: '2. Network / Connection', desc: 'Root systems, mycelium, molecular bonds.', tag: 'Scientific.' },
                        { src: '/logos/cellular-sequester.jpeg', alt: 'Cellular Sequester', title: '3. Cellular / Molecular', desc: 'Carbon atoms, microscopic world.', tag: 'Scientific.' },
                        { src: '/logos/catalyst-cluster.jpeg', alt: 'Catalyst Cluster', title: '4. Layers / Depth', desc: 'Soil strata, foundation of value.', tag: 'Environmental.' },
                      ].map((concept) => (
                        <div key={concept.alt} className="bg-white rounded-lg border border-mist overflow-hidden">
                          <div className="aspect-square bg-parchment flex items-center justify-center p-6">
                            <img src={concept.src} alt={concept.alt} className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="p-3 border-t border-mist">
                            <p className="font-semibold text-xs text-ink">{concept.title}</p>
                            <p className="text-[10px] text-slate mt-1">{concept.desc} <em>{concept.tag}</em></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </section>
          </div>
        </details>

        {/* ============================================ */}
        {/* PHASE 3: CLIENT DIRECTION UPDATE (Feb 2026)  */}
        {/* ============================================ */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-4 bg-white border border-mist rounded-lg p-5 hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold text-ink">Hisagen Direction Update</h2>
                <p className="text-sm text-slate">February 12, 2026 &mdash; Keir shared new logo concepts, shifting the visual direction</p>
              </div>
              <div className="text-slate ml-4 shrink-0 transition-transform group-open:rotate-180">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-8 pl-5 border-l-2 border-accent/30 ml-10">
            <section>
              <div className="bg-white border border-mist rounded-lg p-5 mb-6">
                <p className="text-sm text-slate">
                  Keir shared 4 AI-generated concepts exploring <strong className="text-ink">seeds, soil, root structures, and healthy plants</strong> in
                  a palette of light brown, bright green, and harvest gold. These represent a shift from the abstract molecular
                  direction (Phase 2) toward a more literal, nature-based visual language centred on root systems.
                </p>
                <p className="text-xs text-slate mt-2 italic">
                  Source: Keir&apos;s email of 12 February 2026 (with NARO trial results and invoice request)
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { src: '/logos/keir-feb12-roots-circle.png', alt: 'Keir concept: seedling with roots in circle', title: 'Roots Circle', desc: 'Seedling + root system in open circle. Green/brown.' },
                  { src: '/logos/keir-feb12-teardrop-gold.png', alt: 'Keir concept: seedling in gold teardrop', title: 'Gold Teardrop', desc: 'Seed shape with gold border, single seedling + roots.' },
                  { src: '/logos/keir-feb12-teardrop-brown.png', alt: 'Keir concept: seedlings in brown teardrop', title: 'Brown Teardrop', desc: 'Multiple seedlings, brown border, growth emphasis.' },
                  { src: '/logos/keir-feb12-variations.png', alt: 'Keir concept: HISAGEN logo variations with text', title: 'Branded Variations', desc: 'Grass + roots with HISAGEN text. Three layout sizes.' },
                ].map((concept) => (
                  <div key={concept.alt} className="bg-white rounded-lg border-2 border-accent/30 overflow-hidden">
                    <div className="aspect-square bg-parchment flex items-center justify-center p-4">
                      <img src={concept.src} alt={concept.alt} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="p-3 border-t border-mist">
                      <p className="font-semibold text-xs text-ink">{concept.title}</p>
                      <p className="text-[10px] text-slate mt-1">{concept.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-5">
                <p className="text-sm font-semibold text-ink mb-2">Direction Signal</p>
                <p className="text-sm text-slate">
                  All 4 concepts centre on <strong className="text-ink">above/below ground duality</strong> &mdash; seedlings above, roots below.
                  This reinforces the &quot;what&apos;s underground creates value above&quot; theme from Phase 2.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-xs font-semibold text-ink mb-2">What This Means for the Design</p>
                  <ul className="text-xs text-slate space-y-1">
                    <li>&bull; <strong className="text-ink">Client prefers literal over abstract</strong> &mdash; roots and seedlings rather than molecular nodes</li>
                    <li>&bull; <strong className="text-ink">Above/below composition</strong> is clearly the direction &mdash; consistent across all 4 concepts</li>
                    <li>&bull; <strong className="text-ink">Enclosed forms</strong> (circle, teardrop) &mdash; containment, completeness</li>
                    <li>&bull; <strong className="text-ink">Palette confirmed</strong> &mdash; green, brown, gold (no blue, no grey)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </details>

        {/* ============================================ */}
        {/* PHASE 4: CURRENT DIRECTION & NEXT STEPS      */}
        {/* ============================================ */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-4 bg-white border border-mist rounded-lg p-5 hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold text-ink">Concept Selection & Refinement</h2>
                <p className="text-sm text-slate">February 2026 &mdash; Roots Circle selected, v1 full colour produced</p>
              </div>
              <div className="text-slate ml-4 shrink-0 transition-transform group-open:rotate-180">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-8 pl-5 border-l-2 border-accent/30 ml-10">

            {/* Status */}
            <section>
              <div className="bg-primary/5 border-2 border-primary/30 rounded-lg p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Current Status</p>
                <h3 className="text-lg font-semibold text-ink mb-3">Concept Selected &mdash; Refinement In Progress</h3>
                <p className="text-sm text-slate mb-4">
                  Proposal (&pound;1,500 total, &pound;250 logo pack) sent to Keir on February 16.
                  While awaiting formal acceptance, Pandion is progressing the design work to have a working draft ready.
                </p>
                <div className="bg-white/60 rounded-lg p-4">
                  <p className="text-xs font-semibold text-ink mb-2">Design Approach</p>
                  <p className="text-xs text-slate">
                    Take the <strong className="text-ink">above/below ground duality</strong> from Keir&apos;s selected concept and
                    apply the professional design principles from Phase 2: simplicity, scalability, investor-readiness.
                    The result should feel like a refined version of Keir&apos;s vision &mdash; bolder, cleaner, and production-ready.
                  </p>
                </div>
              </div>
            </section>

            {/* Concept Selection */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Concept Selection</h3>
              <p className="text-sm text-slate mb-4">
                After reviewing all four of Keir&apos;s February 12 concepts, the <strong className="text-ink">Roots Circle</strong> was
                selected as the primary direction for refinement.
              </p>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="bg-white rounded-lg border-2 border-primary/30 overflow-hidden">
                  <div className="bg-parchment flex items-center justify-center p-8">
                    <img src="/logos/keir-feb12-roots-circle.png" alt="Selected concept: Roots Circle" className="max-w-[200px] max-h-[200px] object-contain" />
                  </div>
                  <div className="p-4 border-t border-mist">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Selected</span>
                      <p className="font-medium text-ink">Roots Circle</p>
                    </div>
                    <p className="text-xs text-slate">Seedling with root system in open circle. Green/brown palette.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-sm font-semibold text-ink mb-2">Why This Concept</p>
                    <ul className="text-xs text-slate space-y-1">
                      <li>&bull; <strong className="text-ink">Clearest composition</strong> &mdash; immediate above/below ground duality</li>
                      <li>&bull; <strong className="text-ink">Open circle</strong> &mdash; containment without feeling closed or heavy</li>
                      <li>&bull; <strong className="text-ink">Single seedling</strong> &mdash; focus and clarity vs. the multi-plant alternatives</li>
                      <li>&bull; <strong className="text-ink">Root network</strong> &mdash; directly captures &quot;what&apos;s underground creates value above&quot;</li>
                      <li>&bull; <strong className="text-ink">Most scalable</strong> &mdash; strong silhouette that will work at small sizes</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-sm font-semibold text-ink mb-2">Refinement Brief</p>
                    <ul className="text-xs text-slate space-y-1">
                      <li>&bull; <strong className="text-ink">Simplify the grass line</strong> &mdash; replace with a single clean horizontal divider</li>
                      <li>&bull; <strong className="text-ink">Bolder roots</strong> &mdash; reduce to 5&ndash;7 confident strokes, not fine/wispy</li>
                      <li>&bull; <strong className="text-ink">Flat colour</strong> &mdash; remove gradients, single tones only</li>
                      <li>&bull; <strong className="text-ink">Cleaner seedling</strong> &mdash; 2&ndash;3 leaves max, bold shapes</li>
                      <li>&bull; <strong className="text-ink">Brand palette</strong> &mdash; #1F4D3A green, #C6A04A gold accent, #2D2A26 soil</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Analysis */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Design Analysis: Roots Circle</h3>
              <p className="text-sm text-slate mb-4">
                A brief reflection on the concept before refinement &mdash; what it communicates, where it&apos;s strong, and what we&apos;d sharpen.
              </p>

              <div className="space-y-4">
                {/* What We See */}
                <div className="bg-white border border-mist rounded-lg p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">What We See</p>
                  <p className="text-sm text-slate">
                    A single seedling emerging from soil, with a visible root network beneath. An open circle frames the composition,
                    creating a sense of completeness without enclosure. The design reads in two halves: <strong className="text-ink">life above</strong> (green,
                    growth, the visible result) and <strong className="text-ink">value below</strong> (brown, roots, the hidden foundation). The grass line
                    along the soil horizon anchors the division.
                  </p>
                </div>

                {/* Strengths + To Sharpen — side by side */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-primary/20 rounded-lg p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Strengths</p>
                    <ul className="text-xs text-slate space-y-2">
                      <li>&bull; <strong className="text-ink">Immediate narrative</strong> &mdash; you understand what HISAGEN does within a second</li>
                      <li>&bull; <strong className="text-ink">Above/below duality</strong> &mdash; mirrors the business model: soil science below creates agricultural value above</li>
                      <li>&bull; <strong className="text-ink">Open circle</strong> &mdash; suggests a cycle (regeneration) without feeling like a seal or badge</li>
                      <li>&bull; <strong className="text-ink">Emotional warmth</strong> &mdash; the seedling conveys hope and beginning, which resonates with land stewards</li>
                      <li>&bull; <strong className="text-ink">Compositional balance</strong> &mdash; the root spread below mirrors the leaf spread above, creating natural symmetry</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-accent/30 rounded-lg p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">To Sharpen</p>
                    <ul className="text-xs text-slate space-y-2">
                      <li>&bull; <strong className="text-ink">Grass detail</strong> &mdash; the individual blades add visual noise at small sizes; a clean horizon line would be bolder</li>
                      <li>&bull; <strong className="text-ink">Root complexity</strong> &mdash; too many fine branches; fewer, more confident strokes would read better at 32px</li>
                      <li>&bull; <strong className="text-ink">Gradient layers</strong> &mdash; the brown tones shift subtly; flat colour would be cleaner and more modern</li>
                      <li>&bull; <strong className="text-ink">Leaf detail</strong> &mdash; the gold accent on one leaf tip is a nice touch but barely registers; could be more intentional</li>
                      <li>&bull; <strong className="text-ink">Circle gap</strong> &mdash; the break at top-right is interesting but slightly ambiguous; could be made more deliberate</li>
                    </ul>
                  </div>
                </div>

                {/* Design Rationale */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Refinement Rationale</p>
                  <p className="text-sm text-slate mb-3">
                    The concept already captures what HISAGEN is about. The refinement isn&apos;t about changing the idea &mdash;
                    it&apos;s about <strong className="text-ink">removing everything that doesn&apos;t serve it</strong>.
                  </p>
                  <p className="text-sm text-slate">
                    A simpler version of this same composition &mdash; fewer roots, cleaner leaves, flat colour, deliberate use
                    of the gold accent &mdash; would give Keir&apos;s vision the production quality it needs. It should work
                    at favicon size, sit confidently in a pitch deck, and feel like a mark that belongs to a science-backed
                    enterprise, not a community garden.
                  </p>
                </div>
              </div>
            </section>

            {/* Refined Drafts */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Refined Drafts</h3>
              <p className="text-sm text-slate mb-4">
                Working versions developed from the Roots Circle concept, applying the refinement brief above.
              </p>

              {/* Draft v1 */}
              <div className="bg-white border border-mist rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-parchment flex items-center justify-center p-8 border-r border-mist">
                    <img src="/logos/hisagen-logo-v1-full-colour.png" alt="HISAGEN Logo v1 — Full Colour" className="max-w-[280px] max-h-[280px] object-contain" />
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">v1</span>
                      <p className="font-medium text-ink">Full Colour (Cleaned)</p>
                    </div>
                    <p className="text-xs text-slate">
                      February 21, 2026 &mdash; Refined from Keir&apos;s Roots Circle, colour-corrected and cleaned in GIMP.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-ink mb-1">Work Done</p>
                        <ul className="text-xs text-slate space-y-1">
                          <li>&bull; Open circle with tapered stroke (organic, not rigid)</li>
                          <li>&bull; Arched soil line following natural circle curvature</li>
                          <li>&bull; Bolder, simplified root structure</li>
                          <li>&bull; Flat colour &mdash; no gradients</li>
                          <li>&bull; Gold accent on leaf + central root (above/below connection)</li>
                          <li>&bull; Brand palette applied (#1F4D3A, #C6A04A, #2D2A26)</li>
                          <li>&bull; Background removed, anti-aliasing fringe cleaned</li>
                          <li>&bull; Transparent PNG export</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink mb-1">Remaining</p>
                        <ul className="text-xs text-slate space-y-1">
                          <li>&bull; Light version (for dark backgrounds)</li>
                          <li>&bull; Dark version (single colour)</li>
                          <li>&bull; SVG vector trace</li>
                          <li>&bull; Size exports (512px, 256px, 128px per variation)</li>
                          <li>&bull; Favicon (ICO/PNG)</li>
                        </ul>
                      </div>
                    </div>
                    {/* Size test */}
                    <div className="pt-3 border-t border-mist">
                      <p className="text-[10px] text-slate mb-2">Size test:</p>
                      <div className="flex items-end gap-4">
                        {[{ px: 128, label: '128px' }, { px: 64, label: '64px' }, { px: 32, label: '32px' }, { px: 16, label: '16px' }].map((size) => (
                          <div key={size.px} className="flex flex-col items-center gap-1">
                            <img src="/logos/hisagen-logo-v1-full-colour.png" alt={`Logo v1 at ${size.label}`} style={{ width: size.px, height: size.px }} className="object-contain" />
                            <span className="text-[9px] text-slate">{size.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Deliverables */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Logo Pack Deliverables</h3>
              <p className="text-sm text-slate mb-4">Per proposal (HISAGEN-PROPOSAL-2026-02):</p>
              <div className="bg-white border border-mist rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-parchment border-b border-mist">
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Deliverable</th>
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    {[
                      { item: 'Concept refinement', detail: "From Keir's Roots Circle concept (Feb 12)" },
                      { item: '3 logo variations', detail: 'Full colour, light version, dark version' },
                      { item: 'SVG (vector)', detail: '3 files — scalable to any size, for print and digital' },
                      { item: 'PNG (transparent)', detail: '9 files — 512px, 256px, 128px per variation' },
                      { item: 'Favicon', detail: '1 file — ICO/PNG for browser tab' },
                    ].map((row) => (
                      <tr key={row.item}>
                        <td className="p-3 font-medium text-ink">{row.item}</td>
                        <td className="p-3 text-slate">{row.detail}</td>
                      </tr>
                    ))}
                    <tr className="bg-parchment">
                      <td className="p-3 font-bold text-ink">Total</td>
                      <td className="p-3 font-bold text-ink">3 SVGs + 9 PNGs + 1 favicon</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Timeline */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Timeline</h3>
              <div className="bg-white border border-mist rounded-lg p-5">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">14</p>
                    <p className="text-[10px] text-slate uppercase tracking-wider">days</p>
                  </div>
                  <div>
                    <p className="text-sm text-ink font-medium">From proposal acceptance to logo pack delivery</p>
                    <p className="text-xs text-slate mt-1">Logo pack is the first deliverable. Website go-live follows within 30 days.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </details>

        {/* ============================================ */}
        {/* PHASE 5: LOGO PACK PRODUCTION               */}
        {/* ============================================ */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-4 bg-white border-2 border-accent/40 rounded-lg p-5 hover:border-accent transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0">5</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold text-ink">Logo Pack Production</h2>
                <p className="text-sm text-slate">February 2026 &mdash; Colour variants, vector conversion, export pipeline</p>
              </div>
              <div className="text-slate ml-4 shrink-0 transition-transform group-open:rotate-180">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-8 pl-5 border-l-2 border-accent/30 ml-10">

            {/* Status */}
            <section>
              <div className="bg-primary/5 border-2 border-primary/30 rounded-lg p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Current Status</p>
                <h3 className="text-lg font-semibold text-ink mb-3">Logo Pack Complete &mdash; All Variants &amp; Exports Done</h3>
                <p className="text-sm text-slate">
                  All three colour variations produced, vector files traced, sized exports generated, and favicon created.
                  The complete logo pack is ready for delivery. Each design decision below is based on
                  testing the logo in its actual usage contexts.
                </p>
              </div>
            </section>

            {/* Why 3 Variations */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Why Three Variations?</h3>
              <p className="text-sm text-slate mb-4">
                A professional logo pack isn&apos;t just the same logo saved three times. Each variation is designed for
                a specific context where the others would fail.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-mist rounded-lg overflow-hidden">
                  <div className="bg-parchment flex items-center justify-center p-6 h-32">
                    <img src="/logos/hisagen-logo-v1-full-colour.png" alt="Full colour on light background" className="max-w-[80px] max-h-[80px] object-contain" />
                  </div>
                  <div className="p-4 border-t border-mist">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Done</span>
                      <p className="font-medium text-sm text-ink">Full Colour</p>
                    </div>
                    <p className="text-xs text-slate">For light backgrounds: documents, pitch decks, white paper, parchment sections.</p>
                  </div>
                </div>
                <div className="bg-white border border-mist rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center p-6 h-32" style={{ backgroundColor: '#1F4D3A' }}>
                    <img src="/logos/hisagen-logo-v1-light.png" alt="Light variant on dark background" className="max-w-[80px] max-h-[80px] object-contain" />
                  </div>
                  <div className="p-4 border-t border-mist">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Done</span>
                      <p className="font-medium text-sm text-ink">Light Version</p>
                    </div>
                    <p className="text-xs text-slate">For dark backgrounds: website headers, footers, dark sections, social media overlays.</p>
                  </div>
                </div>
                <div className="bg-white border border-mist rounded-lg overflow-hidden">
                  <div className="bg-white flex items-center justify-center p-6 h-32">
                    <img src="/logos/hisagen-logo-v1-dark.png" alt="Dark variant on white background" className="max-w-[80px] max-h-[80px] object-contain" />
                  </div>
                  <div className="p-4 border-t border-mist">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Done</span>
                      <p className="font-medium text-sm text-ink">Dark Version</p>
                    </div>
                    <p className="text-xs text-slate">For single-colour use: letterheads, fax, watermarks, embossing, print on coloured stock.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Context Testing */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Context Testing: What We Observed</h3>
              <p className="text-sm text-slate mb-4">
                Before choosing colours for the light variant, we placed the v1 full colour logo into the actual website
                environments where it will be used. This is evidence-based design &mdash; decisions driven by observation, not assumption.
              </p>

              <div className="space-y-4">
                {/* Observation 1 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-mist">
                    <div className="flex items-center gap-3 p-4" style={{ backgroundColor: '#1F2E3A' }}>
                      <img src="/logos/hisagen-logo-v1-full-colour.png" alt="Logo on dark blue-grey" className="w-8 h-8 object-contain" />
                      <span className="text-white font-bold text-sm">HISAGEN</span>
                      <span className="text-white/30 text-[10px] ml-auto">Portal nav</span>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-xs text-slate"><strong className="text-ink">Dark blue-grey (#1F2E3A):</strong> Logo reads as a shape. Gold accent visible. Green elements muted but present.</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-mist">
                    <div className="flex items-center gap-3 p-4" style={{ backgroundColor: '#1F4D3A' }}>
                      <img src="/logos/hisagen-logo-v1-full-colour.png" alt="Logo on deep green" className="w-8 h-8 object-contain" />
                      <span className="text-white font-bold text-sm">HISAGEN</span>
                      <span className="text-white/30 text-[10px] ml-auto">Website nav</span>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-xs text-slate"><strong className="text-ink">Deep green (#1F4D3A):</strong> Green elements disappear into background. Only gold and brown roots remain visible. Light variant essential.</p>
                    </div>
                  </div>
                </div>

                {/* Key finding */}
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Key Finding</p>
                  <p className="text-sm text-slate">
                    On both dark backgrounds, the <strong className="text-ink">Harvest Gold (#C6A04A)</strong> is the element that carries the
                    most visual weight. The green circle outline and leaves become near-invisible on the deep green.
                    This directly informed the light variant colour strategy.
                  </p>
                </div>
              </div>
            </section>

            {/* Light Variant Design Decision */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Light Variant: Design Decision</h3>

              <div className="bg-white border border-mist rounded-lg p-6 space-y-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Chosen Direction: White + Gold</p>
                  <p className="text-sm text-slate mb-3">
                    Rather than making a fully white logo (which would lose all character) or trying to preserve greens and browns
                    (which fail on dark backgrounds), we chose a <strong className="text-ink">white structure with gold accent</strong> approach.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-xs font-semibold text-ink mb-2">White (#FFFFFF)</p>
                    <ul className="text-xs text-slate space-y-1">
                      <li>&bull; Circle outline</li>
                      <li>&bull; Seedling stem + leaves</li>
                      <li>&bull; Roots</li>
                      <li>&bull; Soil/horizon line</li>
                    </ul>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <p className="text-xs font-semibold text-ink mb-2">Gold (#C6A04A)</p>
                    <ul className="text-xs text-slate space-y-1">
                      <li>&bull; Leaf accent (signature element)</li>
                      <li>&bull; Central root (signature element)</li>
                      <li>&bull; Composition, proportions, spacing unchanged</li>
                      <li>&bull; Transparent background</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-parchment rounded-lg p-4">
                  <p className="text-xs font-semibold text-ink mb-2">Why This Works</p>
                  <ul className="text-xs text-slate space-y-2">
                    <li>&bull; <strong className="text-ink">Gold becomes the signature</strong> &mdash; on dark backgrounds, the gold soil line and accents become the defining visual element, reinforcing HISAGEN&apos;s &quot;value from the ground up&quot; narrative</li>
                    <li>&bull; <strong className="text-ink">White preserves structure</strong> &mdash; the circle, seedling, and roots remain fully legible without competing with the background</li>
                    <li>&bull; <strong className="text-ink">Two-tone is elegant</strong> &mdash; white + gold reads as premium, clean, investor-ready &mdash; the same qualities we defined in Phase 2</li>
                    <li>&bull; <strong className="text-ink">Consistency with full colour</strong> &mdash; the gold elements are in the same positions as the full colour version, so the logo reads as the same mark in both variants</li>
                  </ul>
                </div>

                {/* Actual light variant preview */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">Light Variant: Actual Result</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-6 flex items-center justify-center h-32" style={{ backgroundColor: '#1F4D3A' }}>
                      <div className="flex items-center gap-3">
                        <img src="/logos/hisagen-logo-v1-light.png" alt="Light variant on deep green" className="w-12 h-12 object-contain" />
                        <span className="text-white font-bold">HISAGEN</span>
                      </div>
                    </div>
                    <div className="rounded-lg p-6 flex items-center justify-center h-32" style={{ backgroundColor: '#1F2E3A' }}>
                      <div className="flex items-center gap-3">
                        <img src="/logos/hisagen-logo-v1-light.png" alt="Light variant on dark blue-grey" className="w-12 h-12 object-contain" />
                        <span className="text-white font-bold">HISAGEN</span>
                      </div>
                    </div>
                  </div>
                  {/* Size test */}
                  <div className="mt-4 pt-3 border-t border-mist">
                    <p className="text-[10px] text-slate mb-2">Size test on dark background:</p>
                    <div className="rounded-lg p-4 flex items-end gap-6" style={{ backgroundColor: '#1F4D3A' }}>
                      {[{ px: 128, label: '128px' }, { px: 64, label: '64px' }, { px: 32, label: '32px' }, { px: 16, label: '16px' }].map((size) => (
                        <div key={size.px} className="flex flex-col items-center gap-1">
                          <img src="/logos/hisagen-logo-v1-light.png" alt={`Light variant at ${size.label}`} style={{ width: size.px, height: size.px }} className="object-contain" />
                          <span className="text-[9px] text-white/60">{size.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dark Variant */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Dark Variant: Monochrome</h3>
              <div className="bg-white border border-mist rounded-lg p-6 space-y-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Chosen Direction: Single Colour</p>
                  <p className="text-sm text-slate mb-3">
                    The dark variant reduces the logo to a single colour for contexts where colour reproduction
                    is limited or where visual simplicity is needed. Every element &mdash; circle, seedling, roots,
                    soil line &mdash; becomes <strong className="text-ink">Black Cotton Soil (#2D2A26)</strong>. The logo reads
                    purely through its silhouette.
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-parchment">
                    <img src="/logos/hisagen-logo-v1-dark.png" alt="Dark variant" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="text-xs font-semibold text-ink">Black Cotton Soil</p>
                      <p className="text-[10px] text-slate">#2D2A26</p>
                    </div>
                  </div>
                </div>

                {/* Actual dark variant preview */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">Dark Variant: Actual Result</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-6 flex items-center justify-center h-32 bg-white border border-mist">
                      <div className="flex items-center gap-3">
                        <img src="/logos/hisagen-logo-v1-dark.png" alt="Dark variant on white" className="w-12 h-12 object-contain" />
                        <span className="font-bold" style={{ color: '#2D2A26' }}>HISAGEN</span>
                      </div>
                    </div>
                    <div className="rounded-lg p-6 flex items-center justify-center h-32 bg-parchment border border-mist">
                      <div className="flex items-center gap-3">
                        <img src="/logos/hisagen-logo-v1-dark.png" alt="Dark variant on parchment" className="w-12 h-12 object-contain" />
                        <span className="font-bold" style={{ color: '#2D2A26' }}>HISAGEN</span>
                      </div>
                    </div>
                  </div>
                  {/* Size test */}
                  <div className="mt-4 pt-3 border-t border-mist">
                    <p className="text-[10px] text-slate mb-2">Size test on white background:</p>
                    <div className="rounded-lg p-4 flex items-end gap-6 bg-white border border-mist">
                      {[{ px: 128, label: '128px' }, { px: 64, label: '64px' }, { px: 32, label: '32px' }, { px: 16, label: '16px' }].map((size) => (
                        <div key={size.px} className="flex flex-col items-center gap-1">
                          <img src="/logos/hisagen-logo-v1-dark.png" alt={`Dark variant at ${size.label}`} style={{ width: size.px, height: size.px }} className="object-contain" />
                          <span className="text-[9px] text-slate/60">{size.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate">
                  <strong className="text-ink">Use cases:</strong> Letterheads, single-colour print, embossing, watermarks, fax, engraving.
                </p>
              </div>
            </section>

            {/* Logomark vs Lockup */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Design Note: Logomark vs Logo Lockup</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <p className="text-sm text-slate">
                  You may notice the logo pack doesn&apos;t include the &quot;HISAGEN&quot; text alongside the icon. This is intentional
                  and follows industry standard practice. Professional logo systems separate three distinct assets:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-mist">
                    <div className="bg-parchment rounded-lg p-4 flex items-center justify-center h-20 mb-3">
                      <img src="/logos/hisagen-logo-v1-full-colour.png" alt="Logomark" className="w-12 h-12 object-contain" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Logomark</p>
                    <p className="text-xs text-slate">The icon on its own. Used for favicons, app icons, social avatars, watermarks, small-space contexts.</p>
                    <p className="text-[10px] text-primary mt-2 font-medium">Included in this pack</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-mist">
                    <div className="bg-parchment rounded-lg p-4 flex items-center justify-center h-20 mb-3">
                      <span className="text-lg font-bold tracking-wider" style={{ color: '#1F4D3A' }}>HISAGEN</span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Logotype</p>
                    <p className="text-xs text-slate">The name set in the brand font. Used independently in text-heavy layouts or where the icon isn&apos;t needed.</p>
                    <p className="text-[10px] text-slate mt-2 font-medium">Specified via brand guidelines</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-mist">
                    <div className="bg-parchment rounded-lg p-4 flex items-center justify-center h-20 mb-3">
                      <div className="flex items-center gap-2">
                        <img src="/logos/hisagen-logo-v1-full-colour.png" alt="Lockup" className="w-8 h-8 object-contain" />
                        <span className="text-sm font-bold tracking-wider" style={{ color: '#1F4D3A' }}>HISAGEN</span>
                      </div>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Logo Lockup</p>
                    <p className="text-xs text-slate">Icon + text in a fixed arrangement with defined spacing. Used for headers, letterheads, pitch decks.</p>
                    <p className="text-[10px] text-slate mt-2 font-medium">Future deliverable</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-mist">
                  <p className="text-xs font-semibold text-ink mb-2">Why separate them?</p>
                  <ul className="text-xs text-slate space-y-1.5">
                    <li>&bull; <strong className="text-ink">Flexibility</strong> &mdash; At 16px (browser tab) you need the icon alone. At 200px (pitch deck header) you want icon + text. Baking text into the icon forces a single use case.</li>
                    <li>&bull; <strong className="text-ink">Scaling</strong> &mdash; Text and icons scale differently. Text that reads well at 200px becomes illegible at 32px. Separating them means each works at its appropriate size.</li>
                    <li>&bull; <strong className="text-ink">Consistency</strong> &mdash; The lockup file controls exact spacing between icon and text, ensuring the combination always looks intentional, not improvised.</li>
                    <li>&bull; <strong className="text-ink">Industry norm</strong> &mdash; Apple, Nike, Stripe, and virtually every major brand maintain separate logomark and lockup files. It&apos;s the standard for a reason.</li>
                  </ul>
                </div>

                <div className="bg-parchment rounded-lg p-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-ink mb-2">Recommended Wordmark Font</p>
                    <div className="bg-white rounded-lg p-4 border border-mist">
                      <div className="flex items-center gap-6 mb-3">
                        <div className="text-center">
                          <p className="font-sans text-2xl font-bold tracking-wider" style={{ color: '#1F4D3A' }}>HISAGEN</p>
                          <p className="text-[10px] text-primary mt-1 font-medium">Inter &bull; Bold &bull; Wider tracking (recommended)</p>
                        </div>
                        <div className="text-center">
                          <p className="font-serif text-2xl font-bold tracking-wider" style={{ color: '#1F4D3A' }}>HISAGEN</p>
                          <p className="text-[10px] text-slate mt-1">Source Serif 4 &bull; Bold &bull; Wider tracking</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate">
                        <strong className="text-ink">Recommendation: Inter (Bold, wider tracking)</strong> &mdash; the sans-serif pairs cleanly
                        with the geometric logomark and renders crisply at all sizes. Source Serif 4 carries more authority
                        in headings and body copy, but for the wordmark itself, Inter&apos;s clean geometry is the stronger match.
                        Both typefaces are established in the
                        <a href="/brand" className="text-primary underline hover:no-underline ml-1">Brand Guidelines &rarr; Typography</a> section.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink mb-2">Next Step: Lockup Production</p>
                    <p className="text-xs text-slate">
                      Once the logomark is approved, we&apos;ll produce the lockup files (horizontal and stacked arrangements)
                      with defined spacing ratios. Lockup specs &mdash; font, weight, letter-spacing, minimum clear space &mdash;
                      will be added to the <a href="/brand" className="text-primary underline hover:no-underline">Brand Guidelines</a>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Small-Size Readability */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Design Note: Small-Size Readability</h3>
              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">!</div>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-2">Detail richness and small-size rendering</p>
                    <p className="text-sm text-slate">
                      The Roots Circle concept communicates beautifully at display sizes (80px and above) &mdash; the root network,
                      arched soil line, and leaf veins all reinforce the &quot;what&apos;s underground creates value above&quot; narrative.
                      However, at navigation and icon sizes (32px and below), these fine elements compress into an indistinct
                      blur. There simply aren&apos;t enough pixels to resolve the thin strokes.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">What We Observed</p>
                    <ul className="text-xs text-slate space-y-1.5">
                      <li>&bull; <strong className="text-ink">Root network</strong> &mdash; 6+ thin lines become a grey smudge at 32px</li>
                      <li>&bull; <strong className="text-ink">Arched soil line</strong> &mdash; fine horizontal detail merges with roots</li>
                      <li>&bull; <strong className="text-ink">Leaf veins</strong> &mdash; interior detail disappears, leaves read as solid blobs</li>
                      <li>&bull; <strong className="text-ink">Overall impression</strong> &mdash; looks pixelated or blurred rather than intentional</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">How This Is Typically Addressed</p>
                    <ul className="text-xs text-slate space-y-1.5">
                      <li>&bull; <strong className="text-ink">Simplified small-size variant</strong> &mdash; same concept, fewer elements</li>
                      <li>&bull; <strong className="text-ink">Keep:</strong> Outer circle, seedling silhouette, gold accents</li>
                      <li>&bull; <strong className="text-ink">Drop:</strong> Fine root network, soil arch, leaf veins</li>
                      <li>&bull; <strong className="text-ink">Precedent:</strong> Apple, Nike, and most major brands use simplified marks at icon sizes</li>
                    </ul>
                  </div>
                </div>

                {/* Visual comparison */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Visual Evidence</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#1F4D3A' }}>
                      <p className="text-[10px] text-white/60 mb-3">Light variant at actual nav sizes:</p>
                      <div className="flex items-end gap-6">
                        {[{ px: 48, label: '48px' }, { px: 32, label: '32px' }, { px: 24, label: '24px' }, { px: 16, label: '16px' }].map((size) => (
                          <div key={size.px} className="flex flex-col items-center gap-1">
                            <img src="/logos/hisagen-logo-v1-light.png" alt={`Logo at ${size.label}`} style={{ width: size.px, height: size.px }} className="object-contain" />
                            <span className="text-[9px] text-white/50">{size.label}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-white/40 mt-3">Notice how detail degrades below 48px &mdash; roots and soil line become noise.</p>
                    </div>
                    <div className="rounded-lg p-4 bg-parchment">
                      <p className="text-[10px] text-slate mb-3">Full colour at actual nav sizes:</p>
                      <div className="flex items-end gap-6">
                        {[{ px: 48, label: '48px' }, { px: 32, label: '32px' }, { px: 24, label: '24px' }, { px: 16, label: '16px' }].map((size) => (
                          <div key={size.px} className="flex flex-col items-center gap-1">
                            <img src="/logos/hisagen-logo-v1-full-colour.png" alt={`Logo at ${size.label}`} style={{ width: size.px, height: size.px }} className="object-contain" />
                            <span className="text-[9px] text-slate/50">{size.label}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-slate/50 mt-3">Same issue applies to full colour &mdash; the detail level is inherited from the concept.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-xs font-semibold text-ink mb-2">Recommendation</p>
                  <p className="text-xs text-slate">
                    This is not a flaw in the concept &mdash; it&apos;s a natural consequence of the level of detail in the original
                    direction. The Roots Circle design tells a rich story, and that richness needs space to breathe. For contexts
                    where the logo appears at 32px or smaller (navigation bars, browser tabs, social media avatars, app icons),
                    a <strong className="text-ink">simplified companion mark</strong> would ensure the logo always reads as intentional and premium,
                    regardless of size.
                  </p>
                </div>
              </div>
            </section>

            {/* Production Pipeline */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Production Pipeline</h3>
              <p className="text-sm text-slate mb-4">
                Each variation goes through the same export pipeline to produce the final deliverables.
              </p>
              <div className="bg-white border border-mist rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-parchment border-b border-mist">
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Step</th>
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Output</th>
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    {[
                      { step: 'Master PNG (full colour)', output: 'hisagen-logo-v1-full-colour.png', status: 'Done', color: 'bg-primary/10 text-primary' },
                      { step: 'Light variant (white + gold)', output: 'hisagen-logo-v1-light.png', status: 'Done', color: 'bg-primary/10 text-primary' },
                      { step: 'Dark variant (monochrome)', output: 'hisagen-logo-v1-dark.png', status: 'Done', color: 'bg-primary/10 text-primary' },
                      { step: 'SVG vector trace (x3)', output: '3 × .svg', status: 'Done', color: 'bg-primary/10 text-primary' },
                      { step: 'PNG exports (512/256/128 x3)', output: '9 × .png', status: 'Done', color: 'bg-primary/10 text-primary' },
                      { step: 'Favicon', output: 'favicon.ico + favicon.png + apple-touch-icon.png', status: 'Done', color: 'bg-primary/10 text-primary' },
                    ].map((row) => (
                      <tr key={row.step}>
                        <td className="p-3 text-ink">{row.step}</td>
                        <td className="p-3 text-slate font-mono text-xs">{row.output}</td>
                        <td className="p-3"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.color}`}>{row.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </details>

        {/* ============================================ */}
        {/* PHASE 6: CLIENT REVIEW & NEW DIRECTION       */}
        {/* ============================================ */}
        <details className="group" open>
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-4 bg-white border-2 border-primary/30 rounded-lg p-5 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">6</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold text-ink">Client Review &amp; Final Production</h2>
                <p className="text-sm text-slate">April 2026 &mdash; V5 confirmed, logo pack produced, colour variants delivered</p>
              </div>
              <div className="text-slate ml-4 shrink-0 transition-transform group-open:rotate-180">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-8 pl-5 border-l-2 border-amber-300/40 ml-10">

            {/* Timeline */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Team Review Timeline</h3>
              <div className="space-y-3">
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-slate bg-parchment px-2 py-1 rounded shrink-0">Mar 17</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Pandion sent 3 colour variants</p>
                      <p className="text-xs text-slate mt-1">
                        Full colour, light (for dark backgrounds), and dark (monochrome) &mdash; the three variants
                        from the delivered Phase 5 logo pack. Sent to Keir with link to this /logo page for full context.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-slate bg-parchment px-2 py-1 rounded shrink-0">Mar 17</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Keir circulated to wider team</p>
                      <p className="text-xs text-slate mt-1">
                        Forwarded variants to Daniel, Scott, and team with feedback deadline of Friday March 20.
                        Noted that a local logo variation could be addressed at a later stage &mdash; priority
                        was finalising a primary logo for business cards, letterheads, and production materials.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-slate bg-parchment px-2 py-1 rounded shrink-0">Mar 17&ndash;20</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Daniel and Scott responded</p>
                      <p className="text-xs text-slate mt-1">
                        Both gave preferences on the variants &mdash; indicating which they preferred. However, the feedback
                        suggested the colour variants were being read as different logo concepts rather than the same
                        logo in different colour formats (full colour, light, dark) for different use contexts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-amber-300 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-white bg-amber-400 px-2 py-1 rounded shrink-0">Mar 22</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Keir clarified &amp; shared new direction</p>
                      <p className="text-xs text-slate mt-1">
                        Clarified that the previous variants were the same logo in different colour formats. Then shared
                        a reworked design he had developed independently, with two new variants. Also raised a strategic
                        branding question: should HISAGEN emphasise &ldquo;SOIL application&rdquo; or &ldquo;SEED application&rdquo;
                        in its positioning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* V5 Concepts */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Keir&apos;s Reworked Design (V5)</h3>
              <p className="text-sm text-slate mb-4">
                Two variants of a new concept developed by Keir using AI generation tools. The design features a gold
                teardrop/seed shape enclosing a seedling with visible root structure below a soil line.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border-2 border-amber-300/50 overflow-hidden">
                  <div className="aspect-square bg-parchment flex items-center justify-center p-8">
                    <img src="/logos/keir-mar22-v5-teardrop.png" alt="Keir V5 — gold teardrop with seedling and roots (PNG)" className="max-w-[220px] max-h-[220px] object-contain" />
                  </div>
                  <div className="p-4 border-t border-mist">
                    <p className="font-medium text-sm text-ink">V5 &mdash; Variant A</p>
                    <p className="text-xs text-slate mt-1">Gold teardrop border, seedling with 3 leaves, branching root system below soil horizon.</p>
                    <p className="text-[10px] text-slate mt-2">Tagline: &ldquo;High Impact Soil Application for Greener Environment&rdquo;</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg border-2 border-amber-300/50 overflow-hidden">
                  <div className="aspect-square bg-parchment flex items-center justify-center p-8">
                    <img src="/logos/keir-mar22-v5-teardrop-alt.jpeg" alt="Keir V5 — gold teardrop with seedling and roots (JPEG)" className="max-w-[220px] max-h-[220px] object-contain" />
                  </div>
                  <div className="p-4 border-t border-mist">
                    <p className="font-medium text-sm text-ink">V5 &mdash; Variant B</p>
                    <p className="text-xs text-slate mt-1">Same concept with slightly different proportions and styling. Bolder text treatment.</p>
                    <p className="text-[10px] text-slate mt-2">Tagline: &ldquo;High Impact Soil Application for Greener Environment&rdquo;</p>
                  </div>
                </div>
              </div>

              {/* What the concept communicates */}
              <div className="mt-6 bg-white border border-mist rounded-lg p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">What This Concept Communicates</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-ink mb-2">Strengths</p>
                    <ul className="text-xs text-slate space-y-1">
                      <li>&bull; <strong className="text-ink">Clear narrative</strong> &mdash; seed shape enclosing what happens underground. Immediate story.</li>
                      <li>&bull; <strong className="text-ink">Above/below duality</strong> &mdash; consistent with all previous directions. The core theme lands.</li>
                      <li>&bull; <strong className="text-ink">Gold teardrop</strong> &mdash; the seed/drop shape ties to both the product (seed application) and value.</li>
                      <li>&bull; <strong className="text-ink">Root detail</strong> &mdash; at large sizes, the root network is visually striking and communicates depth.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink mb-2">Production Considerations</p>
                    <ul className="text-xs text-slate space-y-1">
                      <li>&bull; <strong className="text-ink">Gradients &amp; reflections</strong> &mdash; the gold border has 3D lighting effects that won&apos;t translate to flat print, embossing, or single-colour use</li>
                      <li>&bull; <strong className="text-ink">Detail density</strong> &mdash; roots, soil texture, leaf veins, and gradient layers compress at small sizes (same issue documented in Phase 5 for Roots Circle)</li>
                      <li>&bull; <strong className="text-ink">Raster source</strong> &mdash; AI-generated PNGs would need vector tracing and significant cleanup for production files</li>
                      <li>&bull; <strong className="text-ink">Colour reproduction</strong> &mdash; gradient gold reads differently on screen vs print vs embroidery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SOIL vs SEED — Resolved */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Resolved: &ldquo;Soil Application&rdquo;</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&#10003;</div>
                  <p className="text-sm text-slate">
                    <strong className="text-ink">Decision: &ldquo;Soil Application&rdquo;</strong> &mdash; confirmed by Keir, March 2026.
                    HISAGEN = High Impact <strong className="text-ink">Soil</strong> Application for Greener Environment.
                  </p>
                </div>
                <p className="text-sm text-slate">
                  The question was whether to emphasise &ldquo;Soil&rdquo; or &ldquo;Seed&rdquo; in the brand positioning.
                  &ldquo;Soil Application&rdquo; aligns with the adaptation-first narrative, positions HISAGEN in regenerative
                  agriculture, and is stronger for grant and investor audiences. &ldquo;Seed Application&rdquo; is technically
                  accurate for the delivery mechanism but narrower in framing.
                </p>
                <p className="text-xs text-slate">
                  All materials &mdash; investor deck, website, portal, logo tagline &mdash; now use &ldquo;Soil Application&rdquo;.
                </p>
              </div>
            </section>

            {/* Outcome + Logo Pack */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Outcome</h3>
              <div className="bg-primary/5 border-2 border-primary/30 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">&#10003;</div>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-2">V5 Direction Confirmed &mdash; &ldquo;Soil Application&rdquo;</p>
                    <p className="text-sm text-slate">
                      Keir confirmed V5 Variant B (teardrop with seedling and roots) as the direction, with the tagline
                      &ldquo;High Impact <strong className="text-ink">Soil</strong> Application for Greener Environment&rdquo;.
                      The Phase 5 Roots Circle pack remains available as an alternative.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Logo Pack */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Logo Pack Deliverables</h3>
              <p className="text-sm text-slate mb-4">
                All exports use Keir&apos;s original V5 design with minimal adjustments &mdash; tighter cropping, drop shadow removed, and sized variants for different contexts.
              </p>

              {/* Icon Only — Light & Dark */}
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Icon Only (No Text)</p>
                <p className="text-sm text-slate mb-3">Teardrop logomark on transparent background. For favicons, social avatars, app icons, and anywhere the full lockup is too detailed.</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-parchment flex items-center justify-center p-6 h-36">
                      <img src="/logos/hisagen-v5-soil-icon-512.png" alt="HISAGEN V5 icon on light background" className="max-w-[120px] max-h-[120px] object-contain" />
                    </div>
                    <div className="p-3 border-t border-mist">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Done</span>
                        <p className="font-medium text-sm text-ink">On Light</p>
                      </div>
                      <p className="text-[10px] text-slate">Documents, presentations, white/parchment backgrounds</p>
                    </div>
                  </div>
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-[#0F172A] flex items-center justify-center p-6 h-36">
                      <img src="/logos/hisagen-v5-soil-icon-512.png" alt="HISAGEN V5 icon on dark background" className="max-w-[120px] max-h-[120px] object-contain" />
                    </div>
                    <div className="p-3 border-t border-mist">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Done</span>
                        <p className="font-medium text-sm text-ink">On Dark</p>
                      </div>
                      <p className="text-[10px] text-slate">Deck covers, dark-themed slides, overlays, social media</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">Sized Exports</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-parchment flex items-center justify-center p-4 h-24">
                      <img src="/logos/hisagen-v5-soil-icon-512.png" alt="512px" className="max-w-[80px] max-h-[80px] object-contain" />
                    </div>
                    <div className="p-2 border-t border-mist text-center">
                      <p className="font-medium text-xs text-ink">512 &times; 512</p>
                    </div>
                  </div>
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-parchment flex items-center justify-center p-4 h-24">
                      <img src="/logos/hisagen-v5-soil-icon-256.png" alt="256px" className="max-w-[60px] max-h-[60px] object-contain" />
                    </div>
                    <div className="p-2 border-t border-mist text-center">
                      <p className="font-medium text-xs text-ink">256 &times; 256</p>
                    </div>
                  </div>
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-parchment flex items-center justify-center p-4 h-24">
                      <img src="/logos/hisagen-v5-soil-icon-128.png" alt="128px" className="max-w-[40px] max-h-[40px] object-contain" />
                    </div>
                    <div className="p-2 border-t border-mist text-center">
                      <p className="font-medium text-xs text-ink">128 &times; 128</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Lockup — With Text */}
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Full Lockup (Icon + Text)</p>
                <p className="text-sm text-slate mb-3">Teardrop with &ldquo;HISAGEN&rdquo; and full tagline in DM Serif Display. Text layers are editable for colour variants.</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-white flex items-center justify-center p-6 h-40">
                      <img src="/logos/hisagen-v5-soil-full-white.png" alt="HISAGEN V5 Keir original with text" className="max-w-[120px] max-h-[130px] object-contain" />
                    </div>
                    <div className="p-3 border-t border-mist">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider rounded">Draft</span>
                        <p className="font-medium text-sm text-ink">Keir&apos;s Original</p>
                      </div>
                      <p className="text-[10px] text-slate">Original AI-generated lockup with baked-in text &mdash; pre-production reference</p>
                    </div>
                  </div>
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-parchment flex items-center justify-center p-6 h-40">
                      <img src="/logos/hisagen-v5-soil-lockup-vertical.png" alt="HISAGEN V5 lockup — dark text on light" className="max-w-[120px] max-h-[130px] object-contain" />
                    </div>
                    <div className="p-3 border-t border-mist">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Done</span>
                        <p className="font-medium text-sm text-ink">Light Background</p>
                      </div>
                      <p className="text-[10px] text-slate">Documents, pitch decks, letterheads, white/parchment surfaces</p>
                    </div>
                  </div>
                  <div className="bg-white border border-mist rounded-lg overflow-hidden">
                    <div className="bg-[#0F172A] flex items-center justify-center p-6 h-40">
                      <img src="/logos/hisagen-v5-soil-lockup-dark-bg.png" alt="HISAGEN V5 lockup — gold text on dark" className="max-w-[120px] max-h-[130px] object-contain" />
                    </div>
                    <div className="p-3 border-t border-mist">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded">Done</span>
                        <p className="font-medium text-sm text-ink">Dark Background</p>
                      </div>
                      <p className="text-[10px] text-slate">Deck covers, dark slides, website headers, social media overlays</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </details>

        {/* ============================================ */}
        {/* PHASE 7: V5 PRODUCTION                      */}
        {/* ============================================ */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-4 bg-white border border-slate/20 rounded-lg p-5 hover:border-slate/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-slate/30 text-slate flex items-center justify-center font-bold text-sm shrink-0">7</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold text-slate">Possible Future Direction</h2>
                <p className="text-sm text-slate/70">Parked &mdash; Vector conversion, flat-colour variants, extended brand system</p>
              </div>
              <div className="text-slate ml-4 shrink-0 transition-transform group-open:rotate-180">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-8 pl-5 border-l-2 border-amber-300/40 ml-10">

            {/* Status */}
            <section>
              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Current Status</p>
                <h3 className="text-lg font-semibold text-ink mb-3">Full-Colour Lockup Complete &mdash; Variants &amp; Vector Next</h3>
                <p className="text-sm text-slate">
                  The V5 stacked lockup is complete: icon with &ldquo;HISAGEN&rdquo; in DM Serif Display and tagline in Inter,
                  matching the website typography. Exported as PNG (702&times;867). Next: colour variants (light/dark),
                  logomark-only export, vector conversion via vtracer, and sized PNG pipeline.
                </p>
              </div>
            </section>

            {/* Logo Preview */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Current Lockup &mdash; Gold Kernel</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-mist rounded-lg p-8 flex items-center justify-center">
                  <img src="/logos/hisagen-v5-lockup-full-colour.png" alt="HISAGEN V5 Lockup — light background" className="max-h-72 object-contain" />
                </div>
                <div className="bg-[#0F172A] border border-mist rounded-lg p-8 flex items-center justify-center">
                  <img src="/logos/hisagen-v5-lockup-dark-bg.png" alt="HISAGEN V5 Lockup — dark background variant" className="max-h-72 object-contain" />
                </div>
              </div>
              <p className="text-xs text-slate mt-3">Left: on white. Right: on dark (simulating deck cover). The dark green text and soil tones are lost on dark backgrounds &mdash; a light variant is needed for the pitch deck cover.</p>
            </section>

            {/* The Challenge */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">The Challenge: AI Raster to Production Vector</h3>
              <p className="text-sm text-slate mb-4">
                Keir&apos;s V5 design was generated using AI image tools. While the concept is strong, AI-generated images
                present specific production challenges that must be resolved before the logo can be used professionally.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-mist rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate mb-2">AI Output Issues</p>
                  <ul className="text-xs text-slate space-y-1.5">
                    <li>&bull; <strong className="text-ink">Gradients everywhere</strong> &mdash; gold border has 3D lighting, soil has texture gradients, leaves have colour variation</li>
                    <li>&bull; <strong className="text-ink">Drop shadow</strong> &mdash; soft dark ellipse beneath the seed shape</li>
                    <li>&bull; <strong className="text-ink">Raster-only</strong> &mdash; no vector source, cannot scale cleanly</li>
                    <li>&bull; <strong className="text-ink">Baked-in text</strong> &mdash; text is part of the image pixels, not editable</li>
                    <li>&bull; <strong className="text-ink">Mixed colours</strong> &mdash; dozens of intermediate tones instead of defined brand palette</li>
                  </ul>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Production Requirements</p>
                  <ul className="text-xs text-slate space-y-1.5">
                    <li>&bull; <strong className="text-ink">Flat brand colours</strong> &mdash; each element in a defined palette colour</li>
                    <li>&bull; <strong className="text-ink">No shadows</strong> &mdash; clean edges for any background</li>
                    <li>&bull; <strong className="text-ink">Vector format</strong> &mdash; SVG that scales from favicon to billboard</li>
                    <li>&bull; <strong className="text-ink">Editable text</strong> &mdash; proper font, adjustable independently</li>
                    <li>&bull; <strong className="text-ink">Separated layers</strong> &mdash; each element independently addressable for colour variants</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Process Timeline */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Production Process</h3>
              <div className="space-y-3">
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded shrink-0 mt-0.5">Done</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Gradient flattening</p>
                      <p className="text-xs text-slate mt-1">
                        Python/PIL script classified every pixel by HSV values and spatial position, mapping dozens of
                        intermediate AI-generated tones to 5 defined brand colours. The script uses zone-based logic
                        (upper = leaves, mid = soil line, lower = soil body) combined with colour analysis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded shrink-0 mt-0.5">Done</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Shadow &amp; text removal</p>
                      <p className="text-xs text-slate mt-1">
                        Dark elliptical drop shadow beneath the seed kernel eliminated. Baked-in &ldquo;HISAGEN&rdquo; text
                        removed &mdash; will be recreated as a proper text layer with a chosen brand font.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded shrink-0 mt-0.5">Done</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Layer separation</p>
                      <p className="text-xs text-slate mt-1">
                        Manually separated in GIMP into four independent layers using eraser work. Automated
                        select-by-colour + grow approaches bled across element boundaries, so manual separation
                        proved more reliable for the complex organic shapes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded shrink-0 mt-0.5">Done</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Colour cleanup &amp; brand palette</p>
                      <p className="text-xs text-slate mt-1">
                        Stray pixels cleaned from each layer (gold specks in soil, brown in grass, etc.). All four layers
                        now render in their correct brand colours. A 14-colour HISAGEN brand palette was created in GIMP
                        matching the portal /brand page definitions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-amber-300 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded shrink-0 mt-0.5">Done</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Text layer &amp; lockup</p>
                      <p className="text-xs text-slate mt-1">
                        &ldquo;HISAGEN&rdquo; set in DM Serif Display, tagline in Inter &mdash; matching the website typography.
                        Stacked lockup produced: icon + text, centred, with consistent padding. Exported as PNG (702&times;867).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-amber-300 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded shrink-0 mt-0.5">Next</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Colour variants &amp; vector conversion</p>
                      <p className="text-xs text-slate mt-1">
                        Starting with the primary full-colour version. Once approved: light variant (for dark backgrounds),
                        dark variant (monochrome), then flatten visible layers and vector trace via vtracer for SVG output.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-amber-300 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded shrink-0 mt-0.5">Next</span>
                    <div>
                      <p className="text-sm text-ink font-medium">Export pipeline</p>
                      <p className="text-xs text-slate mt-1">
                        Sized PNG exports (512px, 256px, 128px) for each variant and format. SVG vector files. Favicon
                        generation. Same pipeline as Phase 5 but for the V5 design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Four Layers */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">The Four Layers</h3>
              <p className="text-sm text-slate mb-4">
                Each layer is now independent and filled with its defined brand colour. This separation enables
                colour variants &mdash; changing the kernel border from Black Cotton Soil to Harvest Gold, for example,
                is a single layer recolour rather than a full redesign.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full border border-mist shrink-0" style={{ backgroundColor: '#2D2A26' }}></div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Kernel Border</p>
                      <p className="text-[10px] text-slate">#2D2A26 &mdash; Black Cotton Soil</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate">The teardrop outline that frames the entire design. Currently in the darkest brand tone. May try Harvest Gold (#C6A04A) as an alternative.</p>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full border border-mist shrink-0" style={{ backgroundColor: '#1F4D3A' }}></div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Plant</p>
                      <p className="text-[10px] text-slate">#1F4D3A &mdash; Deep Regenerative Green + #C6A04A gold tinge</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate">The seedling and leaves. Primarily in Deep Regenerative Green with a subtle gold leaf accent that connects to the Harvest Gold brand colour.</p>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full border border-mist shrink-0" style={{ backgroundColor: '#1F4D3A' }}></div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Grass Line</p>
                      <p className="text-[10px] text-slate">#1F4D3A &mdash; Deep Regenerative Green</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate">The soil horizon line that divides above from below. The visual border between the growth story and the underground science.</p>
                </div>
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full border border-mist shrink-0" style={{ backgroundColor: '#6B4A2B' }}></div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Soil &amp; Roots</p>
                      <p className="text-[10px] text-slate">#6B4A2B &mdash; Soil Carbon Brown + #FFFFFF white roots</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate">The soil body in Soil Carbon Brown with white root structures. The &ldquo;what&apos;s underground&rdquo; half of the narrative &mdash; science, depth, hidden value.</p>
                </div>
              </div>
            </section>

            {/* Planned Deliverables */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Planned Deliverables</h3>
              <p className="text-sm text-slate mb-4">
                Starting with the primary full-colour version in two formats, then expanding to colour variants.
                The same logomark vs lockup pattern from Phase 5 applies here.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white border border-mist rounded-lg p-4">
                  <div className="bg-parchment rounded-lg p-6 flex items-center justify-center h-28 mb-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate/30 flex items-center justify-center">
                        <span className="text-[10px] text-slate/50">icon</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Logomark (Icon Only)</p>
                  <p className="text-xs text-slate">The teardrop seed graphic on its own. For favicons, app icons, social avatars, watermarks, and any context where space is tight.</p>
                  <p className="text-[10px] text-amber-600 mt-2 font-medium">In progress</p>
                </div>
                <div className="bg-white border border-primary/30 rounded-lg p-4">
                  <div className="bg-parchment rounded-lg p-6 flex items-center justify-center h-28 mb-3">
                    <img src="/logos/hisagen-v5-lockup-full-colour.png" alt="HISAGEN V5 Stacked Lockup" className="h-full object-contain" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Stacked Lockup (Icon + Text)</p>
                  <p className="text-xs text-slate">Icon above, &ldquo;HISAGEN&rdquo; in DM Serif Display, tagline in Inter &mdash; matching the website typography. For pitch decks, letterheads, website headers, and presentation contexts.</p>
                  <p className="text-[10px] text-primary mt-2 font-medium">Complete &mdash; full colour</p>
                </div>
              </div>

              <div className="bg-white border border-mist rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-parchment border-b border-mist">
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Deliverable</th>
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Format</th>
                      <th className="text-left p-3 text-xs font-bold uppercase tracking-widest text-slate">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    {[
                      { step: 'Logomark &mdash; full colour', output: 'SVG + PNG (512/256/128)', status: 'In progress', color: 'bg-amber-100 text-amber-700' },
                      { step: 'Stacked lockup &mdash; full colour', output: 'SVG + PNG (512/256/128)', status: 'PNG done', color: 'bg-primary/10 text-primary' },
                      { step: 'Logomark &mdash; light variant', output: 'SVG + PNG (512/256/128)', status: 'Planned', color: 'bg-slate/10 text-slate' },
                      { step: 'Stacked lockup &mdash; light variant', output: 'SVG + PNG (512/256/128)', status: 'Planned', color: 'bg-slate/10 text-slate' },
                      { step: 'Logomark &mdash; dark variant', output: 'SVG + PNG (512/256/128)', status: 'Planned', color: 'bg-slate/10 text-slate' },
                      { step: 'Stacked lockup &mdash; dark variant', output: 'SVG + PNG (512/256/128)', status: 'Planned', color: 'bg-slate/10 text-slate' },
                      { step: 'Favicon set', output: 'ICO + PNG + Apple Touch Icon', status: 'Planned', color: 'bg-slate/10 text-slate' },
                    ].map((row) => (
                      <tr key={row.step}>
                        <td className="p-3 text-ink" dangerouslySetInnerHTML={{ __html: row.step }}></td>
                        <td className="p-3 text-slate font-mono text-xs">{row.output}</td>
                        <td className="p-3"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.color}`}>{row.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Technical Note */}
            <section>
              <h3 className="text-lg font-serif font-semibold text-ink mb-4">Technical Note: GIMP MCP Workflow</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                <p className="text-sm text-slate mb-3">
                  This production work uses <strong className="text-ink">GIMP 3.2.2 with MCP (Model Context Protocol)</strong>,
                  allowing Claude Code to control GIMP directly &mdash; selecting colours, filling layers, running cleanup
                  operations, and exporting files. Manual eraser work was done by the designer in GIMP directly where
                  automated approaches (select-by-colour + grow) bled across element boundaries.
                </p>
                <p className="text-xs text-slate">
                  <strong className="text-ink">Colour space note:</strong> GIMP&apos;s internal colour engine (GEGL) uses linear light.
                  Setting sRGB brand colours directly produces unexpectedly light results. All brand colours are converted
                  from sRGB to linear light before application to ensure on-screen accuracy.
                </p>
              </div>
            </section>

          </div>
        </details>

        {/* Quick Links */}
        <section className="flex gap-4 mt-8">
          <a href="/brand" className="flex-1 bg-white border border-mist rounded-lg p-4 hover:border-primary transition-colors">
            <p className="font-medium text-ink">&larr; Back to Brand Guidelines</p>
            <p className="text-xs text-slate">Full brand pack structure</p>
          </a>
          <a href="/assets" className="flex-1 bg-white border border-mist rounded-lg p-4 hover:border-primary transition-colors">
            <p className="font-medium text-ink">Asset Library &rarr;</p>
            <p className="text-xs text-slate">Icons, photos, downloads</p>
          </a>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">HISAGEN Logo Design Journey &bull; Internal Working Document</p>
          <p className="text-xs text-mist mt-2">Last updated: March 31, 2026 &bull; V5 &ldquo;Soil Application&rdquo; confirmed &mdash; deliverables in progress</p>
        </section>
      </div>
    </main>
  );
}
