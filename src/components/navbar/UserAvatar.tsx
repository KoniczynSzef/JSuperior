'use client';

import React, { FC } from 'react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ComponentProps {
	session: Session | null;
}

const UserAvatar: FC<ComponentProps> = ({ session }) => {
	return (
		<Link
			href={'/dashboard'}
			className="relative bg-transparent hover:shadow-xl hover:shadow-purple-700 hover:scale-105 origin-center p-2 rounded-full transition-all">
			<Avatar>
				<AvatarFallback>{session?.user?.name?.slice(0, 2)}</AvatarFallback>
				<AvatarImage src={session?.user?.image || ''} />
			</Avatar>
		</Link>
	);
};
export default UserAvatar;
