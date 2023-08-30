'use client';

import React, { FC } from 'react';
import { Card, CardTitle } from '../ui/card';
import P from '../P';
import { motion } from 'framer-motion';

export interface TipProps {
	id: number;
	title: string;
	desc: string;
}

const Tip: FC<TipProps> = ({ title, desc, id }) => {
	return (
		<motion.div
			key={id}
			whileInView={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.5, delay: 0.1 * id }}>
			<Card className="bg-transparent max-w-lg text-foreground border-slate-700">
				<CardTitle className="border-b border-b-slate-800 py-4 px-6 bg-slate-900 rounded-t">
					{id}. {title}
				</CardTitle>
				<div className="px-6 text-sec my-4 text-slate-200">
					<P>{desc}</P>
				</div>
			</Card>
		</motion.div>
	);
};

export default Tip;
