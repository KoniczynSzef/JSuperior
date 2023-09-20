'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Quiz } from '@prisma/client';
import React, { FC, useRef, useState } from 'react';

export type lessonProps = {
    title: string;
    description: string;
    content: string;
    hasQuiz: boolean;
    lessonCategory: string;
};

interface CmsFormProps {}

async function createQuiz(quiz: Quiz) {
    const res = await fetch(`/api/quiz`, {
        method: 'POST',
        body: JSON.stringify(quiz),
    });

    const data = await res.json();

    console.log(data);
}

const Answer = ({
    active,
    idx,
    setActive,
    answers,
    correctAnswers,
}: {
    active: number;
    idx: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    answers: [string, string, string, string];
    correctAnswers: string[];
}) => {
    const [value, setValue] = useState<string>('');
    return (
        <div className="flex gap-2">
            <Input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    answers[idx] = e.target.value;
                }}
            />
            <Button
                disabled={active === idx}
                onClick={() => {
                    setActive(idx);
                    correctAnswers[0] = idx.toString();
                }}
                className={active === idx ? 'bg-slate-950' : ''}
            >
                {idx}
            </Button>
        </div>
    );
};

const CmsForm: FC<CmsFormProps> = () => {
    const [lessonId, setLessonId] = useState<number>(0);
    const [question, setQuestion] = useState<string>('');
    const answers = useRef<[string, string, string, string]>(['', '', '', '']);
    const correctAnswers: string[] = [''];
    const { toast } = useToast();

    const [active, setActive] = useState<number>(10);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const quiz: Quiz = {
                id: crypto.randomUUID(),
                lessonId,
                questions: [question],
                answers: answers.current,
                correctAnswers,
            };

            await createQuiz(quiz);

            toast({
                title:
                    'Successfully created quiz with the question title: ' +
                    question,
                duration: 2000,
            });
        } catch (error) {
            throw new Error('Something went wrong');
        }
    };

    return (
        <div className="flex gap-12">
            <form
                className="max-w-2xl w-full flex flex-col space-y-10 border border-slate-800 p-8 rounded"
                onSubmit={handleSubmit}
            >
                <div className="flex gap-2">
                    <Input
                        placeholder="Question..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <Input
                        placeholder="ID..."
                        value={lessonId}
                        onChange={(e) => setLessonId(Number(e.target.value))}
                        className="w-[10%]"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {answers.current?.map((_, idx) => (
                        <Answer
                            key={idx}
                            active={active}
                            idx={idx}
                            setActive={setActive}
                            answers={answers.current}
                            correctAnswers={correctAnswers}
                        />
                    ))}
                </div>

                <Button
                    type="submit"
                    className="bg-indigo-800 hover:bg-indigo-700 transition"
                >
                    Add quiz
                </Button>
            </form>
        </div>
    );
};

export default CmsForm;
