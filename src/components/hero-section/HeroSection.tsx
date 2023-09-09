'use client';

import React, { FC } from 'react';
import TypedParagraph from './TypedParagraph';
import Image from 'next/image';

import coding from '../../assets/coding.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Cookies from '../cookies/Cookies';

interface ComponentProps {}
const HeroSection: FC<ComponentProps> = () => {
    return (
        <section
            id="hero-section"
            className="container mx-auto relative my-32 py-1.5 transition flex flex-col lg:flex-row justify-between items-center space-y-20 lg:space-y-0 overflow-hidden gap-10"
        >
            <Cookies />
            <div>
                <motion.h1
                    className="text-4xl font-extrabold text-center md:text-left"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p>
                        Complete{' '}
                        <span className="text-yellowLogo">JavaScript</span>{' '}
                        Course
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
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Link
                        href={'/lessons'}
                        className="bg-violet-700 hover:bg-violet-600 mt-6 py-3 px-6 rounded transition grid place-content-center w-fit"
                    >
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
    );
};
export default HeroSection;
