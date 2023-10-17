'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React, { FC, useState } from 'react';

interface errorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const Error: FC<errorProps> = ({ error, reset }) => {
    const [loading, setLoading] = useState(false);
    const handleReset = () => {
        setLoading(true);

        setTimeout(() => {
            reset();
        }, 150);
    };

    return (
        <div className="container my-24 min-h-[50vh] space-y-2">
            {!loading ? (
                <>
                    <h2>Something was wrong while performing operations</h2>
                    <p>Error: {error.message}</p>
                    <Button onClick={handleReset} className="mt-4">
                        Try again
                    </Button>
                </>
            ) : (
                <Loader2 className="animate-spin h-36 w-36" />
            )}
        </div>
    );
};

export default Error;
