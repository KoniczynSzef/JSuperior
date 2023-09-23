'use client';

import { lessonProps } from '@/app/lessons/page';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronRightSquare } from 'lucide-react';
import React, { FC } from 'react';
import SidebarLink from '../sidebar-link/SidebarLink';

interface SidebarMenuProps {
    data: lessonProps[];
    categories: string[];
}

const SidebarMenu: FC<SidebarMenuProps> = ({ data, categories }) => {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <Button>
                        <ChevronRightSquare />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side={'left'}
                    className="border-r border-r-slate-900"
                >
                    <div className="mt-12 mx-4">
                        {data.map((lesson, i) => (
                            <SidebarLink
                                key={i}
                                lesson={lesson}
                                categories={categories}
                                i={i}
                            />
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default SidebarMenu;
