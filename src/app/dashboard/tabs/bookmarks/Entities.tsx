import { Lesson } from '@prisma/client';
import Link from 'next/link';
import React, { FC } from 'react';

interface EntitiesProps {
    bookmarks: Lesson[];
}

const Entities: FC<EntitiesProps> = ({ bookmarks }) => {
    return (
        <ul>
            {bookmarks.map((f, i) => (
                <li key={i}>
                    <Link
                        href={`/lessons/${f.id}`}
                        className="dark:text-blue-500 dark:hover:text-blue-400 text-blue-700 hover:text-blue-600 transition-colors"
                    >
                        {f.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Entities;
