'use client';

import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

interface ComponentProps {
	children: React.ReactNode;
}

const ReduxProvider: FC<ComponentProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
