import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest, event: NextFetchEvent) {
    const apiKey = request.headers.get('X-API-KEY');

    if (apiKey === process.env.API_KEY) {
        return NextResponse.next();
    }

    return new Response('API key is incorrect', { status: 401 });
}
