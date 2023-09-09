import React from 'react';
import ReduxProvider from '@/context/ReduxProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Bottom from '@/components/bottom/Bottom';
import AuthProvider from '@/components/auth/AuthProvider';
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'JSuperior',
    description: 'JSuperior - the best JS course out there',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <ReduxProvider>
                <html lang="en">
                    <body
                        className={`${inter.className} bg-gradient-b from-gray-900 via-[#300171] to-slate-900 text-foreground`}
                    >
                        <NextTopLoader color="#4338ca" />
                        <Navbar />
                        {children}
                        <Bottom />
                        <Toaster />
                    </body>
                </html>
            </ReduxProvider>
        </AuthProvider>
    );
}
