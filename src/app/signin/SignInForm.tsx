'use client';

import { handleLogin, provider } from '@/utils/authFunctions';
import React, { FC } from 'react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import { Github } from 'lucide-react';

interface ButtonProps {
	btn: { name: provider; icon: React.JSX.Element; text: string };
}

interface props {}

const buttons: { name: provider; icon: React.JSX.Element; text: string }[] = [
	{ name: 'google', icon: <FcGoogle />, text: 'Google' },
	{ name: 'github', icon: <Github />, text: 'GitHub' },
];

const SignInButton: FC<ButtonProps> = ({ btn }) => {
	return (
		<Button
			onClick={() => handleLogin(btn.name)}
			className="w-full space-x-3 bg-transparent border border-slate-700 py-6 text-lg">
			{btn.icon}
			<span className="mx-1">Sign up with {btn.text}</span>
		</Button>
	);
};

const SignInForm: FC<props> = () => {
	return (
		<div className="h-[75vh] grid place-items-center mx-4">
			<motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }}>
				<Card className="bg-black border-slate-800 max-w-lg text-foreground">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-bold">
							Sign up to <span className="text-yellowLogo">JS</span>uperior
						</CardTitle>
					</CardHeader>
					<CardContent className="mt-8 space-y-4">
						{buttons.map((btn, i) => (
							<SignInButton key={i} btn={btn} />
						))}
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
};

export default SignInForm;
