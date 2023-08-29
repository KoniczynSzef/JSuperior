'use client';

import React, { FC } from 'react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ComponentProps {
	session: Session | null;
}

const AuthDialogSpinner: FC<ComponentProps> = ({ session }) => {
	return (
		<Link href={'/dashboard'} className="hover:bg-zinc-900 p-1.5 rounded-full transition-all">
			<Avatar>
				<AvatarFallback>{session?.user?.name?.slice(0, 2)}</AvatarFallback>
				<AvatarImage src={session?.user?.image || ''} />
			</Avatar>
		</Link>
	);
};
export default AuthDialogSpinner;
