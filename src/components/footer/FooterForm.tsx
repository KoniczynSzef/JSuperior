'use client';

import React, { FC, useState } from 'react';
import { z } from 'zod';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

interface ComponentProps {}

const FooterForm: FC<ComponentProps> = () => {
    const { toast } = useToast();
    const emailSchema = z.string().email();
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            emailSchema.parse(email);
            toast({
                title: 'Signed up for newsletter',
                description:
                    'You were successfully signed up for newsletter! Thank you for joining our community!',
                duration: 2500,
                className: 'dark:bg-black z-30',
            });
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }

            toast({
                title: 'Invalid email address',
                description:
                    'Try one more time and type a valid email address!',
                variant: 'destructive',
                duration: 2500,
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <Label htmlFor="email">Email:</Label>
            <Input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email..."
                className="border-slate-700 text-lg mt-2"
            />
            <Button type="submit" size={'lg'} className="ml-auto mt-4">
                Sign up
            </Button>
        </form>
    );
};
export default FooterForm;
