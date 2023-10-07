import { Bookmark } from '@prisma/client';

export const fetchBookmark = async (userId: string) => {
    try {
        const res = await fetch(
            `${
                process.env.NODE_ENV === 'development'
                    ? process.env.BASE_NEXT_URL
                    : process.env.SITE_URL
            }/bookmark`,
            {
                method: 'POST',
                body: JSON.stringify({
                    id: userId,
                }),
            }
        );

        const data: Bookmark = await res.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching bookmark');
    }
};
