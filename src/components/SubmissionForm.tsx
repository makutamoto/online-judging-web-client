import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Editor, { EditorProps } from './Editor';
import LangSelector, { LangSelectorProps } from './LangSelector';
import SubmitButton from './SubmitButton';
import { Submission } from '../actions';

const useStyles = makeStyles({
    editorGrid: {
        width: "100%",
    }
});
export interface SubmissionFormProps extends EditorProps, LangSelectorProps {
    isSubmitting: boolean,
    onSubmit: (val: Submission) => void,
}
export default function(props: SubmissionFormProps) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <LangSelector {...props} />            
                </Grid>
                <Grid className={classes.editorGrid} item>
                    <Editor {...props} />
                </Grid>
                <Grid item>
                    <SubmitButton isSubmitting={props.isSubmitting} onClick={() => props.onSubmit({ lang: props.lang, code: props.code })} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
