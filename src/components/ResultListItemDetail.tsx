import React from 'react';
import { Box, Collapse, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

import Editor from './Editor';
import { Detail } from '../actions';
import ResultListItem, { ResultContestTaskName, ResultCurrentCase, ResultRusage } from './ResultListItem';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(2),
    }
}));
export interface ResultListItemDetailProps {
    status: number | null,
    title: string | ResultContestTaskName,
    info: ResultRusage | ResultCurrentCase | null,
    details: Detail | null,
}
export default function(props: ResultListItemDetailProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let code: string | null = null;
    let compile_error = "";
    let details: JSX.Element[] | null = null;
    if(props.details !== null) {
        code = props.details.code;
        compile_error = props.details.compile_error;
        if(props.details.details !== null) {
            details = props.details.details.map((detail) => (
                <ResultListItem title={detail.title} status={detail.result} info={{memory: detail.memory, time: detail.time}} />
            ));
        }
    }
    return (
        <React.Fragment>
            <ResultListItem {...props} open={open} onClick={() => setOpen(!open)} />
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box className={classes.nested}>
                    {code !== null && <Editor code={code} editorLang={props.details!.lang} readonly fixed /> }
                    {compile_error !== "" && (
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom>コンパイルエラー</Typography>
                        <CodeMirror value={compile_error} options={{ mode: null, readOnly: true }} />
                    </React.Fragment>
                    )}
                    <List disablePadding>
                        {details}
                    </List>
                </Box>
            </Collapse>
        </React.Fragment>
    )
}
