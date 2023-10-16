import { Lesson } from '@prisma/client';
import Link from 'next/link';
import React, { FC } from 'react';

interface EntitiesProps {
    lessons: Lesson[];
}

const Entities: FC<EntitiesProps> = ({ lessons }) => {
    return (
        <ul>
            {lessons.map((f, i) => (
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
