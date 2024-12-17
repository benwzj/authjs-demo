import NextAuth from "next-auth"
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials'; 
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

async function getUser(email: string, password: string): Promise<unknown> {
  return email === 'e@e.com' ? {
    id: 1,
    name: 'test user',
    email: email,
    password: password,
  } : null;
}

export const {
  auth,
  signIn,
  signOut,
  handlers,
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await getUser(
          credentials.email as string,
          credentials.password as string
        );

        return user ?? null;
      },
    }),
    Google,
    GitHub
  ],
});

