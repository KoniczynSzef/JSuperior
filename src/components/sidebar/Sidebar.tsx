import React, { FC } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { dataProps } from '@/app/lessons/page';
import SidebarMenu from './sidebar-menu/SidebarMenu';
import SidebarLinks from './sidebar-links/SidebarLinks';

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
        <nav className="md:sticky top-0 md:w-72 md:border-r md:border-r-slate-700">
            <SidebarMenu data={data} categories={categories} />
            <ScrollArea className="px-4 py-6 my-4 max-w-sm rounded w-full hidden md:block">
                <div className="flex flex-col w-full gap-1">
                    {data.map((lesson, i) => (
                        <SidebarLinks
                            key={i}
                            lesson={lesson}
                            categories={categories}
                            i={i}
                        />
                    ))}
                </div>
            </ScrollArea>
        </nav>
    );
};
export default Sidebar;
