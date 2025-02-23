import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(req) {
    const token = req.cookies.get('token');

    
    if (!token && req.nextUrl.pathname.startsWith('/users')) {
        return NextResponse.redirect(new URL('/login', req.url)); 
    }

    return NextResponse.next(); 
}


export const config = {
    matcher: ['/users/:path*'], 
};