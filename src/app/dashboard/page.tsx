import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { FC } from 'react';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Appearance from './tabs/Appearance';
import { Card } from '@/components/ui/card';
import General from './tabs/general/General';

type tab = 'general' | 'account' | 'appearance';

const tabs: tab[] = ['general', 'appearance'];

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
            <Tabs defaultValue="general" className="space-y-16 mt-12">
                <TabsList className="gap-8 px-4">
                    {tabs.map((t, i) => (
                        <TabsTrigger
                            key={i}
                            value={t}
                            className="dark:hover:text-slate-300 hover:text-slate-700"
                        >
                            {t.charAt(0).toLocaleUpperCase() +
                                t.slice(1, t.length)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <Card className="bg-transparent p-8 border-slate-700">
                    <TabsContent value="general">
                        <General user={user} />
                    </TabsContent>
                    <TabsContent value="appearance">
                        <Appearance />
                    </TabsContent>
                </Card>
            </Tabs>
        </div>
    );
};

export default page;
