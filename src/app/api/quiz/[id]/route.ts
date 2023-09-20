import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const lessonIdFromURL: string = await req.json();

    const quiz = await prisma.quiz.findFirst({
        where: {
            lessonId: parseInt(lessonIdFromURL),
        },
    });

    return new Response(JSON.stringify(quiz));
}
