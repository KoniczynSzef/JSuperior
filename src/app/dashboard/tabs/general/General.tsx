import React, { FC } from 'react';
import Logout from '../../Logout';
import { Separator } from '@/components/ui/separator';
import { prisma } from '@/lib/prisma';
import UserCode from './UserCode';

interface GeneralProps {
    user: {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    };
}

type userProp = {
    name: string;
    value: string | null | undefined;
};

const getUser = async (name: string | null | undefined) => {
    if (name) {
        const user = await prisma.user.findFirst({
            where: { name },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
        return user;
    }
};

const General: FC<GeneralProps> = async ({ user }) => {
    const userProps: userProp[] = [
        { name: 'Username', value: user.name },
        { name: 'Email address', value: user.email },
    ];

    const userFromDb = await getUser(user.name);

    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold">User profile</h2>
            <Separator className="mt-2 bg-slate-900" />
            <div className="mt-8 space-y-4">
                {userProps.map((prop, i) => (
                    <div key={i}>
                        <span className="font-semibold text-lg">
                            {prop.name}
                        </span>
                        <h4 className="font-medium">{prop.value}</h4>
                    </div>
                ))}

                {userFromDb && (
                    <pre className="bg-accent dark:bg-slate-950 p-4 rounded border border-slate-900 flex items-center justify-between">
                        <code>{JSON.stringify(userFromDb)}</code>
                        <UserCode userFromDb={userFromDb} />
                    </pre>
                )}
            </div>

            <div className="mt-8">
                <Logout />
            </div>
        </div>
    );
};

export default General;
