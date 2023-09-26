'use client';

import React, { FC } from 'react';
import AuthProvider from './auth/AuthProvider';
import ReduxProvider from '@/context/ReduxProvider';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <AuthProvider>
            <ReduxProvider>{children}</ReduxProvider>
        </AuthProvider>
    );
};

export default Providers;
