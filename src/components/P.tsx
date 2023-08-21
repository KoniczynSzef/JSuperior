import React from 'react';

const P = ({ children }: { children: React.ReactNode }) => {
	return <p className="font-medium leading-10 md:max-w-3xl text-xl">{children}</p>;
};

export default P;
