import React, { FC } from 'react';
import { QnAProps } from '../quiz/Quiz';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ComponentProps {
	q: QnAProps;
}

const AccordionChild: FC<ComponentProps> = ({ q }) => {
	return (
		<AccordionItem value={q.question} className="border-b border-b-slate-300">
			<AccordionTrigger className="text-xl font-bold">{q.question}</AccordionTrigger>
			<AccordionContent className="text-medium text-xl leading-8">
				{q.answer}
			</AccordionContent>
		</AccordionItem>
	);
};

export default AccordionChild;
