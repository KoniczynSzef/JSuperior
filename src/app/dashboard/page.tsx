import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { FC } from 'react';
import Logout from './Logout';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Appearance from './tabs/Appearance';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

type tab = 'general' | 'account' | 'appearance';

const tabs: tab[] = ['general', 'account', 'appearance'];

export const metadata: Metadata = {
    title: 'JSuperior Dashboard',
    description: 'User Dashboard for seeing progress and so on',
};

interface ComponentProps {}

const page: FC<ComponentProps> = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user) return redirect('/signin');

    return (
        <div className="min-h-[80vh] container my-16 px-16">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-purple-300">
                    {user.name}
                </h2>
                <Logout />
            </div>
            <Separator className="mt-4" />

            <Tabs defaultValue="general" className="space-y-16 mt-12">
                <TabsList className="gap-8 px-4">
                    {tabs.map((t, i) => (
                        <TabsTrigger
                            key={i}
                            value={t}
                            className="hover:text-slate-400"
                        >
                            {t.charAt(0).toLocaleUpperCase() +
                                t.slice(1, t.length)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="general"></TabsContent>
                <TabsContent value="appearance">
                    <Card className="bg-transparent p-4 border-slate-700">
                        <Appearance />
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default page;
