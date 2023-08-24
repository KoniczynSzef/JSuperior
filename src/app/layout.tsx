import React from 'react';
import ReduxProvider from '@/context/ReduxProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Bottom from '@/components/bottom/Bottom';
import Sidebar from '@/components/sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'JSuperior',
	description: 'JSuperior - the best JS course out there',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ReduxProvider>
			<html lang="en">
				<body className={`${inter.className} bg-background text-foreground`}>
					<Navbar />
					<div className="flex mx-auto gap-4 relative items-start container">
						<Sidebar />
						{children}
					</div>
					<Bottom />
					<Toaster />
				</body>
			</html>
		</ReduxProvider>
	);
}
