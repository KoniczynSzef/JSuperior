import { QuizProps } from "@/components/course-overview/quiz/Quiz";

export const quizProps: QuizProps = {
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
