import React, { FC } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import SidebarMenu from './sidebar-menu/SidebarMenu';
import SidebarLink from './sidebar-link/SidebarLink';
import { Lesson } from '@prisma/client';

const categories = ['Get started'];

interface ComponentProps {}

const fetchLessons = async () => {
    const res = await fetch(`${process.env.BASE_NEXT_URL}/api/lessons`, {
        method: 'GET',
    });

    const data: Lesson[] = await res.json();

    return data;
};

const Sidebar: FC<ComponentProps> = async () => {
    const data = await fetchLessons();

    return (
        <nav className="md:sticky top-0 md:w-72 md:border-r md:border-r-slate-700">
            <SidebarMenu data={data} categories={categories} />
            <ScrollArea className="px-4 py-6 my-4 max-w-sm rounded w-full hidden md:block">
                <div className="flex flex-col w-full gap-1">
                    {data.map((lesson, i) => (
                        <div className="flex flex-col items-start" key={i}>
                            {i % 5 === 0 && (
                                <h3 className="text-xl font-semibold mb-3">
                                    {categories[i % 5]}
                                </h3>
                            )}

                            <SidebarLink lesson={lesson} />
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </nav>
    );
};
export default Sidebar;
