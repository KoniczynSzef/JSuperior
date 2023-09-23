'use client';

import { Input } from '@/components/ui/input';
import React, { FC, useRef, useState } from 'react';
import Answer from '../answer/Answer';
import { Button } from '@/components/ui/button';

interface QuizFieldProps {
    addQuestion: (
        question: string,
        argAnswers: string[],
        correctAnswer: string
    ) => void;
    answers: React.MutableRefObject<string[]>;
}

const QuizField: FC<QuizFieldProps> = ({ addQuestion }) => {
    const [question, setQuestion] = useState<string>('');
    const [active, setActive] = useState<number>(10);
    const [correctAnswer, setCorrectAnswer] = useState<number>(10);
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const answers = useRef<string[]>(['', '', '', '']);

    const handleAddQuestion = () => {
        addQuestion(question, answers.current, correctAnswer.toString());
        setIsAdded(true);
    };

    return (
        <div
            className={`${
                isAdded ? 'opacity-30' : 'opacity-100'
            } border border-slate-900 p-2 rounded`}
        >
            <div className="flex gap-2">
                <Input
                    placeholder="Question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
                {answers.current?.map((_, idx) => (
                    <Answer
                        key={idx}
                        active={active}
                        idx={idx}
                        setActive={setActive}
                        answers={answers.current}
                        setCorrectAnswer={setCorrectAnswer}
                    />
                ))}
            </div>

            <Button
                type="button"
                className="bg-indigo-800 hover:bg-indigo-700 transition mt-3"
                onClick={handleAddQuestion}
            >
                Add question
            </Button>
        </div>
    );
};

export default QuizField;
