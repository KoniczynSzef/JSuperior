'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Quiz } from '@prisma/client';
import React, { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export type lessonProps = {
    title: string;
    description: string;
    content: string;
    hasQuiz: boolean;
    lessonCategory: string;
};

interface CmsFormProps {}

const CmsForm: FC<CmsFormProps> = () => {
    async function createQuiz() {
        const quiz: Quiz = {
            id: crypto.randomUUID(),
            questions: ['What is the capital of the United States?'],
            answers: ['New York', 'Warsaw', 'Washington', 'Seattle'],
            correctAnswers: ['Washington'],
            lessonId: 3,
        };
        const res = await fetch(`/api/quiz`, {
            method: 'POST',
            body: JSON.stringify(quiz),
        });

        const data = await res.json();

        console.log(data);
    }

    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [withQuiz, setWithQuiz] = useState<boolean>(true);
    const [category, setCategory] = useState<string>('');

    const handleToggle = () => {
        setWithQuiz((q) => !q);
    };

    return (
        <div className="flex gap-12">
            <form
                className="max-w-2xl flex flex-col space-y-10 border border-slate-800 p-8 rounded"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex gap-8">
                    <Input
                        placeholder="Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                        name="title"
                    />
                    <Textarea
                        className=""
                        placeholder="Desc..."
                        rows={2}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        name="desc"
                    />
                </div>
                <Textarea
                    className=""
                    placeholder="Content..."
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                />
                <Input
                    placeholder="Category..."
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                />
                <div className="flex items-center self-end gap-4">
                    <Label htmlFor="switch">With quiz: </Label>
                    <Switch
                        name="switch"
                        checked={withQuiz}
                        onCheckedChange={handleToggle}
                    />
                </div>
                <Button
                    className="self-end bg-indigo-700 hover:bg-indigo-600 transition"
                    size={'lg'}
                    type="submit"
                    onClick={createQuiz}
                >
                    Save
                </Button>
            </form>
            <ReactMarkdown className="markdown">{content}</ReactMarkdown>
        </div>
    );
};

export default CmsForm;
