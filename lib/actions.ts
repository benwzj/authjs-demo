'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';
import { loginSchema } from '@/types/schema';

export async function login(prevState: string | undefined, formData: FormData) {
	try {
		const email = formData.get('email');
		const password = formData.get('password');

		const validatedFields = loginSchema.safeParse({
			email: email,
			password: password,
		});

		if (!validatedFields.success) {
			return 'validation error';
		}

		await signIn('credentials', formData);

		return 'success';
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return 'credentials error';
				default:
					return 'unknown error';
			}
		}
		throw error;
	}
}

export async function logout() {
	await signOut();
}
