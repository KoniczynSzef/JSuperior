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
                    <Link href={`/lessons/${f.id}`}>{f.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Entities;
