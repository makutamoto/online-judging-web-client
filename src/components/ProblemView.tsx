import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Code from './Code';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    limit: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));
export interface ProblemViewProps {
    title: string | null,
    problem: string | null,
    timeLimit: number | null,
}
export default function(props: ProblemViewProps) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.title} variant="h4">{props.title}</Typography>
            <Divider />
            <Typography className={classes.limit} variant="h6">実行時間制限: {props.timeLimit! / 1000} sec</Typography>
            <ReactMarkdown source={props.problem!} renderers={{ code: Code }} />
        </Box>
    );
}
