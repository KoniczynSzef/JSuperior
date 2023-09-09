'use client';

import { Button } from '@/components/ui/button';
import { handleLogout } from '@/utils/authFunctions';
import React, { FC, useState } from 'react';
import { Loader } from 'lucide-react';

interface LogoutProps {}

const Logout: FC<LogoutProps> = () => {
    const handleClick = async () => {
        setLoggedOut(true);
        await handleLogout();
        setLoggedOut(false);
    };
    const [loggedOut, setLoggedOut] = useState(false);

    return !loggedOut ? (
        <Button onClick={handleClick}>Sign out</Button>
    ) : (
        <Loader className="animate-spin" />
    );
};

export default Logout;
