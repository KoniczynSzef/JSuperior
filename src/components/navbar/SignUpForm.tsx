'use client';

import React, { FC } from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';

import { FcGoogle } from 'react-icons/fc';
import { Github } from 'lucide-react';
import { handleLogin, provider } from '@/utils/authFunctions';

import { motion } from 'framer-motion';

const buttons: { name: provider; icon: React.JSX.Element; text: string }[] = [
	{ name: 'google', icon: <FcGoogle />, text: 'Google' },
	{ name: 'github', icon: <Github />, text: 'GitHub' },
];

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}>
			<DialogContent className="bg-zinc-950 border-slate-800 max-w-sm">
				<DialogHeader>
					<DialogTitle className="text-center text-2xl font-bold">
						Sign up to <span className="text-yellowLogo">JS</span>uperior
					</DialogTitle>
				</DialogHeader>
				<div className="mt-8 space-y-4">
					{buttons.map((btn, i) => (
						<DialogTrigger asChild key={i}>
							<Button
								onClick={() => handleLogin(btn.name)}
								className={`w-full ${
									btn.name === 'google'
										? 'bg-blue-700 hover:bg-blue-600 text-white hover:text-white'
										: 'bg-black border border-slate-700 text-foreground hover:bg-slate-950'
								} text-lg flex gap-6 overflow-hidden relative py-6`}>
								<div
									className={` absolute left-0  ${
										btn.name === 'google' ? 'bg-white' : 'bg-slate-900'
									} h-full aspect-square grid place-content-center rounded-md
						`}>
									{btn.icon}
								</div>
								Sign up with {btn.text}
							</Button>
						</DialogTrigger>
					))}
				</div>
			</DialogContent>
		</motion.div>
	);
};

export default SignUpForm;
