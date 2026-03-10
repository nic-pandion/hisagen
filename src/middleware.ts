import { NextRequest, NextResponse } from 'next/server';

/**
 * Defense-in-depth middleware for HISAGEN internal portal.
 *
 * Primary protection: Cloudflare Access on hisagen.pandion.studio (network-level)
 * This middleware: Catches bypass attempts via direct Vercel URL access.
 *
 * How it works:
 * - Requests through hisagen.pandion.studio → came through Cloudflare → CF Access verified → allow
 * - Requests through *.vercel.app → bypassed Cloudflare entirely → block
 * - In dev mode (localhost) → allow
 */

const ALLOWED_HOSTS = ['hisagen.pandion.studio'];

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';

  // Dev mode — localhost, allow all
  if (host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
    return NextResponse.next();
  }

  // Allow requests through the custom domain (protected by Cloudflare Access)
  if (ALLOWED_HOSTS.some((h) => host === h || host.startsWith(h + ':'))) {
    return NextResponse.next();
  }

  // Block everything else (direct .vercel.app access, unknown hosts)
  return new NextResponse('Access denied. This portal is only accessible through hisagen.pandion.studio.', {
    status: 403,
    headers: { 'Content-Type': 'text/plain' },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
