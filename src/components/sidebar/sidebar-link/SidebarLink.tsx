import { lessonProps } from '@/app/lessons/page';
import Link from 'next/link';
import React, { FC } from 'react';

interface SidebarLinksProps {
    lesson: lessonProps;
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
                className="text-gray-400 hover:text-white transition text-sm"
            >
                {lesson.attributes.Title}
            </Link>
        </div>
    );
};

export default SidebarLinks;
