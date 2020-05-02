import React from 'react';
import ReactMarkdown from 'react-markdown';
import Code from './Code';

export interface MarkdownProps {
    value: string,
}
export default function(props: MarkdownProps) {
    return <ReactMarkdown source={props.value} renderers={{code: Code}} />;
}
