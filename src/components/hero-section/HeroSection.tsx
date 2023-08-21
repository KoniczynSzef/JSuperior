import React, { FC } from 'react';
import TypedParagraph from './TypedParagraph';
import Image from 'next/image';

import coding from '../../assets/coding.png';

interface ComponentProps {}
const HeroSection: FC<ComponentProps> = () => {
	return (
		<section
			id="hero-section"
			className="container mx-auto relative my-32 transition flex flex-col lg:flex-row justify-between items-center space-y-20 lg:space-y-0 overflow-hidden">
			<div>
				<h1 className="text-4xl font-extrabold text-center md:text-left">
					<p>
						Complete <span className="text-yellowLogo">JavaScript</span> Course
					</p>
					<p className="mt-6 md:mt-2">
						Learn and become{' '}
						<span className="bg-gradient-to-r bg-clip-text text-transparent from-[#a50643] to-[#ffd119]">
							superior
						</span>{' '}
						in <span>JavaScript</span>
					</p>
				</h1>

				<TypedParagraph />
			</div>
			<Image src={coding} alt="Coding using JS in editor image" className="rounded" />
		</section>
	);
};
export default HeroSection;
