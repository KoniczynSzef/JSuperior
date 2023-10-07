import { prisma } from '@/lib/prisma';
import { fetchBookmark } from '@/utils/bookmarkFunctions';
import { Session } from 'next-auth';
import React, { FC } from 'react';

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

    const id = user?.id ? user?.id : '';

    const bookmark = await fetchBookmark(id);
    return bookmark ? (
        <div>
            {bookmark.favourite.map((b, i) => (
                <p key={i}>{b}</p>
            ))}
        </div>
    ) : (
        <>Hello World!</>
    );
};

export default BookMark;
