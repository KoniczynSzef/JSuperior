'use client';

import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import { bookMarkTypes } from './UserBookMark';
import { fetchBookmark } from '@/utils/bookmarkFunctions';
import { User } from '@prisma/client';
import { useToast } from '@/components/ui/use-toast';

interface IconButtonProps {
    reaction: { text: string; bookmarkType: bookMarkTypes };
    user: User | null;
    currPageId: number;
}

const IconButton: FC<IconButtonProps> = ({ reaction, user, currPageId }) => {
    const { toast } = useToast();
    const handleAddBookmark = async () => {
        try {
            const data = await fetchBookmark(
                user?.id,
                reaction.bookmarkType,
                currPageId.toString()
            );

            toast({
                title: 'Successfully added bookmark to ' + reaction.text,
            });

            return data;
        } catch (error) {
            throw new Error('Failed to update bookmark');
        }
    };

    return (
        <Button
            className="group transition-all duration-200"
            onClick={handleAddBookmark}
        >
            Add to {reaction.text}
        </Button>
    );
};

export default IconButton;
