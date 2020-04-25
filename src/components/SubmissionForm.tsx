import React from 'react';

import Editor, { EditorProps } from './Editor';
import LangSelector, { LangSelectorProps } from './LangSelector';
import SubmitButton from './SubmitButton';
import { Submission } from '../actions';

export interface SubmissionFormProps extends EditorProps, LangSelectorProps {
    isSubmitting: boolean,
    onSubmit: (val: Submission) => void,
}
export default function(props: SubmissionFormProps) {
    return (
        <React.Fragment>
            <LangSelector {...props} />            
            <Editor {...props} />
            <SubmitButton isSubmitting={props.isSubmitting} onClick={() => props.onSubmit({ lang: props.lang, code: props.code })} />
        </React.Fragment>
    )
}
