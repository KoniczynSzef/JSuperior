import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
// import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
// import { ArrowRight } from 'lucide-react';

// import ReactMarkdown from 'react-markdown';
// import { fetchLesson } from '@/utils/fetchFunctions';
// import BookMark from '@/components/bookmark/BookMark';
// import { Lesson } from '@prisma/client';
import { Metadata } from 'next';

interface pageProps {}

export const metadata: Metadata = {
    title: 'Code Editor',
};

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    // const lesson: Lesson | null = await fetchLesson(1);
    // console.log(lesson);

    // return lesson ? (
    //     <div className="my-16 text-left w-full flex items-center justify-between">
    //         <section>
    //             <h2 className="text-4xl font-semibold">{lesson.title}</h2>
    //             <p className="mt-5">{lesson.description}</p>

    //             <ReactMarkdown className="text-left flex flex-col gap-6 list-disc markdown">
    //                 {lesson.content}
    //             </ReactMarkdown>

    //             <div className="flex mt-8">
    //                 <Link href={`/lessons/2`} className="group ml-auto">
    //                     <span className="flex items-center gap-3 text-sec group-hover:text-accent-foreground transition">
    //                         Vite Environment <ArrowRight className="" />
    //                     </span>
    //                 </Link>
    //             </div>
    //         </section>

    //         <BookMark session={session} currPageId={1} />
    //     </div>
    // ) : (
    //     <h2>Did not find any lesson</h2>
    // );

    return <p>Hello World!</p>;
};

export default page;
