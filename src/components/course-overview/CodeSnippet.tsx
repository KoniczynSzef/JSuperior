'use client';

import React, { FC } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from '../ui/button';

// SyntaxHighlighter.registerLanguage('js', js);

interface ComponentProps {
	code: string;
}
const CodeSnippet: FC<ComponentProps> = ({ code }) => {
	return (
		<>
			<SyntaxHighlighter language={js} style={nightOwl}>
				{code}
			</SyntaxHighlighter>
			<Button>Change theme</Button>
		</>
	);
};
export default CodeSnippet;
