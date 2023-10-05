import { Lesson } from '@prisma/client';
import Link from 'next/link';
import React, { FC } from 'react';

interface SidebarLinkProps {
    lesson: Lesson;
}

const SidebarLink: FC<SidebarLinkProps> = ({ lesson }) => {
    return (
        <Link
            key={lesson.id}
            href={`/lessons/${lesson.id === 1 ? '' : lesson.id}`}
            className="text-sec hover:text-accent-foreground transition text-sm my-[0.15rem]"
        >
            {lesson.title}
        </Link>
    );
};

export default SidebarLink;
