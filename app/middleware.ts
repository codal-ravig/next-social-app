import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	console.log(request, 'here');
	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect('/home');
	}
}
