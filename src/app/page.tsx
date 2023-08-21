import React, { FC } from 'react';

interface ComponentProps {}
const page: FC<ComponentProps> = () => {
	return <div className="text-foreground bg-background"></div>;
};
export default page;
