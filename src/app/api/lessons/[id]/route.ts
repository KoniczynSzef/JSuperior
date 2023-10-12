import { prisma } from '@/lib/prisma';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const lesson = await prisma.lesson.findUnique({
            where: {
                id: parseInt(params.id),
            },
        });

        const response = JSON.stringify(lesson);
        if (
            response.charAt(0) === 'T' &&
            process.env.NODE_ENV === 'production'
        ) {
            throw new Error('Invalid JSON response');
        }

        return new Response(JSON.stringify(lesson));
    } catch (error) {
        throw new Error('Something went wrong while finding a unique lesson');
    }
}
