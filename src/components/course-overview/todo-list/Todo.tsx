import P from '@/components/P';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { FC } from 'react';
import React from 'react';

type TodoProps = {
    title: string;
    handleDeleteTodo: (id: number) => void;
    id: number;
};

const Todo: FC<TodoProps> = ({ title, handleDeleteTodo, id }) => {
    return (
        <li className="w-full flex justify-between items-center text-foreground">
            <P>{title}</P>
            <Button
                className="bg-background hover:bg-accent border border-slate-800 text-foreground"
                onClick={() => handleDeleteTodo(id)}
            >
                <X />
            </Button>
        </li>
    );
};

export default Todo;
