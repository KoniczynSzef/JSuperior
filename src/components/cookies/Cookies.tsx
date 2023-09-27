import React, { FC, useEffect, useState } from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

interface CookiesProps {}

const Cookies: FC<CookiesProps> = () => {
    const [mounted, setMounted] = useState<boolean>(false);

    const handleAccept = () => {
        localStorage.setItem('cookies', 'accepted');
    };

    useEffect(() => {
        if (localStorage.getItem('cookies') === 'accepted') return;

        setMounted(true);
    }, []);

    return (
        mounted && (
            <AlertDialog defaultOpen>
                <AlertDialogContent className="border-slate-700">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Cookies Policy</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription className="text-sec text-lg mt-4">
                        Hello! I&apos;m using cookies and localStorage to
                        enhance your experience on my website. They help me save
                        the theme, improve functionality and overall experience.
                        By using my site, you agree to cookie usage. Manage
                        settings in your browser anytime. Learn more in our
                        terms and conditions.
                    </AlertDialogDescription>

                    <AlertDialogFooter>
                        <AlertDialogTrigger asChild>
                            <Button onClick={handleAccept}>Accept</Button>
                        </AlertDialogTrigger>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )
    );
};

export default Cookies;
