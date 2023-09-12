import { Lesson } from '@prisma/client';
import { prisma } from '../db';

export async function getLessons() {
    try {
        const lessons = await prisma.lesson.findMany();
        return lessons;
    } catch (error) {
        console.error(error);
    }
}

export async function getSingleLesson(title: string) {
    const lesson = await prisma.lesson.findFirst({ where: { title: title } });
    return { data: lesson };
}

export async function addLesson(lesson: Lesson) {
    const newLesson = await prisma.lesson.create({
        data: lesson,
    });

    console.log(newLesson);

    return { newLesson };
}
