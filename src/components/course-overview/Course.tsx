import React, { FC } from 'react';
import Question from './question/Question';
import P from '../P';
import Image from 'next/image';

import keyboardImage from '../../assets/keyboard.png';
import CodeSnippet from './CodeSnippet';

export type QnAProps = {
	question: string;
	answer: string;
};

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
		question: 'What does this course offer?',
		answer: "Our Complete JavaScript Course offers a comprehensive learning experience that equips you with the skills and knowledge to excel in JavaScript development. Here's a glimpse of what you can expect:",
	},
	{
		question: 'Diving deeply into JavaScript Essentials',
		answer: "From variables and data types to loops and conditionals, we cover the fundamental building blocks of JavaScript. Here's an example of a basic code snippet:",
	},
];

interface ComponentProps {}
const Course: FC<ComponentProps> = () => {
	const code = `
        function greet(name) {
            return 'Greetings';
        }
    `;
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

				<div className="absolute bg-slate-900 top-0 right-0 w-[50rem] aspect-square rounded-full z-0 opacity-10" />
			</div>

			<div className="space-y-16 mt-32">
				{questions.map((q, i) => (
					<>
						<Question key={i} q={q} />
						{i % 3 === 0 && (
							<div
								className={`absolute bg-slate-900 top-${8 * (i + 1)} right-${
									i + 1
								}  w-[50rem] aspect-square rounded-full z-0 opacity-10`}
							/>
						)}
					</>
				))}
			</div>

			<div className="my-32 flex flex-col lg:flex-row gap-8 justify-between items-center">
				<blockquote className="italic border border-slate-800 p-8 rounded bg-slate-950">
					<P>
						“Programming is not about typing code; it&apos;s about thinking logically
						and solving problems systematically. Consistency in learning leads to
						mastery in coding.”
					</P>
				</blockquote>
				<Image
					src={keyboardImage}
					alt="Keyboard image - red keyboard and monitor behind it"
					className=" lg:max-w-md xl:max-w-2xl max-h-80 object-cover rounded"
				/>
			</div>

			<div className="space-y-16 mt-32">
				{questions2.map((q, i) => (
					<>
						<Question key={i} q={q} />

						{i === 1 && <CodeSnippet code={code} />}
					</>
				))}
			</div>
		</section>
	);
};
export default Course;
