import React from 'react';
import ReactMarkdown from 'react-markdown';

import Code from './Code';
import Editor from './Editor';

export interface MarkdownProps {
    value: string,
    edit?: boolean,
    onChange?: (newValue: string) => void,
}
export default function(props: MarkdownProps) {
    return (
        props.edit ?
        <Editor code={props.value} editorLang="markdown" onCodeChange={props.onChange} />
        :
        <ReactMarkdown source={props.value} renderers={{code: Code}} />
    );
}
