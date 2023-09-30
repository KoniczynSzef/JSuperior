import React, { FC } from 'react';
import LessonPanel from './LessonPanel';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

interface pageProps {}

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (session?.user?.name !== process.env.DEVELOPER_NAME) {
        return redirect('/');
    }

    const idx = await prisma.lesson.count();

    return (
        <div className="container my-12">
            <LessonPanel prevId={idx} />
        </div>
    );
};

export default page;
