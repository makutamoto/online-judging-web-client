import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';

import './index.css';

export interface EditorProps {
    onCodeChange?: (newValue: string) => void,
    code: string,
    editorLang: string,
}
export default function(props: EditorProps) {
    return (
        <CodeMirror
            value={props.code}
            onChange={props.onCodeChange}
            options={{
                lineNumbers: true,
                mode: props.editorLang,
                viewportMargin: Infinity,
            }}
        />
    );
}
