import React from 'react';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Bottom from '@/components/bottom/Bottom';
import NextTopLoader from 'nextjs-toploader';
import Providers from '@/components/Providers';
import { ThemeProvider } from '@/components/theme-provider';
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
        <Providers>
            <html lang="en" suppressHydrationWarning>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="connect-src 'none'"
                />
                <body
                    className={`${inter.className} bg-gradient-b from-gray-900 via-[#300171] to-slate-900 text-foreground`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <NextTopLoader color="#4c1d95" showSpinner={false} />
                        <Navbar />
                        {children}
                        <Bottom />
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </Providers>
    );
}
