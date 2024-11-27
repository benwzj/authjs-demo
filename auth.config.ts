import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    error: '/',
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isAuthenticated = !!auth?.user;
      const isOnPrivate = nextUrl.pathname.startsWith('/private');
      if (isOnPrivate) {
        if (isAuthenticated) return true;
        return false; // Redirect unauthenticated users to login page
      }else if (isAuthenticated){
        return Response.redirect(new URL('/private', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;