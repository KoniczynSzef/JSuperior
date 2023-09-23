import React, { FC } from 'react';
import { QnAProps } from '../quiz/Quiz';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface ComponentProps {
    q: QnAProps;
}

const AccordionChild: FC<ComponentProps> = ({ q }) => {
    return (
        <AccordionItem
            value={q.question}
            className="border-b border-b-gray-800"
        >
            <AccordionTrigger className="text-xl">
                {q.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-8">
                {q.answer}
            </AccordionContent>
        </AccordionItem>
    );
};

export default AccordionChild;
