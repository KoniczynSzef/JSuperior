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

import { Settings } from 'lucide-react';
import IconButton from './IconButton';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

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
        // <aside className="fixed right-16 top-36 bottom-36 w-16 self-stretch">
        <aside className="self-start">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={'icon'}>
                        <Settings />
                    </Button>
                </SheetTrigger>
                <SheetContent className="border-accent p-4 py-16">
                    <h2 className="text-4xl font-bold text-center">BOOKMARK</h2>
                    <div className="mt-6">
                        <h3 className="text-xl font-medium">
                            Welcome to Bookmark!
                        </h3>
                        <p className="mt-3">
                            Here is the place, where you can add bookmarks to
                            lessons for quicker navigation and being able to
                            group lessons.
                        </p>
                        <p className="mt-1">
                            I have prepared three categories of bookmarks:
                        </p>

                        <ul className="mt-3 list-disc ml-4">
                            {reactions.map((r, i) => (
                                <li key={i} className="">
                                    {r.icon.charAt(0).toUpperCase() +
                                        r.icon.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col py-2 items-start gap-3 my-6">
                        {reactions.map((reaction, i) => (
                            <IconButton
                                user={user}
                                reaction={reaction}
                                currPageId={currPageId}
                                key={i}
                            />
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </aside>
        // </aside>
    );
};

export default UserBookMark;
