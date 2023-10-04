'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Lesson } from '@prisma/client';
import React, { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface LessonPanelProps {
    prevId: number;
}

const postLesson = async (lesson: Lesson) => {
    const res = await fetch(`/api/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
    });

    if (res.status !== 200) throw new Error('Failed to post');

    const data: Lesson = await res.json();
    return data;
};

const LessonPanel: FC<LessonPanelProps> = ({ prevId }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await postLesson({
                id: prevId + 1,
                title,
                description,
                content,
            });

            toast({
                title: 'Lesson created successfully',
                description: 'Created lesson with the title of ' + title,
                duration: 2000,
            });
        } catch (error) {
            toast({
                title: 'Error creating lesson',
                variant: 'destructive',
                duration: 2000,
            });
            throw new Error('There was an error creating the lesson');
        }
    };

    return (
        <div className="flex gap-16 justify-between">
            <form
                className="border border-slate-800 p-4 rounded space-y-2 flex flex-col max-w-[50%] w-full"
                onSubmit={handleSubmit}
            >
                <div className="flex gap-5">
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Lesson title..."
                    />
                </div>
                <Textarea
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Textarea
                    placeholder="Content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    cols={40}
                    rows={20}
                />

                <Button>Post lesson</Button>
            </form>

            <div className="max-w-[50%]">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p className="mt-5">{description}</p>
                <ReactMarkdown className="text-left flex flex-col gap-6 list-disc markdown">
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default LessonPanel;
