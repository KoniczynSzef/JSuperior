'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Quiz } from '@prisma/client';
import React, { FC, useRef, useState } from 'react';
import QuizField from './quizField/QuizField';

interface QuizFormProps {}

async function createQuiz(quiz: Quiz) {
    const res = await fetch(`/api/quiz`, {
        method: 'POST',
        body: JSON.stringify(quiz),
    });

    const data = await res.json();

    console.log(data);
}

const QuizForm: FC<QuizFormProps> = () => {
    const [entities, setEntities] = useState<number[]>([]);

    const [lessonId, setLessonId] = useState<number>(0);
    const questions = useRef<string[]>([]);
    const answers = useRef<string[]>(['', '', '', '']);
    const correctAnswers = useRef<string[]>(['']);
    const { toast } = useToast();

    const addQuestion = (
        question: string,
        argAnswers: string[],
        correctAnswer: string
    ) => {
        questions.current.push(question);
        argAnswers.forEach((answer) => {
            answers.current.push(answer);
        });

        correctAnswers.current.push(correctAnswer);

        console.log(questions.current);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const quiz: Quiz = {
                id: crypto.randomUUID(),
                lessonId,
                questions: questions.current,
                answers: answers.current,
                correctAnswers: correctAnswers.current,
            };

            console.log(quiz);

            // await createQuiz(quiz);

            toast({
                title:
                    'Successfully created quiz with the first question title: ' +
                    questions.current[0],
                duration: 2000,
            });
        } catch (error) {
            throw new Error('Something went wrong');
        }
    };

    const addEntity = () => {
        console.log(entities);
        setEntities((prev) => [...prev, entities.length]);
    };

    return (
        <div className="flex gap-12">
            <form
                className="max-w-2xl w-full flex flex-col space-y-10 border border-slate-800 p-8 rounded"
                onSubmit={handleSubmit}
            >
                <div className="flex w-full gap-8 justify-between">
                    <Button
                        onClick={addEntity}
                        className="flex-1 max-w-[75%]"
                        type="button"
                    >
                        Add Question
                    </Button>

                    <Input
                        placeholder="ID..."
                        value={lessonId}
                        onChange={(e) => setLessonId(Number(e.target.value))}
                        className="w-[10%]"
                    />
                </div>
                {entities?.map((_, i) => (
                    <QuizField
                        key={i}
                        addQuestion={addQuestion}
                        answers={answers}
                    />
                ))}

                {entities.length >= 1 && (
                    <Button
                        type="submit"
                        className="bg-violet-800 hover:bg-violet-700"
                    >
                        Submit quiz
                    </Button>
                )}
            </form>
        </div>
    );
};

export default QuizForm;
