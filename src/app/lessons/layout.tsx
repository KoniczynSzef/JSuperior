import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';

interface layoutProps {
    children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <main className="relative py-6">
            <div className="flex flex-col md:flex-row mx-16 md:gap-32 relative items-start justify-between">
                <Sidebar />
                <section className="relative flex flex-col md:ml-16">
                    {children}
                </section>
            </div>
        </main>
    );
};

export default layout;
