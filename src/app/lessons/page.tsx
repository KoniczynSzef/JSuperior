import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react';

import ReactMarkdown from 'react-markdown';
import { fetchLesson } from '@/utils/fetchFunctions';

interface pageProps {}

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    const lesson = await fetchLesson(1);

    return (
        <div className="relative my-16 text-left w-full">
            <h2 className="text-4xl font-semibold">{lesson.title}</h2>
            <p className="mt-5">{lesson.description}</p>

            <ReactMarkdown className="text-left flex flex-col gap-6 list-disc markdown">
                {lesson.content}
            </ReactMarkdown>

            <div className="flex mt-8">
                <Link href={`/lessons/2`} className="group ml-auto">
                    <span className="flex items-center gap-3 text-sec group-hover:text-accent-foreground transition">
                        Vite Environment <ArrowRight className="" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default page;
