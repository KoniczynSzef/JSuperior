import { bookMarkTypes } from '@/components/bookmark/user-bookmark/UserBookMark';
import { Bookmark } from '@prisma/client';

export const fetchBookmark = async (
    userId: string,
    bookmarkType: bookMarkTypes,
    entities: string[]
) => {
    const link =
        process.env.NODE_ENV === 'development'
            ? process.env.BASE_NEXT_URL
            : process.env.SITE_URL;
    try {
        const res = await fetch(`${link}/api/bookmark/${bookmarkType}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: userId,
                entities,
            }),
        });

        const data: Bookmark = await res.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching bookmark');
    }
};
