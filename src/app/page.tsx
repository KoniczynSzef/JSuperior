import About from '@/components/about/About';
import Course from '@/components/course-overview/Course';
import HeroSection from '@/components/hero-section/HeroSection';
import Learning from '@/components/learning/Learning';
import { Separator } from '@/components/ui/separator';
import React, { FC } from 'react';

interface ComponentProps {}
const page: FC<ComponentProps> = () => {
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
		</main>
	);
};
export default page;
