import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request) {
    try {
        const body: { id: string | undefined; lessonId: string } =
            await req.json();

        if (body.lessonId && body.id) {
            const favorites = await prisma.bookmark.findFirst({
                where: {
                    userId: body.id,
                },
            });

            const userBookmark = await prisma.bookmark.update({
                where: {
                    userId: body.id,
                },
                data: {
                    favourite: favorites?.favourite
                        ? [...favorites.favourite, body.lessonId]
                        : [body.lessonId],
                },
            });

            return new Response(JSON.stringify(userBookmark));
        }
    } catch (error) {
        throw new Error('Error while getting user bookmark');
    }
}
