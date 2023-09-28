'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Copy } from 'lucide-react';
import React, { FC } from 'react';

interface UserCodeProps {
    userFromDb:
        | {
              name: string | null;
              id: string;
              email: string | null;
          }
        | null
        | undefined;
}

const UserCode: FC<UserCodeProps> = ({ userFromDb }) => {
    const { toast } = useToast();
    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(userFromDb));
        toast({
            title: 'Copied your data to clipboard',
        });
    };

    return (
        <Button
            size={'icon'}
            variant={'outline'}
            className="p-2"
            onClick={handleCopy}
        >
            <Copy />
        </Button>
    );
};

export default UserCode;
