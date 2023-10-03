import React, { FC } from 'react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip';

interface ComponentProps {
    session: Session | null;
}

const UserAvatar: FC<ComponentProps> = ({ session }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href={'/dashboard'}
                        // className="relative bg-transparent hover:shadow-xl hover:shadow-purple-700 hover:scale-105 origin-center p-2 rounded-full transition-all"
                    >
                        <Avatar>
                            <AvatarFallback className="bg-black text-white">
                                {session?.user?.name?.slice(0, 2)}
                            </AvatarFallback>
                            <AvatarImage src={session?.user?.image || ''} />
                        </Avatar>
                    </Link>
                </TooltipTrigger>
                <TooltipContent className="dark:border-slate-600">
                    Dashboard
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
export default UserAvatar;
