import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import FooterForm from './FooterForm';
import { links } from '../about/About';

interface ComponentProps {}

const Footer: FC<ComponentProps> = () => {
	return (
		<footer className="relative py-16 px-4">
			<div className="container mx-auto flex items-center flex-col-reverse md:flex-row gap-16">
				<div className="space-x-4 flex">
					{links.map((link, i) => (
						<a
							key={i}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							className="p-4 rounded bg-transparent border border-slate-800 hover:bg-slate-900 transition">
							{link.icon}
						</a>
					))}
				</div>
				<Card className="mx-auto bg-transparent border-slate-800 text-foreground w-full">
					<CardHeader>
						<CardTitle>Sign up for the newsletter</CardTitle>
					</CardHeader>
					<CardContent>
						<FooterForm />
					</CardContent>
				</Card>
			</div>
		</footer>
	);
};
export default Footer;
