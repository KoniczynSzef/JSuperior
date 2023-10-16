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
            className="container mx-auto relative my-32 py-1.5 transition flex flex-col lg:flex-row justify-between items-center space-y-20 lg:space-y-0 overflow-hidden gap-10"
        >
            <Cookies />
            <div>
                <h1 className="text-4xl font-extrabold text-center md:text-left">
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

                <div className="mt-6">
                    <Link href={'/lessons'}>
                        <Button
                            className="transition-all text-base py-6 bg-foreground hover:drop-shadow text-white bg-indigo-600 hover:bg-indigo-500"
                            size={'lg'}
                        >
                            Start learning
                        </Button>
                    </Link>
                </div>
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
