import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { FC } from 'react';

interface notFoundProps {}

const notFound: FC<notFoundProps> = () => {
    return (
        <div className="h-[55vh] container mt-24 flex flex-col gap-3">
            <h2 className="text-4xl font-bold">Not found (404)</h2>
            <p className="text-lg text-sec">
                Could not find requested resource
            </p>
            <Button className="mt-8 self-start">
                <Link href={'/'}>Return Home</Link>
            </Button>
        </div>
    );
};

export default notFound;
