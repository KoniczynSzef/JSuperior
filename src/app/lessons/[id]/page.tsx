import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

import Markdown from './Markdown';
import { Lesson, Quiz as QuizType } from '@prisma/client';
import QuizWrapper from './QuizWrapper';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface pageProps {
    params: {
        id: string;
    };
}

export const fetchLesson = async (id: number) => {
    if (!id) throw new Error('id is required');

    const res = await fetch(`${process.env.BASE_NEXT_URL}/api/lessons/${id}`, {
        body: JSON.stringify({ id }),
        method: 'POST',
    });

    const data: Lesson = await res.json();
    return data;
};

const fetchQuiz = async (id: number) => {
    const res = await fetch(`${process.env.BASE_NEXT_URL}/api/quiz/${id}`, {
        method: 'POST',
        body: JSON.stringify({ id }),
    });

    const data: QuizType = await res.json();

    return data;
};

const page: FC<pageProps> = async ({ params }) => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    const lesson = await fetchLesson(parseInt(params.id));
    const prevLesson = await fetchLesson(parseInt(params.id) - 1);
    const nextLesson = await fetchLesson(parseInt(params.id) + 1);
    const quiz = await fetchQuiz(parseInt(params.id));

    return (
        <div className="relative my-16 text-left w-full">
            <h2 className="text-4xl font-semibold">{lesson.title}</h2>
            <p className="mt-5">{lesson.description}</p>

            <Markdown content={lesson.content} />

            {quiz && <QuizWrapper quiz={quiz} />}

            <div className="flex mt-8 justify-between">
                {prevLesson !== null && (
                    <Link
                        href={`/lessons/${
                            prevLesson.id === 1 ? '' : prevLesson.id
                        }`}
                        className="group"
                    >
                        <span className="flex items-center gap-3 text-sec group-hover:text-accent-foreground transition">
                            <ArrowLeft />
                            {prevLesson.title}{' '}
                        </span>
                    </Link>
                )}

                {nextLesson !== null && (
                    <Link
                        href={`/lessons/${nextLesson.id}`}
                        className="group ml-auto"
                    >
                        <span className="flex items-center gap-3 text-sec group-hover:text-accent-foreground transition">
                            {nextLesson.title}

                            <ArrowRight />
                        </span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default page;
