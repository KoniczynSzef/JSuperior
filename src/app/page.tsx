import About from '@/components/about/About';
import Course from '@/components/course-overview/Course';
import Footer from '@/components/footer/Footer';
import HeroSection from '@/components/hero-section/HeroSection';
import Learning from '@/components/learning/Learning';
import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

interface ComponentProps {}

const page: FC<ComponentProps> = async () => {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/signin');

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
        </div>
    );
};

export default page;
