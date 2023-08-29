import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { FC } from 'react';
import Logout from './Logout';

interface ComponentProps {}

const page: FC<ComponentProps> = async () => {
	const session = await getServerSession(authOptions);
	const user = session?.user;

	console.log('User: ', user);
	return session?.user ? (
		<div>
			<h2>Welcome to dashboard!</h2>
			<p>{user?.name ?? "You somehow didn't pass the name!"}</p>
			<Logout />
		</div>
	) : (
		<div>This content is protected. Please sign in!</div>
	);
};

export default page;
