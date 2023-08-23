'use client';

import React, { FC, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Todo = {
	id: number;
	title: string;
};

interface ComponentProps {}

const TodoList: FC<ComponentProps> = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [input, setInput] = useState<string>('');

	const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setTodos((prevTodos) => [...prevTodos, { id: todos.length + 1, title: input }]);
		setInput('');
	};

	return (
		<Tabs className="my-16" defaultValue="todo-list">
			<TabsList>
				<TabsTrigger value="todo-list">Todo List</TabsTrigger>
				<TabsTrigger value="code">Code</TabsTrigger>
			</TabsList>
			<TabsContent value="todo-list">
				<Card className="bg-transparent border border-slate-800 transition">
					<CardHeader>
						<form onSubmit={(e) => handleAddTodo(e)}>
							<div className="flex">
								<Label htmlFor="todo-input" className="w-full">
									<Input
										value={input}
										onChange={(e) => setInput(e.target.value)}
										name="todo-input"
										type="text"
										placeholder="Type todo..."
										className="border-slate-600 text-white placeholder:text-sec"
									/>
								</Label>
								<Button
									type="submit"
									className="bg-slate-200 text-background hover:bg-white hover:text-background">
									Submit
								</Button>
							</div>
						</form>
					</CardHeader>

					{todos.length >= 1 && (
						<CardContent>
							{todos.map((todo, i) => (
								<p key={todo.id} className="text-white">
									{i + 1}. {todo.title}
								</p>
							))}
						</CardContent>
					)}
				</Card>
			</TabsContent>
		</Tabs>
	);
};
export default TodoList;
