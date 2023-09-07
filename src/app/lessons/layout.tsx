import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';

interface layoutProps {
    children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <main className="relative py-6">
            <div className="flex container mx-auto gap-16 relative items-start">
                <Sidebar />
                {children}
            </div>
        </main>
    );
};

export default layout;
