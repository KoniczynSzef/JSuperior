'use client';

import React, { FC } from 'react';

import { SessionProvider } from 'next-auth/react';

interface ComponentProps {
	children: React.ReactNode;
}

const AuthProvider: FC<ComponentProps> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
