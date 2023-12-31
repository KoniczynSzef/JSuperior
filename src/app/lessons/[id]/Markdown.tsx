'use client';

import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
    content: string;
}

const Markdown: FC<MarkdownProps> = ({ content }) => {
    return (
        <article>
            <ReactMarkdown className="text-left flex flex-col gap-6 list-disc markdown leading-7">
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default Markdown;
