# HISAGEN Portal (Private)

This folder contains the standalone Next.js site for the HISAGEN private portal.

## Location
- Local path: `03-pandion-business/operations/del/clients/hisagen/site`
- GitHub repo: `https://github.com/nic-pandion/hisagen`

## Deployment
- Hosting: Vercel
- Domain(s): `hisagen.pandion.studio` (behind Cloudflare Access)
- Root Directory (Vercel): **leave blank** (repo root is this folder)
- Builds: triggered on `main` push

## Access / Security
- Cloudflare Access is enabled for `hisagen.pandion.studio` (login required).
- Vercel previews remain accessible via the project dashboard.

## Key Routes
- `/` — Home (HISAGEN Agri-Carbon Program hub)
- `/program` — Program-level landing page
- `/project/hisagen-uganda` — HISAGEN Uganda Pilot
- `/funding-roadmap/capital-continuum` — Capital Continuum overview
- `/stage-1` `/stage-2` `/stage-3` `/stage-4` — Stage pages
- `/resources` — Communications + attachments index

## Key Files
- `src/app/page.tsx` — Home page
- `src/components/Nav.tsx` — Navigation + dropdown
- `src/app/program/page.tsx` — Program page
- `src/app/project/hisagen-uganda/page.tsx` — Pilot page
- `src/app/resources/page.tsx` — Resources timeline
- `src/app/funding-roadmap/capital-continuum/page.tsx` — Capital Continuum playbook
- `src/components/StageBreadcrumb.tsx` — Shared breadcrumb component
- `next.config.ts` — Remote images config

## Session Notes (2026-01-13)
- Capital Continuum applied at the **project** level; program level is narrative + scale structure.
- Nav intent: top-level link = **HISAGEN Agri-Carbon Program**; dropdown item = **HISAGEN Uganda Pilot**.
- Cloudflare Access gate prevents simple curl access to the live site.
- `git push` can time out locally but remote usually receives commits.

## Notes
- This is a private working portal; public-facing site can be derived later.
- Capital Continuum framework is applied at the **project** level (e.g., Uganda Pilot).
