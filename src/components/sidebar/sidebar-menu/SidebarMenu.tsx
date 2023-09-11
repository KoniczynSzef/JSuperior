'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { ArrowDown } from 'lucide-react';
import React, { FC } from 'react';

interface SidebarMenuProps {}

const SidebarMenu: FC<SidebarMenuProps> = () => {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <Button>
                        Lessons <ArrowDown />
                    </Button>
                </SheetTrigger>
            </Sheet>
        </div>
    );
};

export default SidebarMenu;
