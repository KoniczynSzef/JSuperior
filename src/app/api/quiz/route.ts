import { prisma } from '@/lib/prisma';
import { Quiz } from '@prisma/client';

export async function GET() {
    const allQuizzes = await prisma.quiz.findMany();

    return new Response(JSON.stringify(allQuizzes));
}

export async function POST(req: Request) {
    const quiz: Quiz = await req.json();

    await prisma.quiz.create({
        data: quiz,
    });

    return new Response(JSON.stringify(quiz));
}
