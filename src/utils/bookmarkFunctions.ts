import { bookMarkTypes } from '@/components/bookmark/user-bookmark/UserBookMark';
import { prisma } from '@/lib/prisma';
import { Bookmark } from '@prisma/client';

const link =
    process.env.NODE_ENV === 'development'
        ? process.env.BASE_NEXT_URL
        : process.env.SITE_URL;

export const fetchBookmark = async (
    userId: string | undefined,
    bookmarkType: bookMarkTypes,
    lessonId: string
) => {
    try {
        const lessons = await prisma.lesson.findMany();
        let canPost = true;

        lessons.forEach((lesson) => {
            if (lesson.id === parseInt(lessonId)) {
                canPost = false;
            }
        });

        if (canPost) {
            const res = await fetch(`${link}/api/bookmark/${bookmarkType}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    id: userId,
                    lessonId,
                }),
            });

            const data: Bookmark = await res.json();
            return data;
        }
    } catch (error) {
        throw new Error('Error fetching bookmark');
    }
};

export const createBookmark = async (bookmark: Bookmark) => {
    try {
        const res = await fetch(`${link}/api/bookmark`, {
            method: 'POST',
            body: JSON.stringify(bookmark),
        });

        const data: Bookmark = await res.json();
        return data;
    } catch (error) {
        throw new Error('Error creating bookmark in createBookmark function');
    }
};

export const getBookmark = async (userId: string | undefined) => {
    try {
        const res = await fetch(`${link}/api/bookmark/${userId}`, {
            method: 'GET',
        });

        const data: Bookmark | null = await res.json();

        return data;
    } catch (error) {
        throw new Error('Error getting bookmark');
    }
};
