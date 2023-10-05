import { prisma } from '@/lib/prisma';
import { Lesson } from '@prisma/client';

export async function GET() {
    try {
        const lessons = await prisma.lesson.findMany();

        return new Response(JSON.stringify(lessons));
    } catch (error) {
        throw new Error('Unexpected error fetching lessons');
    }
}

export async function POST(req: Request) {
    const body: Lesson = await req.json();

    try {
        const newLesson = await prisma.lesson.create({
            data: body,
        });

        return new Response(JSON.stringify(newLesson));
    } catch (error) {
        throw new Error('Unexpected error while creating a lesson');
    }
}
