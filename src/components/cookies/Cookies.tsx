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
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Cookies Policy</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription className="text-gray-400 text-lg mt-4">
                        Hello! We use cookies and localStorage to enhance your
                        experience on our website. They help us analyze traffic,
                        personalize content, and improve functionality. By using
                        our site, you consent to cookie usage. Manage settings
                        in your browser anytime. Learn more in our terms and
                        conditions.
                    </AlertDialogDescription>

                    <AlertDialogFooter>
                        <AlertDialogTrigger asChild>
                            <Button
                                className="bg-slate-200 hover:bg-white text-black"
                                onClick={handleAccept}
                            >
                                Accept
                            </Button>
                        </AlertDialogTrigger>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )
    );
};

export default Cookies;
