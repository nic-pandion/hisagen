'use client';

import { useState } from 'react';

export default function BrandGuidelinesPage() {
  const [openSections, setOpenSections] = useState<string[]>(['02']); // Logo open by default as it's the major gap

  const toggleSection = (number: string) => {
    setOpenSections(prev =>
      prev.includes(number)
        ? prev.filter(n => n !== number)
        : [...prev, number]
    );
  };

  // HISAGEN Unified Brand Colors
  // Hybrid approach combining Website warmth with Portal institutional strength
  const websiteColors = {
    primary: [
      { name: 'Deep Regenerative Green', hex: '#1F4D3A', usage: 'Headers, brand anchors' },
      { name: 'Deep Blue-Grey', hex: '#1F2E3A', usage: 'Credibility, finance, institutional' },
      { name: 'Harvest Gold', hex: '#C6A04A', usage: 'Highlights, CTAs, optimism' },
    ],
    secondary: [
      { name: 'Black Cotton Soil', hex: '#2D2A26', usage: 'Body text, deep grounding' },
      { name: 'Clay Neutral', hex: '#E6DED3', usage: 'Backgrounds, warmth' },
      { name: 'Muted Slate', hex: '#6F7C82', usage: 'Data, secondary UI' },
    ],
    supporting: [
      { name: 'Ink', hex: '#0F172A', usage: 'High contrast, premium dark contexts' },
      { name: 'Soil Carbon Brown', hex: '#6B4A2B', usage: 'Earth tones, soil context, grounded elements' },
      { name: 'Slate', hex: '#334155', usage: 'Secondary text, subdued labels' },
      { name: 'Mist', hex: '#CBD5E1', usage: 'Borders, dividers, light backgrounds' },
      { name: 'Parchment', hex: '#F7F8F5', usage: 'Base background, warm off-white' },
    ],
    semantic: [
      { name: 'Murram', hex: '#A85838', usage: 'Alerts, problems, urgent items' },
      { name: 'Murram Light', hex: '#F5E6DE', usage: 'Alert backgrounds, warning highlights' },
    ],
  };

  // Brand Pack Structure - Professional Agency Standard
  const brandPackSections = [
    {
      number: '01',
      title: 'Brand Strategy',
      status: 'partial',
      items: [
        { name: 'Brand Story & Origin', status: 'complete' },
        { name: 'Mission Statement', status: 'complete' },
        { name: 'Vision Statement', status: 'complete' },
        { name: 'Core Values', status: 'complete' },
        { name: 'Brand Positioning', status: 'complete' },
        { name: 'Brand Personality & Archetype', status: 'complete' },
        { name: 'Key Messages by Audience', status: 'complete' },
        { name: 'Competitive Differentiation', status: 'gap' },
        { name: 'Brand Promise', status: 'complete' },
      ]
    },
    {
      number: '02',
      title: 'Logo System',
      status: 'gap',
      items: [
        { name: 'Primary Logo (Full Color)', status: 'gap' },
        { name: 'Secondary Logo / Logomark', status: 'gap' },
        { name: 'Horizontal & Stacked Variants', status: 'gap' },
        { name: 'Monochrome Versions (Black/White)', status: 'gap' },
        { name: 'Clear Space Requirements', status: 'gap' },
        { name: 'Minimum Size Guidelines', status: 'gap' },
        { name: 'Logo Misuse Examples', status: 'gap' },
        { name: 'Favicon & App Icon', status: 'gap' },
        { name: 'Logo Files (SVG, PNG, EPS)', status: 'gap' },
      ]
    },
    {
      number: '03',
      title: 'Color Palette',
      status: 'complete',
      items: [
        { name: 'Primary Colors', status: 'complete' },
        { name: 'Secondary/Accent Colors', status: 'complete' },
        { name: 'Extended Palette', status: 'complete' },
        { name: 'Gradients', status: 'complete' },
        { name: 'Color Usage Guidelines', status: 'complete' },
        { name: 'Accessibility (WCAG Compliance)', status: 'partial' },
        { name: 'Print Color Specs (CMYK/Pantone)', status: 'gap' },
      ]
    },
    {
      number: '04',
      title: 'Typography',
      status: 'complete',
      items: [
        { name: 'Primary Typeface', status: 'complete' },
        { name: 'Secondary Typeface', status: 'complete' },
        { name: 'Type Hierarchy & Scale', status: 'complete' },
        { name: 'Font Pairing Guidelines', status: 'complete' },
        { name: 'Web Font Implementation', status: 'complete' },
        { name: 'Print Typography Specs', status: 'gap' },
        { name: 'Font Licensing Info', status: 'gap' },
      ]
    },
    {
      number: '05',
      title: 'Photography & Imagery',
      status: 'partial',
      items: [
        { name: 'Photography Direction', status: 'complete' },
        { name: 'Image Style Guidelines', status: 'complete' },
        { name: 'Do\'s and Don\'ts', status: 'complete' },
        { name: 'Curated Image Library', status: 'partial' },
        { name: 'Image Treatment/Filters', status: 'gap' },
        { name: 'Illustration Style', status: 'gap' },
      ]
    },
    {
      number: '06',
      title: 'Iconography',
      status: 'partial',
      items: [
        { name: 'Icon Style Guidelines', status: 'complete' },
        { name: 'Icon Grid & Construction', status: 'gap' },
        { name: 'Icon Library/Set', status: 'gap' },
        { name: 'Custom Icon Designs', status: 'gap' },
      ]
    },
    {
      number: '07',
      title: 'Graphic Elements',
      status: 'partial',
      items: [
        { name: 'Patterns & Textures', status: 'gap' },
        { name: 'Graphic Devices', status: 'partial' },
        { name: 'Data Visualization Style', status: 'complete' },
        { name: 'Infographic Templates', status: 'gap' },
      ]
    },
    {
      number: '08',
      title: 'Voice & Tone',
      status: 'complete',
      items: [
        { name: 'Voice Characteristics', status: 'complete' },
        { name: 'Tone Guidelines', status: 'complete' },
        { name: 'Writing Principles', status: 'complete' },
        { name: 'Example Copy', status: 'complete' },
        { name: 'Messaging by Audience', status: 'complete' },
        { name: 'Words to Use/Avoid', status: 'partial' },
      ]
    },
    {
      number: '09',
      title: 'Applications',
      status: 'partial',
      items: [
        { name: 'Business Cards', status: 'gap' },
        { name: 'Letterhead & Documents', status: 'gap' },
        { name: 'Email Signatures', status: 'complete' },
        { name: 'Presentation Templates', status: 'partial' },
        { name: 'Social Media Templates', status: 'gap' },
        { name: 'Website Guidelines', status: 'complete' },
        { name: 'Report Templates', status: 'partial' },
        { name: 'Signage & Environmental', status: 'gap' },
      ]
    },
    {
      number: '10',
      title: 'Digital Guidelines',
      status: 'partial',
      items: [
        { name: 'UI Components', status: 'partial' },
        { name: 'Motion & Animation', status: 'complete' },
        { name: 'Interactive States', status: 'partial' },
        { name: 'Responsive Behavior', status: 'complete' },
        { name: 'Accessibility Standards', status: 'partial' },
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-800 border-green-200';
      case 'partial': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'gap': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'complete': return 'Complete';
      case 'partial': return 'Partial';
      case 'gap': return 'Gap';
      default: return status;
    }
  };

  const getSummaryIcons = (items: { name: string; status: string }[]) => {
    const complete = items.filter(i => i.status === 'complete').length;
    const partial = items.filter(i => i.status === 'partial').length;
    const gap = items.filter(i => i.status === 'gap').length;
    return { complete, partial, gap, total: items.length };
  };

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Internal Reference</p>
          <h1 className="text-4xl font-serif font-bold">Brand Guidelines</h1>
          <p className="mt-4 text-lg opacity-90">
            Professional Brand Pack Structure & Gap Analysis
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

        {/* Overview Stats */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Brand Pack Completeness</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-700">4</p>
              <p className="text-sm text-green-600 mt-1">Sections Complete</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-yellow-700">5</p>
              <p className="text-sm text-yellow-600 mt-1">Sections Partial</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-red-700">1</p>
              <p className="text-sm text-red-600 mt-1">Major Gap (Logo)</p>
            </div>
          </div>
        </section>

        {/* Accordion Sections */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-ink">Professional Brand Pack Structure</h2>
              <p className="text-slate text-sm mt-1">Based on leading agency standards (Pentagram, Wolff Olins, Landor)</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setOpenSections(brandPackSections.map(s => s.number))}
                className="px-3 py-1 text-xs bg-slate/10 hover:bg-slate/20 rounded transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={() => setOpenSections([])}
                className="px-3 py-1 text-xs bg-slate/10 hover:bg-slate/20 rounded transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {brandPackSections.map((section) => {
              const isOpen = openSections.includes(section.number);
              const summary = getSummaryIcons(section.items);

              return (
                <div key={section.number} className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(section.number)}
                    className="w-full flex items-center justify-between p-4 hover:bg-parchment/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-serif text-primary font-bold w-8">{section.number}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{section.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          {summary.complete > 0 && (
                            <span className="text-xs text-green-600 flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-green-500 inline-flex items-center justify-center text-white text-[8px]">✓</span>
                              {summary.complete}
                            </span>
                          )}
                          {summary.partial > 0 && (
                            <span className="text-xs text-yellow-600 flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white text-[8px]">◐</span>
                              {summary.partial}
                            </span>
                          )}
                          {summary.gap > 0 && (
                            <span className="text-xs text-red-600 flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-red-200 inline-flex items-center justify-center text-red-600 text-[8px]">○</span>
                              {summary.gap}
                            </span>
                          )}
                          <span className="text-xs text-slate">of {summary.total}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(section.status)}`}>
                        {getStatusLabel(section.status)}
                      </span>
                      <span className={`text-slate transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="border-t border-mist p-4 bg-parchment/30">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            {item.status === 'complete' && (
                              <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                            )}
                            {item.status === 'partial' && (
                              <span className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">◐</span>
                            )}
                            {item.status === 'gap' && (
                              <span className="w-4 h-4 rounded-full bg-red-200 flex items-center justify-center text-red-600 text-xs">○</span>
                            )}
                            <span className={item.status === 'gap' ? 'text-slate' : 'text-ink'}>{item.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Section-specific extended content */}

                      {/* 01: Brand Strategy */}
                      {section.number === '01' && (
                        <div className="mt-4 pt-4 border-t border-mist space-y-4">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Mission</h4>
                              <p className="text-sm text-ink">
                                Regenerating African agricultural landscapes through soil carbon science,
                                unlocking environmental and economic value for smallholder farmers.
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Vision</h4>
                              <p className="text-sm text-ink">
                                A future where African smallholders lead the global transition to regenerative agriculture,
                                creating resilient food systems while earning fair compensation for environmental stewardship.
                              </p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Brand Positioning</h4>
                            <p className="text-sm text-ink">
                              HISAGEN occupies a unique position: African-led, science-backed, commercially rigorous.
                              We combine Locus AG's proven soil science with deep community relationships to create
                              the most credible carbon credit pathway in East African agriculture.
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-primary/5 p-3 rounded">
                              <p className="text-xs font-semibold text-primary mb-1">Archetype</p>
                              <p className="text-sm">The Sage / The Caregiver</p>
                            </div>
                            <div className="bg-primary/5 p-3 rounded">
                              <p className="text-xs font-semibold text-primary mb-1">Personality</p>
                              <p className="text-sm">Authoritative, Grounded, Progressive</p>
                            </div>
                            <div className="bg-primary/5 p-3 rounded">
                              <p className="text-xs font-semibold text-primary mb-1">Promise</p>
                              <p className="text-sm">Verified impact, fair value</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 02: Logo System */}
                      {section.number === '02' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                            <h4 className="font-semibold text-red-800 text-sm mb-2">⚠️ Logo Development Required</h4>
                            <p className="text-red-700 text-sm">
                              HISAGEN currently operates with a text-only wordmark. A professional logo system is the primary brand gap.
                              Typical investment: £2,000-8,000 depending on scope and agency.
                            </p>
                          </div>

                          <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">Wordmark</h4>
                          <div className="grid md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-parchment p-6 rounded-lg text-center border border-mist">
                              <span className="text-2xl font-sans font-bold text-primary tracking-wider">HISAGEN</span>
                              <p className="text-[10px] text-slate mt-2">Light background</p>
                            </div>
                            <div className="bg-primary p-6 rounded-lg text-center">
                              <span className="text-2xl font-sans font-bold text-white tracking-wider">HISAGEN</span>
                              <p className="text-[10px] text-white/70 mt-2">On primary</p>
                            </div>
                            <div className="bg-ink p-6 rounded-lg text-center">
                              <span className="text-2xl font-sans font-bold text-white tracking-wider">HISAGEN</span>
                              <p className="text-[10px] text-white/70 mt-2">On dark</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg text-center border border-mist">
                              <span className="text-2xl font-sans font-bold text-ink tracking-wider">HISAGEN</span>
                              <p className="text-[10px] text-slate mt-2">Monochrome</p>
                            </div>
                          </div>

                          <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">What's Needed for Full Logo System</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-slate/5 p-4 rounded border border-dashed border-slate/30">
                              <p className="font-medium text-sm mb-1">Primary Logo</p>
                              <p className="text-xs text-slate">Full-color logo with symbol + wordmark</p>
                            </div>
                            <div className="bg-slate/5 p-4 rounded border border-dashed border-slate/30">
                              <p className="font-medium text-sm mb-1">Logomark / Symbol</p>
                              <p className="text-xs text-slate">Standalone icon for small applications</p>
                            </div>
                            <div className="bg-slate/5 p-4 rounded border border-dashed border-slate/30">
                              <p className="font-medium text-sm mb-1">Horizontal & Stacked</p>
                              <p className="text-xs text-slate">Layout variants for different contexts</p>
                            </div>
                            <div className="bg-slate/5 p-4 rounded border border-dashed border-slate/30">
                              <p className="font-medium text-sm mb-1">Monochrome Versions</p>
                              <p className="text-xs text-slate">Black, white, single-color applications</p>
                            </div>
                            <div className="bg-slate/5 p-4 rounded border border-dashed border-slate/30">
                              <p className="font-medium text-sm mb-1">Favicon & App Icon</p>
                              <p className="text-xs text-slate">16px, 32px, 180px, 512px sizes</p>
                            </div>
                            <div className="bg-slate/5 p-4 rounded border border-dashed border-slate/30">
                              <p className="font-medium text-sm mb-1">File Formats</p>
                              <p className="text-xs text-slate">SVG, PNG, EPS for all variants</p>
                            </div>
                          </div>
                          <p className="text-xs text-slate mt-4">
                            <strong>Wordmark font:</strong> Inter Bold with wider letter-spacing. Sans-serif chosen for the
                            wordmark to pair with the geometric logomark and ensure clean rendering at all sizes.
                            Source Serif 4 remains the primary heading font for content.
                            See <a href="/logo" className="text-primary underline hover:no-underline">Logo Design Journey</a> for full rationale.
                          </p>
                          <div className="mt-4 pt-4 border-t border-mist bg-primary/5 p-4 rounded-lg flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-ink">Logo Development Brief</p>
                              <p className="text-xs text-slate">Concept direction, shareable snippets, and progress tracking</p>
                            </div>
                            <a
                              href="/logo"
                              className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
                            >
                              View Brief →
                            </a>
                          </div>
                        </div>
                      )}

                      {/* 03: Color Palette */}
                      {section.number === '03' && (
                        <div className="mt-4 pt-4 border-t border-mist space-y-6">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-semibold text-green-800 text-sm mb-2">✓ Unified Palette Established</h4>
                            <p className="text-green-700 text-sm">
                              Single color system for all HISAGEN properties. East African soil story: Black Cotton Soil for text,
                              Soil Carbon Brown for earth contexts, Murram for alerts. Deep Regenerative Green anchors the brand.
                            </p>
                          </div>

                          {/* Unified HISAGEN Colors */}
                          <div>
                            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">HISAGEN Brand Colors</h4>
                            <p className="text-xs text-slate mb-4">Unified palette for all HISAGEN properties — website, portal, and print materials</p>
                            <div className="space-y-3">
                              <div>
                                <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Primary Palette</p>
                                <div className="grid grid-cols-3 gap-3">
                                  {websiteColors.primary.map(color => (
                                    <div key={color.hex} className="bg-white rounded-lg border border-mist overflow-hidden">
                                      <div className="h-16" style={{ backgroundColor: color.hex }} />
                                      <div className="p-3">
                                        <p className="font-medium text-sm">{color.name}</p>
                                        <p className="text-xs text-slate font-mono">{color.hex}</p>
                                        <p className="text-xs text-slate mt-1">{color.usage}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Secondary Palette</p>
                                <div className="grid grid-cols-3 gap-3">
                                  {websiteColors.secondary.map(color => (
                                    <div key={color.hex} className="bg-white rounded-lg border border-mist overflow-hidden">
                                      <div className="h-12" style={{ backgroundColor: color.hex }} />
                                      <div className="p-2">
                                        <p className="font-medium text-xs">{color.name}</p>
                                        <p className="text-[10px] text-slate font-mono">{color.hex}</p>
                                        <p className="text-[10px] text-slate">{color.usage}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Supporting Palette</p>
                                <div className="grid grid-cols-5 gap-2">
                                  {websiteColors.supporting.map(color => (
                                    <div key={color.hex} className="bg-white rounded-lg border border-mist overflow-hidden">
                                      <div className="h-12" style={{ backgroundColor: color.hex }} />
                                      <div className="p-2">
                                        <p className="font-medium text-xs">{color.name}</p>
                                        <p className="text-[10px] text-slate font-mono">{color.hex}</p>
                                        <p className="text-[10px] text-slate">{color.usage}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Semantic Colors</p>
                                <div className="grid grid-cols-2 gap-3">
                                  {websiteColors.semantic.map(color => (
                                    <div key={color.hex} className="bg-white rounded-lg border border-mist overflow-hidden">
                                      <div className="h-12" style={{ backgroundColor: color.hex }} />
                                      <div className="p-2">
                                        <p className="font-medium text-xs">{color.name}</p>
                                        <p className="text-[10px] text-slate font-mono">{color.hex}</p>
                                        <p className="text-[10px] text-slate">{color.usage}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <p className="text-[10px] text-slate mt-2 italic">Murram — deep earthy tone inspired by East African laterite soil, replacing terracotta</p>
                              </div>
                            </div>
                          </div>

                          {/* Palette Design Principles */}
                          <div className="bg-primary/5 p-4 rounded-lg border-2 border-primary/20">
                            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Design Principles</h4>
                            <div className="text-sm space-y-2">
                              <ul className="text-xs text-slate space-y-1 ml-4 list-disc">
                                <li><strong>East African soil story</strong> — Black Cotton Soil, Soil Carbon Brown, Murram connect to the land</li>
                                <li><strong>Institutional credibility</strong> — Deep Blue-Grey and Deep Regenerative Green for finance/science contexts</li>
                                <li><strong>Warmth with rigor</strong> — Harvest Gold and Clay Neutral balance professionalism with approachability</li>
                                <li><strong>Semantic clarity</strong> — Murram (not harsh red) for alerts maintains earthy tone even in warnings</li>
                              </ul>
                            </div>
                          </div>

                          {/* Context Usage */}
                          <div>
                            <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">Context Usage: Portal vs Website</h4>
                            <p className="text-xs text-slate mb-4">Same palette, different emphasis — helps users know where they are</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              {/* Portal Context */}
                              <div className="bg-white rounded-lg border-2 border-[#1F2E3A] overflow-hidden">
                                <div className="bg-[#1F2E3A] text-white p-4">
                                  <p className="text-xs uppercase tracking-wider opacity-70">Internal</p>
                                  <p className="text-lg font-serif font-bold">Portal</p>
                                </div>
                                <div className="p-4 space-y-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#1F2E3A' }} />
                                    <div>
                                      <p className="text-sm font-medium">Lead: Deep Blue-Grey</p>
                                      <p className="text-xs text-slate">Headers, navigation, primary UI</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#1F4D3A' }} />
                                    <div>
                                      <p className="text-sm font-medium">Accent: Deep Regenerative Green</p>
                                      <p className="text-xs text-slate">CTAs, success states, highlights</p>
                                    </div>
                                  </div>
                                  <p className="text-xs text-slate pt-2 border-t border-mist">
                                    <strong>Feel:</strong> Institutional, operational, data-focused
                                  </p>
                                </div>
                              </div>

                              {/* Website Context */}
                              <div className="bg-white rounded-lg border-2 border-[#1F4D3A] overflow-hidden">
                                <div className="bg-[#1F4D3A] text-white p-4">
                                  <p className="text-xs uppercase tracking-wider opacity-70">Public</p>
                                  <p className="text-lg font-serif font-bold">Website</p>
                                </div>
                                <div className="p-4 space-y-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#1F4D3A' }} />
                                    <div>
                                      <p className="text-sm font-medium">Lead: Deep Regenerative Green</p>
                                      <p className="text-xs text-slate">Headers, navigation, primary UI</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#C6A04A' }} />
                                    <div>
                                      <p className="text-sm font-medium">Accent: Harvest Gold</p>
                                      <p className="text-xs text-slate">CTAs, highlights, optimism</p>
                                    </div>
                                  </div>
                                  <p className="text-xs text-slate pt-2 border-t border-mist">
                                    <strong>Feel:</strong> Warm, inviting, story-forward
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 04: Typography */}
                      {section.number === '04' && (
                        <div className="mt-4 pt-4 border-t border-mist space-y-6">
                          <div className="grid md:grid-cols-2 gap-8">
                            {/* Primary Typeface */}
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">Primary Typeface: Source Serif 4</h4>
                              <p className="text-xs text-slate mb-4">Used for headlines, titles, and brand moments. Conveys authority and heritage.</p>
                              <div className="space-y-3 bg-white p-4 rounded-lg border border-mist">
                                <p className="font-serif text-3xl font-bold text-ink">HISAGEN</p>
                                <p className="font-serif text-2xl font-semibold text-ink">Regenerating African Agriculture</p>
                                <p className="font-serif text-xl text-ink">The quick brown fox jumps over the lazy dog</p>
                                <p className="font-serif text-lg text-ink">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                <p className="font-serif text-lg text-ink">abcdefghijklmnopqrstuvwxyz</p>
                                <p className="font-serif text-lg text-ink">1234567890 !@#$%^&*()</p>
                                <div className="flex gap-4 pt-2 border-t border-mist text-xs text-slate">
                                  <span>Light</span>
                                  <span className="font-medium">Regular</span>
                                  <span className="font-semibold">Semibold</span>
                                  <span className="font-bold">Bold</span>
                                </div>
                              </div>
                            </div>

                            {/* Secondary Typeface */}
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">Secondary Typeface: Inter</h4>
                              <p className="text-xs text-slate mb-4">Used for body text, UI, and data. Optimized for screen readability.</p>
                              <div className="space-y-3 bg-white p-4 rounded-lg border border-mist">
                                <p className="font-sans text-3xl font-bold text-ink">HISAGEN</p>
                                <p className="font-sans text-2xl font-semibold text-ink">Regenerating African Agriculture</p>
                                <p className="font-sans text-xl text-ink">The quick brown fox jumps over the lazy dog</p>
                                <p className="font-sans text-lg text-ink">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                <p className="font-sans text-lg text-ink">abcdefghijklmnopqrstuvwxyz</p>
                                <p className="font-sans text-lg text-ink">1234567890 !@#$%^&*()</p>
                                <div className="flex gap-4 pt-2 border-t border-mist text-xs text-slate">
                                  <span>Light</span>
                                  <span className="font-medium">Regular</span>
                                  <span className="font-semibold">Semibold</span>
                                  <span className="font-bold">Bold</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Type Scale */}
                          <div>
                            <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">Type Scale</h4>
                            <div className="bg-white p-4 rounded-lg border border-mist space-y-3">
                              <div className="flex items-baseline gap-4">
                                <span className="text-xs text-slate w-20">H1 / 36px</span>
                                <span className="font-serif text-4xl font-bold text-ink">Page Title</span>
                              </div>
                              <div className="flex items-baseline gap-4">
                                <span className="text-xs text-slate w-20">H2 / 28px</span>
                                <span className="font-serif text-3xl font-semibold text-ink">Section Header</span>
                              </div>
                              <div className="flex items-baseline gap-4">
                                <span className="text-xs text-slate w-20">H3 / 22px</span>
                                <span className="font-serif text-2xl font-semibold text-ink">Subsection</span>
                              </div>
                              <div className="flex items-baseline gap-4">
                                <span className="text-xs text-slate w-20">H4 / 18px</span>
                                <span className="font-sans text-lg font-semibold text-ink">Card Title</span>
                              </div>
                              <div className="flex items-baseline gap-4">
                                <span className="text-xs text-slate w-20">Body / 16px</span>
                                <span className="font-sans text-base text-ink">Body text for paragraphs and content</span>
                              </div>
                              <div className="flex items-baseline gap-4">
                                <span className="text-xs text-slate w-20">Small / 14px</span>
                                <span className="font-sans text-sm text-slate">Secondary text and captions</span>
                              </div>
                              <div className="flex items-baseline gap-4">
                                <span className="text-xs text-slate w-20">XS / 12px</span>
                                <span className="font-sans text-xs text-slate uppercase tracking-wider">Labels and metadata</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 05: Photography & Imagery */}
                      {section.number === '05' && (
                        <div className="mt-4 pt-4 border-t border-mist space-y-4">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Photography Direction</h4>
                              <ul className="space-y-2 text-sm text-ink">
                                <li>• <strong>Authentic:</strong> Real farmers, real fields, real impact</li>
                                <li>• <strong>Grounded:</strong> Eye-level, respectful framing</li>
                                <li>• <strong>Warm light:</strong> Golden hour preferred, avoid harsh midday</li>
                                <li>• <strong>Active:</strong> People working, not posed portraits</li>
                                <li>• <strong>Context:</strong> Show environment, not just close-ups</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Avoid</h4>
                              <ul className="space-y-2 text-sm text-slate">
                                <li>• Stock photos with Western farmers</li>
                                <li>• "Poverty tourism" framing</li>
                                <li>• Over-saturated colors</li>
                                <li>• Aerial shots (feel distant)</li>
                                <li>• White savior compositions</li>
                              </ul>
                            </div>
                          </div>
                          <div className="bg-slate/5 p-4 rounded-lg">
                            <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Image Treatment</h4>
                            <p className="text-sm text-ink">
                              Minimal editing. Slight warmth (+5-10%). Preserve skin tones accurately.
                              No heavy filters or Instagram-style treatments.
                            </p>
                          </div>
                          <div className="bg-primary/5 p-4 rounded-lg flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-ink">View Photo Library</p>
                              <p className="text-xs text-slate">Browse all photography assets organized by folder</p>
                            </div>
                            <a
                              href="/assets"
                              className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
                            >
                              Asset Library →
                            </a>
                          </div>
                        </div>
                      )}

                      {/* 06: Iconography */}
                      {section.number === '06' && (
                        <div className="mt-4 pt-4 border-t border-mist space-y-4">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Icon Style</h4>
                              <ul className="space-y-2 text-sm text-ink">
                                <li>• Line-based, 2px stroke weight</li>
                                <li>• Rounded caps and joins</li>
                                <li>• 24x24px base grid</li>
                                <li>• Simple, recognizable forms</li>
                              </ul>
                            </div>
                            <div className="bg-slate/5 p-4 rounded-lg">
                              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Gap: Custom Icon Set</p>
                              <p className="text-sm text-slate">
                                Currently using Lucide icons. Consider custom icons for key concepts:
                                soil carbon, regeneration, community, verification.
                              </p>
                            </div>
                          </div>
                          <div className="bg-primary/5 p-4 rounded-lg flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-ink">View Icon Library</p>
                              <p className="text-xs text-slate">20 custom icons available — browse full collection</p>
                            </div>
                            <a
                              href="/assets"
                              className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
                            >
                              Asset Library →
                            </a>
                          </div>
                        </div>
                      )}

                      {/* 07: Graphic Elements */}
                      {section.number === '07' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Data Visualization</h4>
                              <ul className="space-y-2 text-sm text-ink">
                                <li>• Use primary palette for key metrics</li>
                                <li>• Clear labels, no chart junk</li>
                                <li>• Consistent axis styling</li>
                                <li>• Accessible color combinations</li>
                              </ul>
                            </div>
                            <div className="bg-slate/5 p-4 rounded-lg">
                              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Gap: Patterns & Textures</p>
                              <p className="text-sm text-slate">
                                Could develop: soil texture pattern, topographical lines,
                                organic shapes for backgrounds.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 08: Voice & Tone */}
                      {section.number === '08' && (
                        <div className="mt-4 pt-4 border-t border-mist space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-primary/5 p-4 rounded-lg">
                              <h4 className="font-semibold text-primary mb-3">We Sound Like</h4>
                              <ul className="space-y-2 text-sm text-ink">
                                <li><strong>Authoritative:</strong> Evidence-based, confident, we know our field</li>
                                <li><strong>Clear & Direct:</strong> No jargon, no buzzwords, plain language</li>
                                <li><strong>Warm but Disciplined:</strong> We care about people AND rigor</li>
                                <li><strong>Forward-Looking:</strong> Solutions-focused, opportunity-oriented</li>
                                <li><strong>Grounded:</strong> Connected to the land and communities we serve</li>
                              </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-red-700 mb-3">We Don't Sound Like</h4>
                              <ul className="space-y-2 text-sm text-slate">
                                <li>• NGO or charity language ("helping the poor")</li>
                                <li>• Promotional hype ("revolutionary", "game-changing")</li>
                                <li>• Academic abstraction (jargon-heavy)</li>
                                <li>• Aid-centric narratives (savior complex)</li>
                                <li>• Corporate greenwashing (vague claims)</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">Writing Principles</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="bg-white p-4 rounded-lg border border-mist">
                                <p className="font-medium text-sm mb-1">Lead with Impact</p>
                                <p className="text-xs text-slate">Start with what matters: outcomes, results, change.</p>
                              </div>
                              <div className="bg-white p-4 rounded-lg border border-mist">
                                <p className="font-medium text-sm mb-1">Show, Don't Tell</p>
                                <p className="text-xs text-slate">Data and stories over adjectives and claims.</p>
                              </div>
                              <div className="bg-white p-4 rounded-lg border border-mist">
                                <p className="font-medium text-sm mb-1">Respect Expertise</p>
                                <p className="text-xs text-slate">Farmers are partners with knowledge, not beneficiaries.</p>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Words We Use</h4>
                              <p className="text-sm text-ink">
                                Regeneration, soil health, carbon sequestration, smallholder, community,
                                verification, evidence, partnership, value, resilience
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Words We Avoid</h4>
                              <p className="text-sm text-slate">
                                Disruption, revolutionary, beneficiaries, helping, poor farmers,
                                third world, developing nations, game-changing
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 09: Applications */}
                      {section.number === '09' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Complete</h4>
                              <ul className="space-y-2 text-sm text-ink">
                                <li>✓ Email signatures (standard format)</li>
                                <li>✓ Website guidelines (this portal + public site)</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Gaps to Address</h4>
                              <ul className="space-y-2 text-sm text-slate">
                                <li>○ Business cards</li>
                                <li>○ Letterhead & document templates</li>
                                <li>○ Presentation templates (PowerPoint/Keynote)</li>
                                <li>○ Social media templates</li>
                                <li>○ Report templates</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 10: Digital Guidelines */}
                      {section.number === '10' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">UI Components</h4>
                              <ul className="space-y-2 text-sm text-ink">
                                <li>• Buttons: Rounded (8px), primary/secondary variants</li>
                                <li>• Cards: Subtle shadow, mist border, 16px padding</li>
                                <li>• Forms: Clear labels, visible focus states</li>
                                <li>• Tables: Alternating rows, clear headers</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Motion & Animation</h4>
                              <ul className="space-y-2 text-sm text-ink">
                                <li>• Transitions: 200ms ease-out default</li>
                                <li>• Hover states: Subtle lift or color shift</li>
                                <li>• Loading: Skeleton screens preferred</li>
                                <li>• No gratuitous animation</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Priority Gaps Summary */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Priority Gaps to Address</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Gap</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">When to Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                <tr>
                  <td className="p-4 font-medium">Professional Logo System</td>
                  <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">High</span></td>
                  <td className="p-4">Before major funding round or public launch</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-4 font-medium line-through text-slate">Color System Consolidation</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">✓ Done</span></td>
                  <td className="p-4 text-green-700">Hybrid palette selected — see Section 03</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Business Card & Stationery</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4">Before investor meetings</td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Presentation Templates</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4">Before pitch deck finalisation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Social Media Templates</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Low</span></td>
                  <td className="p-4">When active on social channels</td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Print Specifications (CMYK/Pantone)</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Low</span></td>
                  <td className="p-4">When preparing for print production</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">
            HISAGEN Brand Pack • Internal Reference Document
          </p>
          <p className="text-xs text-mist mt-2">
            Structure based on professional agency standards (Pentagram, Wolff Olins, Landor)
          </p>
          <p className="text-xs text-mist mt-1">
            Source files: "HISAGEN Brand Guidelines.md" (Portal) • "HISAGEN-BRAND-GUIDELINES.md" (Website)
          </p>
        </section>
      </div>
    </main>
  );
}
