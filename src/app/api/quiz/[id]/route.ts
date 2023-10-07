import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body: { id: string } = await req.json();

        const quiz = await prisma.quiz.findFirst({
            where: {
                lessonId: parseInt(body.id),
            },
        });

        return new Response(JSON.stringify(quiz));
    } catch (error) {
        throw new Error('Failed to find unique quiz');
    }
}
