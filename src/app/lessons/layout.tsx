import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';

interface layoutProps {
	children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
	return (
		<div className="flex container mx-auto">
			<Sidebar />
			<section>{children}</section>
		</div>
	);
};

export default layout;
