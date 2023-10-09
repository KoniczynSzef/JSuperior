'use client';

import { Lesson } from '@prisma/client';
import Link from 'next/link';
import React, { FC, useState } from 'react';

interface EntitiesProps {
    lessons: Lesson[];
}

const Entities: FC<EntitiesProps> = ({ lessons }) => {
    const [lessonsList, setLessonsList] = useState<Lesson[]>(lessons);
    return (
        <ul>
            {lessonsList.map((f, i) => (
                <li key={i}>
                    <Link href={`/lessons/${f.id}`}>{f.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Entities;
