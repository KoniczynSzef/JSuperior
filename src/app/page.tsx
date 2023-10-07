import About from '@/components/about/About';
import BookMark from '@/components/bookmark/BookMark';
import Course from '@/components/course-overview/Course';
import Footer from '@/components/footer/Footer';
import HeroSection from '@/components/hero-section/HeroSection';
import Learning from '@/components/learning/Learning';
import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { FC } from 'react';

interface ComponentProps {}

const page: FC<ComponentProps> = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div className="relative">
            <main className="text-foreground">
                <HeroSection />
                <Separator />
                <Course />
                <Separator />
                <About />
                <Separator />
                <Learning />
                <Separator />
                <Footer />
            </main>
            <aside className="fixed h-[50vh] bg-foreground w-10 right-0 top-48 border border-slate-800 hover:w-80 transition-all duration-300 rounded cursor-pointer">
                <BookMark session={session} />
            </aside>
        </div>
    );
};
export default page;
