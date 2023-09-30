import { Lesson } from '@prisma/client';
import React, { FC } from 'react';
import LessonPanel from './LessonPanel';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

interface pageProps {}

const postLesson = async (lesson: Lesson) => {
    'use server';
    console.log(lesson);

    const res = await fetch(`${process.env.BASE_NEXT_URL}/api/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
    });

    const data: Lesson = await res.json();
    return data;
};

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (session?.user?.name !== process.env.DEVELOPER_NAME) {
        return redirect('/');
    }

    const idx = await prisma.lesson.count();

    return (
        <div className="container my-12">
            <LessonPanel postLesson={postLesson} prevId={idx} />
        </div>
    );
};

export default page;
