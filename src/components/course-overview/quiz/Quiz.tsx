'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import React, { useRef, useState } from 'react';

import { motion } from 'framer-motion';
import QuizSummary from './QuizSummary';
import { quizProps } from '@/assets/quizAssets';

type correctAnswers = 0 | 1 | 2 | 3;

export interface QuizProps {
	questions: string[];
	answers: string[][];
	correctAnswers: correctAnswers[];
}

export type QnAProps = {
	question: string;
	answer: string;
	code?: string;
};

const Quiz = () => {
	const { questions, answers, correctAnswers } = quizProps;
	const [step, setStep] = useState(0);
	const goodAnswers = useRef(0);
	const wasAnswersCorrect = useRef(false);
	const [userAnswered, setUserAnswered] = useState(false);
	const btnRef = useRef<HTMLButtonElement>(null);
	const mistakenQuestions = useRef<{ title: string; correctAnswer: string }[]>([]);

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
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="bg-transparent hover:bg-slate-900 border border-slate-700 px-10 py-6 text-lg"
					size={'lg'}>
					Start quiz
				</Button>
			</DialogTrigger>

			<DialogContent className="p-8 border border-slate-800 shadow-md max-w-md md:max-w-lg space-y-8 min-h-[32rem] overflow-hidden">
				{step < questions.length ? (
					!userAnswered ? (
						<>
							<DialogHeader>
								<DialogTitle className="leading-8 text-2xl text-left md:text-center">
									{questions[step]}
								</DialogTitle>
							</DialogHeader>
							<DialogDescription className="text-slate-300 flex flex-col gap-4">
								{answers[step].map((answer, i) => (
									<Button
										ref={btnRef}
										key={i}
										onClick={() => handleChoose(i)}
										className={`text-left py-8 bg-transparent border border-slate-800 flex items-center justify-start gap-6`}>
										<p className="text-lg">
											{i + 1}. {answer}
										</p>
									</Button>
								))}
							</DialogDescription>
						</>
					) : (
						<motion.div
							initial={
								wasAnswersCorrect.current && { filter: 'blur(4px)', opacity: 0 }
							}
							animate={wasAnswersCorrect.current && { filter: 'blur(0)', opacity: 1 }}
							className="m-auto">
							<DialogTitle
								className={`m-auto text-3xl ${
									wasAnswersCorrect.current ? 'text-green-500' : 'text-red-600'
								}`}>
								{wasAnswersCorrect.current
									? 'Correct answer!'
									: 'Incorrect answer!'}
							</DialogTitle>
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
			</DialogContent>
		</Dialog>
	);
};
export default Quiz;
