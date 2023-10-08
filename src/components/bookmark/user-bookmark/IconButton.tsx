'use client';

import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import { bookMarkTypes } from './UserBookMark';
import { fetchBookmark } from '@/utils/bookmarkFunctions';
import { User } from '@prisma/client';

interface IconButtonProps {
    reaction: { icon: React.JSX.Element; bookmarkType: bookMarkTypes };
    user: User | null;
}

const IconButton: FC<IconButtonProps> = ({ reaction, user }) => {
    const handleAddBookmark = async () => {
        const data = await fetchBookmark(user?.id || '', reaction.bookmarkType);

        return data;
    };

    return (
        <Button
            className="group transition-all duration-200 rounded-full"
            variant={'ghost'}
            size={'icon'}
            onClick={handleAddBookmark}
        >
            {reaction.icon}
        </Button>
    );
};

export default IconButton;
