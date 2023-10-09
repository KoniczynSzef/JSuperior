import { Button } from '@/components/ui/button';
import { createBookmark } from '@/utils/bookmarkFunctions';
import { Loader } from 'lucide-react';
import React, { FC, useState } from 'react';

interface WithoutBookmarkProps {
    user: {
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
    } | null;
}

const WithoutBookmark: FC<WithoutBookmarkProps> = ({ user }) => {
    const [isCreating, setIsCreating] = useState(false);

    const handleCreateBookmark = async () => {
        setIsCreating(true);
        setTimeout(async () => {
            if (user?.id) {
                await createBookmark({
                    id: crypto.randomUUID(),
                    favourite: [],
                    toRepeat: [],
                    valuable: [],
                    userId: user?.id,
                });
            }
        }, 250);
    };

    return (
        <Button onClick={handleCreateBookmark} disabled={isCreating}>
            {isCreating ? (
                <>
                    {' '}
                    <Loader className="animate-spin" /> Creating
                </>
            ) : (
                'Create'
            )}{' '}
            your bookmark
        </Button>
    );
};

export default WithoutBookmark;
