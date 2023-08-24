import React, { FC } from 'react';

interface ComponentProps {}

const Sidebar: FC<ComponentProps> = () => {
	return (
		<div className="h-[150vh] px-12 border-r flex flex-col items-center sticky top-0 overflow-x-hidden overflow-y-scroll text-left bg-gradient-to-b from-red-600 to-blue-700">
			<p className="text-left">Test</p>
		</div>
	);
};
export default Sidebar;
