import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import CmsForm from './CmsForm';

interface pageProps {}

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (session?.user?.name !== process.env.DEVELOPER_NAME) {
        return redirect('/');
    }

    return (
        <section className="container mx-auto relative my-16">
            <CmsForm />
        </section>
    );
};

export default page;
