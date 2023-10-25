import React from 'react';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const P = ({ children, className }: Props) => {
    return (
        <p
            className={`font-medium md:max-w-3xl text-lg md:text-xl leading-8 md:leading-10 ${className}`}
        >
            {children}
        </p>
    );
};

export default P;
