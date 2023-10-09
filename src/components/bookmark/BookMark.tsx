import { prisma } from '@/lib/prisma';
import { Session } from 'next-auth';
import React, { FC } from 'react';
import UserBookMark from './user-bookmark/UserBookMark';
import { getBookmark } from '@/utils/bookmarkFunctions';

interface BookMarkProps {
    session: Session | null;
    currPageId: number;
}

const BookMark: FC<BookMarkProps> = async ({ session, currPageId }) => {
    const user = await prisma.user.findFirst({
        where: {
            name: session?.user?.name,
            email: session?.user?.email,
        },
    });

    const bookmark = await getBookmark(user?.id || '');

    return (
        <UserBookMark user={user} currPageId={currPageId} bookmark={bookmark} />
    );
};

export default BookMark;
