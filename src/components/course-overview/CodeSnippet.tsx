'use client';

import React, { FC, useState } from 'react';

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
import { useAppSelector } from '@/context/hooks';

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
    const { codeStyleIndex } = useAppSelector((s) => s.codeTheme);

    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(code);

        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="max-w-lg relative flex flex-col border border-slate-800 bg-slate-900 dark:bg-slate-950 rounded">
            <Button
                className="bg-slate-800 hover:bg-slate-700 px-3 self-end absolute focus:outline-white text-white"
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
