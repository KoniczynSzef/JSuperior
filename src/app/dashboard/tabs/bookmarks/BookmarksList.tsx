import P from '@/components/P';
import { Separator } from '@/components/ui/separator';
import { prisma } from '@/lib/prisma';
import { Bookmark, Lesson } from '@prisma/client';
import React, { FC } from 'react';
import Entities from './Entities';

interface BookmarksListProps {
    bookmark: Bookmark;
}

const fetchLessons = async (idArr: string[]) => {
    let lessons: Lesson[] = [];

    for (const id of idArr) {
        const lesson = await prisma.lesson.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (lesson) {
            lessons = [...lessons, lesson];
        }
    }

    return lessons;
};

const BookmarksList: FC<BookmarksListProps> = async ({ bookmark }) => {
    const favourites = await fetchLessons(bookmark.favourite);

    return (
        <div>
            <h2 className="text-2xl font-bold text-left text-foreground">
                Bookmarks
            </h2>
            <Separator className="mt-2 bg-slate-700" />

            <div className="mt-4 max-w-lg">
                <P>
                    This is bookmarks section. You can find every lesson you
                    marked with a particular flag.
                </P>
            </div>
            <div className="gap-16 flex flex-col md:flex-row mt-12">
                <div className="flex flex-wrap md:flex-col gap-4">
                    <h5>Favourites</h5>
                    <Entities lessons={favourites} />
                </div>
            </div>
        </div>
    );
};

export default BookmarksList;
