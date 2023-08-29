'use client';

import { Button } from '@/components/ui/button';
import { handleLogout } from '@/utils/authFunctions';
import React, { FC } from 'react';

interface LogoutProps {}

const Logout: FC<LogoutProps> = () => {
	return <Button onClick={handleLogout}>Sign out</Button>;
};

export default Logout;
