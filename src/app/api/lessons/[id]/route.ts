import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body: { id: string } = await req.json();

        const lesson = await prisma.lesson.findUnique({
            where: {
                id: parseInt(body.id),
            },
        });

        return new Response(JSON.stringify(lesson));
    } catch (error) {
        throw new Error('Something went wrong while finding a unique lesson');
    }
}
