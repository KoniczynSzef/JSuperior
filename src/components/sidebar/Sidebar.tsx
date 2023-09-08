import React, { FC } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { dataProps } from '@/app/lessons/page';
import Link from 'next/link';

const categories = ['Get started'];

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
        <nav className="w-72 sticky top-32 hidden lg:block border-r border-r-slate-600 h-screen">
            <ScrollArea className="px-4 py-6 my-4 max-w-sm rounded w-full">
                <div className="flex flex-col w-full gap-1">
                    {data.map((lesson, i) => (
                        <div key={i}>
                            {i % 5 === 0 && (
                                <h3 className="text-xl font-semibold mb-3">
                                    {categories[i % 5]}
                                </h3>
                            )}

                            <Link
                                key={lesson.id}
                                href={`/lesson/${
                                    lesson.id === 1 ? '' : lesson.id
                                }`}
                                className="text-sec hover:text-white transition text-sm"
                            >
                                {lesson.attributes.Title}
                            </Link>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </nav>
    );
};
export default Sidebar;
