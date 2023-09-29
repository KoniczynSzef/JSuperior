import { Lesson } from '@prisma/client';
import React, { FC } from 'react';
import LessonPanel from './LessonPanel';
import { prisma } from '@/lib/prisma';

interface pageProps {}

const postLesson = async (lesson: Lesson) => {
    'use server';
    try {
        const res = await fetch(`${process.env.BASE_NEXT_URL}/api/lesson`, {
            method: 'POST',
            body: JSON.stringify({ ...lesson }),
        });

        const data: Lesson = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getLessons = async () => {
    const res = await fetch(`${process.env.BASE_NEXT_URL}/api/lesson`);
    const data: Lesson[] = await res.json();

    return data;
};

const page: FC<pageProps> = async () => {
    const idx = await prisma.lesson.count();

    return (
        <div className="container my-12">
            <LessonPanel postLesson={postLesson} prevId={idx} />
        </div>
    );
};

export default page;
