import { signIn, signOut } from 'next-auth/react';

export const handleLogin = async () => {
	await signIn();
};

export const handleLogout = async () => {
	await signOut();
};
