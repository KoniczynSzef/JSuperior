'use client';

import Link from 'next/link';
import React, { FC } from 'react';

import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import SheetMenu, { Links } from './SheetMenu';
import { Separator } from '../ui/separator';

export type LinkProps = { id: number; link: string; href: string };
const links: LinkProps[] = [
	{
		id: 1,
		link: 'Course overview',
		href: '#course',
	},
	{
		id: 2,
		link: 'About me',
		href: '#about',
	},
	{
		id: 3,
		link: 'Learning tips',
		href: '#tips',
	},
];

interface ComponentProps {}
const Navbar: FC<ComponentProps> = () => {
	return (
		<header>
			<nav
				className={`relative container mx-auto px-4 py-8 flex items-center justify-between transition duration-200`}>
				<Link href={'/'}>
					<span className="text-5xl font-extrabold text-yellowLogo opacity-90 hover:opacity-100 transition duration-150">
						JS<span className="text-white">uperior</span>
					</span>
				</Link>
				<div>
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button className="px-3">
									<Menu />
								</Button>
							</SheetTrigger>
							<SheetMenu links={links} />
						</Sheet>
					</div>

					<ul className="hidden md:flex md:space-x-6 lg:space-x-16 items-center">
						<Links links={links} />
					</ul>
				</div>
			</nav>
			<Separator />
		</header>
	);
};
export default Navbar;
