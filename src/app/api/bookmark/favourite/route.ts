import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request) {
    try {
        const body: { id: string | undefined; lessonId: string } =
            await req.json();

        console.log(body.lessonId);

        if (body.lessonId) {
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
                    favourite: favorites
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
