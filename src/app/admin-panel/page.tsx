import React, { FC } from 'react';
import LessonPanel from './LessonPanel';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

interface pageProps {}

async function createLesson(
    prevId: number,
    title: string,
    description: string,
    content: string
) {
    'use server';
    try {
        const lesson = await prisma.lesson.create({
            data: {
                id: prevId + 1,
                title,
                description,
                content,
            },
        });

        return lesson;
    } catch (error) {
        throw new Error('There was an error creating the lesson');
    }
}

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (session?.user?.name !== process.env.DEVELOPER_NAME) {
        return redirect('/');
    }

    const idx = await prisma.lesson.count();

    return (
        <div className="container my-12">
            <LessonPanel prevId={idx} createLesson={createLesson} />
        </div>
    );
};

export default page;
