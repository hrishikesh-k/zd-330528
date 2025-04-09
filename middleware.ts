import { NextResponse } from 'next/server';

export const config = {
  matcher: '/((?!csp|_next|static|favicon).*)',
};

const middleware = (): NextResponse => {
  console.info('Next Middleware was called');

  return NextResponse.next()
};

export default middleware;
