import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
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
        <React.Fragment>
            <Typography className={classes.title} variant="h4">{props.title}</Typography>
            <Divider />
            <Typography className={classes.limit} variant="h6">実行時間制限: {props.timeLimit! / 1000} sec</Typography>
            <Markdown value={props.problem!} />
        </React.Fragment>
    );
}
