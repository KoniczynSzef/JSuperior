import React, { FC } from 'react';
import P from '../P';
import { tips } from '@/assets/tips';
import Link from 'next/link';
import Tip from './Tip';

interface ComponentProps {}

const Learning: FC<ComponentProps> = () => {
	return (
		<section id="tips" className="container relative mx-auto py-32">
			<h2 className="text-4xl uppercase font-bold text-center">Learning tips</h2>
			<div className="mt-8">
				<P>
					Before You start learning from this course, I have just a few tips, that can
					help you achieve even more, than you thought.
				</P>
			</div>

			<div className="mt-16 gap-6 grid grid-cols-1 md:grid-cols-4">
				{tips.map((tip) => (
					<Tip key={tip.id} title={tip.title} desc={tip.desc} id={tip.id} />
				))}
			</div>

			<div className="mt-24 flex flex-col gap-8">
				<h3 className="text-3xl font-bold text-center uppercase">
					Now you are ready to get{' '}
					<span className="bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-[#ffd119]">
						superior
					</span>
				</h3>

				<Link
					href={'/'}
					className="bg-transparent hover:bg-slate-900 border border-slate-700 mx-auto py-4 px-12 rounded font-medium transition">
					<P>Start learning</P>
				</Link>
			</div>
		</section>
	);
};
export default Learning;
