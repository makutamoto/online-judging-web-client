import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Editor, { EditorProps } from './Editor';
import LangSelector, { LangSelectorProps } from './LangSelector';
import SubmitButton from './SubmitButton';
import { Submission } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    editorGrid: {
        width: "100%",
    }
}));
export interface SubmissionFormProps extends EditorProps, LangSelectorProps {
    contest: string,
    task: number,
    isSubmitting: boolean,
    onSubmit: (contest: string, task: number, val: Submission) => void,
}
export default function(props: SubmissionFormProps) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <LangSelector {...props} />            
                </Grid>
                <Grid className={classes.editorGrid} item>
                    <Editor {...props} />
                </Grid>
                <Grid item>
                    <SubmitButton isSubmitting={props.isSubmitting} onClick={() => props.onSubmit(props.contest, props.task, { lang: props.lang, code: props.code })} />
                </Grid>
            </Grid>
        </Box>
    )
}
