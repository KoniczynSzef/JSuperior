'use client';

import React, { FC } from 'react';
import TypedParagraph from './TypedParagraph';
import Image from 'next/image';

import coding from '../../assets/coding.png';
import { motion } from 'framer-motion';

interface ComponentProps {}
const HeroSection: FC<ComponentProps> = () => {
	return (
		<section
			id="hero-section"
			className="container mx-auto relative my-32 transition flex flex-col lg:flex-row justify-between items-center space-y-20 lg:space-y-0 overflow-hidden gap-10">
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
			</div>
			<Image
				src={coding}
				alt="Coding using JS in editor image"
				className="rounded lg:max-w-[40%]"
			/>
		</section>
	);
};
export default HeroSection;
