'use client';

import { Bookmark } from '@prisma/client';
import React, { FC } from 'react';

interface UserBookMarkProps {
    bookmark: Bookmark;
}

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

type bookMarkTypes = 'favourite' | 'toRepeat' | 'valuable';
const icons: { icon: React.JSX.Element; bookmarkType: bookMarkTypes }[] = [
    {
        icon: (
            <Button className="group transition-all duration-200">
                <Heart
                    color="#dc2626"
                    className="fill-none group-hover:fill-red-600 transition-all duration-200"
                />
            </Button>
        ),
        bookmarkType: 'favourite',
    },
];

const UserBookMark: FC<UserBookMarkProps> = () => {
    return (
        <aside className="fixed bg-accent top-36 right-0 h-64 w-16">
            <div className="flex flex-col items-center justify-center py-2">
                {icons.map((icon, i) => (
                    <div key={i}>{icon.icon}</div>
                ))}
            </div>
        </aside>
    );
};

export default UserBookMark;
