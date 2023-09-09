import React, { FC, useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
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
            <Dialog defaultOpen>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Cookies Policy</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="text-gray-400 text-lg mt-4">
                        Hello! We use cookies and localStorage to enhance your
                        experience on our website. They help us analyze traffic,
                        personalize content, and improve functionality. By using
                        our site, you consent to cookie usage. Manage settings
                        in your browser anytime. Learn more in our terms and
                        conditions.
                    </DialogDescription>

                    <DialogFooter>
                        <DialogTrigger asChild>
                            <Button
                                className="bg-slate-200 hover:bg-white text-black"
                                onClick={handleAccept}
                            >
                                Accept
                            </Button>
                        </DialogTrigger>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    );
};

export default Cookies;
