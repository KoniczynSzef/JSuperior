import P from '@/components/P';
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ComponentProps {
	questionsLength: number;
	goodAnswers: number;
	mistakenQuestions: { title: string; correctAnswer: string }[];
	handleReset: () => void;
}

type title = 'Well Done!' | 'Great Job!' | "Don't Give Up!";

const QuizSummary: FC<ComponentProps> = ({
	questionsLength,
	goodAnswers,
	mistakenQuestions,
	handleReset,
}) => {
	const [summaryText, setSummaryText] = useState<{ title: title; desc: string[] }>({
		title: 'Well Done!',
		desc: [
			`Your score is ${goodAnswers}/${questionsLength}.`,
			`Excellent work! Remember, learning is a process, and every bit of understanding is a step forward.`,
		],
	});

	useEffect(() => {
		if (goodAnswers / questionsLength < 0.5) {
			setSummaryText({
				title: "Don't Give Up!",
				desc: [
					`Your score is ${goodAnswers}/${questionsLength}.`,
					`Learning is a process, and every answer is an opportunity to learn something new.`,
				],
			});
		} else if (goodAnswers / questionsLength <= 0.75) {
			setSummaryText({
				title: 'Great Job!',
				desc: [
					`You're on the right track to mastering the material.`,
					`Your score is ${goodAnswers}/${questionsLength}. Keep up the good work and continue expanding your knowledge!`,
				],
			});
		}
	}, []);

	return (
		<>
			<DialogHeader>
				<DialogTitle className="text-center text-4xl">Summary</DialogTitle>
			</DialogHeader>
			<DialogDescription>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-8 flex flex-col">
					<div
						className={`text-foreground ${
							mistakenQuestions.length === 0 ? 'space-y-6' : 'space-y-2'
						}`}>
						<h3 className="text-foreground text-3xl font-bold">{summaryText.title}</h3>
						<div className="text-lg text-foreground space-y-1">
							{summaryText.desc.map((s, i) => (
								<p className="text-lg font-medium" key={i}>
									{s}
								</p>
							))}
						</div>
					</div>

					{mistakenQuestions.length >= 1 && (
						<div className="text-foreground">
							<h4 className="font-bold text-2xl text-red-600">Your Mistakes</h4>
							<div className="space-y-2 mt-4">
								{mistakenQuestions.map((q, i) => (
									<div key={i} className="border border-zinc-800 p-3 rounded">
										<h5 className="text-xl font-semibold">{q.title}</h5>
										<P>
											Correct answer:{' '}
											<span className="text-green-500">
												{q.correctAnswer}
											</span>
										</P>
									</div>
								))}
							</div>
						</div>
					)}
					<DialogTrigger asChild>
						<Button
							type="submit"
							className="self-end text-lg bg-transparent border-slate-800 border py-6"
							size={'lg'}
							onClick={handleReset}>
							Finish quiz
						</Button>
					</DialogTrigger>
				</motion.div>
			</DialogDescription>
		</>
	);
};
export default QuizSummary;
