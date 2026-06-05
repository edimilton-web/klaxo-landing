import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  if (hostname.startsWith('business.klaxo.app')) {
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/business'
      return NextResponse.rewrite(url)
    }
    if (url.pathname.startsWith('/blog')) {
      url.pathname = '/business' + url.pathname
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
