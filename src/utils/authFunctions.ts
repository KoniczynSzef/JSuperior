import { signIn, signOut } from 'next-auth/react';

export type provider = 'google' | 'github';

export const handleLogin = async (provider: provider) => {
	await signIn(provider);
};

export const handleLogout = async () => {
	await signOut();
};
