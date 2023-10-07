import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        if (!id) throw new Error('ID not specified');

        const quiz = await prisma.quiz.findFirst({
            where: {
                lessonId: parseInt(id),
            },
        });

        return new Response(JSON.stringify(quiz));
    } catch (error) {
        throw new Error('Something went wrong when getting quiz');
    }
}
