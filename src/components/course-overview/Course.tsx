import React, { FC } from 'react';
import Question from './question/Question';
import P from '../P';
import Image from 'next/image';

import keyboardImage from '../../assets/keyboard.png';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Dialog, DialogTrigger } from '../ui/dialog';
import Quiz, { QuizProps } from './quiz/Quiz';

export type QnAProps = {
	question: string;
	answer: string;
	code?: string;
};

const quizProps: QuizProps = {
	questions: [
		'Which of the following methods is used to add an element to the end of an array?',
		'Which one of these JS types is not a primitive?',
	],
	answers: [
		['push()', 'pop()', 'shift()', 'unshift()'],
		['boolean', 'array', 'string', 'number'],
	],
	correctAnswers: [0, 1],
};

const code = [
	`
	   const greetings = (name) => {
		   console.log("Hello, " + name)
	   }
	   `,
	`
	const title = "The Hobbit"
	const author = "J.R.R Tolkien"

	class Book {
	  constructor(title, author) {
		this.title = title
		  this.author = author
	  }
	}

	const book = new Book(title, author)
	   `,
];

const questions: QnAProps[] = [
	{
		question: 'Why learn JavaScript?',
		answer: "JavaScript is the backbone of modern web development. It's the language that makes websites interactive and responsive, allowing users to experience seamless, engaging interfaces. Whether you're new to coding or looking to expand your skill set, mastering JavaScript opens up a world of opportunities.",
	},
	{
		question: 'What to expect?',
		answer: "My course is carefully crafted to cater to learners of all levels. From the basics of variables and functions to advanced topics like asynchronous programming and APIs, I've got you covered. With hands-on exercises, real-world projects, and interactive quizzes, you'll build a solid foundation in no time.",
	},
	{
		question: 'Hands-On Learning',
		answer: "I believe in learning by doing. Throughout the course, you'll work on practical projects that mirror real-world scenarios. You'll gain confidence as you apply your knowledge to solve challenges, write code, and witness the immediate impact of your efforts.",
	},
	{
		question: 'Interactive Quizzes',
		answer: "Quizzes aren't just about testing your knowledge; they're an integral part of the learning journey. My interactive quizzes will help reinforce your understanding of key concepts and guide you towards mastering each topic. Get ready to see your skills evolve with every quiz!",
	},
	{
		question: 'Code Your Way to Mastery',
		answer: "Learning JavaScript isn't just about memorizing syntax; it's about thinking critically and creatively. I'll guide you through coding exercises that encourage experimentation, problem-solving, and innovation. Unlock your coding potential and gain the confidence to bring your ideas to life.",
	},
];

const questions2: QnAProps[] = [
	{
		question: 'Diving deeply into JavaScript Essentials',
		answer: "From variables and data types to loops and conditionals, we cover the fundamental building blocks of JavaScript. Here's an example of a basic code snippet:",
		code: code[0],
	},
	{
		question: 'Mastering Complex Concepts',
		answer: "Explore advanced topics like functions, object-oriented programming, and error handling. Challenge yourself with tasks like creating custom objects. Here's an example of an object creation:",
		code: code[1],
	},
	{
		question: 'Interactive Quizzes for Reinforcement',
		answer: 'Our interactive quizzes ensure you grasp each concept. Click the “start quiz” button to see an example of quiz',
	},
];

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

			<Dialog>
				<DialogTrigger asChild>
					<Button
						className="bg-transparent hover:bg-slate-900 border border-slate-700 px-10 py-6 text-lg"
						size={'lg'}>
						Start quiz
					</Button>
				</DialogTrigger>
				<Quiz
					questions={quizProps.questions}
					answers={quizProps.answers}
					correctAnswers={quizProps.correctAnswers}
				/>
			</Dialog>
		</section>
	);
};
export default Course;
