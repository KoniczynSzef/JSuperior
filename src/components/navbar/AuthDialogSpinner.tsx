'use client';

import React, { FC } from 'react';
import { DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Session } from 'next-auth';

interface ComponentProps {
	handleLogin: () => Promise<void>;
	handleLogout: () => Promise<void>;
	session: Session | null;
}

const AuthDialogSpinner: FC<ComponentProps> = ({ handleLogin, handleLogout, session }) => {
	return (
		<DialogTrigger asChild>
			<Button
				onClick={session?.user ? handleLogout : handleLogin}
				variant={'outline'}
				className="text-xl py-6 border-none hover:bg-gray-900 hover:text-foreground">
				{session?.user ? 'Sign out' : 'Login in'}
			</Button>
		</DialogTrigger>
	);
};
export default AuthDialogSpinner;
