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
}

import { BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Reactions from '../Reactions';
import SheetTop from './SheetTop';

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

const UserBookMark: FC<UserBookMarkProps> = ({ user, currPageId }) => {
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

                    <Reactions
                        reactions={reactions}
                        user={user}
                        currPageId={currPageId}
                    />
                </SheetContent>
            </Sheet>
        </aside>
    );
};

export default UserBookMark;
