'use client';

import P from '@/components/P';
import { Button } from '@/components/ui/button';
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import React, { FC, useRef, useState } from 'react';

type correctAnswers = 0 | 1 | 2 | 3;

export interface QuizProps {
	questions: string[];
	answers: string[][];
	correctAnswers: correctAnswers[];
}

const Quiz: FC<QuizProps> = ({ questions, answers, correctAnswers }) => {
	const [step, setStep] = useState(0);
	const goodAnswers = useRef(0);

	const handleChoose = (i: number) => {
		if (i === correctAnswers[step]) {
			goodAnswers.current += 1;
		}

		setStep((prev) => (prev += 1));
	};

	return (
		<DialogContent>
			{step < questions.length ? (
				<>
					<DialogHeader>
						<DialogTitle className="leading-8">{questions[step]}</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						{answers[step].map((answer, i) => (
							<P key={i}>
								{i + 1}. {answer}
							</P>
						))}
					</DialogDescription>
					<DialogFooter className="flex justify-between items-center">
						{answers[step].map((answer, i) => (
							<Button key={i} onClick={() => handleChoose(i)}>
								{answer}
							</Button>
						))}
					</DialogFooter>
				</>
			) : (
				<>
					<DialogHeader>
						<DialogTitle>
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
