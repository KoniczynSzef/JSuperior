import React from 'react';

const P = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="font-medium md:max-w-3xl text-lg md:text-xl leading-8 md:leading-10 ">
            {children}
        </p>
    );
};

export default P;
