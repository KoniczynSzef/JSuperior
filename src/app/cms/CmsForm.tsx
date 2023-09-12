'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import React, { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { addLessonOnServer } from '../_actions';

export type lessonProps = {
    title: string;
    description: string;
    content: string;
    hasQuiz: boolean;
    lessonCategory: string;
};

interface CmsFormProps {}

const CmsForm: FC<CmsFormProps> = () => {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [withQuiz, setWithQuiz] = useState<boolean>(true);
    const [category, setCategory] = useState<string>('');
    const { toast } = useToast();

    const handleToggle = () => {
        setWithQuiz((q) => !q);
    };

    const action = async () => {
        try {
            await addLessonOnServer({
                id: crypto.randomUUID(),
                title,
                description: desc,
                content,
                category,
                hasQuiz: withQuiz,
            });

            toast({
                title: 'Created a new lesson!',
                description:
                    'Successfully created a new lesson with the title: ' +
                    title,
                duration: 2000,
            });

            setTitle('');
            setDesc('');
            setCategory('');
            setContent('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex gap-12">
            <form
                className="max-w-2xl flex flex-col space-y-10 border border-slate-800 p-8 rounded"
                action={action}
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
                >
                    Save
                </Button>
            </form>
            <ReactMarkdown className="markdown">{content}</ReactMarkdown>
        </div>
    );
};

export default CmsForm;
