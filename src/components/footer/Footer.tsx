import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import FooterForm from './FooterForm';
import { links } from '../about/About';
import Link from 'next/link';

interface ComponentProps {}

const Footer: FC<ComponentProps> = () => {
    return (
        <section className="relative py-16 px-4">
            <div className="container mx-auto flex items-center flex-col lg:flex-row gap-16">
                <div className="flex flex-col space-y-6 px-8">
                    <Link href={'/'}>
                        <span className="text-5xl font-extrabold text-yellowLogo opacity-90 hover:opacity-100 transition duration-150">
                            JS<span className="text-foreground">uperior</span>
                        </span>
                    </Link>
                    <div className="space-x-4 flex">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 rounded bg-transparent border border-slate-800 hover:bg-accent transition"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <Card className="mx-auto bg-transparent border-slate-800 text-foreground w-full">
                    <CardHeader>
                        <CardTitle>Sign up for the newsletter</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FooterForm />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
export default Footer;
