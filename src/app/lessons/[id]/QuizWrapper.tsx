'use client';

import Quiz from '@/components/course-overview/quiz/Quiz';
import { Quiz as QuizType } from '@prisma/client';
import React, { FC } from 'react';

interface QuizWrapperProps {
    quiz: QuizType;
}

const QuizWrapper: FC<QuizWrapperProps> = ({ quiz }) => {
    const answers: string[][] = [];
    const correctAnswers: number[] = [];

    let tempArray: string[] = [];
    quiz.answers.forEach((a) => {
        tempArray.push(a);

        if (tempArray.length === 4) {
            answers.push(tempArray);
            tempArray = [];
        }
    });

    quiz.correctAnswers.forEach((a) => correctAnswers.push(parseInt(a)));

    return (
        <div className="mt-16">
            <Quiz
                questions={quiz.questions}
                answers={answers}
                correctAnswers={correctAnswers}
            />
        </div>
    );
};

export default QuizWrapper;
