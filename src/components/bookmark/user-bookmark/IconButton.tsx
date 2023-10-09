'use client';

import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import { bookMarkTypes } from './UserBookMark';
import { fetchBookmark } from '@/utils/bookmarkFunctions';
import { User } from '@prisma/client';

interface IconButtonProps {
    reaction: { icon: string; bookmarkType: bookMarkTypes };
    user: User | null;
    currPageId: number;
}

const IconButton: FC<IconButtonProps> = ({ reaction, user, currPageId }) => {
    const handleAddBookmark = async () => {
        const data = await fetchBookmark(
            user?.id || '',
            reaction.bookmarkType,
            [currPageId.toString()]
        );

        return data;
    };

    return (
        <Button
            className="group transition-all duration-200"
            onClick={handleAddBookmark}
        >
            Add to {reaction.icon}
        </Button>
    );
};

export default IconButton;
