import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

interface pageProps {}

export const fetchData = async () => {
    const res = await fetch(`http://localhost:1337/api/lessons`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();

    return data;
};

const page: FC<pageProps> = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return redirect('/signin');

    const data = await fetchData();
    console.log(data);

    return (
        <div>
            <p>Testing nested layout from Next js 13</p>
        </div>
    );
};

export default page;
