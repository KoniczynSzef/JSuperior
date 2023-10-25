'use client';

import React, { FC, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import P from '@/components/P';
import CodeSnippet from '../CodeSnippet';
import { code } from '@/assets/courseOverviewAssets';
import Todo from './Todo';

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

        setTodos((prevTodos) => [
            ...prevTodos,
            { id: todos.length + 1, title: input },
        ]);
        setInput('');
    };

    const handleDeleteTodo = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);

        setTodos(newTodos);
    };

    return (
        <Tabs className="my-16 max-w-lg" defaultValue="todo-list">
            <TabsList className="w-full flex justify-evenly">
                <TabsTrigger
                    className="hover:text-foreground transition w-1/2 text-md "
                    value="todo-list"
                >
                    Todo List
                </TabsTrigger>
                <TabsTrigger
                    className="hover:text-foreground transition w-1/2 text-md"
                    value="code"
                >
                    Code
                </TabsTrigger>
            </TabsList>
            <TabsContent value="todo-list">
                {/* Todo List component */}
                <Card className="bg-transparent border border-slate-800 transition">
                    <CardHeader>
                        <form onSubmit={(e) => handleAddTodo(e)}>
                            <div className="flex">
                                <Label htmlFor="todo-input" className="w-full">
                                    <Input
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                        name="todo-input"
                                        type="text"
                                        placeholder="Type todo..."
                                        className="border-slate-600 text-foreground placeholder:text-sec"
                                    />
                                </Label>
                                <Button
                                    type="submit"
                                    className="hover:bg-foreground"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </CardHeader>

                    {todos.length >= 1 && (
                        <CardContent>
                            <ol className="list-decimal space-y-2">
                                {todos.map((todo) => (
                                    <P key={todo.id} className="ml-6">
                                        <li>
                                            <Todo
                                                title={todo.title}
                                                handleDeleteTodo={
                                                    handleDeleteTodo
                                                }
                                                id={todo.id}
                                            />
                                        </li>
                                    </P>
                                ))}
                            </ol>
                        </CardContent>
                    )}
                </Card>
            </TabsContent>

            {/* Show code component */}
            <TabsContent value="code">
                <CodeSnippet code={code[2]} />
            </TabsContent>
        </Tabs>
    );
};

export default TodoList;
