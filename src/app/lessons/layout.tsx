import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';

interface layoutProps {
    children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <div className="flex container mx-auto gap-16 relative">
            <Sidebar />
            {children}
        </div>
    );
};

export default layout;
