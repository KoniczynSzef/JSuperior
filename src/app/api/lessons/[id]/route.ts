import { prisma } from '@/lib/prisma';
import { URL } from 'url';

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        if (!id) throw new Error('ID not specified');

        const lesson = await prisma.lesson.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        return new Response(JSON.stringify(lesson));
    } catch (error) {
        throw new Error('Something went wrong while finding a unique lesson');
    }
}
