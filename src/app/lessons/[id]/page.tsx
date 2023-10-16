import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import Markdown from './Markdown';
import QuizWrapper from './QuizWrapper';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fetchLesson, fetchQuiz } from '@/utils/fetchFunctions';
import BookMark from '@/components/bookmark/BookMark';
import { Lesson } from '@prisma/client';
import { Metadata } from 'next';

interface pageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({
    params,
}: pageProps): Promise<Metadata> {
    const lesson: Lesson | null = await fetchLesson(parseInt(params.id));
    return {
        title: lesson?.title,
    };
}

const page: FC<pageProps> = async ({ params = { id: '1' } }) => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    const lesson: Lesson | null = await fetchLesson(parseInt(params.id));
    const prevLesson: Lesson | null = await fetchLesson(
        parseInt(params.id) - 1
    );
    const nextLesson: Lesson | null = await fetchLesson(
        parseInt(params.id) + 1
    );

    const quiz = await fetchQuiz(parseInt(params.id));

    return lesson ? (
        <div className="my-16 text-left w-full flex items-center justify-between">
            <section>
                <h2 className="text-4xl font-semibold">{lesson.title}</h2>
                <p className="mt-5">{lesson.description}</p>

                <Markdown content={lesson.content} />

                {quiz && <QuizWrapper quiz={quiz} />}

                <div className="flex mt-8 justify-between">
                    {prevLesson && prevLesson.title.length >= 1 && (
                        <Link
                            href={`/lessons/${
                                prevLesson.id === 1 ? '' : prevLesson.id
                            }`}
                            className="group"
                        >
                            <span className="flex items-center gap-3 text-sec group-hover:text-accent-foreground transition">
                                <ArrowLeft />
                                {prevLesson.title}
                            </span>
                        </Link>
                    )}

                    {nextLesson && nextLesson.title.length >= 1 && (
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
            </section>

            <BookMark session={session} currPageId={parseInt(params.id)} />
        </div>
    ) : (
        <h2>Did not find any lesson</h2>
    );
};

export default page;
