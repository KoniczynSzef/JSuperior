import { paragraphs } from '@/assets/aboutMeText';
import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Github, Mail, LucideLinkedin } from 'lucide-react';
import P from '../P';

const links: { name: string; url: string; icon: React.JSX.Element }[] = [
	{ name: 'Github', url: 'https://github.com/KoniczynSzef', icon: <Github /> },
	{ name: 'E-mail', url: 'mailto:koniczynszef@gmail.com', icon: <Mail /> },
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/piotr-kończyk-866142251/',
		icon: <LucideLinkedin />,
	},
];

interface ComponentProps {}

const About: FC<ComponentProps> = () => {
	return (
		<section id="about" className="container relative mx-auto py-32">
			<h2 className="text-4xl uppercase font-bold text-center">About me</h2>
			<div className="space-y-6 mt-16">
				{paragraphs.map((p, i) => (
					<P key={i}>{p}</P>
				))}
			</div>

			<Card className="bg-transparent text-foreground border-slate-800 max-w-lg mt-16">
				<CardHeader>
					<CardTitle className="text-3xl">My social media</CardTitle>
				</CardHeader>
				<CardContent className="w-full space-x-2 flex mt-8">
					{links.map((link, i) => (
						<a
							key={i}
							className="w-full bg-slate-950 hover:bg-slate-900 flex items-center p-4 rounded border border-slate-800 transition-all duration-150"
							href={link.url}
							target="_blank"
							rel="noreferrer">
							<span className="mr-auto">{link.name}</span>
							{link.icon}
						</a>
					))}
				</CardContent>
			</Card>
		</section>
	);
};
export default About;
