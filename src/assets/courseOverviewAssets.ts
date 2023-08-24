type QnAProps = {
	question: string;
	answer: string;
	code?: string;
};

export const code = [
	`
	const greetings = (name) => {
		console.log("Hello, " + name)
	}
	   `,
	//    code for class construction
	`
	const title = "The Hobbit"
	const author = "J.R.R Tolkien"

	// Creating a class with constructor
	class Book {
	  constructor(title, author) {
		this.title = title
		  this.author = author
	  }
	}

	// Creating a variable from this class
	const book = new Book(title, author)
	   `,
	// code for todo list
	`
	// It's only an example ;)

	// Selecting all DOM elements
	const input = document.querySelector("input")
	const button = document.querySelector("button")
	const todoList = document.querySelector("div")

	// Creating a function to addTodo
	const addTodo = () => {
		// Creating a variable which is what user typed
		const value = input.value

		// Creating new dynamic elements
		const todo = document.createElement("div")
		const paragraph = document.createElement("p")
		const btn = document.createElement("button")

		// Creating text nodes for elements 
		const btnText = document.createTextNode("X")
		const text = document.createTextNode(value)

		// Appending elements to the DOM
		paragraph.appendChild(text)
		todo.appendChild(paragraph)
		todo.appendChild(button)

		todoList.appendChild(todo)
	}	

	button.addEventListener("click", addTodo)
	`,
	// code for an example of fetching the data
	`
	// Importing a link variable
	import { link } from './data.js' 
	
	// Creating an async function
	async function fetchData(link) {
		// Actual data fetching
		const res = await fetch(link)
		const data = await res.json()

		// Returning the data
		return data
	}
	`,
];

export const questions: QnAProps[] = [
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

export const questions2: QnAProps[] = [
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

export const courseOffer: QnAProps = {
	question: 'What does this course offer?',
	answer: "Our Complete JavaScript Course offers a comprehensive learning experience that equips you with the skills and knowledge to excel in JavaScript development. Here's a glimpse of what you can expect:",
};

export const buildingRealWorldProject: QnAProps = {
	question: 'Building Real-World Projects',
	answer: "Apply your skills to real-world projects that simulate actual scenarios. Create a dynamic to-do list that responds to user input. Here's a sneak peek at how it might look:",
};

export const buildingModernWebApps: QnAProps = {
	question: 'Building Modern Web Applications',
	answer: "Learn about APIs, asynchronous programming, and how to fetch data from the web. Develop a weather app that provides real-time forecasts. Here's a snippet of fetching data:",
	code: code[3],
};
