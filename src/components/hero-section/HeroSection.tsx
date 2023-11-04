'use client';

import React, { FC } from 'react';
import TypedParagraph from './TypedParagraph';
import Image from 'next/image';

import coding from '../../assets/coding.png';
import Link from 'next/link';
import Cookies from '../cookies/Cookies';

import { TypeAnimation } from 'react-type-animation';
import { Button } from '../ui/button';

interface ComponentProps {}
const HeroSection: FC<ComponentProps> = () => {
    return (
        <section
            id="hero-section"
            className="container mx-auto relative my-8 md:my-32 py-1.5 transition flex flex-col lg:flex-row justify-between items-center space-y-20 lg:space-y-0 overflow-hidden gap-10"
        >
            <Cookies />
            <article>
                <h1 className="text-2xl md:text-4xl font-extrabold text-left">
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
                        in{' '}
                        <span>
                            <TypeAnimation
                                sequence={['JavaScript']}
                                speed={35}
                            />
                        </span>
                    </p>
                </h1>
                <div className="mt-12">
                    <TypedParagraph />
                </div>

                <div className="mt-12">
                    <Link href={'/lessons'}>
                        <Button
                            className="transition-all text-xl text-foreground start-learning bg-gradient-to-br from-purple-600 to-indigo-700 p-[1px] group w-64 h-20 hover:text-white"
                            size={'lg'}
                        >
                            <div className="bg-background w-full h-full rounded-md flex items-center justify-center px-6 py-4 group-hover:bg-transparent transition-all duration-300">
                                Start learning
                            </div>
                        </Button>
                    </Link>
                </div>
            </article>
            <Image
                src={coding}
                alt="Coding using JS in editor image"
                className="rounded lg:max-w-[40%]"
            />
        </section>
    );
};
export default HeroSection;
