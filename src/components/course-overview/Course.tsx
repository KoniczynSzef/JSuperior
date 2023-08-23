import React, { FC } from 'react';
import Question from './question/Question';
import P from '../P';
import Image from 'next/image';

import keyboardImage from '../../assets/keyboard.png';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import Quiz from './quiz/Quiz';
import {
	buildingModernWebApps,
	buildingRealWorldProject,
	questions,
	questions2,
} from '@/assets/courseOverviewAssets';
import TodoList from './TodoList/TodoList';

interface ComponentProps {}
const Course: FC<ComponentProps> = () => {
	return (
		<section className="container mx-auto relative py-32" id="course">
			<h2 className="text-4xl uppercase font-bold text-center z-30">Course overview</h2>
			<div className="flex flex-col lg:flex-row mt-24 items-center gap-16 lg:gap-8 z-30">
				<p className="font-medium leading-10 mt-6 md:max-w-3xl text-xl z-30">
					Dive into the world of JavaScript with our Complete JavaScript Course! Are you
					curious about harnessing the power of code to build dynamic websites and
					applications? Look no further. This course is designed to take you from a
					curious beginner to a confident JavaScript developer.
				</p>
			</div>

			<div className="my-32 flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between items-center">
				<div className="space-y-10">
					<blockquote className="italic border border-slate-800 p-8 rounded bg-slate-950">
						<P>
							“Programming is not about typing code; it&apos;s about thinking
							logically and solving problems systematically. Consistency in learning
							leads to mastery in coding.”
						</P>
					</blockquote>
					<Accordion type="single" collapsible className="space-y-2">
						{questions.map((q, i) => (
							<AccordionItem key={i} value={q.question}>
								<AccordionTrigger className="text-xl font-bold">
									{q.question}
								</AccordionTrigger>
								<AccordionContent className="text-medium text-xl leading-8">
									{q.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<Image
					src={keyboardImage}
					alt="Keyboard image - red keyboard and monitor behind it"
					className="lg:max-w-md xl:max-w-2xl object-cover rounded"
				/>
			</div>

			<h2 className="text-4xl font-bold">What does this course offer?</h2>
			<div className="mt-2">
				<P>
					Our Complete JavaScript Course offers a comprehensive learning experience that
					equips you with the skills and knowledge to excel in JavaScript development.
					Here&apos;s a glimpse of what you can expect:
				</P>
			</div>

			<div className="space-y-16 mt-32">
				{questions2.map((q, i) => (
					<Question key={i} q={q} />
				))}
			</div>

			<Quiz />

			<div className="mt-16">
				<Question q={buildingRealWorldProject} />
			</div>

			<TodoList />

			<div className="mt-16">
				<Question q={buildingModernWebApps} />
			</div>
		</section>
	);
};
export default Course;
