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
            <Link
                href={'/dashboard'}
                className="relative bg-transparent hover:bg-accent p-1 rounded-full transition-all duration-200"
            >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Avatar>
                            <AvatarFallback className="bg-black text-white">
                                {session?.user?.name?.slice(0, 2)}
                            </AvatarFallback>
                            <AvatarImage src={session?.user?.image || ''} />
                        </Avatar>
                    </TooltipTrigger>
                    <TooltipContent
                        className="dark:border-slate-600"
                        side="bottom"
                    >
                        Dashboard
                    </TooltipContent>
                </Tooltip>
            </Link>
        </TooltipProvider>
    );
};
export default UserAvatar;
