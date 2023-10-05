'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronRightSquare } from 'lucide-react';
import React, { FC } from 'react';
import SidebarLink from '../sidebar-link/SidebarLink';
import { Lesson } from '@prisma/client';

interface SidebarMenuProps {
    data: Lesson[];
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
                    className="border-r border-r-slate-900 text-left"
                >
                    <div className="mt-12 mx-4 text-left flex flex-col items-start">
                        {data.map((lesson, i) => (
                            <div className="flex flex-col items-start" key={i}>
                                {i % 5 === 0 && (
                                    <h3 className="text-xl font-semibold mb-3">
                                        {categories[i % 5]}
                                    </h3>
                                )}

                                <SheetTrigger>
                                    <SidebarLink lesson={lesson} />
                                </SheetTrigger>
                            </div>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default SidebarMenu;
