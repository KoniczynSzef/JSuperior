'use client';

import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import React, { FC, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import QuizSummary from './QuizSummary';

export interface QuizProps {
    questions: string[];
    answers: string[][];
    correctAnswers: number[];
}

export type QnAProps = {
    question: string;
    answer: string;
    code?: string;
};

const Quiz: FC<QuizProps> = ({ answers, correctAnswers, questions }) => {
    const [step, setStep] = useState(0);
    const goodAnswers = useRef(0);
    const wasAnswersCorrect = useRef(false);
    const [userAnswered, setUserAnswered] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    const mistakenQuestions = useRef<
        { title: string; correctAnswer: string }[]
    >([]);

    const handleReset = () => {
        setStep(0);
        goodAnswers.current = 0;
        setUserAnswered(false);
        wasAnswersCorrect.current = false;
    };

    const handleChoose = (i: number) => {
        setUserAnswered(true);
        if (i === correctAnswers[step]) {
            goodAnswers.current += 1;
            wasAnswersCorrect.current = true;
        } else {
            const answerIdx = correctAnswers[step];
            mistakenQuestions.current.push({
                title: questions[step],
                correctAnswer: answers[step][answerIdx],
            });
        }

        setTimeout(() => {
            setUserAnswered(false);
            setStep((prev) => (prev += 1));
            wasAnswersCorrect.current = false;
        }, 1000);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="bg-transparent hover:bg-accent dark:hover:bg-slate-900 border border-slate-700 px-10 py-6 text-lg text-foreground"
                    size={'lg'}
                >
                    Start quiz
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="dark:bg-black p-8 border border-slate-800 shadow-md max-w-md md:max-w-lg space-y-8 min-h-[32rem] overflow-hidden text-foreground rounded">
                {step < questions.length ? (
                    !userAnswered ? (
                        <>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="leading-8 text-2xl text-left">
                                    {questions[step]}
                                </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogDescription className="text-foreground flex flex-col gap-4">
                                {answers[step].map((answer, i) => (
                                    <Button
                                        ref={btnRef}
                                        key={i}
                                        onClick={() => handleChoose(i)}
                                        className={`text-left py-8 bg-transparent border border-slate-800 flex items-center justify-start gap-6 hover:bg-accent`}
                                    >
                                        <p className="text-lg text-foreground">
                                            {i + 1}. {answer}
                                        </p>
                                    </Button>
                                ))}
                            </AlertDialogDescription>
                        </>
                    ) : (
                        <motion.div
                            initial={
                                wasAnswersCorrect.current && {
                                    filter: 'blur(4px)',
                                    opacity: 0,
                                }
                            }
                            animate={
                                wasAnswersCorrect.current && {
                                    filter: 'blur(0)',
                                    opacity: 1,
                                }
                            }
                            className="m-auto"
                        >
                            <AlertDialogTitle
                                className={`m-auto text-3xl ${
                                    wasAnswersCorrect.current
                                        ? 'text-green-500'
                                        : 'text-red-600'
                                }`}
                            >
                                {wasAnswersCorrect.current
                                    ? 'Correct answer!'
                                    : 'Incorrect answer!'}
                            </AlertDialogTitle>
                        </motion.div>
                    )
                ) : (
                    <QuizSummary
                        questionsLength={questions.length}
                        goodAnswers={goodAnswers.current}
                        mistakenQuestions={mistakenQuestions.current}
                        handleReset={handleReset}
                    />
                )}
            </AlertDialogContent>
        </AlertDialog>
    );
};
export default Quiz;
