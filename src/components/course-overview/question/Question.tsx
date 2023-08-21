import P from '@/components/P';
import React, { FC } from 'react';

interface ComponentProps {
	q: {
		question: string;
		answer: string;
	};
}

const Question: FC<ComponentProps> = ({ q }) => {
	return (
		<div>
			<h3 className="text-3xl font-bold">{q.question}</h3>
			<div className="mt-6">
				<P>{q.answer}</P>
			</div>
		</div>
	);
};
export default Question;
