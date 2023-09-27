'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface codeThemeProps {
    codeStyleIndex: number;
}

const initialState: codeThemeProps = {
    codeStyleIndex: 0,
};

const codeThemeSlice = createSlice({
    initialState: initialState,
    name: 'codeTheme',
    reducers: {
        getCodeTheme: (state) => {
            state.codeStyleIndex = parseInt(
                localStorage.getItem('codeStyleIndex') as string
            );
        },

        setCodeTheme: (state, action: PayloadAction<codeThemeProps>) => {
            state.codeStyleIndex = action.payload.codeStyleIndex;
            localStorage.setItem(
                'codeStyleIndex',
                action.payload.codeStyleIndex + ''
            );
        },
    },
});

export const { setCodeTheme, getCodeTheme } = codeThemeSlice.actions;
export const codeThemeReducers = codeThemeSlice.reducer;
