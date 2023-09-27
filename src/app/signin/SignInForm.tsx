'use client';

import { handleLogin, provider } from '@/utils/authFunctions';
import React, { FC, useState } from 'react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import { Github, Loader2 } from 'lucide-react';

interface ButtonProps {
    btn: { name: provider; icon: React.JSX.Element; text: string };
    handleClick: (btn: buttonProps) => Promise<void>;
}

interface props {}

type buttonProps = { name: provider; icon: React.JSX.Element; text: string };

const buttons: buttonProps[] = [
    { name: 'google', icon: <FcGoogle />, text: 'Google' },
    { name: 'github', icon: <Github />, text: 'GitHub' },
];

const SignInButton: FC<ButtonProps> = ({ btn, handleClick }) => {
    return (
        <Button
            onClick={() => handleClick(btn)}
            className="w-full space-x-3 border border-slate-700 py-6 text-lg"
        >
            {btn.icon}
            <span className="mx-1">Sign up with {btn.text}</span>
        </Button>
    );
};

const SignInForm: FC<props> = () => {
    const [logged, setLogged] = useState<boolean>(false);
    const handleClick = async (btn: buttonProps) => {
        setLogged(true);
        setTimeout(async () => {
            await handleLogin(btn.name);
        }, 250);

        setLogged(false);
    };

    return (
        <div className="h-[75vh] grid place-items-center mx-4">
            <motion.div
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Card className="bg-black border-slate-800 max-w-lg text-foreground">
                    {!logged ? (
                        <>
                            <CardHeader>
                                <CardTitle className="text-center text-2xl font-bold text-white">
                                    Sign up to{' '}
                                    <span className="text-yellowLogo">JS</span>
                                    uperior
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="mt-8 space-y-4">
                                {buttons.map((btn, i) => (
                                    <SignInButton
                                        key={i}
                                        btn={btn}
                                        handleClick={handleClick}
                                    />
                                ))}
                            </CardContent>
                        </>
                    ) : (
                        <>
                            <CardHeader>
                                <CardTitle className="text-center text-2xl font-bold">
                                    Authenticating...
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="mt-8 space-y-4 mx-auto">
                                <Loader2 className="animate-spin mx-auto scale-150" />
                            </CardContent>
                        </>
                    )}
                </Card>
            </motion.div>
        </div>
    );
};

export default SignInForm;
