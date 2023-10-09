import WithoutBookmark from '@/components/bookmark/user-bookmark/WithoutBookmark';
import { prisma } from '@/lib/prisma';
import { getBookmark } from '@/utils/bookmarkFunctions';
import { Session } from 'next-auth';
import React, { FC } from 'react';
import BookmarksList from './BookmarksList';

interface BookmarksProps {
    session: Session | null;
}

const Bookmarks: FC<BookmarksProps> = async ({ session }) => {
    const user = await prisma.user.findFirst({
        where: {
            name: session?.user?.name,
            email: session?.user?.email,
        },
    });

    const bookmark = await getBookmark(user?.id);
    return (
        <div>
            {bookmark ? (
                <BookmarksList bookmark={bookmark} />
            ) : (
                <WithoutBookmark user={user} />
            )}
        </div>
    );
};

export default Bookmarks;
