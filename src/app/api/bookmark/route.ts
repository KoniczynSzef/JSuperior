import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body: { id: string } = await req.json();
        const userBookmark = await prisma.bookmark.findUnique({
            where: {
                userId: body.id,
            },
        });

        return new Response(JSON.stringify(userBookmark));
    } catch (error) {
        throw new Error('Error while getting user bookmark');
    }
}
