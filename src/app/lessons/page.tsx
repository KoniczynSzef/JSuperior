import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react';

import ReactMarkdown from 'react-markdown';
import { fetchData } from './[id]/page';

interface pageProps {}

export type lessonProps = {
    id: number;
    attributes: {
        Title: string;
        Description: string;
        Content: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        lessonCategory: string;
    };
};

export type dataProps = {
    data: lessonProps[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');
    const { data } = await fetchData(1);

    return (
        <div className="relative my-16 text-left w-full">
            <h2 className="text-4xl font-semibold">{data.attributes.Title}</h2>
            <p className="mt-5">{data.attributes.Description}</p>

            <ReactMarkdown className="text-left flex flex-col gap-2 list-disc markdown">
                {data.attributes.Content}
            </ReactMarkdown>

            <div className="flex mt-8">
                <Link
                    href={`/lessons/${data.id + 1}`}
                    className="group ml-auto"
                >
                    <span className="flex items-center gap-3 text-sec group-hover:text-accent-foreground transition">
                        Setting up Vite <ArrowRight className="" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default page;
