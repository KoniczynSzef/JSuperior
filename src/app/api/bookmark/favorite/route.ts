import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request) {
    try {
        const body: { id: string; entities: string[] } = await req.json();
        const favorites = await prisma.bookmark.findFirst({
            where: {
                id: body.id,
            },
            select: {
                favourite: true,
            },
        });

        const userBookmark = await prisma.bookmark.update({
            where: {
                id: body.id,
            },
            data: {
                favourite: favorites?.favourite.concat(body.entities),
            },
        });

        return new Response(JSON.stringify(userBookmark));
    } catch (error) {
        throw new Error('Error while getting user bookmark');
    }
}
