import React, { FC } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { dataProps } from '@/app/lessons/page';
import Link from 'next/link';

interface ComponentProps {}

const fetchLessons = async () => {
    const res = await fetch(`${process.env.BASE_URL}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
        },
    });

    const data: dataProps = await res.json();

    return data.data;
};

const Sidebar: FC<ComponentProps> = async () => {
    const data = await fetchLessons();

    return (
        <nav className="h-screen w-72 sticky top-2 hidden lg:block border-r border-r-slate-600">
            <ScrollArea className="h-screen px-4 py-6 my-4 max-w-sm rounded w-full">
                <div className="flex flex-col w-full gap-2">
                    {data.map((lesson) => (
                        <Link
                            key={lesson.id}
                            href={`/lesson/${lesson.id === 1 ? '' : lesson.id}`}
                            className="text-gray-400 hover:text-white transition"
                        >
                            {lesson.attributes.Title}
                        </Link>
                    ))}
                </div>
            </ScrollArea>
        </nav>
    );
};
export default Sidebar;
