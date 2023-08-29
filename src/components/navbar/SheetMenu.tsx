'use client';

import React, { FC } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { LinkProps } from './Navbar';
import Link from 'next/link';

import { Github, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import Sidebar from '../sidebar/Sidebar';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Dialog, DialogTrigger } from '../ui/dialog';

interface ComponentProps {
	links: LinkProps[];
}

export const Links: FC<ComponentProps> = ({ links }) => {
	const { data: session } = useSession();

	const handleLogin = async () => {
		await signIn();
	};

	const handleLogout = async () => {
		await signOut();
	};

	console.log(session);

	return (
		<>
			{links.map((link) => (
				<li key={link.id}>
					<Link
						href={link.href}
						className="text-sec hover:text-foreground text-xl transition duration-200">
						{link.link}
					</Link>
				</li>
			))}
			<a href="https://github.com/KoniczynSzef" target="_blank" rel="noreferrer">
				<li className="bg-transparent p-3 border border-slate-700 rounded hover:bg-slate-900 transition">
					<Github className="text-white" />
				</li>
			</a>

			<Dialog>
				{!session?.user ? (
					<DialogTrigger asChild>
						<Button
							onClick={handleLogin}
							variant={'outline'}
							className="text-xl py-6 border-none hover:bg-gray-900 hover:text-foreground">
							Login
						</Button>
					</DialogTrigger>
				) : (
					<Button
						onClick={handleLogout}
						variant={'outline'}
						className="text-xl py-6 border-none hover:bg-gray-900 hover:text-foreground">
						Sign out
					</Button>
				)}
			</Dialog>
		</>
	);
};

const SheetMenu: FC<ComponentProps> = ({ links }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="px-3">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className="py-12 border-l-slate-700 bg-[#030007]">
				<SheetHeader className="mt-8">
					<SheetTitle className="text-3xl font-bold text-yellowLogo">
						JS<span className="text-foreground">uperior</span>
					</SheetTitle>
				</SheetHeader>
				<ul className="space-y-10 flex flex-col items-center mt-24">
					{links.map((link) => (
						<SheetTrigger asChild key={link.id}>
							<Link
								href={link.href}
								className="text-sec hover:text-foreground text-xl transition duration-200">
								{link.link}
							</Link>
						</SheetTrigger>
					))}
				</ul>

				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};
export default SheetMenu;
