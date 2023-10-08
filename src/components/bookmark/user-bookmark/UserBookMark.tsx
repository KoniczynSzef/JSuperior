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
}

import { Heart } from 'lucide-react';
import IconButton from './IconButton';
import { Card } from '@/components/ui/card';

export type bookMarkTypes = 'favourite' | 'toRepeat' | 'valuable';

const reactions: { icon: React.JSX.Element; bookmarkType: bookMarkTypes }[] = [
    {
        icon: (
            <Heart
                color="#dc2626"
                className="fill-none group-hover:fill-red-600 transition-all duration-200"
            />
        ),
        bookmarkType: 'favourite',
    },
];

const UserBookMark: FC<UserBookMarkProps> = ({ user }) => {
    return (
        <aside className="fixed right-0 top-36 bottom-36 w-16 self-stretch">
            <Card className="h-full border border-accent">
                <div className="flex flex-col items-center justify-center py-2">
                    {reactions.map((reaction, i) => (
                        <IconButton user={user} reaction={reaction} key={i} />
                    ))}
                </div>
            </Card>
        </aside>
    );
};

export default UserBookMark;
