import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react';

import ReactMarkdown from 'react-markdown';
import { lessonProps } from '../page';

interface pageProps {
    params: {
        id: number;
    };
}

const fetchData = async (id: number) => {
    if (!id) throw new Error('d is required');
    const res = await fetch(`${process.env.BASE_URL}/${id}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
        },
    });
    const data: { data: lessonProps } = await res.json();

    return data.data;
};

const page: FC<pageProps> = async ({ params }) => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    console.log(params.id);
    const data = await fetchData(params.id);

    return (
        <div className="relative my-16 text-left w-full mx-16">
            <h2 className="text-4xl font-semibold">{data.attributes.Title}</h2>
            <p className="mt-5">{data.attributes.Description}</p>

            <Separator className="my-8" />
            <ReactMarkdown className="text-left flex flex-col gap-2 list-disc markdown">
                {data.attributes.Content}
            </ReactMarkdown>
            <Separator className="my-8" />

            <div className="flex mt-8">
                <Link
                    href={`/lessons/${data.id + 1}`}
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
