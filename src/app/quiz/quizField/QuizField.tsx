'use client';

import { Input } from '@/components/ui/input';
import React, { FC, useState } from 'react';
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

const QuizField: FC<QuizFieldProps> = ({ addQuestion, answers }) => {
    const [question, setQuestion] = useState<string>('');
    const [active, setActive] = useState<number>(10);
    const [correctAnswer, setCorrectAnswer] = useState<number>(10);

    return (
        <div>
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
                className="bg-indigo-800 hover:bg-indigo-700 transition mt-2"
                onClick={() =>
                    addQuestion(
                        question,
                        answers.current,
                        correctAnswer.toString()
                    )
                }
            >
                Add question
            </Button>
        </div>
    );
};

export default QuizField;
