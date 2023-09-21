import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import QuizForm from './QuizForm';

interface pageProps {}

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (session?.user?.name !== process.env.DEVELOPER_NAME) {
        return redirect('/');
    }

    return (
        <section className="container mx-auto relative my-16">
            <QuizForm />
        </section>
    );
};

export default page;
