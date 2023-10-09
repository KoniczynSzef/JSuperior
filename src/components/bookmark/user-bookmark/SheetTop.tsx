import React, { FC } from 'react';
import { bookMarkTypes } from './UserBookMark';

interface SheetTopProps {
    reactions: {
        icon: string;
        bookmarkType: bookMarkTypes;
    }[];
}

const SheetTop: FC<SheetTopProps> = ({ reactions }) => {
    return (
        <>
            <h2 className="text-4xl font-bold text-center">BOOKMARK</h2>
            <div className="mt-6">
                <h3 className="text-xl font-medium">Welcome to Bookmark!</h3>
                <p className="mt-3">
                    Here is the place, where you can add bookmarks to lessons
                    for quicker navigation and being able to group lessons.
                </p>
                <p className="mt-1">
                    I have prepared three categories of bookmarks:
                </p>

                <ul className="mt-3 list-disc ml-4">
                    {reactions.map((r, i) => (
                        <li key={i} className="">
                            {r.icon.charAt(0).toUpperCase() + r.icon.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SheetTop;
