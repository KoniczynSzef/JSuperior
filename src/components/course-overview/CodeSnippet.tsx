'use client';

import React, { FC, useEffect, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    atomOneDark,
    dracula,
    monokai,
    a11yDark,
    stackoverflowDark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from '../ui/button';
import { Copy, CopyCheck } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/context/hooks';
import { getCodeTheme } from '@/context/codeThemeReducers/codeThemeReducers';

interface ComponentProps {
    code: string;
}

export const codeThemes = [
    atomOneDark,
    dracula,
    monokai,
    a11yDark,
    stackoverflowDark,
];

const CodeSnippet: FC<ComponentProps> = ({ code }) => {
    const dispatch = useAppDispatch();
    const { codeStyleIndex } = useAppSelector((s) => s.codeTheme);

    useEffect(() => {
        dispatch(getCodeTheme());
    }, []);

    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(code);

        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="max-w-lg relative flex flex-col border border-slate-800 bg-slate-950 rounded pb-4">
            <Button
                size={'icon'}
                variant={'outline'}
                className="p-2 self-end text-white hover:bg-slate-800"
                onClick={handleCopy}
            >
                {!copied ? (
                    <Copy className="transition" />
                ) : (
                    <CopyCheck className="transition" />
                )}
            </Button>
            <SyntaxHighlighter
                language={'javascript'}
                style={codeThemes[codeStyleIndex]}
                wrapLongLines={true}
                customStyle={{
                    borderRadius: '0.25rem',
                    background: 'transparent',
                    marginRight: 'auto',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
export default CodeSnippet;
