'use client';

import React, { FC } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { LinkProps } from './Navbar';
import Link from 'next/link';

import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import Sidebar from '../sidebar/Sidebar';
import { Session } from 'next-auth';
import UserAvatar from './UserAvatar';

interface ComponentProps {
	links: LinkProps[];
	session?: Session | null;
}

export const Links: FC<ComponentProps> = ({ links }) => {
	return links.map((link) => (
		<li key={link.id}>
			<Link
				href={link.href}
				className="text-sec hover:text-foreground text-xl transition duration-200">
				{link.link}
			</Link>
		</li>
	));
};

const SheetMenu: FC<ComponentProps> = ({ links, session }) => {
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

				<div className="flex justify-center my-12">
					<SheetTrigger asChild>
						{session?.user ? (
							<UserAvatar session={session} />
						) : (
							<Link href={'/signin'}>
								<Button>Sign in</Button>
							</Link>
						)}
					</SheetTrigger>
				</div>

				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};
export default SheetMenu;
