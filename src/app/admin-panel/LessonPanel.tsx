'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Lesson } from '@prisma/client';
import React, { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface LessonPanelProps {
    postLesson: (lesson: Lesson) => Promise<{
        id: number;
        title: string;
        description: string;
        content: string;
    }>;
    prevId: number;
}

const LessonPanel: FC<LessonPanelProps> = ({ postLesson, prevId }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(prevId);

        await postLesson({
            id: prevId + 1,
            title,
            description,
            content,
        });
    };

    return (
        <div className="flex">
            <form
                className="max-w-lg border border-slate-800 p-4 rounded space-y-2 flex flex-col"
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <Button>Post lesson</Button>
            </form>

            <div>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};

export default LessonPanel;
