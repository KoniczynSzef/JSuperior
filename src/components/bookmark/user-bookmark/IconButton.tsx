'use client';

import { Button } from '@/components/ui/button';
import React, { FC, useEffect, useState } from 'react';
import { bookMarkTypes } from './UserBookMark';
import { checkForBookmarks, fetchBookmark } from '@/utils/bookmarkFunctions';
import { User } from '@prisma/client';
import { useToast } from '@/components/ui/use-toast';

interface IconButtonProps {
    reaction: { text: string; bookmarkType: bookMarkTypes };
    user: User | null;
    currPageId: number;
}

const IconButton: FC<IconButtonProps> = ({ reaction, user, currPageId }) => {
    const [isBookmark, setIsBookmark] = useState(true);

    useEffect(() => {
        const getBookmarks = async () => {
            if (
                !(await checkForBookmarks(
                    reaction.bookmarkType,
                    currPageId,
                    user?.id
                ))
            ) {
                setIsBookmark(false);
            }
        };

        getBookmarks();
    }, []);

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

    return isBookmark ? (
        <Button
            className="group transition-all duration-200"
            onClick={handleAddBookmark}
        >
            Add to {reaction.text}
        </Button>
    ) : (
        <Button disabled>Bookmark already marked</Button>
    );
};

export default IconButton;
