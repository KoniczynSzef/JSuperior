import React, { FC } from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';

import { FcGoogle } from 'react-icons/fc';
import { Github } from 'lucide-react';

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = () => {
	return (
		<DialogContent className="bg-zinc-950">
			<DialogHeader>
				<DialogTitle>
					Sign up to <span>JSuperior</span>
				</DialogTitle>
			</DialogHeader>
			<DialogDescription>
				<Button>
					<FcGoogle /> Sign up with Google
				</Button>
				<Button>
					<Github /> Sign up with GitHub
				</Button>
			</DialogDescription>
		</DialogContent>
	);
};

export default SignUpForm;
