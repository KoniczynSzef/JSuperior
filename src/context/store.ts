import { configureStore } from '@reduxjs/toolkit';
import { codeThemeReducers } from './codeThemeReducers/codeThemeReducers';

export const store = configureStore({
	reducer: {
		codeTheme: codeThemeReducers,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
