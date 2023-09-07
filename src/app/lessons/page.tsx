import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react';

import ReactMarkdown from 'react-markdown';

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

export const fetchData = async () => {
    const res = await fetch(`${process.env.BASE_URL}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
        },
    });
    const data: dataProps = await res.json();

    return data.data;
};

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    const data = await fetchData();

    return (
        <div className="relative my-16 text-left w-full">
            <h2 className="text-4xl font-semibold">
                {data[0].attributes.Title}
            </h2>
            <p className="mt-5">{data[0].attributes.Description}</p>

            <Separator className="my-8" />
            <ReactMarkdown className="text-left flex flex-col gap-2 list-disc markdown">
                {data[0].attributes.Content}
            </ReactMarkdown>
            <Separator className="my-8" />

            <div className="flex mt-8">
                <Link
                    href={`/lessons/${data[0].id + 1}`}
                    className="group ml-auto"
                >
                    <span className="flex items-center gap-3 text-sec group-hover:text-white transition">
                        Setting up Vite <ArrowRight className="" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default page;
