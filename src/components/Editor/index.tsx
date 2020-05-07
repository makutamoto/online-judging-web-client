import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';

import './index.css';

const langs: { [index: string]: string } = {
    "gcc": "text/x-csrc",
    "golang": "text/x-go",
};

export interface EditorProps {
    onCodeChange?: (newValue: string) => void,
    code: string,
    editorLang: string,
    readonly?: boolean,
    fixed?: boolean,
}
export default function(props: EditorProps) {
    return (
        <CodeMirror
            className={props.fixed ? undefined : "CMAutoResize"}
            value={props.code}
            onChange={props.onCodeChange}
            options={{
                lineNumbers: true,
                mode: langs[props.editorLang],
                viewportMargin: props.fixed ? 10 : Infinity,
                readOnly: props.readonly,
            }}
        />
    );
}
