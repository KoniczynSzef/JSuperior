import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
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
    const { toast } = useToast();

    const handleCreateBookmark = async () => {
        setIsCreating(true);
        setTimeout(async () => {
            if (user?.id) {
                try {
                    await createBookmark({
                        id: crypto.randomUUID(),
                        favourite: [],
                        toRepeat: [],
                        valuable: [],
                        userId: user?.id,
                    });

                    toast({
                        title: 'Successfully created a new bookmark!',
                    });
                } catch (error) {
                    toast({
                        variant: 'destructive',
                        title: 'Error while creating a new bookmark!',
                    });

                    throw new Error('Error creating a new bookmark');
                }
            }
        }, 250);

        setTimeout(() => setIsCreating(false), 500);
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
