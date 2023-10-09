'use client';

import React, { FC } from 'react';

interface UserBookMarkProps {
    user: {
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
    } | null;

    currPageId: number;
    bookmark: Bookmark | null;
}

import { BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Reactions from '../Reactions';
import SheetTop from './SheetTop';
import { Bookmark } from '@prisma/client';
import WithoutBookmark from './WithoutBookmark';

export type bookMarkTypes = 'favourite' | 'toRepeat' | 'valuable';

const reactions: { icon: string; bookmarkType: bookMarkTypes }[] = [
    {
        icon: 'favourite',
        bookmarkType: 'favourite',
    },
    {
        icon: 'to repeat',
        bookmarkType: 'toRepeat',
    },
    {
        icon: 'valuable',
        bookmarkType: 'valuable',
    },
];

const UserBookMark: FC<UserBookMarkProps> = ({
    user,
    currPageId,
    bookmark,
}) => {
    return (
        <aside className="self-start">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={'icon'}>
                        <BookMarked />
                    </Button>
                </SheetTrigger>
                <SheetContent className="border-accent px-8 py-16">
                    <SheetTop reactions={reactions} />
                    {bookmark ? (
                        <Reactions
                            reactions={reactions}
                            user={user}
                            currPageId={currPageId}
                        />
                    ) : (
                        <>
                            <p className="mt-12">
                                You have not yet created your own bookmark.
                                Create it and benefit!
                            </p>
                            <div className="mt-6">
                                <WithoutBookmark user={user} />
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </aside>
    );
};

export default UserBookMark;
