'use client';

import React, { FC } from 'react';
import P from '../P';

interface ComponentProps {}
const TypedParagraph: FC<ComponentProps> = () => {
    return (
        <P>
            Welcome to the Complete JavaScript Course! Explore the art of
            interactive web development with us. From manipulating elements to
            crafting dynamic effects, you will master the JavaScript language.
            Join us on this journey to become a JavaScript expert!
        </P>
    );
};
export default TypedParagraph;
