'use client';

import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface ComponentProps {}
const TypedParagraph: FC<ComponentProps> = () => {
	return (
		<div className="mt-24 md:max-w-3xl">
			<TypeAnimation
				speed={75}
				className="font-medium leading-10 mt-24 md:max-w-3xl text-xl"
				sequence={[
					'Welcome to the Complete JavaScript Course! Explore the art of interactive web development with us. From manipulating elements to crafting dynamic effects, you will master the JavaScript language. Join us on this journey to become a JavaScript expert!',
				]}
			/>
		</div>
	);
};
export default TypedParagraph;
