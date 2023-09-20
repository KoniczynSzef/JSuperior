import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { lessonProps } from '../page';
import { options } from '@/app/config';
import Markdown from './Markdown';
import { Quiz } from '@prisma/client';

interface pageProps {
    params: {
        id: number;
    };
}

export const fetchData = async (id: number) => {
    if (!id) throw new Error('id is required');

    const res = await fetch(`${process.env.BASE_URL}/${id}`, options);
    const data: { data: lessonProps } = await res.json();

    const nextPage = await fetch(`${process.env.BASE_URL}/${id + 1}`, options);
    const nextPageData: { data: lessonProps } = await nextPage.json();

    const prevPage = await fetch(`${process.env.BASE_URL}/${id - 1}`, options);
    const prevPageData: { data: lessonProps } = await prevPage.json();

    return {
        data: data.data,
        nextLesson: nextPageData.data,
        prevLesson: prevPageData.data,
    };
};

export const fetchQuiz = async (id: number) => {
    const res = await fetch(`${process.env.BASE_NEXT_URL}/api/quiz/${id}`, {
        method: 'POST',
        body: JSON.stringify(id),
    });

    const data: Quiz = await res.json();

    return data;
};

const page: FC<pageProps> = async ({ params }) => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    const { data, nextLesson, prevLesson } = await fetchData(params.id);
    const quiz = await fetchQuiz(params.id);

    return (
        <div className="relative my-16 text-left w-full">
            <h2 className="text-4xl font-semibold">{data.attributes.Title}</h2>
            <p className="mt-5">{data.attributes.Description}</p>

            <Separator className="my-8" />
            <Markdown content={data.attributes.Content} />

            <div className="flex mt-8 justify-between">
                {prevLesson !== null && (
                    <Link
                        href={`/lessons/${
                            data.id - 1 === 1 ? '' : data.id - 1
                        }`}
                        className="group"
                    >
                        <span className="flex items-center gap-3 text-sec group-hover:text-white transition">
                            <ArrowLeft />
                            {prevLesson.attributes.Title}{' '}
                        </span>
                    </Link>
                )}

                {nextLesson !== null && (
                    <Link
                        href={`/lessons/${data.id + 1}`}
                        className="group ml-auto"
                    >
                        <span className="flex items-center gap-3 text-sec group-hover:text-white transition">
                            {nextLesson.attributes.Title}

                            <ArrowRight />
                        </span>
                    </Link>
                )}
            </div>

            <Separator className="mt-8" />
        </div>
    );
};

export default page;
