import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req:NextRequest) {
    const res = NextResponse.next();
    req.cookies.set('origin', req.nextUrl.origin);
	res.cookies.set('origin', req.nextUrl.origin);
    return res;
}