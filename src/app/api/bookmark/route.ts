import { prisma } from '@/lib/prisma';
import { Bookmark } from '@prisma/client';

export async function POST(req: Request) {
    const { id, favourite, toRepeat, userId, valuable }: Bookmark =
        await req.json();
    try {
        const newBookmark = await prisma.bookmark.create({
            data: {
                id,
                favourite,
                toRepeat,
                userId,
                valuable,
            },
        });

        return new Response(JSON.stringify(newBookmark));
    } catch (error) {
        throw new Error('Error creating bookmark');
    }
}
