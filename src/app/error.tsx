'use client';

import { Button } from '@/components/ui/button';
import React, { FC } from 'react';

interface errorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const Error: FC<errorProps> = ({ error, reset }) => {
    return (
        <div>
            <h2>Something was wrong while performing operations</h2>
            <p>Error: {error.message}</p>
            <Button onClick={() => reset()}>Try again</Button>
        </div>
    );
};

export default Error;
