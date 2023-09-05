import Link from 'next/link';
import React, { FC } from 'react';

import SheetMenu, { Links } from './SheetMenu';
import { getServerSession } from 'next-auth';
import UserAvatar from './UserAvatar';
import { authOptions } from '@/utils/authOptions';
import { Button } from '../ui/button';

export type LinkProps = { id: number; link: string; href: string };
const links: LinkProps[] = [
	{
		id: 0,
		link: 'Start learning',
		href: '/lessons',
	},
	{
		id: 1,
		link: 'Course overview',
		href: '/#course',
	},
	{
		id: 2,
		link: 'About me',
		href: '/#about',
	},
	{
		id: 3,
		link: 'Learning tips',
		href: '/#tips',
	},
];

interface ComponentProps {}
const Navbar: FC<ComponentProps> = async () => {
	const session = await getServerSession(authOptions);

	return (
		<header className="border-b-slate-700 border-b z-50">
			<nav
				className={`relative container mx-auto py-8 flex items-center justify-between transition duration-200`}>
				<Link href={'/'}>
					<span className="text-5xl font-extrabold text-yellowLogo opacity-90 hover:opacity-100 transition duration-150">
						JS<span className="text-white">uperior</span>
					</span>
				</Link>
				<div>
					<div className="md:hidden">
						<SheetMenu links={links} session={session} />
					</div>

					<ul className="hidden md:flex md:space-x-6 lg:space-x-12 xl:space-x-16 items-center md:text-base lg:text-lg">
						<Links links={links} />
						{session?.user ? (
							<UserAvatar session={session} />
						) : (
							<Link href={'/signin'}>
								<Button>Sign in</Button>
							</Link>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
};
export default Navbar;
