'use client';

import React, { FC } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { LinkProps } from './Navbar';
import Link from 'next/link';

import { Github, Menu } from 'lucide-react';
import { Button } from '../ui/button';

interface ComponentProps {
	links: LinkProps[];
}

export const Links: FC<ComponentProps> = ({ links }) => {
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
					{/* <Links links={links} /> */}
				</ul>
			</SheetContent>
		</Sheet>
	);
};
export default SheetMenu;
