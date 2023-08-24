import React, { FC } from 'react';

interface ComponentProps {}

const Bottom: FC<ComponentProps> = () => {
	return (
		<footer className="py-16">
			<h3 className="text-sec container relative mx-auto">
				Built by{' '}
				<a
					href="https://www.linkedin.com/in/piotr-kończyk-866142251/"
					target="_blank"
					rel="noreferrer"
					className="underline underline-offset-2 hover:text-foreground transition">
					KoniczynSzef
				</a>
				. The source code is available on{' '}
				<a
					href="https://github.com/KoniczynSzef"
					target="_blank"
					rel="noreferrer"
					className="underline underline-offset-2 hover:text-foreground transition">
					Github
				</a>
				.
			</h3>
		</footer>
	);
};
export default Bottom;
