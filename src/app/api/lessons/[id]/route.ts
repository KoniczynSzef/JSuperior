import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body: { id: string } = await req.json();

    try {
        const lesson = await prisma.lesson.findUnique({
            where: {
                id: parseInt(body.id),
            },
        });

        return new Response(JSON.stringify(lesson));
    } catch (error) {
        throw new Error('Unexpected error: ');
    }
}
