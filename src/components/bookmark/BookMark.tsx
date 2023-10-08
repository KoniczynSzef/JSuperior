import { prisma } from '@/lib/prisma';
import { fetchBookmark } from '@/utils/bookmarkFunctions';
import { Session } from 'next-auth';
import React, { FC } from 'react';
import UserBookMark from './user-bookmark/UserBookMark';

interface BookMarkProps {
    session: Session | null;
}

const BookMark: FC<BookMarkProps> = async ({ session }) => {
    const user = await prisma.user.findFirst({
        where: {
            name: session?.user?.name,
            email: session?.user?.email,
        },
    });

    const bookmark = await fetchBookmark(user?.id ? user?.id : '');

    return <UserBookMark bookmark={bookmark} />;
};

export default BookMark;
