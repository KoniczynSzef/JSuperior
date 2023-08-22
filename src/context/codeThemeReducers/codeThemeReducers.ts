import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface codeThemeProps {
	codeStyleIndex: number;
}

const codeStyleIndex =
	window !== undefined && localStorage.getItem('codeStyleIndex') === null
		? 0
		: parseInt(localStorage.getItem('codeStyleIndex') as string);

const initialState: codeThemeProps = {
	codeStyleIndex: codeStyleIndex,
};

const codeThemeSlice = createSlice({
	initialState: initialState,
	name: 'codeTheme',
	reducers: {
		setCodeTheme: (state, action: PayloadAction<codeThemeProps>) => {
			state.codeStyleIndex = action.payload.codeStyleIndex;
			localStorage.setItem('codeStyleIndex', action.payload.codeStyleIndex + '');
		},
	},
});

export const { setCodeTheme } = codeThemeSlice.actions;
export const codeThemeReducers = codeThemeSlice.reducer;
