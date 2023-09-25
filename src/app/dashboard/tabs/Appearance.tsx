'use client';

import React, { FC } from 'react';
import { useAppDispatch } from '@/context/hooks';
import { setCodeTheme } from '@/context/codeThemeReducers/codeThemeReducers';
import { Button } from '@/components/ui/button';
import CodeSnippet, {
    codeThemes,
} from '@/components/course-overview/CodeSnippet';

const themes: string[] = [
    'Atom One Dark',
    'Dracula',
    'Monokai',
    'A11y Dark',
    'Stack Overflow Dark',
];

interface GeneralProps {}

const demoText = `
 const handleClick = (e) => {
    e.preventDefault();

    console.log('Hello World!')
 }
`;

const General: FC<GeneralProps> = () => {
    const dispatch = useAppDispatch();

    const handleChangeTheme = (num: number) => {
        dispatch(
            setCodeTheme({
                codeStyleIndex: num <= 4 ? num : 0,
            })
        );
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-left text-white">
                Code snippets theme
            </h2>
            <div className="gap-16 flex flex-col md:flex-row mt-12">
                <div className="flex flex-row md:flex-col gap-4">
                    {codeThemes.map((_, i) => (
                        <Button key={i} onClick={() => handleChangeTheme(i)}>
                            {themes[i]}
                        </Button>
                    ))}
                </div>
                <div className="self-center w-[30%]">
                    <CodeSnippet code={demoText} />
                </div>
            </div>
        </>
    );
};

export default General;
