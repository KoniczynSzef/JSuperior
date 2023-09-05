import P from '@/components/P';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

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
        <div>
            <P>{data[0].attributes.Title}</P>
        </div>
    );
};

export default page;
