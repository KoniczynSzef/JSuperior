'use client';

import React, { FC } from 'react';
import { useAppDispatch } from '@/context/hooks';
import { setCodeTheme } from '@/context/codeThemeReducers/codeThemeReducers';
import { Button } from '@/components/ui/button';
import CodeSnippet, {
    codeThemes,
} from '@/components/course-overview/CodeSnippet';
import { Separator } from '@/components/ui/separator';
import ToggleTheme from '@/components/navbar/ToggleTheme';
import P from '@/components/P';

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
        <div>
            <h2 className="text-2xl font-bold text-left text-foreground">
                Code snippets theme
            </h2>
            <Separator className="mt-2 bg-slate-700" />

            <div className="mt-4 max-w-lg">
                <P>
                    Change code snippets theme for better experience and
                    readability of code.
                </P>
            </div>

            <div className="gap-16 flex flex-col md:flex-row mt-12">
                <div className="flex flex-wrap md:flex-col gap-4">
                    {codeThemes.map((_, i) => (
                        <Button key={i} onClick={() => handleChangeTheme(i)}>
                            {themes[i]}
                        </Button>
                    ))}
                </div>
                <div className="self-center">
                    <CodeSnippet code={demoText} />
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold text-left text-foreground">
                    Application theme
                </h2>
                <Separator className="mt-2 bg-slate-700" />

                <div className="mt-4 max-w-lg">
                    <P>
                        Change application theme for overall better experience.
                        The default theme is system.
                    </P>
                </div>

                <div className="mt-12">
                    <ToggleTheme align="start" />
                </div>
            </div>
        </div>
    );
};

export default General;
