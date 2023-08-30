import React from 'react';
import { Metadata } from 'next';
import SignInForm from './SignInForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Sign in to JSuperior',
	description: 'Sign in page for signing into JSuperior',
};

const page = async () => {
	const session = await getServerSession(authOptions);

	if (session?.user) return redirect('/');

	return (
		<div className="h-[75vh] grid place-items-center mx-4">
			<SignInForm />
		</div>
	);
};

export default page;
