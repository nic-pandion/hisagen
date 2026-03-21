import Link from 'next/link';

export default function WebsiteDigitalPage() {
  // Current sitemap - pages that exist
  const sitePages = [
    { path: '/', name: 'Homepage', status: 'live', description: 'Hero, 5-step process, impact stats, partner logos, CTA' },
    { path: '/about', name: 'About', status: 'live', description: 'Company story, mission, team overview' },
    { path: '/program', name: 'Program', status: 'live', description: 'Agri-Carbon model, problem/solution, operating model' },
    { path: '/program/uganda', name: 'Uganda Pilot', status: 'live', description: 'Kamuli District, NARO trial results, farmer stats' },
    { path: '/program/rwanda', name: 'Rwanda', status: 'live', description: 'Second market, planned expansion' },
    { path: '/contact', name: 'Contact', status: 'live', description: 'Contact form (mailto info@hisagen.com) and info cards' },
  ];

  // Features implemented
  const featuresComplete = [
    { name: 'Responsive Design', notes: 'Mobile (375px), tablet (768px), desktop (1280px) tested' },
    { name: 'Navigation Flyout', notes: 'About = direct link. Program = flyout with active items only. No "Soon" placeholders.' },
    { name: 'Brand Colors', notes: 'Unified HISAGEN palette (green, gold, black-cotton, murram). See /brand.' },
    { name: 'SEO & Meta', notes: 'Title, description, OG tags on all 6 pages. Organization JSON-LD schema.' },
    { name: 'Contact Form', notes: 'Mailto to info@hisagen.com with fallback direct email link' },
    { name: 'Accessibility', notes: 'Semantic HTML, focus states, alt text, heading hierarchy, keyboard nav (22 elements)' },
    { name: 'Custom Icons', notes: '~20 program-specific PNGs in /public/icons/' },
    { name: 'Animations', notes: 'Framer Motion: FadeInUp, BlurFadeIn, parallax hero. prefers-reduced-motion supported.' },
    { name: 'Favicon', notes: 'HISAGEN icon.png (32x32) + apple-icon.png (180x180)' },
    { name: '404 Page', notes: 'Branded, with home + contact links' },
    { name: 'Server Components', notes: 'All pages are server components. Only HeroParallax + ContactForm use client.' },
  ];

  // Phase 1 remaining items
  const phase1Remaining = [
    { name: 'Content review with stakeholder', priority: 'high', notes: 'Walk every page for accuracy before go-live' },
    { name: 'Lighthouse audit', priority: 'high', notes: 'Target 90+ on performance, accessibility, SEO' },
    { name: 'Image optimisation', priority: 'medium', notes: 'Compress large files, verify lazy loading, LCP priority' },
    { name: 'Open Graph images', priority: 'medium', notes: 'Design assets for social sharing previews' },
    { name: 'Partner logos', priority: 'low', notes: 'Confirm: actual logos or keep text placeholders?' },
  ];

  // Phase 2+ planned
  const futureFeatures = [
    { name: 'About page sections', priority: 'medium', notes: 'Mission & Vision, Theory of Change (anchor sections)' },
    { name: 'Team section', priority: 'medium', notes: 'Leadership bios and photos' },
    { name: 'Kenya page', priority: 'low', notes: 'When content is available' },
    { name: 'Blog / News', priority: 'low', notes: 'MDX or CMS integration' },
    { name: 'Impact Dashboard', priority: 'low', notes: 'Data visualisations from MRV / field data' },
    { name: 'Analytics', priority: 'medium', notes: 'Plausible or similar privacy-respecting tool' },
    { name: 'Multi-language', priority: 'low', notes: 'Swahili / Luganda for farmer-facing content' },
  ];

  // Deployment steps
  const deploySteps = [
    { step: 1, name: 'Site Approval', status: 'in-progress', notes: 'Preview URL live. Content review pending.' },
    { step: 2, name: 'GitHub Transfer', status: 'complete', notes: 'Repo at KAB-HISAGEN/hisagen-website. Pandion as collaborator.' },
    { step: 3, name: 'Vercel Setup', status: 'complete', notes: 'Pro trial active. Deploy hook configured. Payment card needed by ~Mar 26.' },
    { step: 4, name: 'DNS Changes', status: 'pending', notes: 'Delete 3x Wix A records, add Vercel A + CNAME. ~15 mins in Wix dashboard.' },
    { step: 5, name: 'Verification', status: 'pending', notes: 'Site loads, HTTPS works, email unaffected, contact form works.' },
    { step: 6, name: 'Redirects', status: 'pending', notes: 'Point hisagen-africa.com + hisagen-usa.com to hisagen.com via Vercel.' },
    { step: 7, name: 'Handover', status: 'pending', notes: 'Walkthrough with Keir. 30-day bug fix warranty begins.' },
  ];

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-secondary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/comms" className="text-sm opacity-80 hover:opacity-100 mb-4 inline-block">
            &larr; Communications Hub
          </Link>
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Comms Function 02</p>
          <h1 className="text-4xl font-serif font-bold">Website &amp; Digital</h1>
          <p className="mt-4 text-lg opacity-90">
            Public website deployment status, infrastructure, and development roadmap
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

        {/* Quick Status */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-4xl font-bold text-primary">{sitePages.length}</p>
              <p className="text-sm text-slate mt-1">Pages Live</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-4xl font-bold text-success">{featuresComplete.length}</p>
              <p className="text-sm text-slate mt-1">Features Complete</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-4xl font-bold text-accent">{phase1Remaining.length}</p>
              <p className="text-sm text-slate mt-1">Phase 1 Remaining</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-lg font-bold text-secondary">Next.js 16</p>
              <p className="text-sm text-slate mt-1">React 19, Tailwind 4, TS 5</p>
            </div>
          </div>
        </section>

        {/* Deployment Progress */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Deployment Progress</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4 w-12">Step</th>
                  <th className="text-left p-4">Phase</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {deploySteps.map((step, i) => (
                  <tr key={step.step} className={i % 2 === 1 ? 'bg-parchment/50' : ''}>
                    <td className="p-4 font-bold text-primary">{step.step}</td>
                    <td className="p-4 font-medium">{step.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        step.status === 'complete' ? 'bg-green-100 text-green-800' :
                        step.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {step.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate">{step.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Live Environments */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Live Environments</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <h3 className="font-semibold text-ink">Preview Site (Vercel)</h3>
              </div>
              <a
                href="https://hisagen-website-ten.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm break-all"
              >
                hisagen-website-ten.vercel.app
              </a>
              <p className="text-xs text-slate mt-2">Public URL (no auth) &bull; Auto-deploys via deploy hook from GitHub</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <h3 className="font-semibold text-ink">Production Domain</h3>
              </div>
              <p className="text-primary font-medium text-sm">hisagen.com</p>
              <p className="text-xs text-slate mt-2">Pending DNS changes (Step 4) &bull; Currently points to Wix placeholder</p>
            </div>
          </div>
        </section>

        {/* Sitemap */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Current Sitemap</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Route</th>
                  <th className="text-left p-4">Page</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {sitePages.map((page, i) => (
                  <tr key={page.path} className={i % 2 === 1 ? 'bg-parchment/50' : ''}>
                    <td className="p-4 font-mono text-xs text-primary">{page.path}</td>
                    <td className="p-4 font-medium">{page.name}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        {page.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate">{page.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Navigation Structure</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
            <div className="bg-parchment rounded-lg p-4 font-mono text-sm text-ink mb-4">
              [Logo] HISAGEN &nbsp;&nbsp; About &nbsp;&nbsp; Program [v] &nbsp;&nbsp; Contact &nbsp;&nbsp; [Get in Touch]
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-3">About</h3>
                <p className="text-sm text-slate">Direct link to /about. No flyout.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Program Flyout</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Program Overview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Uganda (Active)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Rwanda (Planned)</span>
                  </li>
                </ul>
                <p className="text-xs text-slate mt-3">
                  All &quot;Soon&quot; placeholders removed. Future items in DEVELOPMENT-ROADMAP.md.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Top Level</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Get in Touch (CTA)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Complete */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Features Implemented</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {featuresComplete.map((feature) => (
              <div key={feature.name} className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">&#10003;</span>
                  <h3 className="font-semibold text-ink">{feature.name}</h3>
                </div>
                <p className="text-sm text-slate ml-7">{feature.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Phase 1 Remaining */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Phase 1 &mdash; Remaining</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Item</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {phase1Remaining.map((item, i) => (
                  <tr key={item.name} className={i % 2 === 1 ? 'bg-parchment/50' : ''}>
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        item.priority === 'high' ? 'bg-red-100 text-red-800' :
                        item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="p-4 text-slate">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 2+ */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Phase 2+ &mdash; Future Development</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {futureFeatures.map((feature, i) => (
                  <tr key={feature.name} className={i % 2 === 1 ? 'bg-parchment/50' : ''}>
                    <td className="p-4 font-medium">{feature.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        feature.priority === 'high' ? 'bg-red-100 text-red-800' :
                        feature.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {feature.priority}
                      </span>
                    </td>
                    <td className="p-4 text-slate">{feature.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Infrastructure */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Infrastructure &amp; Access</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">GitHub</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li><strong>Repo:</strong> KAB-HISAGEN/hisagen-website (private)</li>
                <li><strong>Owner:</strong> KAB-HISAGEN (Keir)</li>
                <li><strong>Collaborator:</strong> nic-pandion (Pandion) &mdash; Write access</li>
                <li><strong>Transferred:</strong> 2026-03-16</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">Vercel</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li><strong>Account:</strong> KAB-HISAGEN (Keir) &mdash; Pro trial</li>
                <li><strong>Cost:</strong> $20/month (payment card needed by ~Mar 26)</li>
                <li><strong>Deploy:</strong> Pandion pushes to GitHub + triggers deploy hook</li>
                <li><strong>Pandion seat:</strong> Not needed &mdash; deploy hook avoids $20/mo extra</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">Domains (at Wix)</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li><strong>hisagen.com</strong> &mdash; Primary (DNS change pending)</li>
                <li><strong>hisagen-africa.com</strong> &mdash; Redirect to hisagen.com</li>
                <li><strong>hisagen-usa.com</strong> &mdash; Redirect to hisagen.com</li>
                <li>All renew Nov 6, 2026 at Wix</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">Email</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li><strong>Provider:</strong> Google Workspace via Wix ($45.72/mo)</li>
                <li><strong>Contact form:</strong> info@hisagen.com</li>
                <li><strong>DNS impact:</strong> MX/SPF/DKIM records NOT touched</li>
                <li><strong>Risk:</strong> None &mdash; only A + CNAME records change</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Ongoing Costs (Post Go-Live)</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">$20/mo</p>
                <p className="text-xs text-slate">Vercel Pro (hosting)</p>
                <p className="text-xs text-slate mt-1">Required &mdash; free tier is non-commercial only</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate">$45.72/mo</p>
                <p className="text-xs text-slate">Google Workspace (existing)</p>
                <p className="text-xs text-slate mt-1">Unchanged &mdash; billed through Wix</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate">~$40/yr</p>
                <p className="text-xs text-slate">Domain renewals (3x, existing)</p>
                <p className="text-xs text-slate mt-1">Unchanged &mdash; renew Nov 2026 at Wix</p>
              </div>
            </div>
            <p className="text-xs text-slate text-center mt-4">
              Net effect: ~$73/year saving vs current Wix Premium hosting ($313/yr &rarr; $240/yr).
              Real value is code ownership and modern stack.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">Framework</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>Next.js 16 (App Router, Turbopack)</li>
                <li>React 19</li>
                <li>TypeScript 5</li>
                <li>Tailwind CSS 4</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">Hosting</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>Vercel Pro ($20/month)</li>
                <li>GitHub: KAB-HISAGEN/hisagen-website</li>
                <li>Static site &mdash; no CMS or database</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">UI Libraries</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>Headless UI 2 (navigation)</li>
                <li>Heroicons 2</li>
                <li>Framer Motion 12 (animations)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">
            HISAGEN Website &amp; Digital &bull; Deployment &amp; Development Reference
          </p>
          <p className="text-xs text-mist mt-2">
            Last updated: March 2026
          </p>
          <p className="text-xs text-mist mt-1">
            Source of truth: DEVELOPMENT-ROADMAP.md in website repository
          </p>
        </section>
      </div>
    </main>
  );
}
