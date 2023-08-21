import Link from 'next/link';
import React, { FC } from 'react';

import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';

interface ComponentProps {}
const Navbar: FC<ComponentProps> = () => {
	return (
		<header className="container mx-auto px-4 py-6 flex items-center justify-between">
			<Link href={'/'}>
				<h1 className="text-5xl md:text-6xl font-extrabold text-yellowLogo opacity-90 hover:opacity-100 transition duration-150">
					JS<span className="text-white">uperior</span>
				</h1>
			</Link>
			<Sheet>
				<SheetTrigger asChild>
					<Button className="px-3">
						<Menu />
					</Button>
				</SheetTrigger>
			</Sheet>
		</header>
	);
};
export default Navbar;
