import { bookMarkTypes } from '@/components/bookmark/user-bookmark/UserBookMark';
import { prisma } from '@/lib/prisma';
import { Bookmark } from '@prisma/client';

const link = process.env.BASE_NEXT_URL;

export const fetchBookmark = async (
    userId: string | undefined,
    bookmarkType: bookMarkTypes,
    lessonId: string
) => {
    try {
        const bookmarks = await prisma.bookmark.findMany();

        let canPost = true;

        bookmarks.forEach((bookmark) => {
            if (bookmark.id === lessonId) {
                switch (bookmarkType) {
                    case 'favourite':
                        {
                            if (bookmark.favourite.includes(lessonId)) {
                                canPost = false;
                            }
                        }
                        break;

                    case 'toRepeat':
                        {
                            if (bookmark.toRepeat.includes(lessonId)) {
                                canPost = false;
                            }
                        }
                        break;

                    case 'valuable':
                        {
                            if (bookmark.valuable.includes(lessonId)) {
                                canPost = false;
                            }
                        }
                        break;
                }
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

export const checkForBookmarks = async (
    bookmarkType: bookMarkTypes,
    currPageId: number,
    userId: string | undefined
) => {
    let canPost: boolean = true;
    try {
        const res = await fetch(`/api/bookmark/${userId}`, {
            method: 'GET',
        });

        const bookmark: Bookmark | null = await res.json();

        if (!bookmark) return null;

        console.log('Here iam');

        switch (bookmarkType) {
            case 'favourite':
                {
                    if (bookmark.favourite.includes(currPageId.toString())) {
                        console.log('Here');
                        canPost = false;
                    }
                }
                break;

            case 'toRepeat':
                {
                    if (bookmark.toRepeat.includes(currPageId.toString())) {
                        canPost = false;
                    }
                }
                break;

            case 'valuable':
                {
                    if (bookmark.valuable.includes(currPageId.toString())) {
                        console.log('Here');
                        canPost = false;
                    }
                }
                break;
        }
    } catch (error) {
        throw new Error('Error getting bookmark');
    }

    return canPost;
};
