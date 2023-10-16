import { bookMarkTypes } from '@/components/bookmark/user-bookmark/UserBookMark';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { FC } from 'react';
import Entities from './Entities';

export interface BookmarksCardProps {
    title: bookMarkTypes;
    bookmarks: {
        id: number;
        title: string;
        description: string;
        content: string;
    }[];
}

const BookmarksCard: FC<BookmarksCardProps> = ({ bookmarks, title }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="capitalize text-2xl font-bold">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {bookmarks.length > 0 ? (
                    <Entities lessons={bookmarks} />
                ) : (
                    <h5>There are no bookmarks yet.</h5>
                )}
            </CardContent>
        </Card>
    );
};

export default BookmarksCard;
