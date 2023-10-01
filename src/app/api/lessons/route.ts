import { prisma } from '@/lib/prisma';
import { Lesson } from '@prisma/client';

export async function GET() {
    const lessons = await prisma.lesson.findMany();

    return new Response(JSON.stringify(lessons));
}

export async function POST(req: Request) {
    const body: Lesson = await req.json();
    console.log(body);

    const newLesson = await prisma.lesson.create({
        data: body,
    });

    return new Response(JSON.stringify(newLesson));
}
