import { Lesson } from '@prisma/client';
import Link from 'next/link';
import React, { FC } from 'react';

interface SidebarLinksProps {
    lesson: Lesson;
    categories: string[];
    i: number;
}

const SidebarLinks: FC<SidebarLinksProps> = ({ lesson, categories, i }) => {
    return (
        <div>
            {i % 5 === 0 && (
                <h3 className="text-xl font-semibold mb-3">
                    {categories[i % 5]}
                </h3>
            )}

            <Link
                key={lesson.id}
                href={`/lessons/${lesson.id === 1 ? '' : lesson.id}`}
                className="text-sec hover:text-accent-foreground transition text-sm"
            >
                {lesson.title}
            </Link>
        </div>
    );
};

export default SidebarLinks;
