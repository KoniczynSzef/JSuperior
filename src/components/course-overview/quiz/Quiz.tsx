'use client';

import { Button } from '@/components/ui/button';
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import React, { FC, useRef, useState } from 'react';

import { motion } from 'framer-motion';

type correctAnswers = 0 | 1 | 2 | 3;

export interface QuizProps {
	questions: string[];
	answers: string[][];
	correctAnswers: correctAnswers[];
}

const Quiz: FC<QuizProps> = ({ questions, answers, correctAnswers }) => {
	const [step, setStep] = useState(0);
	const goodAnswers = useRef(0);
	const wasAnswersCorrect = useRef(false);
	const [userAnswered, setUserAnswered] = useState(false);

	const handleChoose = (i: number) => {
		setUserAnswered(true);
		if (i === correctAnswers[step]) {
			goodAnswers.current += 1;
			wasAnswersCorrect.current = true;
		}

		setTimeout(() => {
			setUserAnswered(false);
			setStep((prev) => (prev += 1));
			wasAnswersCorrect.current = false;
		}, 1000);
	};

	return (
		<DialogContent className="p-8 border border-slate-800 shadow-md max-w-lg space-y-8">
			{step < questions.length ? (
				!userAnswered ? (
					<>
						<DialogHeader>
							<DialogTitle className="leading-8 text-2xl">
								{questions[step]}
							</DialogTitle>
						</DialogHeader>
						<DialogDescription className="text-slate-300 flex flex-col gap-4">
							{answers[step].map((answer, i) => (
								<Button
									key={i}
									onClick={() => handleChoose(i)}
									className="text-left py-8 bg-transparent border border-slate-800">
									<p className="mr-auto text-lg">
										{i + 1}. {answer}
									</p>
								</Button>
							))}
						</DialogDescription>
					</>
				) : (
					<motion.div
						initial={wasAnswersCorrect.current && { filter: 'blur(4px)', y: -50 }}
						animate={wasAnswersCorrect.current && { filter: 'blur(0)', y: 0 }}
						className="m-auto">
						<DialogTitle
							className={`m-auto text-2xl ${
								wasAnswersCorrect.current
									? 'text-green-500'
									: 'text-red-600 animate-bounce'
							}`}>
							{wasAnswersCorrect.current
								? 'Correct answer!'
								: 'Unfortunately that is not the correct answer.'}
						</DialogTitle>
					</motion.div>
				)
			) : (
				<>
					<DialogHeader>
						<DialogTitle className="text-2xl text-center">
							You scored {goodAnswers.current}/{questions.length}
						</DialogTitle>
					</DialogHeader>
					<DialogDescription>Well done!</DialogDescription>
				</>
			)}
		</DialogContent>
	);
};
export default Quiz;
