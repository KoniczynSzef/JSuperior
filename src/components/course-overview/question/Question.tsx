import P from '@/components/P';
import React, { FC } from 'react';
import CodeSnippet from '../CodeSnippet';

interface ComponentProps {
	q: {
		question: string;
		answer: string;
		code?: string;
	};
}

const Question: FC<ComponentProps> = ({ q }) => {
	return (
		<div className="z-50">
			<h3 className="text-3xl font-bold z-50">{q.question}</h3>
			<div className="mt-6 z-50">
				<P>{q.answer}</P>
			</div>
			<div className="mt-8">{q.code && <CodeSnippet code={q.code} />}</div>
		</div>
	);
};
export default Question;
