'use client';

import { Button } from '@/components/ui/button';
import { handleLogout } from '@/utils/authFunctions';
import React, { FC, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface LogoutProps {}

const Logout: FC<LogoutProps> = () => {
    const [loggedOut, setLoggedOut] = useState(false);

    const handleClick = async () => {
        setLoggedOut(true);
        await handleLogout();
        setLoggedOut(false);
    };

    return (
        <Button
            onClick={handleClick}
            disabled={loggedOut}
            className={`${
                loggedOut ? 'gap-2' : ''
            } transition-all bg-red-700 hover:bg-red-600`}
        >
            {loggedOut && <Loader2 className="animate-spin" />} Sign out
        </Button>
    );
};

export default Logout;
