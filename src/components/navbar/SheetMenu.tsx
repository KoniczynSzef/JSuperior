'use client';

import React, { FC } from 'react';
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet';
import { LinkProps } from './Navbar';
import Link from 'next/link';

import { Github } from 'lucide-react';

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
		<SheetContent className="py-12 border-l-slate-700 bg-[#030007]">
			<SheetHeader className="mt-8">
				<SheetTitle>
					<h2 className="text-3xl font-bold text-yellowLogo">
						JS<span className="text-foreground">uperior</span>
					</h2>
				</SheetTitle>
			</SheetHeader>
			<SheetDescription className="mt-24">
				<ul className="space-y-10 flex flex-col items-center">
					<Links links={links} />
				</ul>
			</SheetDescription>
		</SheetContent>
	);
};
export default SheetMenu;
