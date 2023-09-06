import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

import ReactMarkdown from 'react-markdown';

interface pageProps {}

type lessonProps = {
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

type dataProps = {
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
    const res = await fetch(`http://127.0.0.1:1337/api/lessons`, {
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
    console.log(data);

    return (
        <div className="relative my-16 text-left w-full mx-16">
            <h2 className="text-4xl font-semibold">
                {data[0].attributes.Title}
            </h2>
            <p className="mt-5">{data[0].attributes.Description}</p>
            <Separator className="my-4" />
            <ReactMarkdown className="text-left flex flex-col gap-2 list-disc markdown">
                {data[0].attributes.Content}
            </ReactMarkdown>
        </div>
    );
};

export default page;
