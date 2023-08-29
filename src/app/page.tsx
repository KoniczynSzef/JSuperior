import About from '@/components/about/About';
import Course from '@/components/course-overview/Course';
import Footer from '@/components/footer/Footer';
import HeroSection from '@/components/hero-section/HeroSection';
import Learning from '@/components/learning/Learning';
import { Separator } from '@/components/ui/separator';
import React, { FC } from 'react';

import { getServerSession } from 'next-auth/next';

interface ComponentProps {}
const page: FC<ComponentProps> = async () => {
	const session = await getServerSession();
	console.log(session);

	return (
		<main className="text-foreground bg-background">
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
	);
};
export default page;
