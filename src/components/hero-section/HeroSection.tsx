'use client';

import React, { FC } from 'react';
import TypedParagraph from './TypedParagraph';
import Image from 'next/image';

import coding from '../../assets/coding.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ComponentProps {}
const HeroSection: FC<ComponentProps> = () => {
	return (
		<div className="relative py-2">
			<div
				className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true">
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}></div>
			</div>
			<section
				id="hero-section"
				className="container mx-auto relative my-32 py-1.5 transition flex flex-col lg:flex-row justify-between items-center space-y-20 lg:space-y-0 overflow-hidden gap-10">
				<div>
					<motion.h1
						className="text-4xl font-extrabold text-center md:text-left"
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}>
						<p>
							Complete <span className="text-yellowLogo">JavaScript</span> Course
						</p>
						<p>
							Learn and become{' '}
							<span className="bg-gradient-to-r bg-clip-text text-transparent from-[#a50643] to-[#ffd119]">
								superior
							</span>{' '}
							in <span>JavaScript</span>
						</p>
					</motion.h1>

					<TypedParagraph />

					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}>
						<Link
							href={'#course'}
							className="bg-violet-700 hover:bg-violet-600 mt-6 py-3 px-6 rounded transition grid place-content-center w-fit">
							Start learning
						</Link>
					</motion.div>
				</div>
				<Image
					src={coding}
					alt="Coding using JS in editor image"
					className="rounded lg:max-w-[40%]"
				/>
			</section>
		</div>
	);
};
export default HeroSection;
