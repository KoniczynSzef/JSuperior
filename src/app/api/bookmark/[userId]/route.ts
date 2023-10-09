import { prisma } from '@/lib/prisma';

export async function GET(
    req: Request,
    { params }: { params: { userId: string } }
) {
    if (!params.userId) throw new Error('Invalid user ID');

    try {
        const bookmark = await prisma.bookmark.findFirst({
            where: {
                userId: params.userId,
            },
        });

        return new Response(JSON.stringify(bookmark));
    } catch (error) {
        throw new Error('Could not find bookmark');
    }
}
